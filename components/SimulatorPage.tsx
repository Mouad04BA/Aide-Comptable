import React, { useState, useCallback } from 'react';
import { GeminiResponse, FiscalAnalysisResponse, FiscalQuestionResponse } from '../types';
import { analyzeAccountingOperation, analyzeFiscalOperation, answerFiscalQuestion } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import BalanceIcon from './icons/BalanceIcon';
import ShieldCheckIcon from './icons/ShieldCheckIcon';
import ArrowUpCircleIcon from './icons/ArrowUpCircleIcon';
import ArrowDownCircleIcon from './icons/ArrowDownCircleIcon';
import MinusCircleIcon from './icons/MinusCircleIcon';
import QuestionMarkCircleIcon from './icons/QuestionMarkCircleIcon';

type AccountingTab = 'accounting';
type FiscalTab = 'fiscalAnalysis' | 'fiscalQA';
type SimulatorTab = AccountingTab | FiscalTab;

const LoadingSpinner: React.FC = () => (
  <div className="text-center py-8">
    <div role="status">
      <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0492C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="max-w-3xl mx-auto mt-8 p-4 text-center bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg">
    {message}
  </div>
);

const AccountingSimulator: React.FC = () => {
    const { language, t } = useLanguage();
    const [prompt, setPrompt] = useState<string>('');
    const [result, setResult] = useState<GeminiResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = useCallback(async () => {
        if (!prompt.trim()) {
        setError(t('errorPrompt'));
        return;
        }
        setIsLoading(true);
        setError(null);
        setResult(null);
        try {
        const analysis = await analyzeAccountingOperation(prompt, language);
        setResult(analysis);
        } catch (err) {
        console.error(err);
        setError(t('errorAnalysis'));
        } finally {
        setIsLoading(false);
        }
    }, [prompt, language, t]);

    const handleNewOperation = useCallback(() => {
        setPrompt('');
        setResult(null);
        setError(null);
        setIsLoading(false);
    }, []);
    
    const formatNumber = (num: number | null | undefined) => {
        if (num === null || num === undefined) return '-';
        const locale = language === 'ar' ? 'ar-MA' : language === 'fr' ? 'fr-FR' : 'en-US';
        return new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
    };

    return (
        <div>
            <div className="max-w-3xl mx-auto mt-8 bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg">
                <div className="flex flex-col gap-4">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t('simulatorPlaceholder')}
                    className="w-full h-28 p-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:text-white"
                    disabled={isLoading}
                />
                <div className="flex gap-4">
                    <button
                    onClick={handleAnalyze}
                    disabled={isLoading}
                    className="flex-grow px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:scale-100"
                    >
                    {isLoading ? t('analyzingButton') : t('analyzeButton')}
                    </button>
                    <button
                    onClick={handleNewOperation}
                    className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
                    >
                    {t('newOperationButton')}
                    </button>
                </div>
                </div>
            </div>
            
            {isLoading && <LoadingSpinner />}
            
            {error && <ErrorMessage message={error} />}

            {result && (
                <div className="max-w-3xl mx-auto mt-8 space-y-6">
                <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t('journalEntryTitle')}</h2>
                    <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-r-lg">{t('tableAccount')}</th>
                            <th scope="col" className="px-6 py-3">{t('tableDebit')}</th>
                            <th scope="col" className="px-6 py-3 rounded-l-lg">{t('tableCredit')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {result.journal_entries.map((entry, index) => (
                            <tr key={index} className="bg-white dark:bg-dark-card border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {entry.account}
                            </th>
                            <td className="px-6 py-4 text-green-600 dark:text-green-400 font-mono">{formatNumber(entry.debit)}</td>
                            <td className="px-6 py-4 text-red-600 dark:text-red-400 font-mono">{formatNumber(entry.credit)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-300">{t('explanationTitle')}</h2>
                    <p className="text-green-700 dark:text-green-200 leading-relaxed">{result.explanation}</p>
                </div>
                </div>
            )}
        </div>
    );
};

const FiscalAnalysisSimulator: React.FC = () => {
  const { language, t } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<FiscalAnalysisResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!prompt.trim()) {
      setError(t('errorPrompt'));
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const analysis = await analyzeFiscalOperation(prompt, language);
      setResult(analysis);
    } catch (err) {
      console.error(err);
      setError(t('errorAnalysis'));
    } finally {
      setIsLoading(false);
    }
  }, [prompt, language, t]);

   const handleNewOperation = useCallback(() => {
    setPrompt('');
    setResult(null);
    setError(null);
    setIsLoading(false);
  }, []);

  const getTreatmentVisuals = (treatment: FiscalAnalysisResponse['traitement']) => {
    switch (treatment) {
      case 'Réintégration':
        return {
          Icon: ArrowUpCircleIcon,
          color: 'text-orange-500 dark:text-orange-400',
          bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        };
      case 'Déduction':
        return {
          Icon: ArrowDownCircleIcon,
          color: 'text-green-500 dark:text-green-400',
          bgColor: 'bg-green-50 dark:bg-green-900/20',
        };
      case 'Rien à signaler':
      default:
        return {
          Icon: MinusCircleIcon,
          color: 'text-gray-500 dark:text-gray-400',
          bgColor: 'bg-gray-50 dark:bg-gray-700/20',
        };
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-8 bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t('fiscalAnalysisPromptPlaceholder')}
          className="w-full h-28 p-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:text-white"
          disabled={isLoading}
        />
         <div className="flex gap-4 mt-4">
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="flex-grow px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:scale-100"
            >
              {isLoading ? t('analyzingButton') : t('analyzeButton')}
            </button>
            <button
              onClick={handleNewOperation}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              {t('newOperationButton')}
            </button>
          </div>
      </div>
      
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {result && (
        <div className="max-w-3xl mx-auto mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">{t('fiscalAnalysisResult')}</h2>
          
          {(() => {
            const { Icon, color, bgColor } = getTreatmentVisuals(result.traitement);
            return (
              <div className={`p-6 rounded-xl shadow-lg ${bgColor}`}>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Icon className={`w-6 h-6 ${color}`} />
                  <span className={color}>{t('fiscalTreatment')}</span>
                </h3>
                <p className={`text-2xl font-bold ${color}`}>{result.traitement}</p>
              </div>
            );
          })()}

          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-primary-dark">{t('fiscalExplanation')}</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{result.explication}</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{t('fiscalProof')}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-mono leading-relaxed whitespace-pre-wrap">{result.preuve}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const FiscalQASimulator: React.FC = () => {
  const { language, t } = useLanguage();
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<FiscalQuestionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = useCallback(async () => {
    if (!prompt.trim()) {
      setError(t('errorPrompt'));
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const analysis = await answerFiscalQuestion(prompt, language);
      setResult(analysis);
    } catch (err) {
      console.error(err);
      setError(t('errorAnalysis'));
    } finally {
      setIsLoading(false);
    }
  }, [prompt, language, t]);

   const handleNew = useCallback(() => {
    setPrompt('');
    setResult(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-8 bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t('fiscalQAPromptPlaceholder')}
          className="w-full h-28 p-3 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors dark:text-white"
          disabled={isLoading}
        />
         <div className="flex gap-4 mt-4">
            <button
              onClick={handleAsk}
              disabled={isLoading}
              className="flex-grow px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:scale-100"
            >
              {isLoading ? t('analyzingButton') : t('askButton')}
            </button>
            <button
              onClick={handleNew}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              {t('newOperationButton')}
            </button>
          </div>
      </div>
      
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      {result && (
        <div className="max-w-3xl mx-auto mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white">{t('fiscalQAResponse')}</h2>
          
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-primary-dark">{t('fiscalQADetailedExplanation')}</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{result.explication}</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{t('fiscalQAReferences')}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-mono leading-relaxed whitespace-pre-wrap">{result.references}</p>
          </div>
        </div>
      )}
    </div>
  );
};


const FiscalPage: React.FC = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<FiscalTab>('fiscalAnalysis');

    return (
        <div>
            <div className="max-w-xl mx-auto mt-6">
                <div className="p-1.5 bg-gray-200/50 dark:bg-dark-bg/50 rounded-xl flex justify-center gap-2">
                    <button
                        onClick={() => setActiveTab('fiscalAnalysis')}
                        className={`flex-1 flex justify-center items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                            activeTab === 'fiscalAnalysis'
                            ? 'bg-white dark:bg-primary text-primary-dark dark:text-white shadow'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-dark-card/50'
                        }`}
                        >
                        <ShieldCheckIcon className="w-5 h-5" />
                        {t('simulatorFiscalAnalysisTab')}
                    </button>
                    <button
                        onClick={() => setActiveTab('fiscalQA')}
                        className={`flex-1 flex justify-center items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                            activeTab === 'fiscalQA'
                            ? 'bg-white dark:bg-primary text-primary-dark dark:text-white shadow'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-dark-card/50'
                        }`}
                        >
                        <QuestionMarkCircleIcon className="w-5 h-5" />
                        {t('simulatorFiscalQATab')}
                    </button>
                </div>
            </div>
            {activeTab === 'fiscalAnalysis' ? <FiscalAnalysisSimulator /> : <FiscalQASimulator />}
        </div>
    );
};

const SimulatorPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<SimulatorTab>('accounting');

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('simulatorTitle')}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{t('simulatorSubtitle')}</p>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <div className="p-1.5 bg-gray-200 dark:bg-dark-bg rounded-xl flex justify-center gap-2">
            <button
              onClick={() => setActiveTab('accounting')}
              className={`flex-grow flex justify-center items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                activeTab === 'accounting'
                  ? 'bg-white dark:bg-primary text-primary-dark dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-dark-card/50'
              }`}
            >
              <BalanceIcon className="w-5 h-5" />
              {t('simulatorAccountingTab')}
            </button>
            <button
              onClick={() => setActiveTab('fiscalAnalysis')}
              className={`flex-grow flex justify-center items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                activeTab.startsWith('fiscal')
                  ? 'bg-white dark:bg-primary text-primary-dark dark:text-white shadow'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-dark-card/50'
              }`}
            >
              <ShieldCheckIcon className="w-5 h-5" />
              {t('simulatorFiscalAnalysisTab')}
            </button>
        </div>
      </div>
      
      {activeTab === 'accounting' ? <AccountingSimulator /> : <FiscalPage />}

    </div>
  );
};

export default SimulatorPage;