import React from 'react';
import { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import ContactSection from './ContactSection';
import BookOpenIcon from './icons/BookOpenIcon';
import SparklesIcon from './icons/SparklesIcon';
import DocumentTextIcon from './icons/DocumentTextIcon';
import UpcomingDeadlineReminder from './UpcomingDeadlineReminder';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import AnimatedAccountant from './illustrations/AnimatedAccountant';

interface HomePageProps {
  onPageChange: (page: Page) => void;
}

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onCtaClick: () => void;
  ctaText: string;
}> = ({ icon, title, description, onCtaClick, ctaText }) => (
    <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg flex flex-col text-center items-center h-full">
        <div className="bg-primary/10 dark:bg-primary-dark/20 p-4 rounded-full mb-6">
            <div className="text-primary-dark dark:text-primary-dark/80 w-8 h-8">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-6">{description}</p>
        <button
            onClick={onCtaClick}
            className="mt-auto px-6 py-2 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg shadow-md transition-all"
        >
            {ctaText}
        </button>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper className="text-center md:text-left rtl:md:text-right">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {t('homeTitle')} <span className="text-primary-dark">{t('homeTitleHighlight')}</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                {t('homeSubtitle')}
                </p>
                <div className="mt-8">
                <button
                    onClick={() => onPageChange(Page.Course)}
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-lg shadow-xl transition-transform transform hover:scale-105"
                >
                    {t('homeStartLearning')}
                </button>
                </div>
            </ScrollAnimationWrapper>
             <div className="hidden md:flex justify-center items-center">
                <AnimatedAccountant className="w-full max-w-md lg:max-w-lg" />
            </div>
        </div>
        
        {/* Upcoming Deadline Reminder */}
        <ScrollAnimationWrapper className="mt-16 max-w-3xl mx-auto">
            <UpcomingDeadlineReminder onNavigate={() => onPageChange(Page.Taxes)} />
        </ScrollAnimationWrapper>
        
        {/* Features Section */}
        <div className="mt-16 md:mt-24">
            <ScrollAnimationWrapper className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('homeFeaturesTitle')}</h2>
            </ScrollAnimationWrapper>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <ScrollAnimationWrapper staggerIndex={0}>
                  <FeatureCard 
                      icon={<BookOpenIcon />}
                      title={t('featureCoursesTitle')}
                      description={t('featureCoursesDesc')}
                      onCtaClick={() => onPageChange(Page.Course)}
                      ctaText={t('featureButtonText')}
                  />
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper staggerIndex={1}>
                  <FeatureCard 
                      icon={<SparklesIcon />}
                      title={t('featureSimulatorTitle')}
                      description={t('featureSimulatorDesc')}
                      onCtaClick={() => onPageChange(Page.Simulator)}
                      ctaText={t('featureButtonText')}
                  />
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper staggerIndex={2}>
                  <FeatureCard 
                      icon={<DocumentTextIcon />}
                      title={t('featureResourcesTitle')}
                      description={t('featureResourcesDesc')}
                      onCtaClick={() => onPageChange(Page.Resources)}
                      ctaText={t('featureButtonText')}
                  />
                </ScrollAnimationWrapper>
            </div>
        </div>

      </div>
      <ContactSection />
    </>
  );
};

export default HomePage;