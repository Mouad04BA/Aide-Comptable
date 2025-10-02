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
    // If a theme is saved in localStorage, use it. Otherwise, detect system preference.
    return savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  });
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Effect to apply the theme class to <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Effect to listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update from system preference if the user hasn't manually set a theme
      if (!('theme' in localStorage)) {
        setIsDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleThemeToggle = useCallback(() => {
    setIsDarkMode(prev => {
      const newIsDarkMode = !prev;
      // When user manually toggles, save the preference to override system settings
      localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
      return newIsDarkMode;
    });
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