import React from 'react';
import { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import UpcomingDeadlineReminder from './UpcomingDeadlineReminder';
import ContactSection from './ContactSection';
import BookOpenIcon from './icons/BookOpenIcon';
import SparklesIcon from './icons/SparklesIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';
import AccountingIllustration from './icons/AccountingIllustration';

interface HomePageProps {
  onPageChange: (page: Page) => void;
}

const FeatureCard: React.FC<{
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  onClick: () => void;
  buttonText: string;
}> = ({ icon: Icon, title, description, onClick, buttonText }) => (
  <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary-dark/20 rounded-full mb-4">
      <Icon className="w-8 h-8 text-primary dark:text-primary-dark" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 flex-grow mb-4">{description}</p>
    <button
      onClick={onClick}
      className="mt-auto px-6 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
    >
      {buttonText}
    </button>
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  const handleNavigateToTaxes = () => {
    onPageChange(Page.Taxes);
  };
  
  return (
    <div>
      <section className="bg-gray-50 dark:bg-dark-bg/50">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {t('homeTitle')}{' '}
                <span className="text-primary dark:text-primary-dark">{t('homeTitleHighlight')}</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {t('homeSubtitle')}
              </p>
              <div className="mt-8">
                <button
                  onClick={() => onPageChange(Page.Course)}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  {t('homeStartLearning')}
                </button>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper staggerIndex={1}>
              <div className="mt-8 md:mt-0">
                <AccountingIllustration className="rounded-xl shadow-2xl w-full h-auto" />
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <ScrollAnimationWrapper className="text-center mb-4">
          <UpcomingDeadlineReminder onNavigate={handleNavigateToTaxes} />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                {t('homeFeaturesTitle')}
            </h2>
        </ScrollAnimationWrapper>
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollAnimationWrapper staggerIndex={0}>
            <FeatureCard
              icon={BookOpenIcon}
              title={t('featureCoursesTitle')}
              description={t('featureCoursesDesc')}
              onClick={() => onPageChange(Page.Course)}
              buttonText={t('featureButtonText')}
            />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper staggerIndex={1}>
            <FeatureCard
              icon={SparklesIcon}
              title={t('featureSimulatorTitle')}
              description={t('featureSimulatorDesc')}
              onClick={() => onPageChange(Page.Simulator)}
              buttonText={t('featureButtonText')}
            />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper staggerIndex={2}>
            <FeatureCard
              icon={DocumentTextIcon}
              title={t('featureResourcesTitle')}
              description={t('featureResourcesDesc')}
              onClick={() => onPageChange(Page.Resources)}
              buttonText={t('featureButtonText')}
            />
          </ScrollAnimationWrapper>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};