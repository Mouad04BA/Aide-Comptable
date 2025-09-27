import { Language } from './types';

type Translations = {
  [key: string]: Record<Language, string>;
};

export const translations: Translations = {
  // Header
  appName: {
    ar: "مساعد محاسب",
    fr: "Aide Comptable",
    en: "Accounting Assistant",
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
  navVideoStudio: {
    ar: "استوديو الفيديو",
    fr: "Studio Vidéo",
    en: "Video Studio",
  },
  changeLanguage: {
    ar: "تغيير اللغة",
    fr: "Changer de langue",
    en: "Change Language",
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
  homeFeaturesTitle: {
    ar: "استكشف أدواتنا",
    fr: "Explorez nos outils",
    en: "Explore Our Tools",
  },
  featureCoursesTitle: {
    ar: "دروس تفاعلية",
    fr: "Cours Interactifs",
    en: "Interactive Courses",
  },
  featureCoursesDesc: {
    ar: "دروس مبسطة مع تمارين واختبارات لفهم المبادئ المحاسبية الأساسية.",
    fr: "Des leçons simplifiées avec des quiz et des exercices pour maîtriser les principes comptables clés.",
    en: "Simplified lessons with quizzes and exercises to master key accounting principles.",
  },
  featureSimulatorTitle: {
    ar: "محاكي الذكاء الاصطناعي",
    fr: "Simulateur IA",
    en: "AI Simulator",
  },
  featureSimulatorDesc: {
    ar: "أدخل أي عملية محاسبية أو ضريبية واحصل على تحليل فوري وقيد اليومية الصحيح.",
    fr: "Entrez n'importe quelle opération comptable ou fiscale et obtenez une analyse instantanée et l'écriture correcte.",
    en: "Enter any accounting or tax transaction and get an instant analysis and the correct journal entry.",
  },
  featureResourcesTitle: {
    ar: "مصادر ووثائق",
    fr: "Ressources & Documents",
    en: "Resources & Documents",
  },
  featureResourcesDesc: {
    ar: "وصول سريع إلى دليل الحسابات المغربي، حاسبات الضرائب، والوثائق الرسمية.",
    fr: "Accès rapide au plan comptable marocain, aux calculateurs d'impôts et aux documents officiels.",
    en: "Quick access to the Moroccan chart of accounts, tax calculators, and official documents.",
  },
  featureButtonText: {
      ar: "اكتشف",
      fr: "Découvrir",
      en: "Discover",
  },
  // Deadline Reminder
  reminderTitle: {
    ar: "تذكير: الإشعار الضريبي القادم",
    fr: "Rappel : Prochaine échéance fiscale",
    en: "Reminder: Next tax deadline",
  },
  reminderDaysRemaining_one: {
    ar: "باقي يوم واحد",
    fr: "{count} jour restant",
    en: "{count} day remaining",
  },
  reminderDaysRemaining_other: {
    ar: "باقي {count} أيام",
    fr: "{count} jours restants",
    en: "{count} days remaining",
  },
  reminderButton: {
    ar: "عرض الجدول الزمني",
    fr: "Voir le calendrier",
    en: "View Calendar",
  },
  // Contact Section
  contactTitle: {
    ar: "تواصل معنا",
    fr: "Contactez-Nous",
    en: "Contact Us",
  },
  contactSubtitle: {
      ar: "نحن هنا للمساعدة. تواصل معنا عبر القنوات التالية.",
      fr: "Nous sommes là pour vous aider. Contactez-nous via les canaux suivants.",
      en: "We're here to help. Get in touch with us through the following channels.",
  },
  contactDirectly: {
    ar: "اتصل بنا مباشرة",
    fr: "Contactez-nous directement",
    en: "Contact Us Directly",
  },
  contactFollowUs: {
    ar: "تابعنا على الشبكات الاجتماعية",
    fr: "Suivez-nous sur les réseaux sociaux",
    en: "Follow Us on Social Media",
  },
  contactEmailLabel: {
    ar: "البريد الإلكتروني",
    fr: "Email",
    en: "Email",
  },
  contactWhatsAppLabel: {
    ar: "واتساب",
    fr: "WhatsApp",
    en: "WhatsApp",
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
  courseProgress: {
    ar: "التقدم: {completed} / {total} دروس",
    fr: "Progression : {completed} / {total} leçons",
    en: "Progress: {completed} / {total} lessons",
  },
  backToLessons: {
    ar: "العودة إلى الدروس",
    fr: "Retour aux leçons",
    en: "Back to Lessons",
  },
  // Lesson View
  previousLesson: {
    ar: "الدرس السابق",
    fr: "Leçon Précédente",
    en: "Previous Lesson",
  },
  nextLesson: {
    ar: "الدرس التالي",
    fr: "Leçon Suivante",
    en: "Next Lesson",
  },
  quizTitle: {
    ar: "تمرين تطبيقي",
    fr: "Quiz d'Application",
    en: "Application Quiz",
  },
  checkAnswers: {
    ar: "تحقق من الإجابات",
    fr: "Vérifier les réponses",
    en: "Check Answers",
  },
  quizScore: {
    ar: "نتيجتك: {score}/{total}",
    fr: "Votre score : {score}/{total}",
    en: "Your Score: {score}/{total}",
  },
  correctAnswer: {
    ar: "الإجابة الصحيحة",
    fr: "Réponse correcte",
    en: "Correct Answer",
  },
  yourAnswer: {
    ar: "إجابتك",
    fr: "Votre réponse",
    en: "Your Answer",
  },
  lessonContainsQuiz: {
    ar: "تمرين",
    fr: "Quiz",
    en: "Quiz",
  },
  lessonContainsTD: {
    ar: "أعمال موجهة",
    fr: "TD",
    en: "TD",
  },
  tdTitle: {
    ar: "أعمال موجهة (TD)",
    fr: "Travaux Dirigés (TD)",
    en: "Directed Work (TD)",
  },
  problemTitle: {
    ar: "المسألة",
    fr: "Problème",
    en: "Problem",
  },
  solutionTitle: {
    ar: "الحل",
    fr: "Solution",
    en: "Solution",
  },
  showSolution: {
    ar: "إظهار الحل",
    fr: "Afficher la solution",
    en: "Show Solution",
  },
  hideSolution: {
    ar: "إخفاء الحل",
    fr: "Masquer la solution",
    en: "Hide Solution",
  },
  // Simulator Page
  simulatorTitle: {
    ar: "المحاكيات الذكية",
    fr: "Simulateurs Intelligents",
    en: "Smart Simulators",
  },
  simulatorSubtitle: {
    ar: "أدخل وصفًا لعملية محاسبية أو ضريبية، وسيقوم الذكاء الاصطناعي بتحليلها.",
    fr: "Entrez la description d'une opération comptable ou fiscale, et l'IA l'analysera.",
    en: "Enter a description of an accounting or fiscal operation, and the AI will analyze it.",
  },
  simulatorAccountingTab: {
    ar: "محاكي محاسبي",
    fr: "Simulateur Comptable",
    en: "Accounting Simulator",
  },
  simulatorFiscalAnalysisTab: {
    ar: "تحليل ضريبي",
    fr: "Analyse Fiscale",
    en: "Fiscal Analysis",
  },
  simulatorFiscalQATab: {
    ar: "أسئلة ضريبية",
    fr: "Questions Fiscales",
    en: "Fiscal Q&A",
  },
  simulatorPlaceholder: {
    ar: "مثال: شراء حاسوب بمبلغ 12,000 درهم عن طريق شيك بنكي...",
    fr: "Exemple : Achat d'un ordinateur pour 12 000 DH par chèque bancaire...",
    en: "Example: Purchase of a computer for 12,000 MAD by bank check...",
  },
  fiscalAnalysisPromptPlaceholder: {
    ar: "مثال: غرامة تأخير في أداء الضريبة على القيمة المضافة بمبلغ 500 درهم...",
    fr: "Exemple : Amende pour paiement tardif de la TVA d'un montant de 500 DH...",
    en: "Example: Penalty for late VAT payment amounting to 500 MAD...",
  },
  fiscalQAPromptPlaceholder: {
    ar: "مثال: ما هو المعاملة الضريبية لمصاريف الإعلان؟",
    fr: "Exemple : Quel est le traitement fiscal des frais de publicité ?",
    en: "Example: What is the tax treatment for advertising expenses?",
  },
  analyzeButton: {
    ar: "تحليل",
    fr: "Analyser",
    en: "Analyze",
  },
  askButton: {
    ar: "اسأل",
    fr: "Demander",
    en: "Ask",
  },
  analyzingButton: {
    ar: "جاري التحليل...",
    fr: "Analyse en cours...",
    en: "Analyzing...",
  },
  newOperationButton: {
    ar: "جديد",
    fr: "Nouveau",
    en: "New",
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
    ar: "الرجاء إدخال نص للتحليل.",
    fr: "Veuillez saisir un texte à analyser.",
    en: "Please enter text to analyze.",
  },
  errorAnalysis: {
    ar: "حدث خطأ أثناء التحليل. الرجاء المحاولة مرة أخرى.",
    fr: "Une erreur est survenue lors de l'analyse. Veuillez réessayer.",
    en: "An error occurred during analysis. Please try again.",
  },
  fiscalAnalysisResult: {
    ar: "نتيجة التحليل الضريبي",
    fr: "Résultat de l'Analyse Fiscale",
    en: "Fiscal Analysis Result",
  },
  fiscalTreatment: {
    ar: "المعالجة الضريبية",
    fr: "Traitement Fiscal",
    en: "Fiscal Treatment",
  },
  fiscalExplanation: {
    ar: "الشرح",
    fr: "Explication",
    en: "Explanation",
  },
  fiscalProof: {
    ar: "الدليل (المدونة العامة للضرائب)",
    fr: "Preuve (CGI)",
    en: "Proof (CGI)",
  },
  fiscalQAResponse: {
    ar: "إجابة الخبير الضريبي",
    fr: "Réponse de l'Expert Fiscal",
    en: "Tax Expert's Answer",
  },
  fiscalQADetailedExplanation: {
    ar: "شرح مفصل",
    fr: "Explication Détaillée",
    en: "Detailed Explanation",
  },
  fiscalQAReferences: {
    ar: "المراجع (المدونة العامة للضرائب)",
    fr: "Références (CGI)",
    en: "References (CGI)",
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
  resourceOecTitle: {
    ar: "هيئة الخبراء المحاسبين (OEC)",
    fr: "Ordre des Experts-Comptables (OEC)",
    en: "Order of Chartered Accountants (OEC)",
  },
  resourceOecDesc: {
    ar: "الهيئة التي تنظم مهنة المحاسبة في المغرب. ابحث عن معلومات حول المعايير والدورات التدريبية وأخبار المهنة.",
    fr: "L'organisation qui régit la profession comptable au Maroc. Trouvez des informations sur les normes, les formations et l'actualité de la profession.",
    en: "The organization governing the accounting profession in Morocco. Find information on standards, training, and professional news.",
  },
  resourceOecLink: {
    ar: "زيارة موقع الهيئة",
    fr: "Visiter le site de l'OEC",
    en: "Visit the OEC Site",
  },
  resourceBoTitle: {
    ar: "الجريدة الرسمية",
    fr: "Bulletin Officiel",
    en: "Official Gazette (Bulletin Officiel)",
  },
  resourceBoDesc: {
    ar: "النشرة الرسمية التي تصدر فيها جميع القوانين، بما في ذلك قوانين المالية والتعديلات الضريبية.",
    fr: "La publication officielle où toutes les lois, y compris les lois de finances et les modifications fiscales, sont promulguées.",
    en: "The official publication where all laws, including finance laws and tax amendments, are enacted.",
  },
  resourceBoLink: {
    ar: "تصفح الجريدة الرسمية",
    fr: "Consulter le B.O.",
    en: "Consult the B.O.",
  },
  resourceOmpicTitle: {
    ar: "المكتب المغربي للملكية الصناعية والتجارية (OMPIC)",
    fr: "Office Marocain de la Propriété Industrielle et Commerciale (OMPIC)",
    en: "Moroccan Office for Industrial and Commercial Property (OMPIC)",
  },
  resourceOmpicDesc: {
    ar: "المكتب المسؤول عن السجل التجاري المركزي. ضروري لإنشاء الشركات والمعلومات القانونية حولها.",
    fr: "L'office en charge du registre central du commerce. Essentiel pour la création d'entreprise et les informations légales sur les sociétés.",
    en: "The office in charge of the central trade register. Essential for business creation and legal information about companies.",
  },
  resourceOmpicLink: {
    ar: "استكشاف OMPIC",
    fr: "Explorer l'OMPIC",
    en: "Explore OMPIC",
  },
  resourceOmpicCreationTitle: {
    ar: "دليل إنشاء المقاولات",
    fr: "Guide de la Création d'Entreprise",
    en: "Business Creation Guide",
  },
  resourceOmpicCreationDesc: {
    ar: "دليل رسمي من OMPIC يشرح الإجراءات خطوة بخطوة لإنشاء مقاولتك في المغرب.",
    fr: "Le guide officiel de l'OMPIC qui détaille les procédures pas à pas pour créer votre entreprise au Maroc.",
    en: "The official OMPIC guide detailing the step-by-step procedures for creating your business in Morocco.",
  },
  resourceOmpicCreationLink: {
    ar: "تحميل الدليل",
    fr: "Télécharger le guide",
    en: "Download the guide",
  },
  resourceProcedureTitle: {
    ar: "معالجة صعوبات المقاولة",
    fr: "Traitement des Difficultés de l'Entreprise",
    en: "Handling Business Difficulties",
  },
  resourceProcedureDesc: {
    ar: "المرجع القانوني (الكتاب الخامس من مدونة التجارة) المتعلق بإجراءات الوقاية، التسوية، والتصفية القضائية.",
    fr: "La référence légale (Livre V du Code de Commerce) sur les procédures de prévention, de redressement et de liquidation judiciaire.",
    en: "The legal reference (Book V of the Commercial Code) on prevention, recovery, and judicial liquidation procedures.",
  },
  resourceProcedureLink: {
    ar: "الاطلاع على الكتاب الخامس",
    fr: "Consulter le Livre V",
    en: "Consult Book V",
  },
  resourceTeledeclarationTitle: {
    ar: "دليل الإقرارات الضريبية عن بعد",
    fr: "Guide des Télédéclarations Fiscales",
    en: "Online Tax Filing Guide",
  },
  resourceTeledeclarationDesc: {
    ar: "دليل عملي من المديرية العامة للضرائب لمساعدتك في الإقرارات الضريبية عبر الإنترنت (IS, TVA, IR).",
    fr: "Un guide pratique de la DGI pour vous aider avec vos déclarations fiscales en ligne (IS, TVA, IR).",
    en: "A practical guide from the DGI to help you with your online tax declarations (IS, VAT, IR).",
  },
  resourceTeledeclarationLink: {
    ar: "عرض الدليل الضريبي",
    fr: "Voir le guide fiscal",
    en: "View the tax guide",
  },
  // Tax Page Portals
  taxPortalsTitle: {
    ar: "بوابات التصريح والأداء عن بعد",
    fr: "Portails de Télédéclaration & Paiement",
    en: "Online Declaration & Payment Portals",
  },
  taxPortalsSubtitle: {
    ar: "ولوج مباشر للمنصات الرسمية لتصريحاتكم وأداءاتكم.",
    fr: "Accédez directement aux plateformes officielles pour vos déclarations et paiements.",
    en: "Directly access the official platforms for your declarations and payments.",
  },
  simplCombinedTitle: {
    ar: "منصة SIMPL (ق.م.ض، ض.ش، ض.د)",
    fr: "SIMPL (TVA, IS, IR)",
    en: "SIMPL (VAT, Corp. Tax, Income Tax)",
  },
  simplCombinedDesc: {
    ar: "البوابة الموحدة للمديرية العامة للضرائب لجميع تصريحاتكم وأداءاتكم عن بعد (ق.م.ض، ض.ش، ض.د).",
    fr: "Portail unifié de la DGI pour toutes vos télédéclarations et télépaiements (TVA, IS, IR).",
    en: "Unified DGI portal for all your online declarations and payments (VAT, Corp. Tax, Income Tax).",
  },
  damancomTitle: {
    ar: "DAMANCOM",
    fr: "DAMANCOM",
    en: "DAMANCOM",
  },
  damancomDesc: {
    ar: "بوابة التصريح بالأجور والأداء عن بعد لاشتراكات الصندوق الوطني للضمان الاجتماعي.",
    fr: "Portail pour la télédéclaration des salaires et le télépaiement des cotisations CNSS.",
    en: "Portal for online salary declaration and payment of CNSS contributions.",
  },
  portalLinkText: {
    ar: "ولوج البوابة",
    fr: "Accéder au portail",
    en: "Access portal",
  },
  // Interactive Quiz
  startQuiz: {
    ar: "ابدأ الاختبار",
    fr: "Commencer le Quiz",
    en: "Start Quiz",
  },
  questionProgress: {
    ar: "سؤال {current}/{total}",
    fr: "Question {current}/{total}",
    en: "Question {current}/{total}",
  },
  nextQuestion: {
    ar: "السؤال التالي",
    fr: "Question Suivante",
    en: "Next Question",
  },
  finishQuiz: {
    ar: "إنهاء الاختبار",
    fr: "Terminer le Quiz",
    en: "Finish Quiz",
  },
  quizResultsTitle: {
    ar: "نتائج الاختبار",
    fr: "Résultats du Quiz",
    en: "Quiz Results",
  },
  retakeQuiz: {
    ar: "إعادة الاختبار",
    fr: "Recommencer le Quiz",
    en: "Retake Quiz",
  },
  correctFeedback: {
    ar: "صحيح!",
    fr: "Correct !",
    en: "Correct!",
  },
  incorrectFeedback: {
    ar: "غير صحيح.",
    fr: "Incorrect.",
    en: "Incorrect.",
  },
  themeToggleLabel: {
