import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CalculatorIcon from './icons/CalculatorIcon';
import BuildingIcon from './icons/BuildingIcon';
import UserIcon from './icons/UserIcon';
import UsersIcon from './icons/UsersIcon';
import CalendarIcon from './icons/CalendarIcon';
import FiscalCalendar from './FiscalCalendar';
import TaxesAnimation from './illustrations/TaxesAnimation';

type Tab = 'tva' | 'is' | 'ir' | 'cnss' | 'calendar';

const formatCurrency = (value: number, language: 'ar' | 'fr' | 'en') => {
  const locale = language === 'ar' ? 'ar-MA' : language === 'fr' ? 'fr-FR' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const InputGroup: React.FC<{ id: string, label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, placeholder?: string }> = ({ id, label, value, onChange, placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
        <div className="relative">
            <input
                type="number"
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder || "0"}
                className="w-full p-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:text-white text-lg font-mono text-right"
                aria-describedby={`${id}-currency`}
            />
            <span id={`${id}-currency`} className="absolute inset-y-0 ltr:right-0 rtl:left-0 pr-3 rtl:pl-3 flex items-center text-gray-500 dark:text-gray-400">MAD</span>
        </div>
    </div>
);

const ResultRow: React.FC<{ label: string, value: string, isMain?: boolean }> = ({ label, value, isMain = false }) => (
    <div className={`flex justify-between items-center ${isMain ? 'py-2' : ''}`}>
        <span className={`${isMain ? 'text-lg font-bold' : 'text-gray-600 dark:text-gray-300'}`}>{label}:</span>
        <span className={`font-mono ${isMain ? 'text-2xl font-bold text-primary-dark' : 'text-xl font-semibold text-gray-800 dark:text-white'}`}>{value}</span>
    </div>
);

const TVACalculator = () => {
  const { t, language } = useLanguage();
  const [amountHT, setAmountHT] = useState('');
  const [tvaRate, setTvaRate] = useState(0.20);

  const { tvaAmount, amountTTC } = useMemo(() => {
    const ht = parseFloat(amountHT);
    if (!isNaN(ht) && ht >= 0) {
      const tva = ht * tvaRate;
      const ttc = ht + tva;
      return { tvaAmount: tva, amountTTC: ttc };
    }
    return { tvaAmount: 0, amountTTC: 0 };
  }, [amountHT, tvaRate]);

  const tvaRates = useMemo(() => [
    { value: 0.20, label: t('standardRateOption') },
    { value: 0.14, label: t('intermediateRateOption') },
    { value: 0.10, label: t('reducedRateOption1') },
    { value: 0.07, label: t('reducedRateOption2') },
  ], [t]);

  return (
    <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary-dark">{t('tvaCalculatorTitle')}</h2>
        <div className="space-y-6">
            <InputGroup id="amount-ht" label={t('amountHTLabel')} value={amountHT} onChange={(e) => setAmountHT(e.target.value)} />
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t('tvaRateLabel')}</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {tvaRates.map(rate => (
                        <button
                            key={rate.value}
                            onClick={() => setTvaRate(rate.value)}
                            className={`p-3 rounded-lg text-sm font-semibold transition-all duration-200 border-2 ${
                                tvaRate === rate.value
                                    ? 'bg-primary/20 border-primary text-primary-dark dark:bg-primary-dark/30 dark:border-primary-dark dark:text-white'
                                    : 'bg-gray-50 border-gray-200 hover:border-primary dark:bg-dark-bg dark:border-gray-600 dark:hover:border-primary-dark'
                            }`}
                        >
                            {rate.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
            <div className="space-y-4 text-right rtl:text-left">
                <ResultRow label={t('tvaAmountLabel')} value={formatCurrency(tvaAmount, language)} />
                <ResultRow label={t('amountTTCLabel')} value={formatCurrency(amountTTC, language)} isMain />
            </div>
        </div>
    </div>
  );
};

const ISCalculator = () => {
    const { t, language } = useLanguage();
    const [income, setIncome] = useState('');
    const [turnover, setTurnover] = useState('');
    const [isNewCompany, setIsNewCompany] = useState(false);

    const { rate, calculatedIS, minContribution, taxDue } = useMemo(() => {
        const bn = parseFloat(income);
        const ca = parseFloat(turnover);
        let calculatedIS = 0, rate = "0%";
        if (!isNaN(bn) && bn > 0) {
            if (bn <= 300000) { rate = "12.5%"; calculatedIS = bn * 0.125; } 
            else if (bn <= 1000000) { rate = "20%"; calculatedIS = (300000 * 0.125) + ((bn - 300000) * 0.20); } 
            else if (bn <= 100000000) { rate = "25.5%"; calculatedIS = (300000 * 0.125) + (700000 * 0.20) + ((bn - 1000000) * 0.255); } 
            else { rate = "35.5%"; calculatedIS = (300000 * 0.125) + (700000 * 0.20) + (99000000 * 0.255) + ((bn - 100000000) * 0.355); }
        }

        let minContribution = 0;
        if (!isNewCompany && !isNaN(ca) && ca > 0) {
            minContribution = Math.max(ca * 0.0025, 3000);
        }
        
        const taxDue = Math.max(calculatedIS, minContribution);

        return { rate, calculatedIS, minContribution, taxDue };
    }, [income, turnover, isNewCompany]);

    return (
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary-dark">{t('isCalculatorTitle')}</h2>
            <div className="space-y-6">
                <InputGroup id="taxable-income" label={t('taxableIncomeLabel')} value={income} onChange={e => setIncome(e.target.value)} />
                <InputGroup id="turnover" label={t('turnoverLabel')} value={turnover} onChange={e => setTurnover(e.target.value)} />
                
                <div className="flex items-center">
                    <input id="new-company" type="checkbox" checked={isNewCompany} onChange={e => setIsNewCompany(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/>
                    <label htmlFor="new-company" className="ml-2 rtl:mr-2 block text-sm text-gray-900 dark:text-gray-300">{t('newCompanyExemptionLabel')}</label>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                <div className="space-y-4 text-right rtl:text-left">
                    <ResultRow label={t('applicableRateLabel')} value={rate} />
                    <ResultRow label={t('calculatedISLabel')} value={formatCurrency(calculatedIS, language)} />
                    <ResultRow label={t('minimumContributionLabel')} value={formatCurrency(minContribution, language)} />
                    <ResultRow label={t('taxDueLabel')} value={formatCurrency(taxDue, language)} isMain />
                </div>
            </div>
             <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">{t('isExplanationTitle')}</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm whitespace-pre-wrap">{t('isExplanationText')}</p>
            </div>
        </div>
    );
};

const IRCalculator = () => {
    const { t, language } = useLanguage();
    const [grossSalary, setGrossSalary] = useState('');
    const [dependents, setDependents] = useState(0);

    const results = useMemo(() => {
        const gs = parseFloat(grossSalary);
        if (isNaN(gs) || gs <= 0) return { social: 0, prof: 0, nti: 0, grossTax: 0, ded: 0, netTax: 0, netSalary: 0 };
        
        const social = (Math.min(gs, 6000) * 0.0448) + (gs * 0.0226);
        const grossTaxable = gs - social;
        const prof = Math.min(grossTaxable * 0.20, 2500); // Capped at 30000/year -> 2500/month
        const nti = grossTaxable - prof;
        const annualNti = nti * 12;

        let annualTax = 0;
        if      (annualNti <= 30000)  { annualTax = 0; }
        else if (annualNti <= 50000)  { annualTax = (annualNti - 30000) * 0.10; }
        else if (annualNti <= 60000)  { annualTax = (annualNti - 50000) * 0.20 + 2000; }
        else if (annualNti <= 80000)  { annualTax = (annualNti - 60000) * 0.30 + 4000; }
        else if (annualNti <= 180000) { annualTax = (annualNti - 80000) * 0.34 + 10000; }
        else                          { annualTax = (annualNti - 180000) * 0.38 + 44000; }
        
        const grossTax = annualTax / 12;
        const ded = Math.min(dependents, 6) * 30;
        const netTax = Math.max(0, grossTax - ded);
        const netSalary = gs - social - netTax;

        return { social, prof, nti, grossTax, ded, netTax, netSalary };
    }, [grossSalary, dependents]);

    return (
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary-dark">{t('irCalculatorTitle')}</h2>
            <div className="space-y-6">
                <InputGroup id="gross-salary" label={t('grossMonthlySalaryLabel')} value={grossSalary} onChange={e => setGrossSalary(e.target.value)} />
                <div>
                  <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('dependentsLabel')}</label>
                  <input type="number" id="dependents" value={dependents} onChange={e => setDependents(Math.max(0, parseInt(e.target.value) || 0))} min="0" className="w-full p-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg"/>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                <div className="space-y-4 text-right rtl:text-left">
                    <ResultRow label={t('socialContributionsLabel')} value={`- ${formatCurrency(results.social, language)}`} />
                    <ResultRow label={t('professionalExpensesLabel')} value={`- ${formatCurrency(results.prof, language)}`} />
                    <ResultRow label={t('netTaxableIncomeLabel')} value={formatCurrency(results.nti, language)} />
                    <hr className="border-dashed my-2 dark:border-gray-600"/>
                    <ResultRow label={t('grossTaxLabel')} value={formatCurrency(results.grossTax, language)} />
                    <ResultRow label={t('dependentDeductionLabel')} value={`- ${formatCurrency(results.ded, language)}`} />
                    <ResultRow label={t('netTaxDueLabel')} value={formatCurrency(results.netTax, language)} />
                    <hr className="dark:border-gray-600"/>
                    <ResultRow label={t('netMonthlySalaryLabel')} value={formatCurrency(results.netSalary, language)} isMain />
                </div>
            </div>
        </div>
    );
};

const CNSSCalculator = () => {
    const { t, language } = useLanguage();
    const [grossSalary, setGrossSalary] = useState('');

    const results = useMemo(() => {
        const gs = parseFloat(grossSalary);
        if (isNaN(gs) || gs <= 0) return { empSocial: 0, empAmo: 0, totalEmp: 0, erSocial: 0, erAmo: 0, erTraining: 0, erFamily: 0, totalEr: 0, total: 0 };
        
        const salaryBase = Math.min(gs, 6000);
        // Employee share
        const empSocial = salaryBase * 0.0448;
        const empAmo = gs * 0.0226;
        const totalEmp = empSocial + empAmo;
        // Employer share
        const erSocial = salaryBase * 0.0898;
        const erAmo = gs * 0.0411;
        const erTraining = gs * 0.016;
        const erFamily = salaryBase * 0.0640;
        const totalEr = erSocial + erAmo + erTraining + erFamily;

        const total = totalEmp + totalEr;
        return { empSocial, empAmo, totalEmp, erSocial, erAmo, erTraining, erFamily, totalEr, total };
    }, [grossSalary]);

    const DetailRow: React.FC<{label: string, value: number}> = ({label, value}) => (
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{label}</span>
        <span>{formatCurrency(value, language)}</span>
      </div>
    );

    return (
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-primary-dark">{t('cnssCalculatorTitle')}</h2>
            <div className="space-y-6">
                <InputGroup id="cnss-salary" label={t('grossMonthlySalaryLabel')} value={grossSalary} onChange={e => setGrossSalary(e.target.value)} />
                <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                <div className="space-y-6 text-right rtl:text-left">
                    <div>
                        <ResultRow label={t('employeeShareLabel')} value={formatCurrency(results.totalEmp, language)} />
                        <div className="pl-4 rtl:pr-4 mt-1 space-y-1">
                          <DetailRow label={t('cnssDetailSocialBenefits')} value={results.empSocial} />
                          <DetailRow label={t('cnssDetailAMO')} value={results.empAmo} />
                        </div>
                    </div>
                    <div>
                        <ResultRow label={t('employerShareLabel')} value={formatCurrency(results.totalEr, language)} />
                         <div className="pl-4 rtl:pr-4 mt-1 space-y-1">
                          <DetailRow label={t('cnssDetailSocialBenefits')} value={results.erSocial} />
                          <DetailRow label={t('cnssDetailFamilyAllowances')} value={results.erFamily} />
                          <DetailRow label={t('cnssDetailAMO')} value={results.erAmo} />
                          <DetailRow label={t('cnssDetailProfessionalTraining')} value={results.erTraining} />
                        </div>
                    </div>
                    <ResultRow label={t('totalContributionLabel')} value={formatCurrency(results.total, language)} isMain />
                </div>
            </div>
        </div>
    );
};

const TaxLinkCard: React.FC<{ title: string; description: string; href: string; linkText: string; }> = ({ title, description, href, linkText }) => (
  <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md flex flex-col">
    <h3 className="text-xl font-bold mb-2 text-primary-dark">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">{description}</p>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-block text-center px-6 py-2 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg shadow-md transition-all"
    >
      {linkText}
    </a>
  </div>
);


const TaxesPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('tva');

  const tabs: { id: Tab; label: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { id: 'tva', label: t('tabTVA'), icon: CalculatorIcon },
    { id: 'is', label: t('tabIS'), icon: BuildingIcon },
    { id: 'ir', label: t('tabIR'), icon: UserIcon },
    { id: 'cnss', label: t('tabCNSS'), icon: UsersIcon },
    { id: 'calendar', label: t('tabCalendar'), icon: CalendarIcon },
  ];

  const renderContent = useCallback(() => {
    switch(activeTab) {
      case 'tva': return <TVACalculator />;
      case 'is': return <ISCalculator />;
      case 'ir': return <IRCalculator />;
      case 'cnss': return <CNSSCalculator />;
      case 'calendar': return <FiscalCalendar />;
      default: return null;
    }
  }, [activeTab]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('taxesTitle')}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{t('taxesSubtitle')}</p>
      </div>
      
      <div className="max-w-sm mx-auto mb-10">
          <TaxesAnimation />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8 p-1.5 bg-gray-200 dark:bg-dark-bg rounded-xl flex justify-center gap-2 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-grow flex justify-center items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-primary text-primary-dark dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-dark-card/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
        
        <div>
            {renderContent()}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('taxPortalsTitle')}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('taxPortalsSubtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 stagger-children">
            <TaxLinkCard
                title={t('simplCombinedTitle')}
                description={t('simplCombinedDesc')}
                href="https://www.tax.gov.ma/wps/portal/DGI/Je-declare-et-je-paie-en-ligne/!/"
                linkText={t('portalLinkText')}
            />
             <TaxLinkCard
                title={t('damancomTitle')}
                description={t('damancomDesc')}
                href="https://www.damancom.ma/"
                linkText={t('portalLinkText')}
            />
        </div>
      </div>

    </div>
  );
};

export default TaxesPage;