import { FiscalEvent, Language } from '../types';

export const fiscalCalendarEvents: FiscalEvent[] = [
  {
    appliesToMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dayRule: 'end',
    category: 'TVA',
    title: {
      fr: 'Déclaration & Paiement TVA (Mensuel)',
      ar: 'إقرار وأداء الضريبة على القيمة المضافة (شهري)',
      en: 'VAT Declaration & Payment (Monthly)',
    },
    description: {
      fr: 'Date limite pour les entreprises soumises au régime mensuel de TVA (dépôt et paiement pour le mois précédent).',
      ar: 'آخر أجل للشركات الخاضعة لنظام الضريبة على القيمة المضافة الشهري (الإقرار والأداء عن الشهر السابق).',
      en: 'Deadline for companies under the monthly VAT regime (filing and payment for the previous month).',
    },
  },
  {
    appliesToMonths: [1, 4, 7, 10],
    dayRule: 'end',
    category: 'TVA',
    title: {
      fr: 'Déclaration & Paiement TVA (Trimestriel)',
      ar: 'إقرار وأداء الضريبة على القيمة المضافة (ربع سنوي)',
      en: 'VAT Declaration & Payment (Quarterly)',
    },
    description: {
      fr: 'Date limite pour les entreprises au régime trimestriel de TVA (dépôt et paiement pour le trimestre précédent).',
      ar: 'آخر أجل للشركات الخاضعة لنظام الضريبة على القيمة المضافة ربع السنوي (الإقرار والأداء عن الربع السابق).',
      en: 'Deadline for companies under the quarterly VAT regime (filing and payment for the previous quarter).',
    },
  },
  {
    appliesToMonths: [3, 6, 9, 12],
    dayRule: 'end',
    category: 'IS',
    title: {
      fr: 'Paiement Acompte Provisionnel IS',
      ar: 'أداء الدفعة المقدمة للضريبة على الشركات',
      en: 'Corporate Tax Installment Payment',
    },
    description: {
      fr: "Date limite pour le paiement du 1er (Mars), 2ème (Juin), 3ème (Sept), ou 4ème (Déc) acompte provisionnel de l'IS.",
      ar: 'آخر أجل لأداء الدفعة المقدمة الأولى (مارس)، الثانية (يونيو)، الثالثة (سبتمبر)، أو الرابعة (ديسمبر) للضريبة على الشركات.',
      en: 'Deadline for the 1st (March), 2nd (June), 3rd (Sept), or 4th (Dec) corporate tax installment payment.',
    },
  },
  {
    appliesToMonths: [3],
    dayRule: 'end',
    category: 'IS',
    title: {
      fr: 'Déclaration Résultat Fiscal & Solde IS',
      ar: 'إقرار النتيجة الجبائية ورصيد الضريبة على الشركات',
      en: 'Fiscal Result Declaration & Corp. Tax Balance',
    },
    description: {
      fr: "Date limite pour le dépôt de la liasse fiscale et le paiement du solde de l'IS pour l'exercice précédent.",
      ar: 'آخر أجل لإيداع الإقرار الجبائي وأداء الرصيد المتبقي من الضريبة على الشركات للسنة المالية السابقة.',
      en: 'Deadline for filing the tax return and paying the corporate tax balance for the previous year.',
    },
  },
  {
    appliesToMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dayRule: 'end',
    category: 'IR',
    title: {
      fr: 'Paiement IR sur Salaires',
      ar: 'أداء الضريبة على الدخل على الأجور',
      en: 'Payment of Income Tax on Salaries',
    },
    description: {
      fr: "Date limite pour les employeurs pour verser l'IR retenu à la source sur les salaires du mois précédent.",
      ar: 'آخر أجل لأرباب العمل لتحويل الضريبة على الدخل المقتطعة من المنبع على أجور الشهر السابق.',
      en: 'Deadline for employers to pay the income tax withheld at source on salaries for the previous month.',
    },
  },
  {
    appliesToMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dayRule: 10,
    category: 'CNSS',
    title: {
      fr: 'Déclaration & Paiement CNSS',
      ar: 'إقرار وأداء اشتراكات الصندوق الوطني للضمان الاجتماعي',
      en: 'CNSS Declaration & Payment',
    },
    description: {
      fr: 'Date limite pour la déclaration des salaires et le paiement des cotisations CNSS pour le mois précédent.',
      ar: 'آخر أجل للإقرار بالأجور وأداء اشتراكات الصندوق الوطني للضمان الاجتماعي للشهر السابق.',
      en: 'Deadline for salary declaration and payment of CNSS contributions for the previous month.',
    },
  },
];