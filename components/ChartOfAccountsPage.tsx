import React, { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { chartOfAccountsData } from '../data/chartOfAccountsData';
import { AccountClassInfo, ChartAccount, AccountExplanationResponse } from '../types';
import SearchIcon from './icons/SearchIcon';
import AccountDetailModal from './AccountDetailModal';
import { getAccountExplanation } from '../services/geminiService';
import AccordionItem from './AccordionItem';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

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
      <div className="container mx-auto px-6 py-12">
        <ScrollAnimationWrapper className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('chartOfAccountsTitle')}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{t('chartOfAccountsSubtitle')}</p>
        </ScrollAnimationWrapper>

        <div className="max-w-4xl mx-auto mt-8">
            <div className="max-w-md mx-auto mb-8">
                
            </div>

          <ScrollAnimationWrapper className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-2 text-primary-dark">{t('chartIntroTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {t('chartIntroText')}
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="relative mb-8">
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
          </ScrollAnimationWrapper>

          <div className="space-y-4">
            {hasResults ? (
              filteredData.map((classInfo, index) => (
                <ScrollAnimationWrapper key={classInfo.code} staggerIndex={index}>
                  <AccordionItem
                    classInfo={classInfo}
                    isOpen={searchQuery ? true : openAccordion === classInfo.code}
                    onToggle={() => handleToggle(classInfo.code)}
                    lang={language}
                    searchTerm={searchQuery}
                    onAccountClick={handleAccountClick}
                  />
                </ScrollAnimationWrapper>
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