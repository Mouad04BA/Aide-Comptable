import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse, Language, AccountExplanationResponse, FiscalAnalysisResponse, FiscalQuestionResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

const getDynamicSchema = (lang: Language) => {
  const descriptions = {
    ar: {
      journal_entries_desc: "مجموعة من قيود اليومية لجدول المدين/الدائن.",
      account_desc: "اسم الحساب المحاسبي (باللغة العربية).",
      debit_desc: "مبلغ المدين. يجب أن يكون 0 أو null إذا كان قيد دائن.",
      credit_desc: "مبلغ الدائن. يجب أن يكون 0 أو null إذا كان قيد مدين.",
      explanation_desc: "شرح موجز وواضح للمنطق المحاسبي، باللغة العربية."
    },
    fr: {
      journal_entries_desc: "Un tableau d'écritures de journal pour la table débit/crédit.",
      account_desc: "Le nom du compte comptable (en français).",
      debit_desc: "Le montant du débit. Doit être 0 ou null si c'est une écriture de crédit.",
      credit_desc: "Le montant du crédit. Doit être 0 ou null si c'est une écriture de débit.",
      explanation_desc: "Une explication brève et claire de la logique comptable, en français."
    },
    en: {
      journal_entries_desc: "An array of journal entry objects for the debit/credit table.",
      account_desc: "The name of the accounting account (in English).",
      debit_desc: "The debit amount. Should be 0 or null if this is a credit entry.",
      credit_desc: "The credit amount. Should be 0 or null if this is a debit entry.",
      explanation_desc: "A brief and clear explanation of the accounting logic, in English."
    }
  };
  const d = descriptions[lang];

  return {
    type: Type.OBJECT,
    properties: {
      journal_entries: {
        type: Type.ARRAY,
        description: d.journal_entries_desc,
        items: {
          type: Type.OBJECT,
          properties: {
            account: { type: Type.STRING, description: d.account_desc },
            debit: { type: Type.NUMBER, description: d.debit_desc },
            credit: { type: Type.NUMBER, description: d.credit_desc }
          },
          required: ["account", "debit", "credit"]
        }
      },
      explanation: { type: Type.STRING, description: d.explanation_desc }
    },
    required: ["journal_entries", "explanation"]
  };
};

const getSystemInstruction = (lang: Language): string => {
  const instructions = {
    ar: "أنت خبير في معايير المحاسبة المغربية (CGNC). دورك هو تحليل عملية محاسبية معينة، وتقديم قيد اليومية المقابل (مدين/دائن) وشرح موجز وواضح. قم بالرد فقط بكائن JSON يطابق المخطط المقدم. يجب أن يكون الشرح وأسماء الحسابات باللغة العربية. العملة هي الدرهم المغربي (MAD)، ولكن لا تقم بتضمين رمز العملة في الأرقام.",
    fr: "Vous êtes un expert des normes comptables marocaines (CGNC). Votre rôle est d'analyser une opération comptable donnée, et de fournir l'écriture de journal correspondante (débit/crédit) et une explication brève et claire. Répondez UNIQUEMENT avec un objet JSON correspondant au schéma fourni. L'explication et les noms de comptes doivent être en français. La devise est le Dirham Marocain (MAD), mais n'incluez pas le symbole de la devise dans les nombres.",
    en: "You are an expert in Moroccan accounting standards (CGNC). Your role is to analyze a given accounting operation, and provide the corresponding journal entry (debit/credit) and a brief, clear explanation. Respond ONLY with a JSON object matching the provided schema. The explanation and account names must be in English. The currency is Moroccan Dirham (MAD), but do not include the currency symbol in the numbers."
  };
  return instructions[lang];
};

export const analyzeAccountingOperation = async (prompt: string, lang: Language): Promise<GeminiResponse> => {
  const systemInstruction = getSystemInstruction(lang);
  const schema = getDynamicSchema(lang);
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonString = response.text.trim();
    if (!jsonString.startsWith('{') || !jsonString.endsWith('}')) {
        throw new Error("Invalid JSON response format from API");
    }

    const parsedData: GeminiResponse = JSON.parse(jsonString);

    if (!parsedData.journal_entries || !parsedData.explanation) {
        throw new Error("Parsed JSON is missing required fields.");
    }

    return parsedData;

  } catch (error) {
    console.error("Error calling or parsing Gemini API response:", error);
    throw new Error("Failed to get a valid analysis from the AI service.");
  }
};


