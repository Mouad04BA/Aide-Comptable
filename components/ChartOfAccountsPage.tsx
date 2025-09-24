import React, { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { chartOfAccountsData } from '../data/chartOfAccountsData';
import { AccountClassInfo, ChartAccount, Language, AccountExplanationResponse } from '../types';
import SearchIcon from './icons/SearchIcon';
import AccountDetailModal from './AccountDetailModal';
import { getAccountExplanation } from '../services/geminiService';

const AccountItem: React.FC<{ 
  account: ChartAccount; 
  lang: Language;
  onClick: (account: ChartAccount) => void;
}> = ({ account, lang, onClick }) => {
  return (
    <button 
      onClick={() => onClick(account)}
      className="w-full flex justify-between items-center py-3 px-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-left transition-all duration-200 transform hover:translate-x-1 rtl:hover:-translate-x-1"
    >
      <span className="text-gray-800 dark:text-gray-200">{account.name[lang]}</span>
      <span className="font-mono text-sm text-primary-dark dark:text-primary-dark/80 bg-primary-dark/10 dark:bg-primary-dark/20 px-2 py-1 rounded-md">{account.code}</span>
    </button>
  );
};

const AccordionItem: React.FC<{
  classInfo: AccountClassInfo;
  isOpen: boolean;
  onToggle: () => void;
  lang: Language;
  searchTerm: string;
  onAccountClick: (account: ChartAccount) => void;
}> = ({ classInfo, isOpen, onToggle, lang, searchTerm, onAccountClick }) => {
  
  const filteredAccounts = useMemo(() => {
    if (!searchTerm) {
      return classInfo.accounts;
    }
    return classInfo.accounts.filter(acc => 
      acc.code.startsWith(searchTerm) || 
      acc.name[lang].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, classInfo.accounts, lang]);

  if (searchTerm && filteredAccounts.length === 0) {
    return null;
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span className="flex items-center">
            <span className="font-bold text-primary dark:text-primary-dark mr-3">Classe {classInfo.code}</span>
            {classInfo.name[lang]}
          </span>
          <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </h2>
      <div className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
          <div className="bg-white dark:bg-dark-card">
            <p className="p-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              {classInfo.description[lang]}
            </p>
            <div className="max-h-96 overflow-y-auto">
              {filteredAccounts.map(account => (
                <AccountItem key={account.code} account={account} lang={lang} onClick={onAccountClick} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

const ChartOfAccountsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<ChartAccount | null>(null);
  const [explanation, setExplanation] = useState<AccountExplanationResponse | null>(null);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const [explanationError, setExplanationError] = useState<string | null>(null);

  const handleToggle = (classCode: string) => {
    setOpenAccordion(prev => (prev === classCode ? null : classCode));
  };
  
  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return chartOfAccountsData;
    }
    return chartOfAccountsData.map(classInfo => ({
      ...classInfo,
      accounts: classInfo.accounts.filter(acc =>
        acc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.name[language].toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter(classInfo => classInfo.accounts.length > 0);
  }, [searchQuery, language]);
  
  const hasResults = filteredData.length > 0;

  const handleAccountClick = useCallback(async (account: ChartAccount) => {
    setSelectedAccount(account);
    setIsModalOpen(true);
    setIsLoadingExplanation(true);
    setExplanation(null);
    setExplanationError(null);

    try {
      const result = await getAccountExplanation(account.code, account.name[language], language);
      setExplanation(result);
    } catch (err) {
      setExplanationError(t('errorExplanation'));
    } finally {
      setIsLoadingExplanation(false);
    }
  }, [language, t]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedAccount(null);
    setExplanation(null);
    setExplanationError(null);
    setIsLoadingExplanation(false);
  }, []);

  return (
    <>
      <div className="container mx-auto px-6 py-12 animate-fade-in-down">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('chartOfAccountsTitle')}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('chartOfAccountsSubtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-2 text-primary-dark">{t('chartIntroTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {t('chartIntroText')}
            </p>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full p-4 ltr:pl-10 rtl:pr-10 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:text-white"
            />
          </div>

          <div className="space-y-4">
            {hasResults ? (
              filteredData.map(classInfo => (
                <AccordionItem
                  key={classInfo.code}
                  classInfo={classInfo}
                  isOpen={searchQuery ? true : openAccordion === classInfo.code}
                  onToggle={() => handleToggle(classInfo.code)}
                  lang={language}
                  searchTerm={searchQuery}
                  onAccountClick={handleAccountClick}
                />
              ))
            ) : (
              <div className="text-center p-8 bg-white dark:bg-dark-card rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400">{t('noResults')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <AccountDetailModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        account={selectedAccount}
        explanation={explanation}
        isLoading={isLoadingExplanation}
        error={explanationError}
      />
    </>
  );
};

export default ChartOfAccountsPage;