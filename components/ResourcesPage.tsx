import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ResourceCardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, linkText, href }) => (
  <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-md flex flex-col">
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

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('resourcesTitle')}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('resourcesSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            <ResourceCard 
                title={t('resourceCgiTitle')}
                description={t('resourceCgiDesc')}
                linkText={t('resourceCgiLink')}
                href="https://www.tax.gov.ma/wps/portal/DGI/Documentation/!"
            />
            <ResourceCard 
                title={t('resourceCircularsTitle')}
                description={t('resourceCircularsDesc')}
                linkText={t('resourceCircularsLink')}
                href="https://www.tax.gov.ma/wps/portal/DGI/Documentation/Notes-circulaires"
            />
            <ResourceCard 
                title={t('resourceCnssTitle')}
                description={t('resourceCnssDesc')}
                linkText={t('resourceCnssLink')}
                href="https://www.cnss.ma/fr/content/guides"
            />
             <ResourceCard 
                title={t('resourceOecTitle')}
                description={t('resourceOecDesc')}
                linkText={t('resourceOecLink')}
                href="https://www.oec.ma/"
            />
             <ResourceCard 
                title={t('resourceBoTitle')}
                description={t('resourceBoDesc')}
                linkText={t('resourceBoLink')}
                href="http://www.sgg.gov.ma/BulletinOfficiel.aspx"
            />
             <ResourceCard 
                title={t('resourceOmpicTitle')}
                description={t('resourceOmpicDesc')}
                linkText={t('resourceOmpicLink')}
                href="https://www.ompic.ma/"
            />
            <ResourceCard 
                title={t('resourceOmpicCreationTitle')}
                description={t('resourceOmpicCreationDesc')}
                linkText={t('resourceOmpicCreationLink')}
                href="https://www.ompic.ma/sites/default/files/guide_creation_entreprise.pdf"
            />
            <ResourceCard 
                title={t('resourceProcedureTitle')}
                description={t('resourceProcedureDesc')}
                linkText={t('resourceProcedureLink')}
                href="http://www.sgg.gov.ma/Loi/details/208_Code-de-commerce#Livre-V"
            />
            <ResourceCard 
                title={t('resourceTeledeclarationTitle')}
                description={t('resourceTeledeclarationDesc')}
                linkText={t('resourceTeledeclarationLink')}
                href="https://www.tax.gov.ma/wps/wcm/connect/dgi/b593a10a-6b4f-4b07-82a5-a50d6c0a7e6e/guide+simpl+is.pdf?MOD=AJPERES"
            />
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;