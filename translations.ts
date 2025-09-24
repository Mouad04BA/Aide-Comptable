import { Language } from './types';

type Translations = {
  [key: string]: Record<Language, string>;
};

export const translations: Translations = {
  // Header
  appName: {
    ar: "الــمــحــاســب",
    fr: "Le Comptable",
    en: "The Accountant",
  },
  navHome: {
    ar: "الرئيسية",
    fr: "Accueil",
    en: "Home",
  },
  navCourses: {
    ar: "الدروس",
    fr: "Cours",
    en: "Courses",
  },
  navSimulator: {
    ar: "المحاكي",
    fr: "Simulateur",
    en: "Simulator",
  },
  navChartOfAccounts: {
    ar: "دليل الحسابات",
    fr: "Plan Comptable",
    en: "Chart of Accounts",
  },
  navTaxes: {
    ar: "الضرائب",
    fr: "Impôts",
    en: "Taxes",
  },
  navResources: {
    ar: "المصادر",
    fr: "Ressources",
    en: "Resources",
  },
  // Home Page
  homeTitle: {
    ar: "تعلم المحاسبة المغربية",
    fr: "Apprenez la comptabilité marocaine",
    en: "Learn Moroccan Accounting",
  },
  homeTitleHighlight: {
    ar: "بطريقة سهلة وتفاعلية",
    fr: "de manière simple et interactive",
    en: "in an easy and interactive way",
  },
  homeSubtitle: {
    ar: "منصة تعليمية مجانية للطلبة والمبتدئين لاستيعاب مفاهيم المحاسبة العامة.",
    fr: "Une plateforme éducative gratuite pour les étudiants et les débutants pour comprendre les concepts de la comptabilité générale.",
    en: "A free educational platform for students and beginners to understand general accounting concepts.",
  },
  homeStartLearning: {
    ar: "ابدأ التعلم",
    fr: "Commencer à apprendre",
    en: "Start Learning",
  },
  homeTrySimulator: {
    ar: "جرب المحاكي الذكي",
    fr: "Essayer le simulateur IA",
    en: "Try the AI Simulator",
  },
  homeExploreResources: {
    ar: "استكشف المصادر",
    fr: "Explorer les Ressources",
    en: "Explore Resources",
  },
  // Course Page
  courseListTitle: {
    ar: "دروس المحاسبة",
    fr: "Cours de Comptabilité",
    en: "Accounting Courses",
  },
  courseListSubtitle: {
    ar: "اختر درسًا للبدء. تم تصميم كل درس لمساعدتك على فهم المفاهيم الأساسية للمحاسبة المغربية.",
    fr: "Choisissez une leçon pour commencer. Chaque leçon est conçue pour vous aider à maîtriser les concepts clés de la comptabilité marocaine.",
    en: "Choose a lesson to get started. Each lesson is designed to help you master key concepts of Moroccan accounting.",
  },
  backToLessons: {
    ar: "العودة إلى الدروس",
    fr: "Retour aux leçons",
    en: "Back to Lessons",
  },
  // Simulator Page
  simulatorTitle: {
    ar: "المحاكي المحاسبي الذكي",
    fr: "Simulateur Comptable Intelligent",
    en: "Smart Accounting Simulator",
  },
  simulatorSubtitle: {
    ar: "أدخل وصفًا لعملية محاسبية، وسيقوم الذكاء الاصطناعي بتحليلها وتسجيلها.",
    fr: "Entrez la description d'une opération comptable, et l'IA l'analysera et l'enregistrera.",
    en: "Enter a description of an accounting operation, and the AI will analyze and record it.",
  },
  simulatorPlaceholder: {
    ar: "مثال: شراء حاسوب بمبلغ 12,000 درهم عن طريق شيك بنكي...",
    fr: "Exemple : Achat d'un ordinateur pour 12 000 DH par chèque bancaire...",
    en: "Example: Purchase of a computer for 12,000 MAD by bank check...",
  },
  analyzeButton: {
    ar: "تحليل العملية",
    fr: "Analyser l'opération",
    en: "Analyze Operation",
  },
  analyzingButton: {
    ar: "جاري التحليل...",
    fr: "Analyse en cours...",
    en: "Analyzing...",
  },
  newOperationButton: {
    ar: "عملية جديدة",
    fr: "Nouvelle opération",
    en: "New Operation",
  },
  journalEntryTitle: {
    ar: "قيد اليومية",
    fr: "Écriture de journal",
    en: "Journal Entry",
  },
  tableAccount: {
    ar: "الحساب",
    fr: "Compte",
    en: "Account",
  },
  tableDebit: {
    ar: "مدين",
    fr: "Débit",
    en: "Debit",
  },
  tableCredit: {
    ar: "دائن",
    fr: "Crédit",
    en: "Credit",
  },
  explanationTitle: {
    ar: "شرح العملية",
    fr: "Explication de l'opération",
    en: "Explanation of the Operation",
  },
  errorPrompt: {
    ar: "الرجاء إدخال عملية محاسبية.",
    fr: "Veuillez saisir une opération comptable.",
    en: "Please enter an accounting operation.",
  },
  errorAnalysis: {
    ar: "حدث خطأ أثناء تحليل العملية. الرجاء المحاولة مرة أخرى.",
    fr: "Une erreur est survenue lors de l'analyse. Veuillez réessayer.",
    en: "An error occurred during analysis. Please try again.",
  },
  // Chart of Accounts Page
  chartOfAccountsTitle: {
    ar: "دليل الحسابات المغربي (CGNC)",
    fr: "Plan Comptable Général Marocain (CGNC)",
    en: "Moroccan General Chart of Accounts (CGNC)",
  },
  chartOfAccountsSubtitle: {
    ar: "تصفح وابحث في دليل الحسابات للعثور على الحسابات وأكوادها.",
    fr: "Naviguez et recherchez dans le plan comptable pour trouver les comptes et leurs codes.",
    en: "Browse and search the chart of accounts to find accounts and their codes.",
  },
  chartIntroTitle: {
    ar: "كيفية استخدام دليل الحسابات",
    fr: "Comment utiliser le plan comptable",
    en: "How to Use the Chart of Accounts",
  },
  chartIntroText: {
    ar: "ينظم دليل الحسابات جميع الحسابات التي تستخدمها الشركة. يتم تجميع الحسابات في 'فئات' (الرقم الأول) لتوفير نظرة عامة منظمة على الوضع المالي. استخدم شريط البحث للعثور بسرعة على حساب بالاسم أو بالرقم.",
    fr: "Le plan comptable organise tous les comptes qu'une entreprise utilise. Les comptes sont regroupés en 'classes' (le premier chiffre) pour donner une vue structurée de la situation financière. Utilisez la barre de recherche pour trouver rapidement un compte par son nom ou son numéro.",
    en: "The chart of accounts organizes all the accounts a company uses. Accounts are grouped into 'classes' (the first digit) to give a structured view of the financial situation. Use the search bar to quickly find an account by its name or number.",
  },
  searchPlaceholder: {
    ar: "ابحث عن حساب بالاسم أو الرقم...",
    fr: "Rechercher un compte par nom ou numéro...",
    en: "Search for an account by name or number...",
  },
  noResults: {
    ar: "لم يتم العثور على نتائج.",
    fr: "Aucun résultat trouvé.",
    en: "No results found.",
  },
  // Account Detail Modal
  accountDetailTitle: {
    ar: "تفاصيل الحساب",
    fr: "Détails du Compte",
    en: "Account Details",
  },
  explanationSectionTitle: {
    ar: "الشرح",
    fr: "Explication",
    en: "Explanation",
  },
  exampleSectionTitle: {
    ar: "مثال عملي",
    fr: "Exemple Pratique",
    en: "Practical Example",
  },
  loadingExplanation: {
    ar: "جاري جلب الشرح...",
    fr: "Chargement de l'explication...",
    en: "Loading explanation...",
  },
  errorExplanation: {
    ar: "عذراً، لم نتمكن من جلب الشرح. الرجاء المحاولة مرة أخرى.",
    fr: "Désolé, nous n'avons pas pu charger l'explication. Veuillez réessayer.",
    en: "Sorry, we couldn't load the explanation. Please try again.",
  },
  // Taxes Page
  taxesTitle: {
    ar: "حاسبات الضرائب والجدول الزمني",
    fr: "Calculateurs d'Impôts & Calendrier Fiscal",
    en: "Tax Calculators & Fiscal Calendar",
  },
  taxesSubtitle: {
    ar: "أدوات لمساعدتك في حساباتك الضريبية والبقاء على اطلاع بالمواعيد النهائية.",
    fr: "Des outils pour vous aider dans vos calculs fiscaux et pour rester à jour sur les échéances.",
    en: "Tools to help you with your tax calculations and stay up-to-date on deadlines.",
  },
  tabTVA: { ar: "ق.م.ض", fr: "TVA", en: "VAT" },
  tabIS: { ar: "ض.ش", fr: "IS", en: "Corp. Tax" },
  tabIR: { ar: "ض.د", fr: "IR", en: "Income Tax" },
  tabCNSS: { ar: "ض.ج", fr: "CNSS", en: "Social Sec." },
  tabCalendar: { ar: "الجدول", fr: "Calendrier", en: "Calendar" },
  // TVA Calculator
  tvaCalculatorTitle: {
    ar: "حاسبة الضريبة على القيمة المضافة (TVA)",
    fr: "Calculateur de TVA",
    en: "VAT Calculator",
  },
  amountHTLabel: {
    ar: "المبلغ بدون ضريبة (HT)",
    fr: "Montant Hors Taxe (HT)",
    en: "Amount Before Tax (HT)",
  },
  tvaRateLabel: {
    ar: "نسبة الضريبة على القيمة المضافة",
    fr: "Taux de TVA",
    en: "VAT Rate",
  },
  tvaAmountLabel: {
    ar: "مبلغ الضريبة على القيمة المضافة",
    fr: "Montant de la TVA",
    en: "VAT Amount",
  },
  amountTTCLabel: {
    ar: "المبلغ شامل الضريبة (TTC)",
    fr: "Montant Toutes Taxes Comprises (TTC)",
    en: "Amount Including Tax (TTC)",
  },
  standardRateOption: {
    ar: "20% - النسبة العادية",
    fr: "20% - Taux normal",
    en: "20% - Standard rate",
  },
  intermediateRateOption: {
    ar: "14% - النسبة المتوسطة",
    fr: "14% - Taux intermédiaire",
    en: "14% - Intermediate rate",
  },
  reducedRateOption1: {
    ar: "10% - النسبة المخفضة",
    fr: "10% - Taux réduit",
    en: "10% - Reduced rate",
  },
  reducedRateOption2: {
    ar: "7% - النسبة المخفضة جدا",
    fr: "7% - Taux super-réduit",
    en: "7% - Super-reduced rate",
  },
  // IS Calculator
  isCalculatorTitle: {
    ar: "حاسبة الضريبة على الشركات (IS)",
    fr: "Calculateur de l'Impôt sur les Sociétés (IS)",
    en: "Corporate Tax (IS) Calculator",
  },
  taxableIncomeLabel: {
    ar: "الربح الخاضع للضريبة",
    fr: "Bénéfice Fiscal",
    en: "Taxable Income",
  },
  turnoverLabel: {
    ar: "رقم المعاملات (HT)",
    fr: "Chiffre d'Affaires (HT)",
    en: "Turnover (excl. tax)",
  },
  newCompanyExemptionLabel: {
    ar: "إعفاء شركة جديدة (أقل من 36 شهرًا)",
    fr: "Exonération nouvelle entreprise (< 36 mois)",
    en: "New company exemption (< 36 months)",
  },
  applicableRateLabel: {
    ar: "النسبة المئوية المطبقة",
    fr: "Taux Applicable",
    en: "Applicable Rate",
  },
  calculatedISLabel: {
    ar: "الضريبة على الشركات المحسوبة",
    fr: "IS Calculé",
    en: "Calculated Corp. Tax",
  },
  minimumContributionLabel: {
    ar: "الحد الأدنى للمساهمة",
    fr: "Cotisation Minimale",
    en: "Minimum Contribution",
  },
  taxDueLabel: {
    ar: "الضريبة المستحقة",
    fr: "Impôt Dû",
    en: "Tax Due",
  },
  isExplanationTitle: {
    ar: "شرح حساب الضريبة على الشركات",
    fr: "Explication du Calcul de l'IS",
    en: "Corporate Tax Calculation Explained",
  },
  isExplanationText: {
    ar: "الضريبة المستحقة هي المبلغ الأعلى بين الضريبة على الشركات المحسوبة والحد الأدنى للمساهمة.\n\n**شرائح الضريبة على الشركات:**\n- ≤ 300,000 درهم: 12.5%\n- 300,001 إلى 1,000,000 درهم: 20%\n- 1,000,001 إلى 100,000,000 درهم: 25.5%\n- > 100,000,000 درهم: 35.5%\n\n**الحد الأدنى للمساهمة:** 0.25% من رقم المعاملات (بحد أدنى 3,000 درهم). الشركات معفاة خلال أول 36 شهرًا.",
    fr: "L'impôt dû est le montant le plus élevé entre l'IS calculé et la Cotisation Minimale (CM).\n\n**Barème de l'IS :**\n- ≤ 300 000 DH : 12.5%\n- 300 001 à 1 000 000 DH : 20%\n- 1 000 001 à 100 000 000 DH : 25.5%\n- > 100 000 000 DH : 35.5%\n\n**Cotisation Minimale :** 0.25% du chiffre d'affaires (minimum 3 000 DH). Les entreprises sont exonérées les 36 premiers mois.",
    en: "The tax due is the higher amount between the calculated Corporate Tax and the Minimum Contribution.\n\n**Corporate Tax Brackets:**\n- ≤ 300,000 MAD: 12.5%\n- 300,001 to 1,000,000 MAD: 20%\n- 1,000,001 to 100,000,000 MAD: 25.5%\n- > 100,000,000 MAD: 35.5%\n\n**Minimum Contribution:** 0.25% of turnover (minimum 3,000 MAD). Companies are exempt for the first 36 months.",
  },
   // IR Calculator
  irCalculatorTitle: {
    ar: "حاسبة الضريبة على الدخل (IR) - الراتب",
    fr: "Calculateur de l'Impôt sur le Revenu (IR) - Salarié",
    en: "Income Tax (IR) Calculator - Salary",
  },
  grossMonthlySalaryLabel: {
    ar: "الراتب الشهري الإجمالي",
    fr: "Salaire Mensuel Brut",
    en: "Gross Monthly Salary",
  },
  dependentsLabel: {
    ar: "عدد الأشخاص تحت الكفالة",
    fr: "Nombre de personnes à charge",
    en: "Number of dependents",
  },
  socialContributionsLabel: {
    ar: "المساهمات الاجتماعية (CNSS + AMO)",
    fr: "Cotisations Sociales (CNSS + AMO)",
    en: "Social Contributions (CNSS + AMO)",
  },
  professionalExpensesLabel: {
    ar: "المصاريف المهنية",
    fr: "Frais Professionnels",
    en: "Professional Expenses",
  },
  netTaxableIncomeLabel: {
    ar: "الدخل الصافي الخاضع للضريبة",
    fr: "Revenu Net Imposable",
    en: "Net Taxable Income",
  },
  grossTaxLabel: {
    ar: "الضريبة الإجمالية",
    fr: "Impôt Brut",
    en: "Gross Tax",
  },
  dependentDeductionLabel: {
    ar: "خصم المعالين",
    fr: "Déduction pour charge de famille",
    en: "Dependent Deduction",
  },
  netTaxDueLabel: {
    ar: "الضريبة الصافية المستحقة",
    fr: "Impôt Net Dû",
    en: "Net Tax Due",
  },
  netMonthlySalaryLabel: {
    ar: "الراتب الشهري الصافي",
    fr: "Salaire Mensuel Net",
    en: "Net Monthly Salary",
  },
  // CNSS Calculator
  cnssCalculatorTitle: {
    ar: "حاسبة مساهمات الضمان الاجتماعي (CNSS)",
    fr: "Calculateur de Cotisations CNSS",
    en: "Social Security (CNSS) Calculator",
  },
  employeeShareLabel: {
    ar: "حصة الموظف",
    fr: "Part Salariale",
    en: "Employee's Share",
  },
  employerShareLabel: {
    ar: "حصة صاحب العمل",
    fr: "Part Patronale",
    en: "Employer's Share",
  },
  totalContributionLabel: {
    ar: "إجمالي المساهمة",
    fr: "Contribution Totale",
    en: "Total Contribution",
  },
  cnssDetailSocialBenefits: {
    ar: "الخدمات الاجتماعية",
    fr: "Prestations Sociales",
    en: "Social Benefits",
  },
  cnssDetailAMO: {
    ar: "التأمين الصحي الإجباري",
    fr: "Assurance Maladie Obligatoire (AMO)",
    en: "Mandatory Health Insurance (AMO)",
  },
  cnssDetailProfessionalTraining: {
    ar: "ضريبة التكوين المهني",
    fr: "Taxe de Formation Professionnelle",
    en: "Professional Training Tax",
  },
  cnssDetailFamilyAllowances: {
    ar: "التعويضات العائلية",
    fr: "Allocations Familiales",
    en: "Family Allowances",
  },
  // Fiscal Calendar
  fiscalCalendarTitle: {
    ar: "الجدول الزمني الضريبي",
    fr: "Calendrier Fiscal",
    en: "Fiscal Calendar",
  },
  fiscalCalendarSubtitle: {
    ar: "تقويم تفاعلي لتتبع جميع المواعيد النهائية الضريبية المهمة.",
    fr: "Un calendrier interactif pour suivre toutes vos échéances fiscales importantes.",
    en: "An interactive calendar to track all your important tax deadlines.",
  },
  noEvents: {
    ar: "لا توجد مواعيد نهائية لهذا اليوم.",
    fr: "Aucune échéance pour ce jour.",
    en: "No deadlines for this day.",
  },
  // Resources Page
  resourcesTitle: {
    ar: "مصادر وثائقية",
    fr: "Ressources Documentaires",
    en: "Documentary Resources",
  },
  resourcesSubtitle: {
    ar: "روابط مباشرة للوثائق الرسمية لمساعدتك في دراستك وممارستك المهنية.",
    fr: "Liens directs vers la documentation officielle pour vous aider dans vos études et votre pratique professionnelle.",
    en: "Direct links to official documentation to help you in your studies and professional practice.",
  },
  resourceCgiTitle: {
    ar: "المدونة العامة للضرائب (CGI)",
    fr: "Code Général des Impôts (CGI)",
    en: "General Tax Code (CGI)",
  },
  resourceCgiDesc: {
    ar: "المرجع الرسمي للتشريعات الضريبية في المغرب. أساسي لفهم جميع الضرائب.",
    fr: "La référence officielle de la législation fiscale au Maroc. Essentiel pour comprendre l'ensemble des impôts.",
    en: "The official reference for tax legislation in Morocco. Essential for understanding all taxes.",
  },
  resourceCgiLink: {
    ar: "الاطلاع على المدونة",
    fr: "Consulter le Code",
    en: "View the Code",
  },
  resourceCircularsTitle: {
    ar: "المذكرات الدورية",
    fr: "Notes Circulaires",
    en: "Circular Notes",
  },
  resourceCircularsDesc: {
    ar: "تفسيرات وتوضيحات إدارية حول تطبيق القوانين الضريبية، تنشرها المديرية العامة للضرائب.",
    fr: "Interprétations et clarifications administratives sur l'application des lois fiscales, publiées par la DGI.",
    en: "Administrative interpretations and clarifications on the application of tax laws, published by the DGI.",
  },
  resourceCircularsLink: {
    ar: "قراءة المذكرات",
    fr: "Lire les Notes",
    en: "Read the Notes",
  },
  resourceCnssTitle: {
    ar: "أدلة الصندوق الوطني للضمان الاجتماعي",
    fr: "Manuels de la CNSS",
    en: "CNSS Manuals",
  },
  resourceCnssDesc: {
    ar: "أدلة وإجراءات عملية تتعلق بالتصريحات والاشتراكات والخدمات التي يقدمها الصندوق الوطني للضمان الاجتماعي.",
    fr: "Guides et procédures pratiques concernant les déclarations, cotisations et prestations de la CNSS.",
    en: "Practical guides and procedures concerning declarations, contributions, and benefits from the CNSS.",
  },
  resourceCnssLink: {
    ar: "زيارة الموقع",
    fr: "Visiter le site",
    en: "Visit the site",
  },
};
