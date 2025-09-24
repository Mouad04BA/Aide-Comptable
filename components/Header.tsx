import React, { useState } from 'react';
import { Page, Language } from '../types';
import LogoIcon from './icons/LogoIcon';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';
import GlobeIcon from './icons/GlobeIcon';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onPageChange: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onPageChange, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onPageChange(page)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-primary-dark/10 text-primary-dark dark:bg-primary-dark/20 dark:text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, isDarkMode, onThemeToggle }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu on language change
  };

  const handleMobileLinkClick = (page: Page) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { page: Page.Home, label: t('navHome') },
    { page: Page.Course, label: t('navCourses') },
    { page: Page.Simulator, label: t('navSimulator') },
    { page: Page.ChartOfAccounts, label: t('navChartOfAccounts') },
    { page: Page.Taxes, label: t('navTaxes') },
    { page: Page.Resources, label: t('navResources') },
  ];

  return (
    <header className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 animate-fade-in-down">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <LogoIcon className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">{t('appName')}</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
                {navItems.map(item => (
                    <NavLink key={item.page} page={item.page} currentPage={currentPage} onPageChange={onPageChange}>{item.label}</NavLink>
                ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="hidden md:flex items-center p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Change language"
                >
                  <GlobeIcon className="h-5 w-5" />
                  <span className="mx-1 font-medium text-sm">{language.toUpperCase()}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full ltr:right-0 rtl:left-0 mt-2 w-36 bg-white dark:bg-dark-card rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="block w-full text-left ltr:text-left rtl:text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 -mr-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
              </div>
            </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="md:hidden mt-4" id="mobile-menu">
                <div className="flex flex-col gap-1">
                    {navItems.map(item => (
                        <button
                          key={item.page}
                          onClick={() => handleMobileLinkClick(item.page)}
                          className={`block w-full text-left ltr:text-left rtl:text-right px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                            currentPage === item.page
                              ? 'bg-primary-dark/10 text-primary-dark dark:bg-primary-dark/20 dark:text-white'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card'
                          }`}
                        >
                          {item.label}
                        </button>
                    ))}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                     {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex items-center w-full text-left ltr:text-left rtl:text-right px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                                language === lang.code
                                ? 'bg-primary-dark/10 text-primary-dark dark:bg-primary-dark/20 dark:text-white'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card'
                            }`}
                        >
                            <GlobeIcon className="h-5 w-5 mr-3 rtl:ml-3" />
                            {lang.name}
                        </button>
                    ))}
                </div>
            </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
