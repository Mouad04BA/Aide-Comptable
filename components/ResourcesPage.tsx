import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import RocketLaunchIcon from './icons/RocketLaunchIcon';
import ShieldExclamationIcon from './icons/ShieldExclamationIcon';
import ClipboardDocumentCheckIcon from './icons/ClipboardDocumentCheckIcon';

interface ResourceCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, linkText, href }) => (
  <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <h3 className="text-xl font-bold mb-2 text-primary-dark">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">{description}</p>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-block text-center px-6 py-2 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 active:scale-100"
    >
      {linkText}
    </a>
  </div>
);

const GuideCard: React.FC<{
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  points: string[];
  iconBgClass: string;
}> = ({ icon: Icon, title, description, points, iconBgClass }) => (
  <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 ${iconBgClass} rounded-full mb-4`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <span className="flex-shrink-0 text-secondary mr-2 rtl:ml-2 mt-1">✓</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);


const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();

  const resources = [
    { key: 'Cgi', href: "https://www.tax.gov.ma/fr/code-g%C3%A9n%C3%A9ral-des-imp%C3%B4ts" },
    { key: 'Circulars', href: "https://www.tax.gov.ma/fr/notes-circulaires" },
    { key: 'Cnss', href: "https://www.cnss.ma/fr/content/guides" },
    { key: 'Cmr', href: "https://www.cmr.gov.ma/" },
    { key: 'Oec', href: "https://www.oec.ma/" },
    { key: 'Bo', href: "http://www.sgg.gov.ma/BulletinOfficiel.aspx" },
    { key: 'Procedure', href: "https://www.justice.gov.ma/lg-1/legislation/fr/Code%20de%20commerce.pdf" },
    { key: 'Teledeclaration', href: "https://www.tax.gov.ma/wps/wcm/connect/dgi/94e22262-e673-45ef-b13c-783331b2e4b0/Guide_teleservices_simpl.pdf?MOD=AJPERES" },
  ];
  
  const guides = [
    {
      key: 'Creation',
      icon: RocketLaunchIcon,
      bgColor: 'bg-green-500',
      points: ['creationStep1', 'creationStep2', 'creationStep3', 'creationStep4', 'creationStep5', 'creationStep6']
    },
    {
      key: 'Difficulties',
      icon: ShieldExclamationIcon,
      bgColor: 'bg-red-500',
      points: ['difficultiesPrevention', 'difficultiesRecovery', 'difficultiesLiquidation']
    },
    {
      key: 'Actions',
      icon: ClipboardDocumentCheckIcon,
      bgColor: 'bg-blue-500',
      points: ['actionsAGO', 'actionsCapital', 'actionsHq', 'actionsShares']
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <ScrollAnimationWrapper className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('resourcesTitle')}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('resourcesSubtitle')}</p>
        </ScrollAnimationWrapper>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, index) => (
              <ScrollAnimationWrapper key={res.key} staggerIndex={index % 3}>
                <ResourceCard 
                    title={t(`resource${res.key}Title`)}
                    description={t(`resource${res.key}Desc`)}
                    linkText={t(`resource${res.key}Link`)}
                    href={res.href}
                />
              </ScrollAnimationWrapper>
            ))}
        </div>
        
        <div className="mt-16 md:mt-24">
            <ScrollAnimationWrapper className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('practicalGuidesTitle')}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{t('practicalGuidesSubtitle')}</p>
            </ScrollAnimationWrapper>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {guides.map((guide, index) => (
                    <ScrollAnimationWrapper key={guide.key} staggerIndex={index}>
                        <GuideCard 
                            icon={guide.icon}
                            title={t(`guide${guide.key}Title`)}
                            description={t(`guide${guide.key}Desc`)}
                            points={guide.points.map(p => t(p))}
                            iconBgClass={guide.bgColor}
                        />
                    </ScrollAnimationWrapper>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;