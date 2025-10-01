import React, { useState, useEffect, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import { HomePage } from './components/HomePage';
import CoursePage from './components/CoursePage';
import SimulatorPage from './components/SimulatorPage';
import ChartOfAccountsPage from './components/ChartOfAccountsPage';
import TaxesPage from './components/TaxesPage';
import ResourcesPage from './components/ResourcesPage';
import JobsPage from './components/JobsPage';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no theme is saved, use the user's system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleThemeToggle = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  const handlePageChange = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Course:
        return <CoursePage />;
      case Page.Simulator:
        return <SimulatorPage />;
      case Page.ChartOfAccounts:
        return <ChartOfAccountsPage />;
      case Page.Taxes:
        return <TaxesPage />;
      case Page.Resources:
        return <ResourcesPage />;
      case Page.Jobs:
        return <JobsPage />;
      case Page.Home:
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-800 dark:text-dark-text font-sans">
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