const getFiscalSystemInstruction = (lang: Language): string => {
  const instructions = {
    ar: "أنت خبير في القانون الضريبي المغربي (المدونة العامة للضرائب - CGI). دورك هو تحليل عملية أو نفقة من منظور ضريبة الشركات (IS). حدد ما إذا كانت العملية تؤدي إلى 'إعادة إدماج' (Réintégration)، 'خصم' (Déduction)، أو 'لا شيء للإبلاغ عنه' (Rien à signaler). قدم شرحاً واضحاً للمنطق، والأهم من ذلك، قدم دليلاً محدداً من المدونة العامة للضرائب المغربية للسنة الحالية أو 'مذكرة دورية' ذات صلة. قم بالرد فقط بكائن JSON يطابق المخطط المقدم وباللغة العربية.",
    fr: "Vous êtes un expert en droit fiscal marocain (Code Général des Impôts - CGI). Votre rôle est d'analyser une opération ou une charge du point de vue de l'Impôt sur les Sociétés (IS). Déterminez si l'opération entraîne une 'Réintégration', une 'Déduction', ou 'Rien à signaler'. Fournissez une explication claire du raisonnement et, de manière cruciale, fournissez une référence spécifique du CGI marocain de l'année en cours ou d'une 'Note Circulaire' pertinente comme preuve. Répondez UNIQUEMENT avec un objet JSON correspondant au schéma fourni et en français.",
    en: "You are an expert in Moroccan tax law (Code Général des Impôts - CGI). Your role is to analyze an operation or expense from a Corporate Tax (IS) perspective. Determine if the operation leads to a 'Réintégration' (add-back), a 'Déduction' (deduction), or 'Rien à signaler' (nothing to report). Provide a clear explanation of the reasoning and, crucially, provide a specific reference from the current year's Moroccan CGI or a relevant 'Note Circulaire' as proof. Respond ONLY with a JSON object matching the provided schema and in English."
  };
  return instructions[lang];
};

const getFiscalSchema = (lang: Language) => {
  const descriptions = {
    ar: {
      traitement: "المعالجة الضريبية: 'Réintégration'، 'Déduction'، أو 'Rien à signaler'.",
      explication: "شرح مفصل للمنطق الضريبي وراء المعالجة.",
      preuve: "الدليل القانوني، مع ذكر المادة المحددة من المدونة العامة للضرائب أو المذكرة الدورية."
    },
    fr: {
      traitement: "Le traitement fiscal : 'Réintégration', 'Déduction', ou 'Rien à signaler'.",
      explication: "Une explication détaillée de la logique fiscale derrière le traitement.",
      preuve: "La preuve légale, citant l'article spécifique du CGI ou la note circulaire."
    },
    en: {
      traitement: "The fiscal treatment: 'Réintégration', 'Déduction', or 'Rien à signaler'.",
      explication: "A detailed explanation of the fiscal logic behind the treatment.",
      preuve: "The legal proof, citing the specific article from the CGI or the circular note."
    }
  };
  const d = descriptions[lang];
  return {
    type: Type.OBJECT,
    properties: {
      traitement: { type: Type.STRING, description: d.traitement },
      explication: { type: Type.STRING, description: d.explication },
      preuve: { type: Type.STRING, description: d.preuve },
    },
    required: ["traitement", "explication", "preuve"]
  };
};

export const analyzeFiscalOperation = async (prompt: string, lang: Language): Promise<FiscalAnalysisResponse> => {
  const systemInstruction = getFiscalSystemInstruction(lang);
  const schema = getFiscalSchema(lang);
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonString = response.text.trim();
    const parsedData: FiscalAnalysisResponse = JSON.parse(jsonString);

    if (!parsedData.traitement || !parsedData.explication || !parsedData.preuve) {
        throw new Error("Parsed JSON from fiscal analysis is missing required fields.");
    }
    
    // Validate the 'traitement' field
    const validTraitements = ['Réintégration', 'Déduction', 'Rien à signaler'];
    if (!validTraitements.includes(parsedData.traitement)) {
      // Fallback or error if the model returns an unexpected value
      console.warn(`Unexpected fiscal treatment value: ${parsedData.traitement}. Defaulting to 'Rien à signaler'.`);
      parsedData.traitement = 'Rien à signaler';
    }


    return parsedData;
  } catch (error) {
    console.error("Error calling or parsing Gemini API response for fiscal analysis:", error);
    throw new Error("Failed to get a valid fiscal analysis from the AI service.");
  }
};

const getFiscalQASystemInstruction = (lang: Language): string => {
  const instructions = {
    ar: "أنت خبير في القانون الضريبي المغربي (المدونة العامة للضرائب - CGI). دورك هو الإجابة على أسئلة محددة حول القواعد الضريبية. قدم شرحاً واضحاً ومفصلاً، واستشهد بالمقالات ذات الصلة من المدونة العامة للضرائب أو المذكرات الدورية كمراجع. قم بالرد فقط بكائن JSON يطابق المخطط المقدم وباللغة العربية.",
    fr: "Vous êtes un expert en droit fiscal marocain (Code Général des Impôts - CGI). Votre rôle est de répondre à des questions spécifiques sur les règles fiscales. Fournissez une explication claire et détaillée, et citez les articles pertinents du CGI ou des notes circulaires comme références. Répondez UNIQUEMENT avec un objet JSON correspondant au schéma fourni et en français.",
    en: "You are an expert in Moroccan tax law (CGI). Your role is to answer specific questions about tax rules. Provide a clear, detailed explanation, and cite the relevant articles from the CGI or circular notes as references. Respond ONLY with a JSON object matching the provided schema and in English."
  };
  return instructions[lang];
};

