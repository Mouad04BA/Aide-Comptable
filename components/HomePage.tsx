import React from 'react';
import { Page } from '../types';
import AccountingIllustration from './icons/AccountingIllustration';
import { useLanguage } from '../contexts/LanguageContext';

interface HomePageProps {
  onPageChange: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-16 md:py-24 animate-fade-in-down">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {t('homeTitle')} <span className="text-primary-dark">{t('homeTitleHighlight')}</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t('homeSubtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap">
            <button
              onClick={() => onPageChange(Page.Course)}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg card-3d"
            >
              {t('homeStartLearning')}
            </button>
            <button
              onClick={() => onPageChange(Page.Simulator)}
              className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg shadow-lg card-3d"
            >
              {t('homeTrySimulator')}
            </button>
            <button
              onClick={() => onPageChange(Page.Resources)}
              className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg card-3d"
            >
              {t('homeExploreResources')}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center animate-float">
          <AccountingIllustration className="w-full max-w-md h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;