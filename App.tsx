import React, { useState, useEffect, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import SimulatorPage from './components/SimulatorPage';
import ChartOfAccountsPage from './components/ChartOfAccountsPage';
import TaxesPage from './components/TaxesPage';
import ResourcesPage from './components/ResourcesPage';
import { LanguageProvider } from './contexts/LanguageContext';
import BackgroundAnimation from './components/BackgroundAnimation';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleThemeToggle = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const handlePageChange = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const renderPage = () => {
    let pageComponent;
    switch (currentPage) {
      case Page.Course:
        pageComponent = <CoursePage />;
        break;
      case Page.Simulator:
        pageComponent = <SimulatorPage />;
        break;
      case Page.ChartOfAccounts:
        pageComponent = <ChartOfAccountsPage />;
        break;
      case Page.Taxes:
        pageComponent = <TaxesPage />;
        break;
      case Page.Resources:
        pageComponent = <ResourcesPage />;
        break;
      case Page.Home:
      default:
        pageComponent = <HomePage onPageChange={handlePageChange} />;
        break;
    }
     return (
        <div className="animate-fade-in-up" key={currentPage}>
            {pageComponent}
        </div>
    );
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-800 dark:text-dark-text font-sans">
        <BackgroundAnimation />
        <div className="relative z-10 min-h-screen transition-colors duration-300">
            <Header 
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
              isDarkMode={isDarkMode} 
              onThemeToggle={handleThemeToggle} 
            />
            <main>
              {renderPage()}
            </main>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;