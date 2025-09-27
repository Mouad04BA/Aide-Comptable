import React from 'react';
import { ChartAccount, Language } from '../types';

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

export default AccountItem;
