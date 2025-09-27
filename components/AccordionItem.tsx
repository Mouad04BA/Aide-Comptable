import React, { useMemo } from 'react';
import { AccountClassInfo, ChartAccount, Language } from '../types';
import AccountItem from './AccountItem';

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

export default AccordionItem;
