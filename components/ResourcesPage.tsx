import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

interface ResourceCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, linkText, href }) => (
  <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md flex flex-col h-full">
    <h3 className="text-xl font-bold mb-2 text-primary-dark">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">{description}</p>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-block text-center px-6 py-2 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg shadow-md transition-all"
    >
      {linkText}
    </a>
  </div>
);


const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();

  const resources = [
    { key: 'Cgi', href: "https://www.tax.gov.ma/wps/portal/DGI/Documentation/!" },
    { key: 'Circulars', href: "https://www.tax.gov.ma/wps/portal/DGI/Documentation/Notes-circulaires" },
    { key: 'Cnss', href: "https://www.cnss.ma/fr/content/guides" },
    { key: 'Oec', href: "https://www.oec.ma/" },
    { key: 'Bo', href: "http://www.sgg.gov.ma/BulletinOfficiel.aspx" },
    { key: 'Ompic', href: "https://www.ompic.ma/" },
    { key: 'OmpicCreation', href: "https://www.ompic.ma/sites/default/files/guide_creation_entreprise.pdf" },
    { key: 'Procedure', href: "http://www.sgg.gov.ma/Loi/details/208_Code-de-commerce#Livre-V" },
    { key: 'Teledeclaration', href: "https://www.tax.gov.ma/wps/wcm/connect/dgi/b593a10a-6b4f-4b07-82a5-a50d6c0a7e6e/guide+simpl+is.pdf?MOD=AJPERES" },
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
      </div>
    </div>
  );
};

export default ResourcesPage;