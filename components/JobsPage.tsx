import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import BriefcaseIcon from './icons/BriefcaseIcon';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const JobsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <ScrollAnimationWrapper className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
            <BriefcaseIcon className="w-24 h-24 text-primary-dark opacity-50" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('jobsTitle')}</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {t('jobsComingSoon')}
        </p>
         <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {t('jobsStayTuned')}
        </p>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default JobsPage;
