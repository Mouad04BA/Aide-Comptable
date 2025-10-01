import React from 'react';
import { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import UpcomingDeadlineReminder from './UpcomingDeadlineReminder';
import ContactSection from './ContactSection';
import BookOpenIcon from './icons/BookOpenIcon';
import SparklesIcon from './icons/SparklesIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';
import LearningGrowthIllustration from './illustrations/LearningGrowthIllustration';
import DigitalVisionaryIllustration from './illustrations/DigitalVisionaryIllustration';
import ProfessionalAccountantIllustration from './illustrations/ProfessionalAccountantIllustration';
import ModernAccountingIllustration from './illustrations/ModernAccountingIllustration';

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
      className="mt-auto px-6 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 active:scale-100 active:shadow-inner"
    >
      {buttonText}
    </button>
  </div>
);

const BenefitCard: React.FC<{
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
    <div className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
    <div className="flex items-center justify-center h-32 md:h-40 mb-4 text-primary dark:text-primary-dark">
      <Icon className="w-full h-full object-contain" />
    </div>
    <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);


export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  const handleNavigateToTaxes = () => {
    onPageChange(Page.Taxes);
  };
  
  return (
    <div>
      <section className="bg-gray-50 dark:bg-dark-bg/50 overflow-hidden">
        <div className="container mx-auto px-6 pt-12 pb-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left rtl:md:text-right">
              <ScrollAnimationWrapper>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  {t('homeTitle')}{' '}
                  <span className="text-primary dark:text-primary-dark">{t('homeTitleHighlight')}</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                  {t('homeSubtitle')}
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => onPageChange(Page.Course)}
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-100"
                  >
                    {t('homeStartLearning')}
                  </button>
                </div>
              </ScrollAnimationWrapper>
            </div>
            <div className="hidden md:block">
               <ScrollAnimationWrapper staggerIndex={1}>
                  <ModernAccountingIllustration className="w-full h-auto max-w-lg mx-auto"/>
               </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <ScrollAnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                {t('homeWhyTitle')}
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('homeWhySubtitle')}
            </p>
        </ScrollAnimationWrapper>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimationWrapper staggerIndex={0}>
                <BenefitCard
                    icon={LearningGrowthIllustration}
                    title={t('benefit1Title')}
                    description={t('benefit1Desc')}
                />
            </ScrollAnimationWrapper>
             <ScrollAnimationWrapper staggerIndex={1}>
                <BenefitCard
                    icon={DigitalVisionaryIllustration}
                    title={t('benefit2Title')}
                    description={t('benefit2Desc')}
                />
            </ScrollAnimationWrapper>
             <ScrollAnimationWrapper staggerIndex={2}>
                <BenefitCard
                    icon={ProfessionalAccountantIllustration}
                    title={t('benefit3Title')}
                    description={t('benefit3Desc')}
                />
            </ScrollAnimationWrapper>
        </div>
      </section>
      
      <section className="bg-gray-50 dark:bg-dark-bg/50 py-16 md:py-24">
        <div className="container mx-auto px-6">
            <ScrollAnimationWrapper className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                    {t('homeCoreToolsTitle')}
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
        </div>
      </section>
      
      <section className="container mx-auto px-6 py-16">
          <ScrollAnimationWrapper>
            <UpcomingDeadlineReminder onNavigate={handleNavigateToTaxes} />
          </ScrollAnimationWrapper>
      </section>

      <ContactSection />
    </div>
  );
};