const getFiscalQASchema = (lang: Language) => {
  const descriptions = {
    ar: {
      explication: "شرح مفصل وواضح للقاعدة الضريبية المتعلقة بالسؤال.",
      references: "المراجع القانونية، مع ذكر المواد المحددة من المدونة العامة للضرائب أو المذكرات الدورية."
    },
    fr: {
      explication: "Une explication détaillée et claire de la règle fiscale concernant la question.",
      references: "Les références légales, citant les articles spécifiques du CGI ou les notes circulaires."
    },
    en: {
      explication: "A detailed and clear explanation of the tax rule concerning the question.",
      references: "The legal references, citing the specific articles from the CGI or circular notes."
    }
  };
  const d = descriptions[lang];
  return {
    type: Type.OBJECT,
    properties: {
      explication: { type: Type.STRING, description: d.explication },
      references: { type: Type.STRING, description: d.references },
    },
    required: ["explication", "references"]
  };
};

export const answerFiscalQuestion = async (prompt: string, lang: Language): Promise<FiscalQuestionResponse> => {
    const systemInstruction = getFiscalQASystemInstruction(lang);
    const schema = getFiscalQASchema(lang);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: schema,
            },
        });

        const jsonString = response.text.trim();
        const parsedData: FiscalQuestionResponse = JSON.parse(jsonString);

        if (!parsedData.explication || !parsedData.references) {
            throw new Error("Parsed JSON from fiscal Q&A is missing required fields.");
        }
        
        return parsedData;
    } catch (error) {
        console.error("Error calling or parsing Gemini API response for fiscal Q&A:", error);
        throw new Error("Failed to get a valid answer from the AI service.");
    }
};

const getExplanationSystemInstruction = (lang: Language): string => {
  const instructions = {
    ar: "أنت خبير في معايير المحاسبة المغربية (CGNC). دورك هو شرح حساب محاسبي معين. قدم شرحًا واضحًا وموجزًا للغرض من الحساب، ثم قدم مثالًا واقعيًا لعملية تستخدم هذا الحساب، بما في ذلك قيد اليومية المقابل. يجب أن يكون الرد فقط بتنسيق JSON.",
    fr: "Vous êtes un expert des normes comptables marocaines (CGNC). Votre rôle est d'expliquer un compte comptable spécifique. Fournissez une explication claire et concise de l'objectif du compte, puis donnez un exemple concret d'une opération utilisant ce compte, y compris l'écriture de journal correspondante. Répondez UNIQUEMENT en format JSON.",
    en: "You are an expert in Moroccan accounting standards (CGNC). Your role is to explain a specific accounting account. Provide a clear and concise explanation of the account's purpose, then give a concrete real-world example of a transaction using this account, including the corresponding journal entry. Respond ONLY in JSON format."
  };
  return instructions[lang];
};

const getExplanationSchema = (lang: Language) => {
    const descriptions = {
        ar: {
            explanation: "شرح مفصل للحساب المحاسبي باللغة العربية.",
            example: "مثال عملي من الواقع يوضح استخدام الحساب، باللغة العربية.",
        },
        fr: {
            explanation: "Une explication détaillée du compte comptable en français.",
            example: "Un exemple concret et réel illustrant l'utilisation du compte, en français.",
        },
        en: {
            explanation: "A detailed explanation of the accounting account in English.",
            example: "A concrete, real-world example illustrating the use of the account, in English.",
        }
    };
    const d = descriptions[lang];

    return {
        type: Type.OBJECT,
        properties: {
            explanation: { type: Type.STRING, description: d.explanation },
            example: { type: Type.STRING, description: d.example }
        },
        required: ["explanation", "example"]
    };
};

export const getAccountExplanation = async (accountCode: string, accountName: string, lang: Language): Promise<AccountExplanationResponse> => {
  const systemInstruction = getExplanationSystemInstruction(lang);
  const schema = getExplanationSchema(lang);
  const prompt = `Explain the account: ${accountCode} - ${accountName}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonString = response.text.trim();
    if (!jsonString.startsWith('{') || !jsonString.endsWith('}')) {
        throw new Error("Invalid JSON response format from API for explanation");
    }
    const parsedData: AccountExplanationResponse = JSON.parse(jsonString);

    if (!parsedData.explanation || !parsedData.example) {
        throw new Error("Parsed JSON for explanation is missing required fields.");
    }
    
    return parsedData;

  } catch (error) {
    console.error("Error calling Gemini for account explanation:", error);
    throw new Error("Failed to get a valid explanation from the AI service.");
  }
};