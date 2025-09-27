import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import EmailIcon from './icons/EmailIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import XIcon from './icons/XIcon';

// Sous-composant pour les méthodes de contact principales (Email, WhatsApp)
const MainContact: React.FC<{ href: string; icon: React.FC<any>; label: string; subLabel: string; iconBgClass: string; iconColorClass: string; }> = 
({ href, icon: Icon, label, subLabel, iconBgClass, iconColorClass }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center p-4 bg-gray-50 dark:bg-dark-bg rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 transform w-full"
    >
        
        <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-lg ${iconBgClass}`}>
            <Icon className={`w-8 h-8 ${iconColorClass}`} />
        </div>
        <div className="ml-4 rtl:mr-4 text-left rtl:text-right min-w-0">
            <p className="font-bold text-gray-800 dark:text-white">{label}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors break-words">{subLabel}</p>
        </div>
    </a>
);

// Sous-composant pour les icônes des réseaux sociaux
const SocialContact: React.FC<{ href: string; icon: React.FC<any>; label: string; hoverBgClass: string; }> = 
({ href, icon: Icon, label, hoverBgClass }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`group relative flex items-center justify-center w-14 h-14 bg-gray-100 dark:bg-gray-700/50 rounded-full shadow-sm transition-all duration-300 hover:scale-110 ${hoverBgClass}`}
    >
        
        <Icon className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
    </a>
);


const ContactSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        {t('contactTitle')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('contactSubtitle')}
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto bg-white dark:bg-dark-card rounded-2xl shadow-xl p-6 sm:p-10">
                    <div className="flex flex-col items-center text-center gap-10">
                        
                        {/* Contacts Principaux */}
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">{t('contactDirectly')}</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-lg mx-auto">
                                <MainContact 
                                    href="mailto:aidecomptable212@gmail.com"
                                    icon={EmailIcon}
                                    label={t('contactEmailLabel')}
                                    subLabel="aidecomptable212@gmail.com"
                                    iconBgClass="bg-red-100 dark:bg-red-900/30"
                                    iconColorClass="text-red-500"
                                />
                                <MainContact 
                                    href="https://wa.me/212645277163"
                                    icon={WhatsAppIcon}
                                    label={t('contactWhatsAppLabel')}
                                    subLabel="+212 645277163"
                                    iconBgClass="bg-green-100 dark:bg-green-900/30"
                                    iconColorClass="text-green-500"
                                />
                            </div>
                        </div>
                        
                        {/* Divider */}
                        <div className="w-full max-w-xs h-px bg-gray-200 dark:bg-gray-700"></div>

                        {/* Réseaux Sociaux */}
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">{t('contactFollowUs')}</h3>
                            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                                <SocialContact href="#" icon={LinkedInIcon} label="LinkedIn" hoverBgClass="hover:bg-[#0A66C2]" />
                                <SocialContact href="#" icon={FacebookIcon} label="Facebook" hoverBgClass="hover:bg-[#1877F2]" />
                                <SocialContact href="https://www.instagram.com/aide.comptable212/" icon={InstagramIcon} label="Instagram" hoverBgClass="hover:bg-[#E4405F]" />
                                <SocialContact href="#" icon={XIcon} label="X" hoverBgClass="hover:bg-[#000000] dark:hover:bg-gray-200 dark:hover:text-black" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;