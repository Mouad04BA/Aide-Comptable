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
  },
];
