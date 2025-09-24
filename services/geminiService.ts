import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse, Language, AccountExplanationResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

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
    // Basic validation before parsing
    if (!jsonString.startsWith('{') || !jsonString.endsWith('}')) {
        throw new Error("Invalid JSON response format from API");
    }

    const parsedData: GeminiResponse = JSON.parse(jsonString);

    // Further validation to ensure the parsed data matches our expected structure.
    if (!parsedData.journal_entries || !parsedData.explanation) {
        throw new Error("Parsed JSON is missing required fields.");
    }

    return parsedData;

  } catch (error) {
    console.error("Error calling or parsing Gemini API response:", error);
    throw new Error("Failed to get a valid analysis from the AI service.");
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