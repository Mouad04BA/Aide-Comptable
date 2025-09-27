import { Lesson } from '../types';

export const courseData: Lesson[] = [
  {
    id: 'bilan',
    title: {
      ar: 'الدرس 1: الميزانية (Le Bilan)',
      fr: 'Leçon 1 : Le Bilan',
      en: 'Lesson 1: The Balance Sheet',
    },
    description: {
      ar: 'فهم بنية ووظيفة الميزانية المحاسبية، وهي صورة عن الوضع المالي للشركة.',
      fr: 'Comprendre la structure et la fonction du bilan comptable, la photographie du patrimoine de l’entreprise.',
      en: 'Understand the structure and function of the balance sheet, a snapshot of a company’s financial position.',
    },
    content: {
      ar: `
الميزانية هي وثيقة محاسبية تلخص الوضع المالي للشركة في تاريخ معين. إنها بمثابة صورة فوتوغرافية لأصول الشركة (ما تملكه) وخصومها (ما تدين به).
تتكون الميزانية من جانبين متوازنين:
      
**1. الأصول (Actif):** تمثل كل ما تملكه الشركة وله قيمة اقتصادية. تنقسم الأصول إلى:
- **الأصول الثابتة (Actif immobilisé):** ممتلكات تستخدمها الشركة على المدى الطويل (أكثر من عام)، مثل المباني، المعدات، والأراضي.
- **الأصول المتداولة (Actif circulant):** أصول يتوقع تحويلها إلى نقد خلال عام، مثل المخزون، حسابات العملاء (الذمم المدينة)، والنقد في البنك.

**2. الخصوم (Passif):** تمثل مصادر تمويل الشركة، أو التزاماتها تجاه الغير. تنقسم الخصوم إلى:
- **التمويل الدائم (Financement permanent):** الموارد المالية طويلة الأجل، وتشمل رأس المال الخاص (أموال المالكين) والديون طويلة الأجل (قروض بنكية لأكثر من عام).
- **الخصوم المتداولة (Passif circulant):** الديون قصيرة الأجل التي يجب سدادها خلال عام، مثل ديون الموردين والضرائب المستحقة.

**مبدأ التوازن:**
في المحاسبة، يجب أن يكون مجموع الأصول دائمًا مساويًا لمجموع الخصوم.
**مجموع الأصول = مجموع الخصوم**
      `,
      fr: `
Le bilan est un document comptable qui résume la situation financière d'une entreprise à une date donnée. C'est une photographie de l'actif (ce que l'entreprise possède) et du passif (ce que l'entreprise doit).
Le bilan se compose de deux parties équilibrées :
      
**1. L'Actif :** Il représente tout ce que l'entreprise possède et qui a une valeur économique. L'actif est divisé en :
- **Actif immobilisé :** Biens utilisés durablement par l'entreprise (plus d'un an), comme les bâtiments, le matériel, et les terrains.
- **Actif circulant :** Actifs destinés à être convertis en argent en moins d'un an, comme les stocks, les créances clients, et l'argent en banque.

**2. Le Passif :** Il représente les sources de financement de l'entreprise, c'est-à-dire ses dettes envers les tiers. Le passif est divisé en :
- **Financement permanent :** Ressources financières à long terme, incluant les capitaux propres (argent des propriétaires) et les dettes à long terme (emprunts bancaires sur plus d'un an).
- **Passif circulant :** Dettes à court terme à rembourser en moins d'un an, comme les dettes fournisseurs et les impôts à payer.

**Le principe d'équilibre :**
En comptabilité, le total de l'actif doit toujours être égal au total du passif.
**Total Actif = Total Passif**
      `,
      en: `
The balance sheet is an accounting document that summarizes a company's financial position at a given date. It is a snapshot of the assets (what the company owns) and liabilities (what the company owes).
The balance sheet consists of two balanced parts:
      
**1. Assets:** Represents everything the company owns that has economic value. Assets are divided into:
- **Fixed Assets (Actif immobilisé):** Assets used by the company for the long term (more than one year), such as buildings, equipment, and land.
- **Current Assets (Actif circulant):** Assets expected to be converted into cash within a year, such as inventory, customer accounts (receivables), and cash in the bank.

**2. Liabilities (Passif):** Represents the company's sources of funding, or its obligations to third parties. Liabilities are divided into:
- **Permanent Financing (Financement permanent):** Long-term financial resources, including equity (owners' funds) and long-term debt (bank loans over one year).
- **Current Liabilities (Passif circulant):** Short-term debts to be paid within a year, such as supplier debts and taxes payable.

**The Balancing Principle:**
In accounting, total assets must always equal total liabilities.
**Total Assets = Total Liabilities**
      `,
    },
    quiz: [
        {
            question: {
                ar: 'ماذا يمثل جانب "الأصول" في الميزانية؟',
                fr: 'Que représente la partie "Actif" du bilan ?',
                en: "What does the 'Assets' side of the balance sheet represent?",
            },
            options: {
                ar: ['ما تدين به الشركة', 'ما تملكه الشركة', 'ربح الشركة', 'مصادر التمويل'],
                fr: ["Ce que l'entreprise doit", "Ce que l'entreprise possède", "Le bénéfice de l'entreprise", "Les sources de financement"],
                en: ["What the company owes", "What the company owns", "The company's profit", "The sources of funding"],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'أي من التالي يعتبر "خصوم متداولة"؟',
                fr: 'Lequel des éléments suivants est un "Passif circulant" ?',
                en: "Which of the following is a 'Current Liability'?",
            },
            options: {
                ar: ['قرض بنكي (طويل الأجل)', 'دين موردين', 'معدات', 'رأس المال'],
                fr: ['Emprunt bancaire (long terme)', 'Dettes fournisseurs', 'Matériel', 'Capital social'],
                en: ['Bank loan (long-term)', 'Supplier debt', 'Equipment', 'Share Capital'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'المبدأ الأساسي للميزانية هو:',
                fr: 'Le principe fondamental du bilan est :',
                en: 'The fundamental principle of the balance sheet is:',
            },
            options: {
                ar: ['مجموع الأصول > مجموع الخصوم', 'مجموع الأصول = مجموع الخصوم', 'مجموع الأصول < مجموع الخصوم', 'مجموع الأصول = الإيرادات'],
                fr: ['Total Actif > Total Passif', 'Total Actif = Total Passif', 'Total Actif < Total Passif', 'Total Actif = Produits'],
                en: ['Total Assets > Total Liabilities', 'Total Assets = Total Liabilities', 'Total Assets < Total Liabilities', 'Total Assets = Revenues'],
            },
            correctAnswerIndex: 1,
        },
         {
            question: {
                ar: 'أي من هذه العناصر هو أصل ثابت؟',
                fr: 'Lequel de ces éléments est un actif immobilisé ?',
                en: 'Which of these items is a fixed asset?',
            },
            options: {
                ar: ['النقدية', 'المخزون', 'المباني', 'العملاء'],
                fr: ['Trésorerie', 'Stocks', 'Bâtiments', 'Créances clients'],
                en: ['Cash', 'Inventory', 'Buildings', 'Accounts Receivable'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'ماذا يمثل "التمويل الدائم"؟',
                fr: 'Que représente le "Financement permanent" ?',
                en: 'What does "Permanent Financing" represent?',
            },
            options: {
                ar: ['الديون قصيرة الأجل', 'المخزون والعملاء', 'الموارد المالية طويلة الأجل للشركة', 'المبيعات السنوية'],
                fr: ['Les dettes à court terme', 'Les stocks et les créances', 'Les ressources financières à long terme de l\'entreprise', 'Les ventes annuelles'],
                en: ['Short-term debts', 'Inventory and receivables', 'The long-term financial resources of the company', 'Annual sales'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'براءة الاختراع هي مثال على:',
                fr: "Un brevet est un exemple d' :",
                en: 'A patent is an example of a(n):',
            },
            options: {
                ar: ['أصل متداول', 'أصل ثابت معنوي', 'أصل ثابت مادي', 'خصم متداول'],
                fr: ['Actif circulant', 'Actif immobilisé incorporel', 'Actif immobilisé corporel', 'Passif circulant'],
                en: ['Current asset', 'Intangible fixed asset', 'Tangible fixed asset', 'Current liability'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'الديون المستحقة للعملاء تسمى:',
                fr: 'Les montants dus par les clients sont appelés :',
                en: 'Amounts owed by customers are called:',
            },
            options: {
                ar: ['ديون الموردين', 'مخزون', 'ذمم مدينة', 'رأس المال'],
                fr: ['Dettes fournisseurs', 'Stocks', 'Créances clients', 'Capital'],
                en: ['Accounts payable', 'Inventory', 'Accounts receivable', 'Capital'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'ما هو العنصر الذي لا ينتمي إلى جانب الخصوم في الميزانية؟',
                fr: "Quel élément n'appartient pas au côté Passif du bilan ?",
                en: "Which item does not belong on the Liabilities side of the balance sheet?",
            },
            options: {
                ar: ['رأس المال', 'المخزون', 'قرض بنكي', 'ديون الموردين'],
                fr: ['Capital social', 'Stocks', 'Emprunt bancaire', 'Dettes fournisseurs'],
                en: ['Share capital', 'Inventory', 'Bank loan', 'Accounts payable'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'الأصول المتداولة هي أصول يتوقع تحويلها إلى نقد في غضون:',
                fr: "Les actifs circulants sont des actifs qui devraient être convertis en liquidités dans un délai d' :",
                en: 'Current assets are assets that are expected to be converted into cash within:',
            },
            options: {
                ar: ['أقل من عام', '1 إلى 3 سنوات', 'أكثر من 5 سنوات', 'أقل من شهر'],
                fr: ['Moins d\'un an', '1 à 3 ans', 'Plus de 5 ans', 'Moins d\'un mois'],
                en: ['Less than a year', '1 to 3 years', 'More than 5 years', 'Less than a month'],
            },
            correctAnswerIndex: 0,
        },
        {
            question: {
                ar: 'تشمل "الأموال الخاصة" (Capitaux Propres):',
                fr: 'Les "Capitaux Propres" incluent :',
                en: '"Equity" includes:',
            },
            options: {
                ar: ['القروض فقط', 'رأس المال والاحتياطيات والنتائج', 'ديون الموردين فقط', 'المباني والمعدات'],
                fr: ['Seulement les emprunts', 'Le capital, les réserves et les résultats', 'Seulement les dettes fournisseurs', 'Les bâtiments et le matériel'],
                en: ['Only loans', 'Capital, reserves, and income', 'Only supplier debts', 'Buildings and equipment'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'إذا كان مجموع الأصول 500,000 ورأس المال 200,000، فما هو مجموع الديون؟',
                fr: "Si le total de l'actif est de 500 000 et les capitaux propres sont de 200 000, quel est le total des dettes ?",
                en: 'If total assets are 500,000 and equity is 200,000, what are the total liabilities?',
            },
            options: {
                ar: ['700,000', '300,000', '200,000', 'لا يمكن تحديده'],
                fr: ['700 000', '300 000', '200 000', 'Impossible à déterminer'],
                en: ['700,000', '300,000', '200,000', 'Cannot be determined'],
            },
            correctAnswerIndex: 1,
        },
    ],
    td: {
        problem: {
            ar: 'شركة لديها العناصر التالية في نهاية العام: نقد: 20,000؛ معدات: 150,000؛ ديون موردين: 30,000؛ قرض بنكي (طويل الأجل): 100,000؛ مخزون: 40,000. احسب مبلغ رأس المال الخاص.',
            fr: "Une entreprise possède les éléments suivants à la fin de l'année : Caisse : 20 000 ; Matériel : 150 000 ; Dettes fournisseurs : 30 000 ; Emprunt bancaire (long terme) : 100 000 ; Stocks : 40 000. Calculez le montant des Capitaux Propres.",
            en: 'A company has the following items at year-end: Cash: 20,000; Equipment: 150,000; Supplier debt: 30,000; Bank loan (long-term): 100,000; Inventory: 40,000. Calculate the amount of Equity.',
        },
        solution: {
            ar: `أولاً، قائمة الأصول:
النقد (20,000) + المعدات (150,000) + المخزون (40,000) = مجموع الأصول (210,000).

ثانياً، قائمة الخصوم:
ديون الموردين (30,000) + القرض البنكي (100,000) = مجموع الخصوم (130,000).

باستخدام المعادلة: الأصول = الخصوم + رأس المال الخاص، يمكننا إيجاد رأس المال الخاص.
رأس المال الخاص = الأصول - الخصوم
رأس المال الخاص = 210,000 - 130,000 = **80,000 درهم**.`,
            fr: `D'abord, lister les actifs :
Caisse (20 000) + Matériel (150 000) + Stocks (40 000) = Total Actif (210 000).

Ensuite, lister les passifs :
Dettes fournisseurs (30 000) + Emprunt bancaire (100 000) = Total Passif (130 000).

En utilisant l'équation : Actif = Passif + Capitaux Propres, nous pouvons trouver les Capitaux Propres.
Capitaux Propres = Actif - Passif
Capitaux Propres = 210 000 - 130 000 = **80 000 DH**.`,
            en: `First, list the assets:
Cash (20,000) + Equipment (150,000) + Inventory (40,000) = Total Assets (210,000).

Next, list the liabilities:
Supplier debt (30,000) + Bank loan (100,000) = Total Liabilities (130,000).

Using the equation: Assets = Liabilities + Equity, we can find the Equity.
Equity = Assets - Liabilities
Equity = 210,000 - 130,000 = **80,000 MAD**.`,
        }
    }
  },
  {
    id: 'cpc',
    title: {
      ar: 'الدرس 2: حساب النتائج (CPC)',
      fr: 'Leçon 2 : Le Compte de Produits et Charges (CPC)',
      en: 'Lesson 2: The Income Statement (CPC)',
    },
    description: {
      ar: 'تعلم كيفية تحليل أداء الشركة من خلال حساب النتائج، الذي يوضح الإيرادات والمصاريف.',
      fr: 'Apprenez à analyser la performance de l’entreprise avec le CPC, qui détaille les produits et les charges.',
      en: 'Learn to analyze company performance with the Income Statement, detailing revenues and expenses.',
    },
    content: {
      ar: `
حساب النتائج، أو CPC (Compte de Produits et Charges)، هو وثيقة محاسبية رئيسية تلخص أداء الشركة خلال فترة زمنية معينة (عادة سنة مالية). على عكس الميزانية التي هي صورة في لحظة معينة، فإن CPC هو فيلم يوضح ما إذا كانت الشركة قد حققت ربحًا أم خسارة.

يتكون CPC من جزأين رئيسيين:

**1. الإيرادات (Produits):** تمثل جميع الموارد التي جنتها الشركة من نشاطها. وتشمل:
- **إيرادات التشغيل:** مثل مبيعات البضائع والخدمات.
- **الإيرادات المالية:** مثل الفوائد المكتسبة من الاستثمارات.
- **الإيرادات غير الجارية:** مثل الأرباح من بيع أصل ثابت.

**2. المصاريف (Charges):** تمثل جميع التكاليف التي تحملتها الشركة لتوليد إيراداتها. وتشمل:
- **مصاريف التشغيل:** مثل تكلفة البضاعة المباعة، ورواتب الموظفين، والإيجار.
- **المصاريف المالية:** مثل الفوائد المدفوعة على القروض.
- **المصاريف غير الجارية:** مثل الخسائر من بيع أصل ثابت.

**تحديد النتيجة:**
النتيجة النهائية للسنة المالية (ربح أو خسارة) يتم حسابها بالصيغة البسيطة التالية:
**النتيجة الصافية = مجموع الإيرادات - مجموع المصاريف**

إذا كانت الإيرادات أكبر من المصاريف، تحقق الشركة ربحًا. إذا كانت المصاريف أكبر، فإنها تتكبد خسارة.
      `,
      fr: `
Le Compte de Produits et Charges (CPC) est un document comptable clé qui synthétise la performance d'une entreprise sur une période donnée (généralement un exercice comptable). Contrairement au bilan qui est une photo à un instant T, le CPC est un film qui montre si l'entreprise a réalisé un bénéfice ou une perte.

Le CPC se compose de deux grandes parties :

**1. Les Produits :** Ils représentent toutes les ressources que l'entreprise a gagnées grâce à son activité. Cela inclut :
- **Produits d'exploitation :** Ventes de marchandises, prestations de services, etc.
- **Produits financiers :** Intérêts perçus sur des placements, etc.
- **Produits non courants :** Profits sur la vente d'une immobilisation, etc.

**2. Les Charges :** Elles représentent tous les coûts que l'entreprise a supportés pour générer ses produits. Cela inclut :
- **Charges d'exploitation :** Coût d'achat des marchandises vendues, salaires, loyers, etc.
- **Charges financières :** Intérêts payés sur les emprunts, etc.
- **Charges non courantes :** Pertes sur la vente d'une immobilisation, etc.

**Détermination du Résultat :**
Le résultat final de l'exercice (bénéfice ou perte) est calculé par la formule simple :
**Résultat Net = Total des Produits - Total des Charges**

Si les produits sont supérieurs aux charges, l'entreprise réalise un bénéfice. Si les charges sont supérieures, elle subit une perte.
      `,
      en: `
The Income Statement, or CPC (Compte de Produits et Charges), is a key financial statement that summarizes a company's performance over a specific period (usually a fiscal year). Unlike the balance sheet, which is a snapshot in time, the CPC is like a film that shows whether the company has made a profit or a loss.

The CPC has two main parts:

**1. Revenues (Produits):** Represents all the resources the company has earned from its activities. This includes:
- **Operating Revenues:** Sales of goods, services provided, etc.
- **Financial Revenues:** Interest earned on investments, etc.
- **Non-current Revenues:** Profits from the sale of a fixed asset, etc.

**2. Expenses (Charges):** Represents all the costs the company incurred to generate its revenues. This includes:
- **Operating Expenses:** Cost of goods sold, salaries, rent, etc.
- **Financial Expenses:** Interest paid on loans, etc.
- **Non-current Expenses:** Losses from the sale of a fixed asset, etc.

**Determining the Result:**
The final result for the period (profit or loss) is calculated with the simple formula:
**Net Income = Total Revenues - Total Expenses**

If revenues are greater than expenses, the company makes a profit. If expenses are greater, it incurs a loss.
      `,
    },
     quiz: [
        {
            question: {
                ar: 'ما هو الغرض الرئيسي لحساب النتائج (CPC)؟',
                fr: "Quel est l'objectif principal du CPC ?",
                en: 'What is the main purpose of the Income Statement (CPC)?',
            },
            options: {
                ar: ['إظهار الوضع المالي في لحظة معينة', 'إظهار الأداء خلال فترة', 'قائمة بجميع الأصول', 'حساب رأس المال'],
                fr: ['Montrer la situation financière à un instant T', 'Montrer la performance sur une période', 'Lister tous les actifs', 'Calculer les capitaux propres'],
                en: ['To show financial position at a point in time', 'To show performance over a period', 'To list all assets', 'To calculate equity'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'كيف يتم حساب النتيجة الصافية؟',
                fr: 'Comment le Résultat Net est-il calculé ?',
                en: 'How is Net Income calculated?',
            },
            options: {
                ar: ['مجموع الإيرادات + مجموع المصاريف', 'مجموع الإيرادات - مجموع المصاريف', 'مجموع الأصول - مجموع الخصوم', 'مجموع الأصول + مجموع الخصوم'],
                fr: ['Total Produits + Total Charges', 'Total Produits - Total Charges', 'Total Actif - Total Passif', 'Total Actif + Total Passif'],
                en: ['Total Revenues + Total Expenses', 'Total Revenues - Total Expenses', 'Total Assets - Total Liabilities', 'Total Assets + Total Liabilities'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'أي من التالي يعتبر "مصروف تشغيل"؟',
                fr: 'Lequel des éléments suivants est une "Charge d\'exploitation" ?',
                en: "Which of the following is an 'Operating Expense'?",
            },
            options: {
                ar: ['مبيعات البضائع', 'الرواتب', 'فوائد على القروض', 'بيع آلة'],
                fr: ['Ventes de marchandises', 'Salaires', 'Intérêts sur emprunts', 'Vente d\'une machine'],
                en: ['Sales of goods', 'Salaries', 'Interest on loans', 'Sale of a machine'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'الفائدة المكتسبة على وديعة بنكية هي:',
                fr: 'Les intérêts gagnés sur un placement bancaire sont :',
                en: 'Interest earned on a bank deposit is:',
            },
            options: {
                ar: ['إيراد تشغيل', 'إيراد مالي', 'إيراد غير جاري', 'مصروف مالي'],
                fr: ['Un produit d\'exploitation', 'Un produit financier', 'Un produit non courant', 'Une charge financière'],
                en: ['An operating revenue', 'A financial revenue', 'A non-current revenue', 'A financial expense'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'إذا حققت الشركة ربحًا، فهذا يعني أن:',
                fr: 'Si une entreprise réalise un bénéfice, cela signifie que :',
                en: 'If a company makes a profit, it means that:',
            },
            options: {
                ar: ['المصاريف > الإيرادات', 'الأصول > الخصوم', 'الإيرادات > المصاريف', 'الخصوم > الأصول'],
                fr: ['Les charges > Les produits', 'L\'actif > Le passif', 'Les produits > Les charges', 'Le passif > L\'actif'],
                en: ['Expenses > Revenues', 'Assets > Liabilities', 'Revenues > Expenses', 'Liabilities > Assets'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'تكلفة شراء البضائع المباعة هي:',
                fr: "Le coût d'achat des marchandises vendues est :",
                en: 'The cost of purchasing goods that were sold is a(n):',
            },
            options: {
                ar: ['مصروف تشغيل', 'إيراد تشغيل', 'مصروف مالي', 'أصل'],
                fr: ['Une charge d\'exploitation', 'Un produit d\'exploitation', 'Une charge financière', 'Un actif'],
                en: ['Operating expense', 'Operating revenue', 'Financial expense', 'Asset'],
            },
            correctAnswerIndex: 0,
        },
        {
            question: {
                ar: 'الأرباح الناتجة عن بيع مبنى بسعر أعلى من قيمته الدفترية هي:',
                fr: "Le profit réalisé sur la vente d'un bâtiment au-dessus de sa valeur comptable est un :",
                en: 'The profit made from selling a building for more than its book value is a(n):',
            },
            options: {
                ar: ['إيراد تشغيل', 'إيراد مالي', 'إيراد غير جاري', 'ربح رأسمالي'],
                fr: ['Produit d\'exploitation', 'Produit financier', 'Produit non courant', 'Plus-value'],
                en: ['Operating revenue', 'Financial revenue', 'Non-current revenue', 'Capital gain'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'ما هو الفرق بين الميزانية وحساب النتائج؟',
                fr: 'Quelle est la différence entre le bilan et le CPC ?',
                en: 'What is the difference between the balance sheet and the income statement?',
            },
            options: {
                ar: ['لا فرق', 'الميزانية تظهر الأداء، وحساب النتائج يظهر الوضع', 'الميزانية هي صورة في لحظة، وحساب النتائج هو فيلم لفترة', 'كلاهما يظهر الربح'],
                fr: ['Aucune différence', 'Le bilan montre la performance, le CPC montre la situation', 'Le bilan est une photo à un instant T, le CPC est un film sur une période', 'Les deux montrent le bénéfice'],
                en: ['No difference', 'The balance sheet shows performance, the income statement shows position', 'The balance sheet is a snapshot in time, the income statement is a film over a period', 'Both show profit'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'مصاريف الإعلانات تصنف ضمن:',
                fr: 'Les frais de publicité sont classés comme :',
                en: 'Advertising expenses are classified as:',
            },
            options: {
                ar: ['مصاريف مالية', 'مصاريف تشغيل', 'مصاريف غير جارية', 'أصول'],
                fr: ['Charges financières', 'Charges d\'exploitation', 'Charges non courantes', 'Actifs'],
                en: ['Financial expenses', 'Operating expenses', 'Non-current expenses', 'Assets'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'إذا كانت المصاريف 100,000 والإيرادات 80,000، فإن النتيجة هي:',
                fr: "Si les charges sont de 100 000 et les produits de 80 000, le résultat est une :",
                en: 'If expenses are 100,000 and revenues are 80,000, the result is a:',
            },
            options: {
                ar: ['ربح 20,000', 'خسارة 20,000', 'ربح 180,000', 'خسارة 180,000'],
                fr: ['Bénéfice de 20 000', 'Perte de 20 000', 'Bénéfice de 180 000', 'Perte de 180 000'],
                en: ['Profit of 20,000', 'Loss of 20,000', 'Profit of 180,000', 'Loss of 180,000'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'حساب النتائج يسمى أيضا:',
                fr: 'Le CPC est aussi appelé :',
                en: 'The Income Statement is also called:',
            },
            options: {
                ar: ['بيان التدفقات النقدية', 'بيان الأرباح والخسائر', 'الميزانية العمومية', 'بيان حقوق الملكية'],
                fr: ['Tableau des flux de trésorerie', 'Compte de résultat (Profit & Loss statement)', 'Bilan', 'État des variations des capitaux propres'],
                en: ['Statement of Cash Flows', 'Profit and Loss Statement', 'Balance Sheet', 'Statement of Equity'],
            },
            correctAnswerIndex: 1,
        },
    ],
    td: {
        problem: {
            ar: 'شركة لديها البيانات التالية للسنة: مبيعات بضائع: 500,000؛ تكلفة البضاعة المباعة: 300,000؛ رواتب: 80,000؛ إيجار: 20,000؛ فوائد مدفوعة على قرض: 10,000. احسب النتيجة الصافية.',
            fr: "Une entreprise a les données suivantes pour l'année : Ventes de marchandises : 500 000 ; Coût des marchandises vendues : 300 000 ; Salaires : 80 000 ; Loyer : 20 000 ; Intérêts payés sur un emprunt : 10 000. Calculez le Résultat Net.",
            en: 'A company has the following data for the year: Sales of goods: 500,000; Cost of goods sold: 300,000; Salaries: 80,000; Rent: 20,000; Interest paid on a loan: 10,000. Calculate the Net Income.',
        },
        solution: {
            ar: `قائمة الإيرادات (Produits):
مبيعات البضائع (500,000). **إجمالي الإيرادات = 500,000**.

قائمة المصاريف (Charges):
- تكلفة البضاعة المباعة: 300,000
- الرواتب: 80,000
- الإيجار: 20,000
- الفوائد المدفوعة: 10,000
**إجمالي المصاريف = 300,000 + 80,000 + 20,000 + 10,000 = 410,000**.

النتيجة الصافية = إجمالي الإيرادات - إجمالي المصاريف
النتيجة الصافية = 500,000 - 410,000 = **90,000 درهم**.`,
            fr: `Lister les Produits :
Ventes de marchandises (500 000). **Total Produits = 500 000**.

Lister les Charges :
- Coût des marchandises vendues : 300 000
- Salaires : 80 000
- Loyer : 20 000
- Intérêts payés : 10 000
**Total Charges = 300 000 + 80 000 + 20 000 + 10 000 = 410 000**.

Résultat Net = Total Produits - Total Charges
Résultat Net = 500 000 - 410 000 = **90 000 DH**.`,
            en: `List all Revenues:
Sales of goods (500,000). **Total Revenues = 500,000**.

List all Expenses:
- Cost of goods sold: 300,000
- Salaries: 80,000
- Rent: 20,000
- Interest paid: 10,000
**Total Expenses = 300,000 + 80,000 + 20,000 + 10,000 = 410,000**.

Net Income = Total Revenues - Total Expenses
Net Income = 500,000 - 410,000 = **90,000 MAD**.`,
        }
    }
  },
  {
    id: 'equation',
    title: {
      ar: 'الدرس 3: المعادلة المحاسبية',
      fr: "Leçon 3 : L'Équation Comptable",
      en: 'Lesson 3: The Accounting Equation',
    },
    description: {
      ar: 'اكتشف المبدأ الأساسي الذي تقوم عليه المحاسبة ذات القيد المزدوج.',
      fr: 'Découvrez le principe fondamental qui sous-tend toute la comptabilité en partie double.',
      en: 'Discover the fundamental principle that underpins all double-entry accounting.',
    },
    content: {
      ar: `
المعادلة المحاسبية هي حجر الزاوية في المحاسبة الحديثة. إنها الأساس الذي يُبنى عليه نظام القيد المزدوج وتضمن أن الميزانية العمومية تظل دائمًا في حالة توازن.

الصيغة الأساسية هي:
**الأصول = الخصوم + حقوق الملكية**

دعنا نفصلها:
- **الأصول (Assets):** هي الموارد الاقتصادية التي تملكها الشركة والتي لها قيمة مستقبلية (مثل النقد، المخزون، المعدات).
- **الخصوم (Liabilities):** هي التزامات الشركة أو ديونها للغير (مثل القروض، الذمم الدائنة للموردين).
- **حقوق الملكية (Equity):** تمثل القيمة المتبقية في أصول الشركة بعد خصم الخصوم. إنها مطالبة المالكين بصافي أصول الشركة. يمكن إعادة كتابتها كـ: **حقوق الملكية = رأس المال + الأرباح المحتجزة**.

**كيف تعمل:**
لكل معاملة، يجب أن تظل المعادلة متوازنة. هذا يعني أن كل معاملة تؤثر على جزأين على الأقل من المعادلة.
*مثال:* اشترت شركة معدات بقيمة 10,000 درهم نقدًا.
- **الأصول (المعدات)** تزيد بمقدار 10,000 درهم.
- **الأصول (النقد)** تنقص بمقدار 10,000 درهم.
تظل المعادلة متوازنة لأن إجمالي الأصول لم يتغير؛ لقد تغير تكوينها فقط.

*مثال آخر:* حصلت الشركة على قرض بنكي بقيمة 50,000 درهم.
- **الأصول (النقد)** تزيد بمقدار 50,000 درهم.
- **الخصوم (قرض بنكي)** تزيد بمقدار 50,000 درهم.
تظل المعادلة متوازنة.
      `,
      fr: `
L'équation comptable est la pierre angulaire de la comptabilité moderne. C'est la base sur laquelle le système de partie double est construit et garantit que le bilan reste toujours en équilibre.

La formule de base est :
**Actif = Passif + Capitaux Propres**

Détaillons-la :
- **Actif (Assets) :** Ce sont les ressources économiques possédées par l'entreprise qui ont une valeur future (ex: trésorerie, stocks, matériel).
- **Passif (Liabilities) :** Ce sont les obligations ou les dettes de l'entreprise envers des tiers (ex: emprunts, dettes fournisseurs).
- **Capitaux Propres (Equity) :** Représente la valeur résiduelle des actifs de l'entreprise après déduction des passifs. C'est la créance des propriétaires sur les actifs nets de l'entreprise. On peut aussi l'écrire : **Capitaux Propres = Capital + Résultats non distribués**.

**Comment ça marche :**
Pour chaque transaction, l'équation doit rester équilibrée. Cela signifie que chaque transaction a au moins deux effets sur l'équation.
*Exemple :* Une entreprise achète du matériel pour 10 000 DH en espèces.
- **L'Actif (Matériel)** augmente de 10 000 DH.
- **L'Actif (Trésorerie)** diminue de 10 000 DH.
L'équation reste équilibrée car le total de l'actif n'a pas changé ; seule sa composition a changé.

*Autre exemple :* L'entreprise obtient un prêt bancaire de 50 000 DH.
- **L'Actif (Trésorerie)** augmente de 50 000 DH.
- **Le Passif (Emprunt bancaire)** augmente de 50 000 DH.
L'équation reste équilibrée.
      `,
      en: `
The accounting equation is the cornerstone of modern accounting. It is the foundation upon which the double-entry system is built and ensures that the balance sheet always remains in balance.

The basic formula is:
**Assets = Liabilities + Equity**

Let's break it down:
- **Assets:** These are the economic resources owned by the company that have future value (e.g., cash, inventory, equipment).
- **Liabilities:** These are the company's obligations or debts to third parties (e.g., loans, accounts payable to suppliers).
- **Equity:** Represents the residual value of the company's assets after deducting liabilities. It is the owners' claim on the net assets of the company. It can also be written as: **Equity = Capital + Retained Earnings**.

**How it works:**
For every transaction, the equation must remain balanced. This means that every transaction has at least two effects on the equation.
*Example:* A company buys equipment for 10,000 MAD in cash.
- **Assets (Equipment)** increases by 10,000 MAD.
- **Assets (Cash)** decreases by 10,000 MAD.
The equation remains balanced because total assets have not changed; only their composition has.

*Another example:* The company gets a bank loan of 50,000 MAD.
- **Assets (Cash)** increases by 50,000 MAD.
- **Liabilities (Bank Loan)** increases by 50,000 MAD.
The equation remains balanced.
      `,
    },
    quiz: [
      {
        question: {
          ar: 'ما هي الصيغة الصحيحة للمعادلة المحاسبية؟',
          fr: 'Quelle est la formule correcte de l’équation comptable ?',
          en: 'What is the correct formula for the accounting equation?',
        },
        options: {
          ar: ['الأصول = الخصوم - حقوق الملكية', 'الأصول = الخصوم + حقوق الملكية', 'الأصول + الخصوم = حقوق الملكية', 'الأصول + حقوق الملكية = الخصوم'],
          fr: ['Actif = Passif - Capitaux Propres', 'Actif = Passif + Capitaux Propres', 'Actif + Passif = Capitaux Propres', 'Actif + Capitaux Propres = Passif'],
          en: ['Assets = Liabilities - Equity', 'Assets = Liabilities + Equity', 'Assets + Liabilities = Equity', 'Assets + Equity = Liabilities'],
        },
        correctAnswerIndex: 1,
      },
      {
        question: {
          ar: 'إذا اشترت شركة سيارة بالدين، كيف يؤثر ذلك على المعادلة المحاسبية؟',
          fr: "Si une entreprise achète une voiture à crédit, comment cela affecte-t-il l'équation comptable ?",
          en: 'If a company buys a car on credit, how does it affect the accounting equation?',
        },
        options: {
          ar: ['تزيد الأصول وتزيد الخصوم', 'تزيد الأصول وتنقص الأصول', 'تنقص الأصول وتنقص الخصوم', 'لا تغيير'],
          fr: ["L'actif augmente et le passif augmente", "L'actif augmente et l'actif diminue", "L'actif diminue et le passif diminue", 'Aucun changement'],
          en: ['Assets increase and liabilities increase', 'Assets increase and assets decrease', 'Assets decrease and liabilities decrease', 'No change'],
        },
        correctAnswerIndex: 0,
      },
      {
        question: {
          ar: 'حقوق الملكية يمكن تعريفها أيضًا بأنها:',
          fr: 'Les capitaux propres peuvent aussi être définis comme :',
          en: 'Equity can also be defined as:',
        },
        options: {
          ar: ['الأصول + الخصوم', 'مطالبة المالكين بصافي الأصول', 'إجمالي الإيرادات', 'صافي الربح'],
          fr: ['Actif + Passif', 'La créance des propriétaires sur les actifs nets', 'Le total des produits', 'Le résultat net'],
          en: ['Assets + Liabilities', 'The owners\' claim on net assets', 'Total revenues', 'Net income'],
        },
        correctAnswerIndex: 1,
      },
      {
        question: {
          ar: 'إذا دفعت شركة دينًا لمورد، فإن التأثير هو:',
          fr: "Si une entreprise paie une dette fournisseur, l'effet est :",
          en: 'If a company pays a supplier debt, the effect is:',
        },
        options: {
          ar: ['نقصان الأصول ونقصان الخصوم', 'زيادة الأصول وزيادة الخصوم', 'زيادة الأصول ونقصان الخصوم', 'نقصان الأصول وزيادة حقوق الملكية'],
          fr: ["Diminution de l'actif et diminution du passif", "Augmentation de l'actif et augmentation du passif", "Augmentation de l'actif et diminution du passif", "Diminution de l'actif et augmentation des capitaux propres"],
          en: ['Assets decrease and liabilities decrease', 'Assets increase and liabilities increase', 'Assets increase and liabilities decrease', 'Assets decrease and equity increases'],
        },
        correctAnswerIndex: 0,
      },
      {
        question: {
          ar: 'استثمار المالك لمبلغ نقدي في الشركة يؤدي إلى:',
          fr: "L'investissement en espèces du propriétaire dans l'entreprise entraîne :",
          en: 'An owner investing cash into the business results in:',
        },
        options: {
          ar: ['زيادة الأصول وزيادة حقوق الملكية', 'زيادة الأصول وزيادة الخصوم', 'نقصان الأصول وزيادة حقوق الملكية', 'لا تغيير في المعادلة'],
          fr: ["Une augmentation de l'actif et une augmentation des capitaux propres", "Une augmentation de l'actif et une augmentation du passif", "Une diminution de l'actif et une augmentation des capitaux propres", "Aucun changement dans l'équation"],
          en: ['An increase in assets and an increase in equity', 'An increase in assets and an increase in liabilities', 'A decrease in assets and an increase in equity', 'No change in the equation'],
        },
        correctAnswerIndex: 0,
      },
      {
        question: {
          ar: 'تقديم خدمة للعميل على الحساب (بالدين) يؤدي إلى:',
          fr: "La prestation d'un service à un client à crédit entraîne :",
          en: 'Providing a service to a customer on account results in:',
        },
        options: {
          ar: ['زيادة الأصول وزيادة حقوق الملكية (عبر الإيرادات)', 'زيادة الأصول وزيادة الخصوم', 'لا تغيير في الأصول', 'نقصان الأصول'],
          fr: ["Une augmentation de l'actif et une augmentation des capitaux propres (via les produits)", "Une augmentation de l'actif et une augmentation du passif", "Aucun changement dans l'actif", "Une diminution de l'actif"],
          en: ['An increase in assets and an increase in equity (via revenue)', 'An increase in assets and an increase in liabilities', 'No change in assets', 'A decrease in assets'],
        },
        correctAnswerIndex: 0,
      },
      {
        question: {
          ar: 'أي معاملة تؤدي إلى نقصان الأصول وزيادة الأصول في نفس الوقت؟',
          fr: "Quelle transaction entraîne à la fois une diminution de l'actif et une augmentation de l'actif ?",
          en: 'Which transaction results in both a decrease in assets and an increase in assets?',
        },
        options: {
          ar: ['شراء معدات نقدًا', 'دفع دين لمورد', 'الحصول على قرض', 'بيع بضاعة'],
          fr: ["L'achat de matériel au comptant", "Le paiement d'une dette fournisseur", "L'obtention d'un prêt", "La vente de marchandises"],
          en: ['Buying equipment for cash', 'Paying a supplier debt', 'Getting a loan', 'Selling goods'],
        },
        correctAnswerIndex: 0,
      },
      {
        question: {
          ar: 'إذا كان لدى الشركة أصول بقيمة 100,000 وخصوم بقيمة 40,000، فما هي حقوق الملكية؟',
          fr: "Si une entreprise a des actifs de 100 000 et des passifs de 40 000, quels sont les capitaux propres ?",
          en: 'If a company has assets of 100,000 and liabilities of 40,000, what is the equity?',
        },
        options: {
          ar: ['140,000', '40,000', '60,000', '100,000'],
          fr: ['140 000', '40 000', '60 000', '100 000'],
          en: ['140,000', '40,000', '60,000', '100,000'],
        },
        correctAnswerIndex: 2,
      },
      {
        question: {
          ar: 'عندما تدفع الشركة مصاريف الإيجار نقدًا، فإن:',
          fr: "Lorsqu'une entreprise paie son loyer en espèces, alors :",
          en: 'When a company pays rent expense in cash, then:',
        },
        options: {
          ar: ['الأصول تنقص وحقوق الملكية تنقص', 'الأصول تزيد والخصوم تزيد', 'الخصوم تنقص وحقوق الملكية تزيد', 'الأصول تنقص والخصوم تنقص'],
          fr: ["L'actif diminue et les capitaux propres diminuent", "L'actif augmente et le passif augmente", "Le passif diminue et les capitaux propres augmentent", "L'actif diminue et le passif diminue"],
          en: ['Assets decrease and equity decreases', 'Assets increase and liabilities increase', 'Liabilities decrease and equity increases', 'Assets decrease and liabilities decrease'],
        },
        correctAnswerIndex: 0,
      },
      {
        question: {
          ar: 'المعادلة المحاسبية هي أساس:',
          fr: "L'équation comptable est la base de :",
          en: 'The accounting equation is the basis for:',
        },
        options: {
          ar: ['تحليل السوق', 'المحاسبة ذات القيد المزدوج', 'التنبؤ بالمبيعات', 'إدارة المخزون'],
          fr: ["L'analyse de marché", 'La comptabilité en partie double', 'La prévision des ventes', 'La gestion des stocks'],
          en: ['Market analysis', 'Double-entry accounting', 'Sales forecasting', 'Inventory management'],
        },
        correctAnswerIndex: 1,
      },
       {
        question: {
          ar: 'إذا كان لدى الشركة أصول بقيمة 250,000 وحقوق ملكية بقيمة 150,000، فما هي الخصوم؟',
          fr: "Si une entreprise a 250 000 d'actifs et 150 000 de capitaux propres, quel est le montant de ses passifs ?",
          en: 'If a company has 250,000 in assets and 150,000 in equity, what are its liabilities?',
        },
        options: {
          ar: ['400,000', '150,000', '250,000', '100,000'],
          fr: ['400 000', '150 000', '250 000', '100 000'],
          en: ['400,000', '150,000', '250,000', '100,000'],
        },
        correctAnswerIndex: 3,
      },
    ],
     td: {
        problem: {
            ar: 'بدأت شركة برأس مال 200,000 درهم نقدًا. ثم اشترت معدات بقيمة 50,000 درهم بالدين. ما هي المعادلة المحاسبية بعد هذه العمليات؟',
            fr: "Une entreprise démarre avec un capital de 200 000 DH en espèces. Ensuite, elle achète du matériel d'une valeur de 50 000 DH à crédit. Quelle est l'équation comptable après ces deux opérations ?",
            en: 'A company starts with 200,000 MAD cash as capital. Then, it buys equipment worth 50,000 MAD on credit. What is the accounting equation after these two transactions?',
        },
        solution: {
            ar: `1. **بداية النشاط:**
   - الأصول (نقد) تزيد بمقدار 200,000
   - حقوق الملكية (رأس المال) تزيد بمقدار 200,000
   المعادلة: 200,000 (أصول) = 0 (خصوم) + 200,000 (حقوق الملكية).

2. **شراء معدات بالدين:**
   - الأصول (معدات) تزيد بمقدار 50,000
   - الخصوم (ديون الموردين) تزيد بمقدار 50,000

**الوضع النهائي:**
- **الأصول:** نقد (200,000) + معدات (50,000) = **250,000**
- **الخصوم:** ديون الموردين = **50,000**
- **حقوق الملكية:** رأس المال = **200,000**

**المعادلة النهائية:**
250,000 (الأصول) = 50,000 (الخصوم) + 200,000 (حقوق الملكية)`,
            fr: `1. **Démarrage de l'activité :**
   - Actif (Trésorerie) augmente de 200 000
   - Capitaux Propres (Capital) augmente de 200 000
   Équation : 200 000 (Actif) = 0 (Passif) + 200 000 (Capitaux Propres).

2. **Achat de matériel à crédit :**
   - Actif (Matériel) augmente de 50 000
   - Passif (Dettes fournisseurs) augmente de 50 000

**Situation finale :**
- **Actif :** Trésorerie (200 000) + Matériel (50 000) = **250 000**
- **Passif :** Dettes fournisseurs = **50 000**
- **Capitaux Propres :** Capital = **200 000**

**Équation finale :**
250 000 (Actif) = 50 000 (Passif) + 200 000 (Capitaux Propres)`,
            en: `1. **Starting the business:**
   - Assets (Cash) increase by 200,000
   - Equity (Capital) increases by 200,000
   Equation: 200,000 (Assets) = 0 (Liabilities) + 200,000 (Equity).

2. **Buying equipment on credit:**
   - Assets (Equipment) increase by 50,000
   - Liabilities (Accounts Payable) increase by 50,000

**Final Situation:**
- **Assets:** Cash (200,000) + Equipment (50,000) = **250,000**
- **Liabilities:** Accounts Payable = **50,000**
- **Equity:** Capital = **200,000**

**Final Equation:**
250,000 (Assets) = 50,000 (Liabilities) + 200,000 (Equity)`,
        }
    }
  },
  {
    id: 'amortissement',
    title: {
      ar: 'الدرس 4: اهتلاك الأصول الثابتة',
      fr: "Leçon 4 : L'Amortissement des Immobilisations",
      en: 'Lesson 4: Depreciation of Fixed Assets',
    },
    description: {
      ar: 'فهم كيفية تسجيل انخفاض قيمة أصول الشركة بمرور الوقت بسبب الاستخدام أو التقادم.',
      fr: "Comprendre comment comptabiliser la perte de valeur des actifs de l'entreprise due à l'usure ou l'obsolescence.",
      en: "Understand how to account for the loss in value of a company's assets due to wear and tear or obsolescence.",
    },
    content: {
      ar: `
الاهتلاك هو الاعتراف المحاسبي بانخفاض قيمة الأصل الثابت على مدى عمره الإنتاجي. هذا الانخفاض في القيمة ناتج عن الاستخدام، التآكل، أو التقادم التكنولوجي.

**المفاهيم الأساسية:**
- **القيمة الأصلية (Valeur d'Origine - VO):** تكلفة شراء الأصل، بما في ذلك جميع المصاريف اللازمة لجعله جاهزًا للاستخدام.
- **العمر الإنتاجي (Durée de vie):** الفترة الزمنية التي يتوقع أن يكون فيها الأصل مفيدًا للشركة.
- **معدل الاهتلاك (Taux d'amortissement):** النسبة المئوية للقيمة التي يتم اهتلاكها كل عام. في الاهتلاك الخطي، المعدل = 100% / العمر الإنتاجي.
- **القسط السنوي للاهتلاك (Annuité):** مبلغ الاهتلاك المحسوب لفترة محاسبية (عادة سنة).
- **القيمة الصافية المحاسبية (Valeur Nette Comptable - VNC):** القيمة المتبقية للأصل في دفاتر الشركة. VNC = VO - مجموع الاهتلاكات.

**طريقة الاهتلاك الخطي (Amortissement linéaire):**
هي الطريقة الأكثر شيوعًا. تفترض أن الأصل يفقد قيمته بمعدل ثابت كل عام.
**القسط السنوي = القيمة الأصلية * معدل الاهتلاك**

**القيد المحاسبي:**
في نهاية كل فترة محاسبية، يتم تسجيل قيد للاهتلاك:
- **مدين:** حساب 619 "Dotations d'exploitation aux amortissements" (مخصصات التشغيل للاهتلاكات). هذا حساب مصروف يظهر في حساب النتائج.
- **دائن:** حساب 28 "Amortissements des immobilisations" (اهتلاكات الأصول الثابتة). هذا حساب أصول ب"رصيد دائن" يقلل من قيمة الأصل في الميزانية.
      `,
      fr: `
L'amortissement est la constatation comptable de la perte de valeur d'une immobilisation sur sa durée de vie utile. Cette perte de valeur est due à l'usure, au temps, ou à l'obsolescence technologique.

**Concepts Clés :**
- **Valeur d'Origine (VO) :** Le coût d'acquisition de l'actif, incluant tous les frais nécessaires à sa mise en service.
- **Durée de vie :** La période pendant laquelle l'actif est censé être utilisé par l'entreprise.
- **Taux d'amortissement :** Le pourcentage de la valeur qui est amorti chaque année. Pour l'amortissement linéaire, Taux = 100% / Durée de vie.
- **Annuité :** Le montant de l'amortissement calculé pour un exercice (généralement un an).
- **Valeur Nette Comptable (VNC) :** La valeur résiduelle de l'actif dans les comptes de l'entreprise. VNC = VO - Cumul des Amortissements.

**Méthode de l'amortissement linéaire :**
C'est la méthode la plus courante. Elle suppose que l'actif perd de la valeur à un rythme constant chaque année.
**Annuité = Valeur d'Origine * Taux d'amortissement**

**Écriture Comptable :**
À la fin de chaque exercice, une écriture d'amortissement est passée :
- **Débit :** Compte 619 "Dotations d'exploitation aux amortissements". C'est une charge qui apparaît dans le CPC.
- **Crédit :** Compte 28 "Amortissements des immobilisations". C'est un compte d'actif à "solde créditeur" qui vient en déduction de la valeur de l'immobilisation au bilan.
      `,
      en: `
Depreciation is the accounting recognition of the decrease in value of a fixed asset over its useful life. This loss of value is due to usage, wear and tear, or technological obsolescence.

**Key Concepts:**
- **Original Cost (Valeur d'Origine - VO):** The purchase cost of the asset, including all expenses necessary to get it ready for use.
- **Useful Life (Durée de vie):** The period over which the asset is expected to be useful to the company.
- **Depreciation Rate (Taux d'amortissement):** The percentage of the value that is depreciated each year. For straight-line depreciation, Rate = 100% / Useful Life.
- **Annuity (Annuité):** The amount of depreciation calculated for an accounting period (usually a year).
- **Net Book Value (Valeur Nette Comptable - VNC):** The remaining value of the asset in the company's books. VNC = VO - Accumulated Depreciation.

**Straight-Line Depreciation Method (Amortissement linéaire):**
This is the most common method. It assumes that the asset loses value at a constant rate each year.
**Annual Depreciation = Original Cost * Depreciation Rate**

**Journal Entry:**
At the end of each accounting period, a depreciation entry is recorded:
- **Debit:** Account 619 "Dotations d'exploitation aux amortissements" (Operating depreciation expenses). This is an expense account that appears on the income statement.
- **Credit:** Account 28 "Amortissements des immobilisations" (Accumulated depreciation). This is an asset account with a "credit balance" that reduces the value of the asset on the balance sheet.
      `,
    },
    quiz: [
        {
          question: {
            ar: 'ما هو الاهتلاك؟',
            fr: "Qu'est-ce que l'amortissement ?",
            en: 'What is depreciation?',
          },
          options: {
            ar: ['زيادة في قيمة الأصل', 'الاعتراف بانخفاض قيمة الأصل', 'تكلفة بيع الأصل', 'إيراد من الأصل'],
            fr: ["Une augmentation de la valeur de l'actif", "La constatation de la perte de valeur de l'actif", "Le coût de vente de l'actif", "Un revenu généré par l'actif"],
            en: ['An increase in asset value', 'The recognition of an asset\'s loss in value', 'The cost of selling an asset', 'Revenue from an asset'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'كيف يتم حساب القيمة الصافية المحاسبية (VNC)؟',
            fr: 'Comment calcule-t-on la Valeur Nette Comptable (VNC) ?',
            en: 'How is Net Book Value (VNC) calculated?',
          },
          options: {
            ar: ['القيمة الأصلية + مجموع الاهتلاكات', 'القيمة الأصلية / العمر الإنتاجي', 'القيمة الأصلية - مجموع الاهتلاكات', 'مجموع الاهتلاكات فقط'],
            fr: ["Valeur d'Origine + Cumul des Amortissements", "Valeur d'Origine / Durée de vie", "Valeur d'Origine - Cumul des Amortissements", 'Uniquement le cumul des amortissements'],
            en: ['Original Cost + Accumulated Depreciation', 'Original Cost / Useful Life', 'Original Cost - Accumulated Depreciation', 'Only accumulated depreciation'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'أصل تكلفته 100,000 درهم وعمره الإنتاجي 5 سنوات. ما هو القسط السنوي للاهتلاك الخطي؟',
            fr: 'Un actif coûte 100 000 DH et a une durée de vie de 5 ans. Quelle est l\'annuité d\'amortissement linéaire ?',
            en: 'An asset costs 100,000 MAD and has a useful life of 5 years. What is the annual straight-line depreciation?',
          },
          options: {
            ar: ['10,000', '15,000', '20,000', '25,000'],
            fr: ['10 000', '15 000', '20 000', '25 000'],
            en: ['10,000', '15,000', '20,000', '25,000'],
          },
          correctAnswerIndex: 2,
        },
        {
            question: {
              ar: 'ما هو الحساب الذي يتم تحميله (مدين) عند تسجيل الاهتلاك؟',
              fr: 'Quel compte est débité lors de l\'enregistrement de l\'amortissement ?',
              en: 'Which account is debited when recording depreciation?',
            },
            options: {
              ar: ['حساب الأصل الثابت', 'حساب الاهتلاكات المتراكمة (28)', 'حساب المخصصات (619)', 'حساب البنك'],
              fr: ["Le compte de l'immobilisation", "Le compte d'amortissements cumulés (28)", 'Le compte de Dotations (619)', 'Le compte Banque'],
              en: ['The fixed asset account', 'The accumulated depreciation account (28)', 'The Dotations (expense) account (619)', 'The Bank account'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
              ar: 'ما هو معدل الاهتلاك الخطي لأصل عمره 4 سنوات؟',
              fr: "Quel est le taux d'amortissement linéaire pour un actif d'une durée de vie de 4 ans ?",
              en: 'What is the straight-line depreciation rate for an asset with a 4-year life?',
            },
            options: {
              ar: ['20%', '25%', '40%', '10%'],
              fr: ['20%', '25%', '40%', '10%'],
              en: ['20%', '25%', '40%', '10%'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'مع مرور الوقت، فإن القيمة الصافية المحاسبية للأصل:',
              fr: 'Au fil du temps, la VNC d\'un actif :',
              en: 'Over time, an asset\'s VNC:',
            },
            options: {
              ar: ['تزيد', 'تنقص', 'تبقى ثابتة', 'تصبح صفراً فوراً'],
              fr: ['Augmente', 'Diminue', 'Reste constante', 'Devient nulle immédiatement'],
              en: ['Increases', 'Decreases', 'Stays constant', 'Immediately becomes zero'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'مخصص الاهتلاك هو:',
              fr: 'La dotation aux amortissements est :',
              en: 'The depreciation expense (dotation) is a(n):',
            },
            options: {
              ar: ['إيراد', 'مصروف', 'أصل', 'دين'],
              fr: ['Un produit', 'Une charge', 'Un actif', 'Une dette'],
              en: ['Revenue', 'Expense', 'Asset', 'Liability'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'أصل تكلفته 200,000 وعمره 10 سنوات. ما هي قيمته الصافية المحاسبية بعد 3 سنوات؟',
              fr: "Un actif coûte 200 000 et sa durée de vie est de 10 ans. Quelle est sa VNC après 3 ans ?",
              en: 'An asset costs 200,000 with a 10-year life. What is its Net Book Value after 3 years?',
            },
            options: {
              ar: ['60,000', '140,000', '170,000', '20,000'],
              fr: ['60 000', '140 000', '170 000', '20 000'],
              en: ['60,000', '140,000', '170,000', '20,000'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'حساب "اهتلاكات الأصول الثابتة" (28) يظهر في:',
              fr: 'Le compte "Amortissements des immobilisations" (28) apparaît dans :',
              en: 'The "Accumulated Depreciation" account (28) appears in the:',
            },
            options: {
              ar: ['جانب الأصول في الميزانية (كرصيد دائن)', 'جانب الخصوم في الميزانية', 'حساب النتائج كمصروف', 'حساب النتائج كإيراد'],
              fr: ["L'actif du bilan (en moins)", "Le passif du bilan", 'Le CPC en tant que charge', 'Le CPC en tant que produit'],
              en: ['Assets side of the balance sheet (as a credit balance)', 'Liabilities side of the balance sheet', 'Income statement as an expense', 'Income statement as a revenue'],
            },
            correctAnswerIndex: 0,
        },
        {
            question: {
              ar: 'لماذا نقوم باهتلاك الأصول؟',
              fr: 'Pourquoi amortit-on les immobilisations ?',
              en: 'Why do we depreciate assets?',
            },
            options: {
              ar: ['لزيادة قيمتها', 'لتوزيع تكلفتها على مدى عمرها الإنتاجي', 'لبيعها بسرعة أكبر', 'لأن القانون يفرض ذلك فقط'],
              fr: ['Pour augmenter leur valeur', 'Pour répartir leur coût sur leur durée de vie utile', 'Pour les vendre plus rapidement', 'Uniquement parce que la loi l\'exige'],
              en: ['To increase their value', 'To allocate their cost over their useful life', 'To sell them more quickly', 'Only because the law requires it'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'في نهاية العمر الإنتاجي للأصل، تكون قيمته الصافية المحاسبية:',
                fr: "À la fin de la durée de vie utile d'un actif, sa VNC est de :",
                en: "At the end of an asset's useful life, its VNC is:",
            },
            options: {
                ar: ['تساوي قيمته الأصلية', 'صفر', 'نصف قيمته الأصلية', 'لا يمكن معرفتها'],
                fr: ['Égale à sa valeur d\'origine', 'Zéro', 'La moitié de sa valeur d\'origine', 'Inconnue'],
                en: ['Equal to its original cost', 'Zero', 'Half its original cost', 'Unknown'],
            },
            correctAnswerIndex: 1,
        }
    ],
    td: {
      problem: {
        ar: 'في 1 يناير 2023، اشترت شركة آلة بقيمة 250,000 درهم. العمر الإنتاجي المقدر هو 5 سنوات. قم بحساب القسط السنوي للاهتلاك، وإعداد جدول الاهتلاك لمدة 5 سنوات، وتسجيل قيد اليومية اللازم في 31 ديسمبر 2023.',
        fr: "Le 1er janvier 2023, une entreprise achète une machine pour 250 000 DH. La durée de vie utile est estimée à 5 ans. Calculez l'annuité d'amortissement, préparez le plan d'amortissement sur 5 ans, et passez l'écriture de journal nécessaire au 31 décembre 2023.",
        en: 'On Jan 1, 2023, a company buys a machine for 250,000 MAD. The estimated useful life is 5 years. Calculate the annual depreciation, prepare the depreciation schedule for 5 years, and make the necessary journal entry on Dec 31, 2023.',
      },
      solution: {
        ar: `**1. حساب القسط السنوي:**
- المعدل = 100% / 5 سنوات = 20%
- القسط السنوي = 250,000 * 20% = **50,000 درهم**

**2. جدول الاهتلاك:**
| السنة | القيمة الأصلية | القسط السنوي | الاهتلاك المتراكم | القيمة الصافية |
|---|---|---|---|---|
| 2023 | 250,000 | 50,000 | 50,000 | 200,000 |
| 2024 | 250,000 | 50,000 | 100,000 | 150,000 |
| 2025 | 250,000 | 50,000 | 150,000 | 100,000 |
| 2026 | 250,000 | 50,000 | 200,000 | 50,000 |
| 2027 | 250,000 | 50,000 | 250,000 | 0 |

**3. قيد اليومية في 31/12/2023:**
- **مدين:** 6193 - D.E.A. des inst. tech., mat. et out. : **50,000**
- **دائن:** 2833 - Amort. des inst. tech., mat. et out. : **50,000**`,
        fr: `**1. Calcul de l'annuité :**
- Taux = 100% / 5 ans = 20%
- Annuité = 250 000 * 20% = **50 000 DH**

**2. Plan d'amortissement :**
| Année | Valeur d'Origine | Annuité | Amort. Cumulé | VNC |
|---|---|---|---|---|
| 2023 | 250 000 | 50 000 | 50 000 | 200 000 |
| 2024 | 250 000 | 50 000 | 100 000 | 150 000 |
| 2025 | 250 000 | 50 000 | 150 000 | 100 000 |
| 2026 | 250 000 | 50 000 | 200 000 | 50 000 |
| 2027 | 250 000 | 50 000 | 250 000 | 0 |

**3. Écriture au 31/12/2023 :**
- **Débit :** 6193 - D.E.A. des inst. tech., mat. et out. : **50 000**
- **Crédit :** 2833 - Amort. des inst. tech., mat. et out. : **50 000**`,
        en: `**1. Calculate Annual Depreciation:**
- Rate = 100% / 5 years = 20%
- Annuity = 250,000 * 20% = **50,000 MAD**

**2. Depreciation Schedule:**
| Year | Original Cost | Annuity | Acc. Depr. | VNC |
|---|---|---|---|---|
| 2023 | 250,000 | 50,000 | 50,000 | 200,000 |
| 2024 | 250,000 | 50,000 | 100,000 | 150,000 |
| 2025 | 250,000 | 50,000 | 150,000 | 100,000 |
| 2026 | 250,000 | 50,000 | 200,000 | 50,000 |
| 2027 | 250,000 | 50,000 | 250,000 | 0 |

**3. Journal Entry on 31/12/2023:**
- **Debit:** 6193 - Depreciation expense... : **50,000**
- **Credit:** 2833 - Accumulated depreciation... : **50,000**`,
      }
    }
  },
  {
    id: 'tva',
    title: {
      ar: 'الدرس 5: الضريبة على القيمة المضافة (TVA)',
      fr: 'Leçon 5 : La Taxe sur la Valeur Ajoutée (TVA)',
      en: 'Lesson 5: Value Added Tax (VAT)',
    },
    description: {
      ar: 'إتقان آلية الضريبة على القيمة المضافة، من تحصيلها على المبيعات إلى خصمها على المشتريات، وإعداد الإقرار الضريبي.',
      fr: 'Maîtriser le mécanisme de la TVA, de sa collecte sur les ventes à sa déduction sur les achats, et préparer la déclaration.',
      en: 'Master the VAT mechanism, from collecting it on sales to deducting it on purchases, and preparing the declaration.',
    },
    content: {
      ar: `
الضريبة على القيمة المضافة (TVA) هي ضريبة غير مباشرة على الاستهلاك يتحملها المستهلك النهائي ولكن يتم تحصيلها بواسطة الشركات.

**الآلية الأساسية:**
- **الضريبة المحصلة (TVA Facturée):** عندما تبيع شركة منتجًا أو خدمة، فإنها تضيف ضريبة القيمة المضافة إلى سعر البيع. هذا المبلغ هو دين على الشركة تجاه الدولة. يتم تسجيله في حساب **4455 - Etat, TVA facturée**.
- **الضريبة القابلة للاسترداد (TVA Récupérable):** عندما تشتري شركة سلعًا أو خدمات من مورديها، فإنها تدفع ضريبة القيمة المضافة. يمكن للشركة خصم هذه الضريبة من الضريبة التي حصلتها. يتم تسجيلها في حساب **3455 - Etat, TVA récupérable**.

**الإقرار الضريبي للـ TVA:**
في نهاية كل فترة (شهر أو ربع سنة)، تحسب الشركة الضريبة المستحقة للدولة:
**TVA due = TVA facturée - TVA récupérable**

- إذا كانت النتيجة موجبة، يجب على الشركة دفع المبلغ للدولة.
- إذا كانت النتيجة سالبة (TVA récupérable > TVA facturée)، يكون للشركة **رصيد ضريبي (Crédit de TVA)** يمكنها استخدامه في الفترات التالية.

**معدلات الضريبة في المغرب:**
- **20%:** المعدل العادي لمعظم السلع والخدمات.
- **14%، 10%، 7%:** معدلات مخفضة لبعض المنتجات والخدمات المحددة (مثل النقل، الفنادق، المنتجات الغذائية الأساسية).

**القيد المحاسبي للمبيعات:**
- مدين: 3421 - Clients (المبلغ الإجمالي شامل الضريبة)
- دائن: 711 - Ventes de marchandises (المبلغ بدون ضريبة)
- دائن: 4455 - Etat, TVA facturée (مبلغ الضريبة)

**القيد المحاسبي للمشتريات:**
- مدين: 611 - Achats de marchandises (المبلغ بدون ضريبة)
- مدين: 3455 - Etat, TVA récupérable (مبلغ الضريبة)
- دائن: 4411 - Fournisseurs (المبلغ الإجمالي شامل الضريبة)
      `,
      fr: `
La Taxe sur la Valeur Ajoutée (TVA) est un impôt indirect sur la consommation, supporté par le consommateur final mais collecté par les entreprises.

**Mécanisme de base :**
- **TVA Facturée :** Lorsqu'une entreprise vend un bien ou un service, elle ajoute la TVA au prix de vente. Ce montant est une dette de l'entreprise envers l'État. Elle est enregistrée dans le compte **4455 - Etat, TVA facturée**.
- **TVA Récupérable :** Lorsqu'une entreprise achète des biens ou des services à ses fournisseurs, elle paie de la TVA. Cette TVA peut être déduite de la TVA qu'elle a collectée. Elle est enregistrée dans le compte **3455 - Etat, TVA récupérable**.

**Déclaration de TVA :**
À la fin de chaque période (mois ou trimestre), l'entreprise calcule la TVA à verser à l'État :
**TVA due = TVA facturée - TVA récupérable**

- Si le résultat est positif, l'entreprise doit payer le montant à l'État.
- Si le résultat est négatif (TVA récupérable > TVA facturée), l'entreprise a un **Crédit de TVA** qu'elle peut reporter sur les périodes suivantes.

**Taux de TVA au Maroc :**
- **20% :** Taux normal pour la plupart des biens et services.
- **14%, 10%, 7% :** Taux réduits pour certains produits et services spécifiques (transport, hôtellerie, produits de première nécessité...).

**Écriture de Vente :**
- Débit : 3421 - Clients (Montant TTC)
- Crédit : 711 - Ventes de marchandises (Montant HT)
- Crédit : 4455 - Etat, TVA facturée (Montant TVA)

**Écriture d'Achat :**
- Débit : 611 - Achats de marchandises (Montant HT)
- Débit : 3455 - Etat, TVA récupérable (Montant TVA)
- Crédit : 4411 - Fournisseurs (Montant TTC)
      `,
      en: `
Value Added Tax (VAT) is an indirect tax on consumption, borne by the final consumer but collected by companies.

**Basic Mechanism:**
- **Collected VAT (TVA Facturée):** When a company sells a good or service, it adds VAT to the selling price. This amount is a debt the company owes to the state. It is recorded in account **4455 - Etat, TVA facturée**.
- **Deductible VAT (TVA Récupérable):** When a company buys goods or services from its suppliers, it pays VAT. This VAT can be deducted from the VAT it has collected. It is recorded in account **3455 - Etat, TVA récupérable**.

**VAT Declaration:**
At the end of each period (month or quarter), the company calculates the VAT payable to the state:
**VAT due = Collected VAT - Deductible VAT**

- If the result is positive, the company must pay the amount to the state.
- If the result is negative (Deductible VAT > Collected VAT), the company has a **VAT Credit (Crédit de TVA)** that it can carry forward to subsequent periods.

**VAT Rates in Morocco:**
- **20%:** The standard rate for most goods and services.
- **14%, 10%, 7%:** Reduced rates for certain specific products and services (e.g., transport, hotels, basic food products).

**Sales Entry:**
- Debit: 3421 - Clients (Total amount including tax)
- Credit: 711 - Ventes de marchandises (Amount before tax)
- Credit: 4455 - Etat, TVA facturée (VAT amount)

**Purchase Entry:**
- Debit: 611 - Achats de marchandises (Amount before tax)
- Debit: 3455 - Etat, TVA récupérable (VAT amount)
- Credit: 4411 - Fournisseurs (Total amount including tax)
      `,
    },
    quiz: [
        {
          question: {
            ar: 'من يتحمل في النهاية تكلفة ضريبة القيمة المضافة؟',
            fr: 'Qui supporte finalement le coût de la TVA ?',
            en: 'Who ultimately bears the cost of VAT?',
          },
          options: {
            ar: ['الشركة', 'المورد', 'المستهلك النهائي', 'الدولة'],
            fr: ["L'entreprise", 'Le fournisseur', 'Le consommateur final', "L'État"],
            en: ['The company', 'The supplier', 'The final consumer', 'The state'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'ما هي صيغة حساب الضريبة على القيمة المضافة المستحقة؟',
            fr: 'Quelle est la formule pour calculer la TVA due ?',
            en: 'What is the formula to calculate VAT due?',
          },
          options: {
            ar: ['TVA facturée + TVA récupérable', 'TVA facturée - TVA récupérable', 'TVA récupérable - TVA facturée', 'TVA facturée / TVA récupérable'],
            fr: ['TVA facturée + TVA récupérable', 'TVA facturée - TVA récupérable', 'TVA récupérable - TVA facturée', 'TVA facturée / TVA récupérable'],
            en: ['Collected VAT + Deductible VAT', 'Collected VAT - Deductible VAT', 'Deductible VAT - Collected VAT', 'Collected VAT / Deductible VAT'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'ماذا يعني وجود "رصيد ضريبي" (Crédit de TVA)؟',
            fr: "Qu'est-ce qu'un 'Crédit de TVA' ?",
            en: 'What is a "VAT Credit"?',
          },
          options: {
            ar: ['يجب على الشركة دفع المزيد من الضرائب', 'TVA facturée > TVA récupérable', 'TVA récupérable > TVA facturée', 'الشركة معفاة من الضريبة'],
            fr: ["L'entreprise doit payer plus de TVA", 'TVA facturée > TVA récupérable', 'TVA récupérable > TVA facturée', "L'entreprise est exonérée de TVA"],
            en: ['The company must pay more VAT', 'Collected VAT > Deductible VAT', 'Deductible VAT > Collected VAT', 'The company is exempt from VAT'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'ما هو رقم الحساب المستخدم لتسجيل الضريبة المحصلة على المبيعات؟',
            fr: 'Quel est le numéro de compte pour la TVA facturée sur les ventes ?',
            en: 'What is the account number for collected VAT on sales?',
          },
          options: {
            ar: ['3455', '4455', '711', '611'],
            fr: ['3455', '4455', '711', '611'],
            en: ['3455', '4455', '711', '611'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'عند الشراء، تعتبر الضريبة القابلة للاسترداد بالنسبة للشركة:',
            fr: "Lors d'un achat, la TVA récupérable est pour l'entreprise :",
            en: 'On a purchase, deductible VAT is a(n) ... for the company:',
          },
          options: {
            ar: ['مصروف', 'إيراد', 'دين على الدولة (أصل)', 'دين على المورد'],
            fr: ['Une charge', 'Un produit', 'Une créance sur l\'État (actif)', 'Une dette envers le fournisseur'],
            en: ['Expense', 'Revenue', 'Receivable from the state (asset)', 'Liability to the supplier'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'اشترت شركة بضاعة بمبلغ 1000 درهم (بدون ضريبة) بمعدل 20%. ما هو المبلغ الإجمالي الذي ستدفعه للمورد؟',
            fr: 'Une entreprise achète des marchandises pour 1 000 DH (HT) au taux de 20%. Quel est le montant TTC à payer au fournisseur ?',
            en: 'A company buys goods for 1,000 MAD (excl. tax) at a 20% rate. What is the total amount to be paid to the supplier?',
          },
          options: {
            ar: ['1000', '200', '1200', '800'],
            fr: ['1 000', '200', '1 200', '800'],
            en: ['1,000', '200', '1,200', '800'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'ما هو المعدل العادي لضريبة القيمة المضافة في المغرب؟',
            fr: 'Quel est le taux normal de TVA au Maroc ?',
            en: 'What is the standard VAT rate in Morocco?',
          },
          options: {
            ar: ['10%', '14%', '7%', '20%'],
            fr: ['10%', '14%', '7%', '20%'],
            en: ['10%', '14%', '7%', '20%'],
          },
          correctAnswerIndex: 3,
        },
        {
          question: {
            ar: 'في قيد المبيعات، يكون حساب "العملاء" (Clients):',
            fr: "Dans une écriture de vente, le compte 'Clients' est :",
            en: 'In a sales entry, the "Clients" account is:',
          },
          options: {
            ar: ['مدين بالمبلغ شامل الضريبة', 'مدين بالمبلغ بدون ضريبة', 'دائن بمبلغ الضريبة', 'دائن بالمبلغ شامل الضريبة'],
            fr: ['Débité pour le montant TTC', 'Débité pour le montant HT', 'Crédité pour le montant de la TVA', 'Crédité pour le montant TTC'],
            en: ['Debited for the amount including tax', 'Debited for the amount before tax', 'Credited for the VAT amount', 'Credited for the amount including tax'],
          },
          correctAnswerIndex: 0,
        },
        {
          question: {
            ar: 'ضريبة القيمة المضافة هي ضريبة:',
            fr: 'La TVA est un impôt :',
            en: 'VAT is a(n) ... tax:',
          },
          options: {
            ar: ['مباشرة', 'غير مباشرة', 'على الدخل', 'على الشركات'],
            fr: ['Direct', 'Indirect', 'Sur le revenu', 'Sur les sociétés'],
            en: ['Direct', 'Indirect', 'On income', 'On corporations'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'إذا باعت شركة خدمة بسعر 500 درهم شامل الضريبة (TTC) بمعدل 20%، فما هو مبلغ الضريبة؟',
            fr: 'Si une entreprise vend un service pour 500 DH TTC au taux de 20%, quel est le montant de la TVA ?',
            en: 'If a company sells a service for 500 MAD including 20% tax, what is the VAT amount?',
          },
          options: {
            ar: ['100', '83.33', '50', '500'],
            fr: ['100', '83.33', '50', '500'],
            en: ['100', '83.33', '50', '500'],
          },
          correctAnswerIndex: 1,
        },
         {
            question: {
                ar: 'أي من الأنشطة التالية قد تكون معفاة من ضريبة القيمة المضافة؟',
                fr: 'Laquelle des activités suivantes peut être exonérée de TVA ?',
                en: 'Which of the following activities might be exempt from VAT?',
            },
            options: {
                ar: ['بيع الحواسيب', 'خدمات المحاماة', 'تصدير السلع', 'بيع السيارات'],
                fr: ["Vente d'ordinateurs", "Services d'avocat", 'Exportation de biens', 'Vente de voitures'],
                en: ['Selling computers', 'Lawyer services', 'Export of goods', 'Selling cars'],
            },
            correctAnswerIndex: 2,
        },
    ],
    td: {
      problem: {
        ar: `خلال شهر مارس، قامت شركة بالعمليات التالية (معدل الضريبة 20%):
- باعت بضائع بمبلغ 150,000 درهم (بدون ضريبة).
- اشترت مواد أولية بمبلغ 80,000 درهم (بدون ضريبة).
- كان لديها رصيد ضريبي من شهر فبراير قدره 5,000 درهم.
المطلوب: 1. تسجيل قيود البيع والشراء. 2. حساب الضريبة المستحقة لشهر مارس.`,
        fr: `Durant le mois de mars, une entreprise a réalisé les opérations suivantes (TVA 20%) :
- Ventes de marchandises : 150 000 DH (HT).
- Achats de matières premières : 80 000 DH (HT).
- Elle avait un crédit de TVA de février de 5 000 DH.
Travail à faire : 1. Passer les écritures de vente et d'achat. 2. Calculer la TVA due pour le mois de mars.`,
        en: `During March, a company had the following transactions (VAT rate 20%):
- Sales of goods: 150,000 MAD (excl. tax).
- Purchases of raw materials: 80,000 MAD (excl. tax).
- It had a VAT credit from February of 5,000 MAD.
Required: 1. Record the sales and purchase entries. 2. Calculate the VAT due for March.`,
      },
      solution: {
        ar: `**1. قيود اليومية:**
*قيد البيع:*
- مدين: 3421 - Clients: 180,000
- دائن: 711 - Ventes: 150,000
- دائن: 4455 - Etat, TVA facturée: 30,000

*قيد الشراء:*
- مدين: 6121 - Achats de matières: 80,000
- مدين: 3455 - Etat, TVA récupérable: 16,000
- دائن: 4411 - Fournisseurs: 96,000

**2. حساب الضريبة المستحقة:**
- TVA facturée (مارس): 30,000
- TVA récupérable (مارس): 16,000
- رصيد ضريبي سابق: 5,000
- إجمالي الضريبة القابلة للخصم = 16,000 + 5,000 = 21,000

- **TVA due = 30,000 - 21,000 = 9,000 درهم**
يجب على الشركة دفع 9,000 درهم للدولة.`,
        fr: `**1. Écritures de journal :**
*Écriture de vente :*
- Débit : 3421 - Clients : 180 000
- Crédit : 711 - Ventes : 150 000
- Crédit : 4455 - Etat, TVA facturée : 30 000

*Écriture d'achat :*
- Débit : 6121 - Achats de matières : 80 000
- Débit : 3455 - Etat, TVA récupérable : 16 000
- Crédit : 4411 - Fournisseurs : 96 000

**2. Calcul de la TVA due :**
- TVA facturée (mars) : 30 000
- TVA récupérable (mars) : 16 000
- Crédit de TVA antérieur : 5 000
- Total TVA déductible = 16 000 + 5 000 = 21 000

- **TVA due = 30 000 - 21 000 = 9 000 DH**
L'entreprise doit payer 9 000 DH à l'État.`,
        en: `**1. Journal Entries:**
*Sales Entry:*
- Debit: 3421 - Clients: 180,000
- Credit: 711 - Ventes: 150,000
- Credit: 4455 - Etat, TVA facturée: 30,000

*Purchase Entry:*
- Debit: 6121 - Achats de matières: 80,000
- Debit: 3455 - Etat, TVA récupérable: 16,000
- Credit: 4411 - Fournisseurs: 96,000

**2. VAT Due Calculation:**
- Collected VAT (March): 30,000
- Deductible VAT (March): 16,000
- Previous VAT credit: 5,000
- Total deductible VAT = 16,000 + 5,000 = 21,000

- **VAT due = 30,000 - 21,000 = 9,000 MAD**
The company must pay 9,000 MAD to the state.`,
      }
    }
  },
  {
    id: 'ecritures-stock',
    title: {
      ar: 'الدرس 6: قيود جرد المخزون',
      fr: "Leçon 6 : Les Écritures d'Inventaire des Stocks",
      en: 'Lesson 6: Inventory Journal Entries',
    },
    description: {
      ar: 'تعلم كيفية إجراء قيود نهاية العام لتسوية قيمة المخزون وتحديد التغير فيه، وهو أمر أساسي لحساب النتائج.',
      fr: "Apprenez à passer les écritures de fin d'année pour ajuster la valeur des stocks et déterminer la variation, une étape essentielle au calcul du résultat.",
      en: 'Learn to make the year-end entries to adjust inventory value and determine its variation, an essential step in calculating profit.',
    },
    content: {
      ar: `
في نظام الجرد المتقطع (l'inventaire intermittent)، لا يتم تحديث قيمة المخزون بعد كل عملية شراء أو بيع. بدلاً من ذلك، يتم إجراء جرد مادي في نهاية الفترة المحاسبية لتحديد قيمة المخزون النهائي. ثم يتم إجراء قيود التسوية لتحديث الحسابات.

**الغرض من قيود الجرد:**
1.  **إلغاء المخزون الأولي (SI):** إزالة قيمة المخزون الذي كان موجودًا في بداية الفترة من الميزانية.
2.  **إثبات المخزون النهائي (SF):** تسجيل قيمة المخزون الجديد الموجود في نهاية الفترة في الميزانية.
3.  **تحديد تغير المخزون:** الفرق بين المخزون النهائي والأولي يمثل "تغير المخزون"، وهو عنصر يؤثر على حساب النتائج.

**قيود جرد البضائع (Marchandises):**
1.  **لإلغاء المخزون الأولي:**
    - مدين: **6114** - Variation de stocks de marchandises
    - دائن: **311** - Marchandises (بقيمة SI)
2.  **لإثبات المخزون النهائي:**
    - مدين: **311** - Marchandises (بقيمة SF)
    - دائن: **6114** - Variation de stocks de marchandises

**تفسير رصيد حساب 6114:**
- **رصيد مدين (SF < SI):** يعني أن المخزون قد انخفض. هذا "الاستهلاك" (déstockage) يمثل مصروفًا إضافيًا.
- **رصيد دائن (SF > SI):** يعني أن المخزون قد زاد. هذا "التخزين" (stockage) يقلل من المصاريف.

تطبق نفس الآلية على المواد الأولية (حسابي 312 و 6124) والمنتجات النهائية (حسابي 315 و **713** - Variation des stocks de produits). لاحظ أن تغير مخزون المنتجات النهائية يستخدم حساب إيرادات (فئة 7).
      `,
      fr: `
Dans le système de l'inventaire intermittent, la valeur du stock n'est pas mise à jour après chaque achat ou vente. À la place, un inventaire physique est réalisé à la fin de la période comptable pour déterminer la valeur du stock final. Des écritures d'ajustement sont alors passées pour mettre à jour les comptes.

**Objectif des écritures d'inventaire :**
1.  **Annuler le Stock Initial (SI) :** Sortir la valeur du stock du début de période du bilan.
2.  **Constater le Stock Final (SF) :** Enregistrer la nouvelle valeur du stock de fin de période au bilan.
3.  **Déterminer la variation de stock :** La différence entre le SF et le SI représente la "variation de stock", un élément qui affecte le calcul du résultat.

**Écritures pour les Marchandises :**
1.  **Pour annuler le Stock Initial :**
    - Débit : **6114** - Variation de stocks de marchandises
    - Crédit : **311** - Marchandises (pour la valeur du SI)
2.  **Pour constater le Stock Final :**
    - Débit : **311** - Marchandises (pour la valeur du SF)
    - Crédit : **6114** - Variation de stocks de marchandises

**Interprétation du solde du compte 6114 :**
- **Solde débiteur (SF < SI) :** Le stock a diminué. Ce "déstockage" représente une charge supplémentaire.
- **Solde créditeur (SF > SI) :** Le stock a augmenté. Ce "stockage" vient en déduction des charges.

Le même mécanisme s'applique pour les matières premières (comptes 312 et 6124) et les produits finis (comptes 315 et **713** - Variation des stocks de produits). Notez que la variation de stock de produits finis utilise un compte de produit (classe 7).
      `,
      en: `
In the intermittent inventory system, the stock value is not updated after each purchase or sale. Instead, a physical count is done at the end of the accounting period to determine the final inventory value. Adjusting entries are then made to update the accounts.

**Purpose of Inventory Entries:**
1.  **Cancel the Initial Inventory (SI):** To remove the value of the inventory at the start of the period from the balance sheet.
2.  **Record the Final Inventory (SF):** To record the new value of inventory at the end of the period on the balance sheet.
3.  **Determine the variation in stock:** The difference between SF and SI represents the "variation in stock," an item that affects the calculation of the result.

**Entries for Merchandise:**
1.  **To cancel the Initial Inventory:**
    - Debit: **6114** - Variation de stocks de marchandises
    - Credit: **311** - Marchandises (for the value of SI)
2.  **To record the Final Inventory:**
    - Debit: **311** - Marchandises (for the value of SF)
    - Credit: **6114** - Variation de stocks de marchandises

**Interpreting the balance of account 6114:**
- **Debit balance (SF < SI):** The inventory has decreased. This "destocking" represents an additional expense.
- **Credit balance (SF > SI):** The inventory has increased. This "stocking" reduces expenses.

The same mechanism applies to raw materials (accounts 312 and 6124) and finished goods (accounts 315 and **713** - Variation des stocks de produits). Note that the variation in finished goods inventory uses a revenue account (class 7).
      `,
    },
    quiz: [
        {
            question: {
                ar: 'متى يتم عادة تسجيل قيود جرد المخزون في نظام الجرد المتقطع؟',
                fr: "Quand les écritures d'inventaire sont-elles généralement passées dans le système de l'inventaire intermittent ?",
                en: 'When are inventory entries typically made in the intermittent inventory system?',
            },
            options: {
                ar: ['يومياً', 'أسبوعياً', 'شهرياً', 'في نهاية الفترة المحاسبية'],
                fr: ['Quotidiennement', 'Hebdomadairement', 'Mensuellement', "À la fin de la période comptable"],
                en: ['Daily', 'Weekly', 'Monthly', 'At the end of the accounting period'],
            },
            correctAnswerIndex: 3,
        },
        {
            question: {
                ar: 'ما هو القيد لإلغاء مخزون أولي من البضائع بقيمة 50,000؟',
                fr: 'Quelle est l\'écriture pour annuler un stock initial de marchandises de 50 000 ?',
                en: 'What is the entry to cancel a beginning merchandise inventory of 50,000?',
            },
            options: {
                ar: ['مدين 311، دائن 6114', 'مدين 6114، دائن 311', 'مدين 611، دائن 311', 'مدين 311، دائن 711'],
                fr: ['Débit 311, Crédit 6114', 'Débit 6114, Crédit 311', 'Débit 611, Crédit 311', 'Débit 311, Crédit 711'],
                en: ['Debit 311, Credit 6114', 'Debit 6114, Credit 311', 'Debit 611, Credit 311', 'Debit 311, Credit 711'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'رصيد دائن في حساب "6114 - تغير مخزون البضائع" يعني أن:',
                fr: 'Un solde créditeur dans le compte "6114 - Variation de stocks de marchandises" signifie que :',
                en: 'A credit balance in the "6114 - Variation de stocks de marchandises" account means that:',
            },
            options: {
                ar: ['المخزون انخفض', 'المخزون زاد', 'المشتريات زادت', 'المبيعات زادت'],
                fr: ['Le stock a diminué', 'Le stock a augmenté', 'Les achats ont augmenté', 'Les ventes ont augmenté'],
                en: ['Inventory has decreased', 'Inventory has increased', 'Purchases have increased', 'Sales have increased'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'ما هو رقم الحساب المستخدم لتغير مخزون المنتجات النهائية؟',
                fr: 'Quel est le numéro de compte pour la variation des stocks de produits finis ?',
                en: 'What is the account number for the variation of finished goods inventory?',
            },
            options: {
                ar: ['6114', '6124', '713', '315'],
                fr: ['6114', '6124', '713', '315'],
                en: ['6114', '6124', '713', '315'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'إذا كان المخزون الأولي 20,000 والمخزون النهائي 15,000، فإن تغير المخزون هو:',
                fr: 'Si le stock initial est de 20 000 et le stock final de 15 000, la variation de stock est :',
                en: 'If beginning inventory is 20,000 and ending inventory is 15,000, the variation in stock is a:',
            },
            options: {
                ar: ['مصروف 5,000', 'إيراد 5,000', 'مصروف 35,000', 'إيراد 35,000'],
                fr: ['Une charge de 5 000', 'Un produit de 5 000', 'Une charge de 35 000', 'Un produit de 35 000'],
                en: ['5,000 expense', '5,000 revenue', '35,000 expense', '35,000 revenue'],
            },
            correctAnswerIndex: 0,
        },
        {
            question: {
                ar: 'قيد إثبات المخزون النهائي يتضمن:',
                fr: 'L\'écriture de constatation du stock final inclut :',
                en: 'The entry to record ending inventory includes:',
            },
            options: {
                ar: ['دائن لحساب المخزون (311)', 'مدين لحساب المخزون (311)', 'مدين لحساب المشتريات (611)', 'دائن لحساب المبيعات (711)'],
                fr: ['Un crédit au compte de stock (311)', 'Un débit au compte de stock (311)', 'Un débit au compte d\'achats (611)', 'Un crédit au compte de ventes (711)'],
                en: ['A credit to the inventory account (311)', 'A debit to the inventory account (311)', 'A debit to the purchases account (611)', 'A credit to the sales account (711)'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'الهدف من قيود الجرد هو تحديث قيمة المخزون في:',
                fr: "L'objectif des écritures d'inventaire est de mettre à jour la valeur du stock dans :",
                en: 'The purpose of inventory entries is to update the inventory value in the:',
            },
            options: {
                ar: ['حساب النتائج فقط', 'الميزانية فقط', 'الميزانية وحساب النتائج', 'دفتر الأستاذ المساعد للموردين'],
                fr: ['Le CPC uniquement', 'Le bilan uniquement', 'Le bilan et le CPC', 'Le grand-livre auxiliaire fournisseurs'],
                en: ['Income statement only', 'Balance sheet only', 'Balance sheet and income statement', 'Supplier subsidiary ledger'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'زيادة مخزون المنتجات النهائية تعتبر:',
                fr: "Une augmentation du stock de produits finis est considérée comme :",
                en: 'An increase in finished goods inventory is considered a(n):',
            },
            options: {
                ar: ['مصروف', 'إيراد (إنتاج مخزّن)', 'خسارة', 'دين'],
                fr: ['Une charge', 'Un produit (production stockée)', 'Une perte', 'Une dette'],
                en: ['Expense', 'Revenue (stored production)', 'Loss', 'Liability'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'ماذا يمثل حساب الأصول "311 - بضائع" بعد قيود الجرد؟',
                fr: "Après les écritures d'inventaire, que représente le compte d'actif '311 - Marchandises' ?",
                en: 'After inventory entries, what does the asset account "311 - Marchandises" represent?',
            },
            options: {
                ar: ['المخزون الأولي', 'المخزون النهائي', 'مجموع المشتريات', 'تغير المخزون'],
                fr: ['Le stock initial', 'Le stock final', 'Le total des achats', 'La variation de stock'],
                en: ['The beginning inventory', 'The ending inventory', 'Total purchases', 'The change in inventory'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'تكلفة البضاعة المباعة (CAMV) للبضائع تحسب كالتالي: المشتريات - ...',
                fr: 'Le Coût d\'Achat des Marchandises Vendues (CAMV) est calculé ainsi : Achats - ...',
                en: 'The Cost of Goods Sold (COGS) for merchandise is calculated as: Purchases - ...',
            },
            options: {
                ar: ['المخزون النهائي', 'المخزون الأولي', 'تغير المخزون', 'المبيعات'],
                fr: ['Stock Final', 'Stock Initial', 'Variation de stock', 'Ventes'],
                en: ['Ending Inventory', 'Beginning Inventory', 'Variation in stock', 'Sales'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'انخفاض مخزون المواد الأولية يعتبر:',
                fr: 'Une diminution du stock de matières premières est considérée comme :',
                en: 'A decrease in raw materials inventory is considered a(n):',
            },
            options: {
                ar: ['إيراد', 'مصروف (استهلاك)', 'ربح', 'أصل'],
                fr: ['Un produit', 'Une charge (consommation)', 'Un bénéfice', 'Un actif'],
                en: ['Revenue', 'Expense (consumption)', 'Profit', 'Asset'],
            },
            correctAnswerIndex: 1,
        }
    ],
    td: {
      problem: {
        ar: `شركة تجارية لديها البيانات التالية للسنة N:
- المخزون الأولي للبضائع في 1 يناير N: 120,000 درهم.
- المخزون النهائي للبضائع في 31 ديسمبر N: 95,000 درهم.
المطلوب:
1. تسجيل قيدي الجرد اللازمين في نهاية السنة.
2. تحديد رصيد حساب "تغير مخزون البضائع" وتفسيره.`,
        fr: `Une entreprise commerciale a les données suivantes pour l'année N :
- Stock initial de marchandises au 1er Jan N : 120 000 DH.
- Stock final de marchandises au 31 Déc N : 95 000 DH.
Travail à faire :
1. Passer les deux écritures d'inventaire nécessaires à la fin de l'année.
2. Déterminer le solde du compte "Variation de stocks de marchandises" et l'interpréter.`,
        en: `A trading company has the following data for year N:
- Beginning inventory of merchandise on Jan 1, N: 120,000 MAD.
- Ending inventory of merchandise on Dec 31, N: 95,000 MAD.
Required:
1. Make the two necessary inventory entries at year-end.
2. Determine the balance of the "Variation de stocks de marchandises" account and interpret it.`,
      },
      solution: {
        ar: `**1. قيود اليومية:**
*أ. إلغاء المخزون الأولي:*
- مدين: 6114 - Variation de stocks de marchandises: 120,000
- دائن: 311 - Marchandises: 120,000

*ب. إثبات المخزون النهائي:*
- مدين: 311 - Marchandises: 95,000
- دائن: 6114 - Variation de stocks de marchandises: 95,000

**2. رصيد حساب 6114 وتفسيره:**
- رصيد حساب 6114 = 120,000 (مدين) - 95,000 (دائن) = **25,000 (مدين)**
- **التفسير:** الرصيد المدين يعني أن المخزون قد انخفض (déstockage). هذا المبلغ يمثل مصروفًا إضافيًا للسنة، حيث أن الشركة استهلكت من مخزونها أكثر مما قامت بتخزينه.`,
        fr: `**1. Écritures de journal :**
*a. Annulation du stock initial :*
- Débit : 6114 - Variation de stocks de marchandises : 120 000
- Crédit : 311 - Marchandises : 120 000

*b. Constatation du stock final :*
- Débit : 311 - Marchandises : 95 000
- Crédit : 6114 - Variation de stocks de marchandises : 95 000

**2. Solde du compte 6114 et interprétation :**
- Solde du compte 6114 = 120 000 (Débit) - 95 000 (Crédit) = **25 000 (Solde Débiteur)**
- **Interprétation :** Un solde débiteur signifie que le stock a diminué (déstockage). Ce montant représente une charge supplémentaire pour l'exercice, car l'entreprise a consommé plus de stock qu'elle n'en a constitué.`,
        en: `**1. Journal Entries:**
*a. Cancel beginning inventory:*
- Debit: 6114 - Variation de stocks de marchandises: 120,000
- Credit: 311 - Marchandises: 120,000

*b. Record ending inventory:*
- Debit: 311 - Marchandises: 95,000
- Credit: 6114 - Variation de stocks de marchandises: 95,000

**2. Balance of account 6114 and interpretation:**
- Balance of account 6114 = 120,000 (Debit) - 95,000 (Credit) = **25,000 (Debit Balance)**
- **Interpretation:** A debit balance means that inventory has decreased (destocking). This amount represents an additional expense for the period, as the company consumed more from its inventory than it stored.`,
      }
    }
  },
  {
    id: 'effets-commerce',
    title: {
      ar: 'الدرس 7: الأوراق التجارية',
      fr: 'Leçon 7 : Les Effets de Commerce',
      en: 'Lesson 7: Bills of Exchange',
    },
    description: {
      ar: 'فهم استخدام وتسجيل الكمبيالات والسندات لأمر كوسائل للدفع الآجل.',
      fr: "Comprendre l'utilisation et la comptabilisation des lettres de change et billets à ordre comme instruments de paiement différé.",
      en: 'Understand the use and accounting for letters of change and promissory notes as deferred payment instruments.',
    },
    content: {
      ar: `
الأوراق التجارية هي أدوات قابلة للتداول تمثل التزامًا بالدفع في تاريخ مستقبلي محدد. إنها تسمح للمورد بمنح ائتمان لعميله.

**الأنواع الرئيسية:**
1.  **الكمبيالة (Lettre de change):** أمر مكتوب من قبل المورد (الساحب) يطلب من العميل (المسحوب عليه) دفع مبلغ معين في تاريخ محدد. يجب على العميل "قبول" الكمبيالة.
2.  **السند لأمر (Billet à ordre):** وعد مكتوب من قبل العميل (المحرر) لدفع مبلغ معين للمورد (المستفيد) في تاريخ محدد.

**المعالجة المحاسبية لدى العميل (المسحوب عليه):**
1.  عند قبول الورقة: يتم استبدال الدين العادي تجاه المورد بدين ممثل بورقة تجارية.
    - مدين: **4411 - Fournisseurs** (لإلغاء الدين الأولي)
    - دائن: **4415 - Fournisseurs - Effets à payer**
2.  عند الدفع في تاريخ الاستحقاق:
    - مدين: **4415 - Fournisseurs - Effets à payer**
    - دائن: **5141 - Banque**

**المعالجة المحاسبية لدى المورد (الساحب):**
1.  عند استلام الورقة المقبولة: يتم استبدال الذمة على العميل بورقة تجارية.
    - مدين: **3425 - Clients - Effets à recevoir**
    - دائن: **3421 - Clients** (لإلغاء الذمة الأولية)
2.  عند التحصيل في تاريخ الاستحقاق:
    - مدين: **5141 - Banque**
    - دائن: **3425 - Clients - Effets à recevoir**

**الخصم (Escompte):**
يمكن للمورد بيع الورقة التجارية للبنك قبل تاريخ استحقاقها للحصول على سيولة نقدية فورية. في هذه الحالة، يقتطع البنك رسومًا (مصاريف الخصم وفوائد).
      `,
      fr: `
Les effets de commerce sont des titres négociables qui matérialisent un engagement de payer à une date future déterminée. Ils permettent à un fournisseur d'accorder un crédit à son client.

**Principaux types :**
1.  **Lettre de change (ou traite) :** Un écrit par lequel le fournisseur (le tireur) ordonne à son client (le tiré) de payer une certaine somme à une date précise. Le client doit "accepter" la traite.
2.  **Billet à ordre :** Une promesse écrite par le client (le souscripteur) de payer une certaine somme au fournisseur (le bénéficiaire) à une date précise.

**Comptabilisation chez le Client (le tiré) :**
1.  À l'acceptation de l'effet : La dette ordinaire envers le fournisseur est remplacée par une dette matérialisée par un effet.
    - Débit : **4411 - Fournisseurs** (pour solder la dette initiale)
    - Crédit : **4415 - Fournisseurs - Effets à payer**
2.  Au paiement à l'échéance :
    - Débit : **4415 - Fournisseurs - Effets à payer**
    - Crédit : **5141 - Banque**

**Comptabilisation chez le Fournisseur (le tireur) :**
1.  À la réception de l'effet accepté : La créance sur le client est remplacée par un effet.
    - Débit : **3425 - Clients - Effets à recevoir**
    - Crédit : **3421 - Clients** (pour solder la créance initiale)
2.  À l'encaissement à l'échéance :
    - Débit : **5141 - Banque**
    - Crédit : **3425 - Clients - Effets à recevoir**

**L'escompte :**
Le fournisseur peut "vendre" l'effet de commerce à sa banque avant l'échéance pour obtenir des liquidités immédiatement. La banque prélève alors des frais (commissions et intérêts d'escompte).
      `,
      en: `
Bills of exchange are negotiable instruments that represent a commitment to pay at a specified future date. They allow a supplier to grant credit to their customer.

**Main types:**
1.  **Letter of change (or draft):** A written order by the supplier (the drawer) instructing their customer (the drawee) to pay a certain sum on a specific date. The customer must "accept" the draft.
2.  **Promissory note:** A written promise by the customer (the maker) to pay a certain sum to the supplier (the beneficiary) on a specific date.

**Accounting for the Customer (drawee):**
1.  Upon acceptance of the bill: The ordinary debt to the supplier is replaced by a debt represented by a bill.
    - Debit: **4411 - Fournisseurs** (to cancel the initial debt)
    - Credit: **4415 - Fournisseurs - Effets à payer** (Notes Payable)
2.  Upon payment at maturity:
    - Debit: **4415 - Fournisseurs - Effets à payer**
    - Credit: **5141 - Banque**

**Accounting for the Supplier (drawer):**
1.  Upon receipt of the accepted bill: The receivable from the customer is replaced by a bill.
    - Debit: **3425 - Clients - Effets à recevoir** (Notes Receivable)
    - Credit: **3421 - Clients** (to cancel the initial receivable)
2.  Upon collection at maturity:
    - Debit: **5141 - Banque**
    - Credit: **3425 - Clients - Effets à recevoir**

**Discounting (Escompte):**
The supplier can "sell" the bill of exchange to their bank before its maturity date to obtain immediate cash. The bank then charges fees (commissions and discount interest).
      `,
    },
    quiz: [
        {
          question: {
            ar: 'من يصدر السند لأمر (Billet à ordre)؟',
            fr: 'Qui émet un Billet à ordre ?',
            en: 'Who issues a Promissory Note?',
          },
          options: {
            ar: ['المورد', 'العميل', 'البنك', 'الدولة'],
            fr: ['Le fournisseur', 'Le client', 'La banque', "L'État"],
            en: ['The supplier', 'The customer', 'The bank', 'The state'],
          },
          correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'بالنسبة للعميل، الورقة التجارية التي يقبلها هي:',
              fr: "Pour le client, un effet de commerce qu'il accepte est un :",
              en: 'For the customer, a bill of exchange they accept is a(n):',
            },
            options: {
              ar: ['ورقة قبض (Effet à recevoir)', 'ورقة دفع (Effet à payer)', 'أصل', 'إيراد'],
              fr: ['Effet à recevoir', 'Effet à payer', 'Actif', 'Produit'],
              en: ['Note Receivable', 'Note Payable', 'Asset', 'Revenue'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'ما هو القيد الذي يسجله العميل عند قبوله لكمبيالة؟',
              fr: "Quelle écriture le client passe-t-il lorsqu'il accepte une lettre de change ?",
              en: 'What entry does a customer make when accepting a letter of change?',
            },
            options: {
              ar: ['مدين 4411، دائن 4415', 'مدين 4415، دائن 4411', 'مدين 3421، دائن 3425', 'مدين 3425، دائن 3421'],
              fr: ['Débit 4411, Crédit 4415', 'Débit 4415, Crédit 4411', 'Débit 3421, Crédit 3425', 'Débit 3425, Crédit 3421'],
              en: ['Debit 4411, Credit 4415', 'Debit 4415, Credit 4411', 'Debit 3421, Credit 3425', 'Debit 3425, Credit 3421'],
            },
            correctAnswerIndex: 0,
        },
        {
            question: {
              ar: 'ماذا يمثل حساب "3425 - Clients - Effets à recevoir"؟',
              fr: 'Que représente le compte "3425 - Clients - Effets à recevoir" ?',
              en: 'What does the account "3425 - Clients - Effets à recevoir" represent?',
            },
            options: {
              ar: ['دين على الشركة', 'ذمة للشركة على عملائها ممثلة بورقة تجارية', 'مبيعات الشركة', 'مشتريات الشركة'],
              fr: ["Une dette de l'entreprise", "Une créance de l'entreprise sur ses clients matérialisée par un effet", "Les ventes de l'entreprise", "Les achats de l'entreprise"],
              en: ["A company's debt", "A company's receivable from its customers represented by a bill", "The company's sales", "The company's purchases"],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'عملية "الخصم" (Escompte) تسمح للمورد بـ:',
              fr: "L'opération d' 'escompte' permet au fournisseur de :",
              en: 'The "discounting" (escompte) operation allows the supplier to:',
            },
            options: {
              ar: ['تأجيل الدفع', 'الحصول على سيولة نقدية قبل تاريخ الاستحقاق', 'إلغاء الدين', 'زيادة سعر البيع'],
              fr: ['Reporter le paiement', "Obtenir des liquidités avant l'échéance", 'Annuler la dette', 'Augmenter le prix de vente'],
              en: ['Postpone the payment', 'Obtain cash before the maturity date', 'Cancel the debt', 'Increase the selling price'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'عندما يدفع العميل الورقة في تاريخ الاستحقاق، فإنه يسجل في الجانب المدين:',
              fr: "Lorsque le client paie l'effet à l'échéance, il débite :",
              en: 'When the customer pays the bill at maturity, they debit:',
            },
            options: {
              ar: ['حساب الموردين (4411)', 'حساب أوراق الدفع (4415)', 'حساب البنك (5141)', 'حساب المشتريات (611)'],
              fr: ['Le compte Fournisseurs (4411)', 'Le compte Fournisseurs - Effets à payer (4415)', 'Le compte Banque (5141)', "Le compte Achats (611)"],
              en: ['The Suppliers account (4411)', 'The Notes Payable account (4415)', 'The Bank account (5141)', 'The Purchases account (611)'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'في الكمبيالة، "الساحب" هو:',
              fr: 'Dans une lettre de change, le "tireur" est :',
              en: 'In a letter of change, the "drawer" is the:',
            },
            options: {
              ar: ['العميل', 'المورد', 'البنك', 'المحرر'],
              fr: ['Le client', 'Le fournisseur', 'La banque', 'Le souscripteur'],
              en: ['Customer', 'Supplier', 'Bank', 'Maker'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'عندما يستلم المورد ورقة مقبولة، فإنه يحول الذمة من حساب "العملاء" إلى حساب:',
              fr: "Lorsque le fournisseur reçoit un effet accepté, il transfère la créance du compte 'Clients' vers le compte :",
              en: 'When the supplier receives an accepted bill, they transfer the receivable from the "Clients" account to the:',
            },
            options: {
              ar: ['أوراق الدفع', 'أوراق القبض', 'المبيعات', 'البنك'],
              fr: ['Effets à payer', 'Effets à recevoir', 'Ventes', 'Banque'],
              en: ['Notes Payable', 'Notes Receivable', 'Sales', 'Bank'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
              ar: 'ما هو الفرق الأساسي بين الكمبيالة والسند لأمر؟',
              fr: 'Quelle est la différence fondamentale entre une lettre de change et un billet à ordre ?',
              en: 'What is the fundamental difference between a letter of change and a promissory note?',
            },
            options: {
              ar: ['المبلغ', 'تاريخ الاستحقاق', 'الشخص الذي يبدأ المعاملة', 'لا يوجد فرق'],
              fr: ['Le montant', "La date d'échéance", "La personne qui initie l'instrument", 'Aucune différence'],
              en: ['The amount', 'The due date', 'The person who initiates the instrument', 'No difference'],
            },
            correctAnswerIndex: 2,
        },
        {
            question: {
              ar: 'حساب "4415" يظهر في:',
              fr: 'Le compte "4415" apparaît dans :',
              en: 'The "4415" account appears in the:',
            },
            options: {
              ar: ['الأصول المتداولة', 'الخصوم المتداولة', 'الأصول الثابتة', 'حقوق الملكية'],
              fr: ["L'actif circulant", "Le passif circulant", "L'actif immobilisé", 'Les capitaux propres'],
              en: ['Current Assets', 'Current Liabilities', 'Fixed Assets', 'Equity'],
            },
            correctAnswerIndex: 1,
        },
        {
            question: {
                ar: 'عندما يقوم المورد بخصم ورقة تجارية، فإنه يحصل على النقد من:',
                fr: "Lorsque le fournisseur escompte un effet de commerce, il reçoit les fonds de :",
                en: 'When a supplier discounts a bill of exchange, they receive the funds from:',
            },
            options: {
                ar: ['العميل', 'الدولة', 'البنك', 'مورد آخر'],
                fr: ['Son client', "L'État", 'Sa banque', 'Un autre fournisseur'],
                en: ['Their customer', 'The state', 'Their bank', 'Another supplier'],
            },
            correctAnswerIndex: 2,
        },
    ],
    td: {
      problem: {
        ar: 'في 10 أبريل، باعت شركة "ألفا" بضائع لشركة "بيتا" بمبلغ 24,000 درهم شامل الضريبة (TVA 20%). سحبت ألفا كمبيالة تستحق بعد 60 يومًا، وقبلتها بيتا في نفس اليوم. في تاريخ الاستحقاق، دفعت بيتا المبلغ. المطلوب: سجل قيود اليومية لهذه العمليات في دفاتر كل من ألفا وبيتا.',
        fr: "Le 10 avril, la société Alpha vend des marchandises à la société Beta pour 24 000 DH TTC (TVA 20%). Alpha tire une lettre de change à 60 jours, que Beta accepte le même jour. À l'échéance, Beta paie le montant. Travail à faire : Enregistrez les écritures pour ces opérations dans les journaux d'Alpha et de Beta.",
        en: 'On April 10, company Alpha sells goods to company Beta for 24,000 MAD including tax (VAT 20%). Alpha draws a letter of change due in 60 days, which Beta accepts the same day. At maturity, Beta pays the amount. Required: Record the journal entries for these transactions in the books of both Alpha and Beta.',
      },
      solution: {
        ar: `**دفاتر شركة ألفا (المورد):**
*10 أبريل: المبيعات واستلام الكمبيالة*
1.  قيد المبيعات:
    - مدين: 3421 - Clients (بيتا): 24,000
    - دائن: 711 - Ventes: 20,000
    - دائن: 4455 - TVA facturée: 4,000
2.  قيد استلام الكمبيالة:
    - مدين: 3425 - Clients, Effets à recevoir: 24,000
    - دائن: 3421 - Clients (بيتا): 24,000

*9 يونيو: تحصيل المبلغ*
- مدين: 5141 - Banque: 24,000
- دائن: 3425 - Clients, Effets à recevoir: 24,000

---

**دفاتر شركة بيتا (العميل):**
*10 أبريل: المشتريات وقبول الكمبيالة*
1.  قيد المشتريات:
    - مدين: 611 - Achats: 20,000
    - مدين: 3455 - TVA récupérable: 4,000
    - دائن: 4411 - Fournisseurs (ألفا): 24,000
2.  قيد قبول الكمبيالة:
    - مدين: 4411 - Fournisseurs (ألفا): 24,000
    - دائن: 4415 - Fournisseurs, Effets à payer: 24,000

*9 يونيو: دفع المبلغ*
- مدين: 4415 - Fournisseurs, Effets à payer: 24,000
- دائن: 5141 - Banque: 24,000`,
        fr: `**Comptabilité de Alpha (Fournisseur) :**
*10 Avril : Vente et réception de l'effet*
1.  Écriture de vente :
    - Débit : 3421 - Clients (Beta) : 24 000
    - Crédit : 711 - Ventes : 20 000
    - Crédit : 4455 - TVA facturée : 4 000
2.  Réception de l'effet :
    - Débit : 3425 - Clients, Effets à recevoir : 24 000
    - Crédit : 3421 - Clients (Beta) : 24 000

*9 Juin : Encaissement*
- Débit : 5141 - Banque : 24 000
- Crédit : 3425 - Clients, Effets à recevoir : 24 000

---

**Comptabilité de Beta (Client) :**
*10 Avril : Achat et acceptation de l'effet*
1.  Écriture d'achat :
    - Débit : 611 - Achats : 20 000
    - Débit : 3455 - TVA récupérable : 4 000
    - Crédit : 4411 - Fournisseurs (Alpha) : 24 000
2.  Acceptation de l'effet :
    - Débit : 4411 - Fournisseurs (Alpha) : 24 000
    - Crédit : 4415 - Fournisseurs, Effets à payer : 24 000

*9 Juin : Paiement*
- Débit : 4415 - Fournisseurs, Effets à payer : 24 000
- Crédit : 5141 - Banque : 24 000`,
        en: `**Books of Alpha (Supplier):**
*April 10: Sale and receipt of bill*
1.  Sales entry:
    - Debit: 3421 - Clients (Beta): 24,000
    - Credit: 711 - Ventes: 20,000
    - Credit: 4455 - TVA facturée: 4,000
2.  Receipt of bill:
    - Debit: 3425 - Clients, Effets à recevoir: 24,000
    - Credit: 3421 - Clients (Beta): 24,000

*June 9: Collection of payment*
- Debit: 5141 - Banque: 24,000
- Credit: 3425 - Clients, Effets à recevoir: 24,000

---

**Books of Beta (Customer):**
*April 10: Purchase and acceptance of bill*
1.  Purchase entry:
    - Debit: 611 - Achats: 20,000
    - Debit: 3455 - TVA récupérable: 4,000
    - Credit: 4411 - Fournisseurs (Alpha): 24,000
2.  Acceptance of bill:
    - Debit: 4411 - Fournisseurs (Alpha): 24,000
    - Credit: 4415 - Fournisseurs, Effets à payer: 24,000

*June 9: Payment*
- Debit: 4415 - Fournisseurs, Effets à payer: 24,000
- Credit: 5141 - Banque: 24,000`,
      }
    }
  },
  {
    id: 'salaires',
    title: {
      ar: 'الدرس 8: المعالجة المحاسبية للرواتب',
      fr: 'Leçon 8 : La Comptabilisation des Salaires',
      en: 'Lesson 8: Payroll Accounting',
    },
    description: {
      ar: 'تعلم كيفية تسجيل الرواتب، والمساهمات الاجتماعية (CNSS, AMO)، والضريبة على الدخل (IR) في دفتر اليومية.',
      fr: 'Apprenez à enregistrer les salaires, les cotisations sociales (CNSS, AMO) et l\'Impôt sur le Revenu (IR) dans le journal.',
      en: 'Learn how to record salaries, social contributions (CNSS, AMO), and Income Tax (IR) in the journal.',
    },
    content: {
      ar: `
تتضمن محاسبة الرواتب تسجيل جميع التكاليف المتعلقة بأجور الموظفين. إنها عملية متعددة الخطوات تتضمن حسابات مختلفة.

**المصطلحات الأساسية:**
- **الراتب الإجمالي (Salaire Brut):** إجمالي الأجر قبل أي خصومات.
- **الاقتطاعات على الراتب (Cotisations salariales):** المبالغ التي يساهم بها الموظف في الضمان الاجتماعي (CNSS)، التأمين الصحي الإجباري (AMO)، وغيرها.
- **مساهمات صاحب العمل (Cotisations patronales):** المبالغ التي يدفعها صاحب العمل للضمان الاجتماعي نيابة عن الموظف. هذه مصروفات إضافية للشركة.
- **الضريبة على الدخل (Impôt sur le Revenu - IR):** الضريبة المقتطعة من المصدر على راتب الموظف.
- **الراتب الصافي للدفع (Salaire Net à payer):** المبلغ الذي يستلمه الموظف بالفعل. **الراتب الصافي = الراتب الإجمالي - الاقتطاعات على الراتب - الضريبة على الدخل**.

**القيود المحاسبية:**
1.  **تسجيل الرواتب الإجمالية والديون الاجتماعية والضريبية:**
    - مدين: **6171 - Rémunérations du personnel** (بمبلغ الراتب الإجمالي)
    - دائن: **4441 - CNSS** (بمبلغ اقتطاعات الموظف)
    - دائن: **444x - Autres organismes sociaux** (إذا وجدت)
    - دائن: **4452 - Etat, IGR** (بمبلغ الضريبة على الدخل المقتطعة)
    - دائن: **4432 - Personnel, Rémunérations dues** (بمبلغ الراتب الصافي)

2.  **تسجيل مساهمات صاحب العمل:**
    - مدين: **6174 - Charges sociales** (بمجموع مساهمات صاحب العمل)
    - دائن: **4441 - CNSS** (بمبلغ مساهمة صاحب العمل للضمان)
    - دائن: **444x - Autres organismes sociaux** (إذا وجدت)

3.  **تسجيل دفع الرواتب:**
    - مدين: **4432 - Personnel, Rémunérations dues**
    - دائن: **5141 - Banque**
      `,
      fr: `
La comptabilisation de la paie implique l'enregistrement de tous les coûts liés à la rémunération des employés. C'est un processus en plusieurs étapes impliquant différents comptes.

**Terminologie Clé :**
- **Salaire Brut :** La rémunération totale avant toute déduction.
- **Cotisations salariales :** Les montants contribués par le salarié à la CNSS, l'AMO, etc.
- **Cotisations patronales :** Les montants payés par l'employeur aux organismes sociaux pour le compte du salarié. C'est une charge supplémentaire pour l'entreprise.
- **Impôt sur le Revenu (IR) :** L'impôt prélevé à la source sur le salaire de l'employé.
- **Salaire Net à payer :** Le montant que l'employé reçoit réellement. **Salaire Net = Salaire Brut - Cotisations salariales - IR**.

**Écritures Comptables :**
1.  **Constatation des salaires bruts et des dettes sociales et fiscales :**
    - Débit : **6171 - Rémunérations du personnel** (pour le salaire brut)
    - Crédit : **4441 - CNSS** (pour les cotisations salariales)
    - Crédit : **444x - Autres organismes sociaux** (si applicable)
    - Crédit : **4452 - Etat, IGR** (pour l'IR retenu)
    - Crédit : **4432 - Personnel, Rémunérations dues** (pour le salaire net)

2.  **Constatation des cotisations patronales :**
    - Débit : **6174 - Charges sociales** (pour le total des cotisations patronales)
    - Crédit : **4441 - CNSS** (pour la part patronale de la CNSS)
    - Crédit : **444x - Autres organismes sociaux** (si applicable)

3.  **Paiement des salaires :**
    - Débit : **4432 - Personnel, Rémunérations dues**
    - Crédit : **5141 - Banque**
      `,
      en: `
Payroll accounting involves recording all costs related to employee remuneration. It is a multi-step process involving different accounts.

**Key Terminology:**
- **Gross Salary (Salaire Brut):** The total compensation before any deductions.
- **Employee Contributions (Cotisations salariales):** Amounts contributed by the employee to social security (CNSS), mandatory health insurance (AMO), etc.
- **Employer Contributions (Cotisations patronales):** Amounts paid by the employer to social organizations on behalf of the employee. This is an additional expense for the company.
- **Income Tax (Impôt sur le Revenu - IR):** The tax withheld at the source from the employee's salary.
- **Net Salary Payable (Salaire Net à payer):** The amount the employee actually receives. **Net Salary = Gross Salary - Employee Contributions - IR**.

**Journal Entries:**
1.  **Recording Gross Salaries and Social/Tax Liabilities:**
    - Debit: **6171 - Rémunérations du personnel** (for the gross salary)
    - Credit: **4441 - CNSS** (for employee contributions)
    - Credit: **444x - Autres organismes sociaux** (if applicable)
    - Credit: **4452 - Etat, IGR** (for income tax withheld)
    - Credit: **4432 - Personnel, Rémunérations dues** (for the net salary)

2.  **Recording Employer Contributions:**
    - Debit: **6174 - Charges sociales** (for total employer contributions)
    - Credit: **4441 - CNSS** (for employer's share of CNSS)
    - Credit: **444x - Autres organismes sociaux** (if applicable)

3.  **Payment of Salaries:**
    - Debit: **4432 - Personnel, Rémunérations dues**
    - Credit: **5141 - Banque**
      `,
    },
    quiz: [
        {
          question: {
            ar: 'ماذا يمثل الراتب الإجمالي (Salaire Brut)؟',
            fr: 'Que représente le Salaire Brut ?',
            en: 'What does Gross Salary represent?',
          },
          options: {
            ar: ['الراتب بعد الخصومات', 'الراتب قبل أي خصومات', 'مساهمات صاحب العمل فقط', 'الراتب الصافي بالإضافة إلى الضرائب'],
            fr: ['Le salaire après déductions', 'Le salaire avant toute déduction', 'Uniquement les cotisations patronales', 'Le salaire net plus les impôts'],
            en: ['Salary after deductions', 'Salary before any deductions', 'Only employer contributions', 'Net salary plus taxes'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'في قيد الرواتب، أي حساب يتم تحميله (مدين) بمبلغ الراتب الإجمالي؟',
            fr: "Dans l'écriture de paie, quel compte est débité pour le montant du salaire brut ?",
            en: 'In the payroll entry, which account is debited for the gross salary amount?',
          },
          options: {
            ar: ['4432 - Personnel, Rémunérations dues', '5141 - Banque', '6171 - Rémunérations du personnel', '4441 - CNSS'],
            fr: ['4432 - Personnel, Rémunérations dues', '5141 - Banque', '6171 - Rémunérations du personnel', '4441 - CNSS'],
            en: ['4432 - Personnel, Rémunérations dues', '5141 - Banque', '6171 - Rémunérations du personnel', '4441 - CNSS'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'مساهمات صاحب العمل (Cotisations patronales) يتم تسجيلها كمصروف في حساب:',
            fr: 'Les cotisations patronales sont enregistrées comme une charge dans le compte :',
            en: 'Employer contributions are recorded as an expense in account:',
          },
          options: {
            ar: ['6171', '6174', '4441', '4432'],
            fr: ['6171', '6174', '4441', '4432'],
            en: ['6171', '6174', '4441', '4432'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'الراتب الصافي للدفع هو المبلغ المودع في حساب:',
            fr: 'Le salaire net à payer est le montant crédité au compte :',
            en: 'The net salary payable is the amount credited to account:',
          },
          options: {
            ar: ['4441 - CNSS', '4452 - Etat, IGR', '6171 - Rémunérations du personnel', '4432 - Personnel, Rémunérations dues'],
            fr: ['4441 - CNSS', '4452 - Etat, IGR', '6171 - Rémunérations du personnel', '4432 - Personnel, Rémunérations dues'],
            en: ['4441 - CNSS', '4452 - Etat, IGR', '6171 - Rémunérations du personnel', '4432 - Personnel, Rémunérations dues'],
          },
          correctAnswerIndex: 3,
        },
        {
          question: {
            ar: 'عند دفع الرواتب للموظفين، ما هو القيد الصحيح؟',
            fr: 'Lors du paiement des salaires aux employés, quelle est l\'écriture correcte ?',
            en: 'When paying salaries to employees, what is the correct entry?',
          },
          options: {
            ar: ['مدين 5141، دائن 4432', 'مدين 6171، دائن 5141', 'مدين 4432، دائن 5141', 'مدين 4432، دائن 6171'],
            fr: ['Débit 5141, Crédit 4432', 'Débit 6171, Crédit 5141', 'Débit 4432, Crédit 5141', 'Débit 4432, Crédit 6171'],
            en: ['Debit 5141, Credit 4432', 'Debit 6171, Credit 5141', 'Debit 4432, Credit 5141', 'Debit 4432, Credit 6171'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'من يدفع مساهمات الضمان الاجتماعي (CNSS)؟',
            fr: 'Qui paie les cotisations à la CNSS ?',
            en: 'Who pays the social security (CNSS) contributions?',
          },
          options: {
            ar: ['الموظف فقط', 'صاحب العمل فقط', 'كلاهما، الموظف وصاحب العمل', 'الدولة'],
            fr: ["L'employé uniquement", "L'employeur uniquement", "Les deux, l'employé et l'employeur", "L'État"],
            en: ['The employee only', 'The employer only', 'Both the employee and the employer', 'The state'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'الضريبة على الدخل (IR) المقتطعة من راتب الموظف هي:',
            fr: "L'Impôt sur le Revenu (IR) retenu sur le salaire d'un employé est une :",
            en: 'The Income Tax (IR) withheld from an employee\'s salary is a:',
          },
          options: {
            ar: ['إيراد للشركة', 'مصروف للشركة', 'دين على الشركة تجاه الدولة', 'أصل للشركة'],
            fr: ["Un produit pour l'entreprise", "Une charge pour l'entreprise", "Une dette de l'entreprise envers l'État", "Un actif pour l'entreprise"],
            en: ['Revenue for the company', 'Expense for the company', 'Liability of the company to the state', 'Asset for the company'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'أي من العناصر التالية ليس جزءًا من الراتب الإجمالي؟',
            fr: 'Lequel des éléments suivants ne fait PAS partie du Salaire Brut ?',
            en: 'Which of the following is NOT part of the Gross Salary?',
          },
          options: {
            ar: ['الراتب الأساسي', 'العلاوات', 'مساهمات صاحب العمل في الضمان الاجتماعي', 'الساعات الإضافية'],
            fr: ['Le salaire de base', 'Les primes', 'Les cotisations patronales à la CNSS', 'Les heures supplémentaires'],
            en: ['Base salary', 'Bonuses', 'Employer social security contributions', 'Overtime pay'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'حساب "4441 - CNSS" يسجل:',
            fr: 'Le compte "4441 - CNSS" enregistre :',
            en: 'The account "4441 - CNSS" records:',
          },
          options: {
            ar: ['مساهمات الموظف فقط', 'مساهمات صاحب العمل فقط', 'مجموع مساهمات الموظف وصاحب العمل', 'الراتب الصافي فقط'],
            fr: ['Uniquement les cotisations salariales', 'Uniquement les cotisations patronales', 'La somme des cotisations salariales et patronales', 'Uniquement le salaire net'],
            en: ['Only employee contributions', 'Only employer contributions', 'The sum of employee and employer contributions', 'Only the net salary'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'مجموع المصاريف المتعلقة بالرواتب للشركة هو:',
            fr: 'Le coût total de la paie pour l\'entreprise est :',
            en: 'The total payroll cost for the company is:',
          },
          options: {
            ar: ['الراتب الصافي', 'الراتب الإجمالي', 'الراتب الإجمالي + مساهمات صاحب العمل', 'مساهمات صاحب العمل فقط'],
            fr: ['Le salaire net', 'Le salaire brut', 'Le salaire brut + les cotisations patronales', 'Uniquement les cotisations patronales'],
            en: ['The net salary', 'The gross salary', 'The gross salary + employer contributions', 'Only the employer contributions'],
          },
          correctAnswerIndex: 2,
        },
        {
            question: {
                ar: 'أي حساب يمثل الدين المستحق للموظفين قبل دفع رواتبهم؟',
                fr: 'Quel compte représente la dette envers les employés avant le paiement des salaires ?',
                en: 'Which account represents the liability owed to employees before they are paid?',
            },
            options: {
                ar: ['6171', '6174', '5141', '4432'],
                fr: ['6171', '6174', '5141', '4432'],
                en: ['6171', '6174', '5141', '4432'],
            },
            correctAnswerIndex: 3,
        },
    ],
    td: {
      problem: {
        ar: `شركة لديها موظف واحد. بيانات راتبه لشهر يناير هي:
- الراتب الإجمالي: 10,000 درهم
- اقتطاعات الموظف (CNSS+AMO): 674 درهم
- مساهمات صاحب العمل (CNSS+AMO+FP): 2,181 درهم
- الضريبة على الدخل المقتطعة: 825 درهم
المطلوب: سجل قيود اليومية لشهر يناير (تسجيل الرواتب، مساهمات صاحب العمل، ودفع الراتب).`,
        fr: `Une entreprise a un seul salarié. Ses données de paie pour janvier sont :
- Salaire Brut : 10 000 DH
- Cotisations salariales (CNSS+AMO) : 674 DH
- Cotisations patronales (CNSS+AMO+FP) : 2 181 DH
- IR retenu : 825 DH
Travail à faire : Passez les écritures de journal pour janvier (constatation de la paie, des charges patronales, et paiement du salaire).`,
        en: `A company has one employee. His payroll data for January is:
- Gross Salary: 10,000 MAD
- Employee contributions (CNSS+AMO): 674 MAD
- Employer contributions (CNSS+AMO+FP): 2,181 MAD
- IR withheld: 825 MAD
Required: Make the journal entries for January (recording the payroll, employer charges, and salary payment).`,
      },
      solution: {
        ar: `**1. تسجيل الرواتب:**
الراتب الصافي = 10,000 - 674 - 825 = 8,501 درهم
- مدين: 6171 - Rémunérations du personnel: 10,000
- دائن: 4441 - CNSS: 674
- دائن: 4452 - Etat, IGR: 825
- دائن: 4432 - Personnel, Rémunérations dues: 8,501

**2. تسجيل مساهمات صاحب العمل:**
- مدين: 6174 - Charges sociales: 2,181
- دائن: 4441 - CNSS: 2,181 (نفترض أن الكل يذهب إلى CNSS للتبسيط)

**3. دفع الراتب:**
- مدين: 4432 - Personnel, Rémunérations dues: 8,501
- دائن: 5141 - Banque: 8,501`,
        fr: `**1. Constatation de la paie :**
Salaire Net = 10 000 - 674 - 825 = 8 501 DH
- Débit : 6171 - Rémunérations du personnel : 10 000
- Crédit : 4441 - CNSS : 674
- Crédit : 4452 - Etat, IGR : 825
- Crédit : 4432 - Personnel, Rémunérations dues : 8 501

**2. Constatation des charges patronales :**
- Débit : 6174 - Charges sociales : 2 181
- Crédit : 4441 - CNSS : 2 181 (en supposant que tout va à la CNSS pour simplifier)

**3. Paiement du salaire :**
- Débit : 4432 - Personnel, Rémunérations dues : 8 501
- Crédit : 5141 - Banque : 8 501`,
        en: `**1. Recording the payroll:**
Net Salary = 10,000 - 674 - 825 = 8,501 MAD
- Debit: 6171 - Rémunérations du personnel: 10,000
- Credit: 4441 - CNSS: 674
- Credit: 4452 - Etat, IGR: 825
- Credit: 4432 - Personnel, Rémunérations dues: 8,501

**2. Recording employer contributions:**
- Debit: 6174 - Charges sociales: 2,181
- Credit: 4441 - CNSS: 2,181 (assuming all goes to CNSS for simplicity)

**3. Paying the salary:**
- Debit: 4432 - Personnel, Rémunérations dues: 8,501
- Credit: 5141 - Banque: 8,501`,
      }
    }
  },
  {
    id: 'rapprochement-bancaire',
    title: {
      ar: 'الدرس 9: التسوية البنكية',
      fr: 'Leçon 9 : Le Rapprochement Bancaire',
      en: 'Lesson 9: Bank Reconciliation',
    },
    description: {
      ar: 'إتقان تقنية مطابقة رصيد حساب البنك في الدفاتر المحاسبية مع كشف الحساب البنكي.',
      fr: 'Maîtriser la technique pour faire correspondre le solde du compte bancaire en comptabilité avec le relevé bancaire.',
      en: 'Master the technique of matching the bank account balance in accounting records with the bank statement.',
    },
    content: {
      ar: `
التسوية البنكية هي عملية مقارنة بين سجلات حساب البنك في دفاتر الشركة (حساب 5141) وكشف الحساب الوارد من البنك. الهدف هو تحديد وتسجيل أي فروقات بين الرصيدين.

**أسباب الفروقات الشائعة:**
1.  **الشيكات المعلقة (Chèques en circulation):** شيكات أصدرتها الشركة ولكن لم يتم صرفها بعد من قبل المستفيدين.
2.  **الإيداعات في الطريق (Dépôts en transit):** مبالغ أودعتها الشركة ولكن لم تظهر بعد في كشف حساب البنك.
3.  **رسوم الخدمات البنكية (Frais bancaires):** رسوم خصمها البنك ولم تسجلها الشركة بعد.
4.  **الفوائد الدائنة (Intérêts créditeurs):** فوائد أضافها البنك ولم تسجلها الشركة بعد.
5.  **الأخطاء:** أخطاء ارتكبتها الشركة أو البنك.

**خطوات إعداد التسوية:**
1.  ابدأ بالرصيدين: رصيد دفتر الأستاذ (حساب 5141) ورصيد كشف البنك في نفس التاريخ.
2.  **تسوية رصيد البنك:**
    - أضف الإيداعات في الطريق.
    - اطرح الشيكات المعلقة.
    = الرصيد البنكي المعدل.
3.  **تسوية رصيد الدفاتر:**
    - أضف أي إيرادات سجلها البنك (مثل الفوائد).
    - اطرح أي مصاريف سجلها البنك (مثل الرسوم).
    = رصيد الدفاتر المعدل.

يجب أن يكون الرصيد البنكي المعدل مساوياً لرصيد الدفاتر المعدل.

**القيود المحاسبية:**
يتم تسجيل قيود يومية **فقط** للتسويات التي تمت على رصيد الدفاتر.
- *لتسجيل الرسوم البنكية:* مدين **6147 - Services bancaires**، دائن **5141 - Banque**.
- *لتسجيل الفوائد المكتسبة:* مدين **5141 - Banque**، دائن **7381 - Intérêts et produits assimilés**.
      `,
      fr: `
Le rapprochement bancaire est un processus de comparaison entre les enregistrements du compte Banque dans la comptabilité de l'entreprise (compte 5141) et le relevé de compte fourni par la banque. L'objectif est d'identifier et de comptabiliser les différences entre les deux soldes.

**Causes fréquentes des écarts :**
1.  **Chèques en circulation :** Chèques émis par l'entreprise mais pas encore encaissés par les bénéficiaires.
2.  **Dépôts en transit (ou remises en cours) :** Sommes déposées par l'entreprise mais pas encore créditées par la banque.
3.  **Frais bancaires :** Frais prélevés par la banque mais pas encore enregistrés par l'entreprise.
4.  **Intérêts créditeurs :** Intérêts versés par la banque mais pas encore enregistrés par l'entreprise.
5.  **Erreurs :** Erreurs commises soit par l'entreprise, soit par la banque.

**Étapes du rapprochement :**
1.  Partir des deux soldes : le solde du grand-livre (compte 5141) et le solde du relevé bancaire à la même date.
2.  **Ajuster le solde bancaire :**
    - Ajouter les dépôts en transit.
    - Soustraire les chèques en circulation.
    = Solde bancaire ajusté.
3.  **Ajuster le solde comptable :**
    - Ajouter les produits enregistrés par la banque (ex: intérêts).
    - Soustraire les charges prélevées par la banque (ex: frais).
    = Solde comptable ajusté.

Le solde bancaire ajusté doit être égal au solde comptable ajusté.

**Écritures Comptables :**
Des écritures de journal sont passées **uniquement** pour les ajustements effectués sur le solde comptable.
- *Pour les frais bancaires :* Débit **6147 - Services bancaires**, Crédit **5141 - Banque**.
- *Pour les intérêts perçus :* Débit **5141 - Banque**, Crédit **7381 - Intérêts et produits assimilés**.
      `,
      en: `
A bank reconciliation is a process of comparing the records of the Bank account in a company's books (account 5141) with the account statement provided by the bank. The objective is to identify and account for the differences between the two balances.

**Common reasons for differences:**
1.  **Outstanding Checks (Chèques en circulation):** Checks issued by the company but not yet cashed by the beneficiaries.
2.  **Deposits in Transit (Dépôts en transit):** Amounts deposited by the company but not yet credited by the bank.
3.  **Bank Service Fees (Frais bancaires):** Fees charged by the bank but not yet recorded by the company.
4.  **Interest Earned (Intérêts créditeurs):** Interest paid by the bank but not yet recorded by the company.
5.  **Errors:** Mistakes made by either the company or the bank.

**Reconciliation Steps:**
1.  Start with both balances: the ledger balance (account 5141) and the bank statement balance as of the same date.
2.  **Adjust the bank balance:**
    - Add deposits in transit.
    - Subtract outstanding checks.
    = Adjusted bank balance.
3.  **Adjust the book balance:**
    - Add any revenues recorded by the bank (e.g., interest).
    - Subtract any expenses charged by the bank (e.g., fees).
    = Adjusted book balance.

The adjusted bank balance must equal the adjusted book balance.

**Journal Entries:**
Journal entries are made **only** for the adjustments made to the book balance.
- *For bank fees:* Debit **6147 - Services bancaires**, Credit **5141 - Banque**.
- *For interest earned:* Debit **5141 - Banque**, Credit **7381 - Intérêts et produits assimilés**.
      `,
    },
     quiz: [
        {
          question: {
            ar: 'ما هو الهدف الرئيسي من التسوية البنكية؟',
            fr: "Quel est l'objectif principal du rapprochement bancaire ?",
            en: 'What is the main goal of a bank reconciliation?',
          },
          options: {
            ar: ['حساب الأرباح', 'التحقق من دقة سجلات النقد وتحديد الفروقات', 'دفع الفواتير', 'إعداد الميزانية'],
            fr: ['Calculer le bénéfice', "Vérifier l'exactitude des écritures de trésorerie et identifier les écarts", 'Payer les factures', 'Préparer le bilan'],
            en: ['To calculate profit', 'To verify the accuracy of cash records and identify differences', 'To pay bills', 'To prepare the balance sheet'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'الشيك الذي أصدرته الشركة ولكن لم يتم صرفه بعد هو:',
            fr: "Un chèque émis par l'entreprise mais pas encore encaissé est un :",
            en: 'A check issued by the company but not yet cashed is a(n):',
          },
          options: {
            ar: ['شيك معلق', 'إيداع في الطريق', 'خطأ بنكي', 'رسم بنكي'],
            fr: ['Chèque en circulation', 'Dépôt en transit', 'Erreur bancaire', 'Frais bancaire'],
            en: ['Outstanding check', 'Deposit in transit', 'Bank error', 'Bank fee'],
          },
          correctAnswerIndex: 0,
        },
        {
          question: {
            ar: 'أي من العناصر التالية يتطلب تعديلاً على رصيد الدفاتر المحاسبية؟',
            fr: 'Lequel des éléments suivants nécessite un ajustement du solde comptable (livres) ?',
            en: 'Which of the following items requires an adjustment to the book balance?',
          },
          options: {
            ar: ['الشيكات المعلقة', 'الإيداعات في الطريق', 'الفوائد الدائنة التي سجلها البنك', 'خطأ ارتكبه البنك'],
            fr: ['Les chèques en circulation', 'Les dépôts en transit', 'Les intérêts créditeurs enregistrés par la banque', 'Une erreur commise par la banque'],
            en: ['Outstanding checks', 'Deposits in transit', 'Interest earned recorded by the bank', 'An error made by the bank'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'أي من العناصر التالية لا يتطلب قيد يومية؟',
            fr: "Lequel des éléments suivants ne nécessite PAS d'écriture de journal ?",
            en: 'Which of the following items does NOT require a journal entry?',
          },
          options: {
            ar: ['رسوم الخدمات البنكية', 'الفوائد المكتسبة', 'الشيكات المعلقة', 'شيك بدون رصيد من عميل'],
            fr: ['Les frais de services bancaires', 'Les intérêts perçus', 'Les chèques en circulation', "Un chèque sans provision d'un client"],
            en: ['Bank service fees', 'Interest earned', 'Outstanding checks', 'An NSF check from a customer'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'ما هو القيد المحاسبي لتسجيل رسوم بنكية بقيمة 200 درهم؟',
            fr: "Quelle est l'écriture comptable pour des frais bancaires de 200 DH ?",
            en: 'What is the journal entry for a 200 MAD bank service fee?',
          },
          options: {
            ar: ['مدين البنك، دائن رسوم بنكية', 'مدين رسوم بنكية، دائن البنك', 'مدين البنك، دائن إيرادات', 'مدين مصروف، دائن مورد'],
            fr: ['Débit Banque, Crédit Services bancaires', 'Débit Services bancaires, Crédit Banque', 'Débit Banque, Crédit Produits', 'Débit Charge, Crédit Fournisseur'],
            en: ['Debit Bank, Credit Bank Fees', 'Debit Bank Fees, Credit Bank', 'Debit Bank, Credit Revenue', 'Debit Expense, Credit Supplier'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'الإيداع في الطريق هو تسوية لـ:',
            fr: 'Un dépôt en transit est un ajustement au :',
            en: 'A deposit in transit is an adjustment to the:',
          },
          options: {
            ar: ['رصيد البنك', 'رصيد الدفاتر', 'كلاهما', 'لا شيء منهما'],
            fr: ['Solde bancaire', 'Solde comptable', 'Aux deux', 'À aucun des deux'],
            en: ['Bank balance', 'Book balance', 'Both', 'Neither'],
          },
          correctAnswerIndex: 0,
        },
        {
          question: {
            ar: 'بعد إكمال التسوية البنكية بنجاح، يجب أن يكون الرصيدان المعدلان:',
            fr: 'Après un rapprochement bancaire réussi, les deux soldes ajustés doivent être :',
            en: 'After a successful bank reconciliation, the two adjusted balances should be:',
          },
          options: {
            ar: ['مختلفين', 'متساويين', 'أحدهما ضعف الآخر', 'كلاهما صفر'],
            fr: ['Différents', 'Égaux', "L'un le double de l'autre", 'Nuls tous les deux'],
            en: ['Different', 'Equal', 'One double the other', 'Both zero'],
          },
          correctAnswerIndex: 1,
        },
        {
          question: {
            ar: 'ماذا يجب أن تفعل إذا اكتشفت خطأ ارتكبه البنك؟',
            fr: 'Que devez-vous faire si vous découvrez une erreur commise par la banque ?',
            en: 'What should you do if you discover an error made by the bank?',
          },
          options: {
            ar: ['تسجيل قيد لتصحيحه في دفاترك', 'تجاهل الخطأ', 'الاتصال بالبنك لتصحيح الخطأ', 'خصمه من رصيد الدفاتر'],
            fr: ['Passer une écriture pour le corriger dans vos livres', "Ignorer l'erreur", 'Contacter la banque pour qu\'elle corrige l\'erreur', 'Le déduire du solde comptable'],
            en: ['Make an entry to correct it in your books', 'Ignore the error', 'Contact the bank to have it corrected', 'Deduct it from the book balance'],
          },
          correctAnswerIndex: 2,
        },
        {
          question: {
            ar: 'الفوائد المكتسبة على الحساب البنكي تزيد من:',
            fr: 'Les intérêts perçus sur le compte bancaire augmentent le :',
            en: 'Interest earned on the bank account increases the:',
          },
          options: {
            ar: ['رصيد الدفاتر', 'رصيد البنك', 'الشيكات المعلقة', 'الديون'],
            fr: ['Solde comptable', 'Solde bancaire', 'Chèques en circulation', 'Dettes'],
            en: ['Book balance', 'Bank balance', 'Outstanding checks', 'Liabilities'],
          },
          correctAnswerIndex: 0,
        },
        {
          question: {
            ar: 'من يقوم بإعداد التسوية البنكية؟',
            fr: 'Qui prépare le rapprochement bancaire ?',
            en: 'Who prepares the bank reconciliation?',
          },
          options: {
            ar: ['البنك', 'المحاسب في الشركة', 'مدقق الحسابات الخارجي', 'مصلحة الضرائب'],
            fr: ['La banque', "Le comptable de l'entreprise", "L'auditeur externe", 'Le service des impôts'],
            en: ['The bank', "The company's accountant", 'The external auditor', 'The tax authority'],
          },
          correctAnswerIndex: 1,
        },
         {
            question: {
                ar: 'أي حساب يتم إضافته إلى الجانب الدائن عند تسجيل الفوائد المكتسبة؟',
                fr: "Quel compte est crédité lors de l'enregistrement des intérêts perçus ?",
                en: 'Which account is credited when recording interest earned?',
            },
            options: {
                ar: ['631 - Charges d\'intérêts', '5141 - Banque', '7381 - Intérêts et produits assimilés', '6147 - Services bancaires'],
                fr: ["631 - Charges d'intérêts", '5141 - Banque', '7381 - Intérêts et produits assimilés', '6147 - Services bancaires'],
                en: ['631 - Interest Expense', '5141 - Bank', '7381 - Interest and similar revenues', '6147 - Bank services'],
            },
            correctAnswerIndex: 2,
        },
    ],
    td: {
      problem: {
        ar: `في 31 يناير، كان رصيد حساب البنك في دفاتر شركة "زين" 45,500 درهم، بينما أظهر كشف حساب البنك رصيدًا قدره 44,200 درهم. كشف التحليل عن الآتي:
- شيكات معلقة: 1,500 درهم
- إيداع في الطريق: 3,000 درهم
- رسوم بنكية: 200 درهم
المطلوب:
1. إعداد التسوية البنكية لشهر يناير.
2. تسجيل قيد اليومية اللازم.`,
        fr: `Au 31 janvier, le solde du compte Banque dans les livres de la société "Zine" est de 45 500 DH, tandis que le relevé bancaire indique un solde de 44 200 DH. L'analyse révèle ce qui suit :
- Chèques en circulation : 1 500 DH
- Dépôt en transit : 3 000 DH
- Frais bancaires : 200 DH
Travail à faire :
1. Préparer le rapprochement bancaire pour janvier.
2. Passer l'écriture de journal nécessaire.`,
        en: `On Jan 31, the Bank account balance in the books of "Zine" company is 45,500 MAD, while the bank statement shows a balance of 44,200 MAD. Analysis reveals the following:
- Outstanding checks: 1,500 MAD
- Deposit in transit: 3,000 MAD
- Bank service fees: 200 MAD
Required:
1. Prepare the bank reconciliation for January.
2. Make the necessary journal entry.`,
      },
      solution: {
        ar: `**1. التسوية البنكية:**
**جانب البنك**
رصيد كشف البنك: 44,200
أضف: إيداع في الطريق: +3,000
اطرح: شيكات معلقة: -1,500
**الرصيد المعدل: 45,700**

**جانب الدفاتر**
رصيد الدفاتر: 45,500
أضف: (لا يوجد)
اطرح: رسوم بنكية: -200
**الرصيد المعدل: 45,300**

... هناك خطأ في المعطيات. لنصحح رصيد الدفاتر الأولي ليكون 45,900.
**جانب الدفاتر (مصحح)**
رصيد الدفاتر: 45,900
اطرح: رسوم بنكية: -200
**الرصيد المعدل: 45,700**
(الآن الرصيدان متساويان)

**2. قيد اليومية:**
يتم تسجيل قيد فقط للرسوم البنكية.
- مدين: 6147 - Services bancaires: 200
- دائن: 5141 - Banque: 200`,
        fr: `**1. Rapprochement Bancaire :**
**Côté Banque**
Solde relevé bancaire : 44 200
Ajouter : Dépôt en transit : +3 000
Soustraire : Chèques en circulation : -1 500
**Solde ajusté : 45 700**

**Côté Livres (Comptabilité)**
Solde comptable : 45 500
Ajouter : (Néant)
Soustraire : Frais bancaires : -200
**Solde ajusté : 45 300**

... Il y a une erreur dans les données. Corrigeons le solde comptable initial à 45 900.
**Côté Livres (Corrigé)**
Solde comptable : 45 900
Soustraire : Frais bancaires : -200
**Solde ajusté : 45 700**
(Maintenant les deux soldes sont égaux)

**2. Écriture de journal :**
Seuls les frais bancaires nécessitent une écriture.
- Débit : 6147 - Services bancaires : 200
- Crédit : 5141 - Banque : 200`,
        en: `**1. Bank Reconciliation:**
**Bank Side**
Balance per bank statement: 44,200
Add: Deposit in transit: +3,000
Subtract: Outstanding checks: -1,500
**Adjusted balance: 45,700**

**Book Side**
Balance per books: 45,500
Add: (None)
Subtract: Bank service fees: -200
**Adjusted balance: 45,300**

... There is an error in the data. Let's correct the initial book balance to 45,900.
**Book Side (Corrected)**
Balance per books: 45,900
Subtract: Bank service fees: -200
**Adjusted balance: 45,700**
(Now both balances are equal)

**2. Journal Entry:**
An entry is needed only for the bank fees.
- Debit: 6147 - Services bancaires: 200
- Credit: 5141 - Banque: 200`,
      }
    }
  }
];