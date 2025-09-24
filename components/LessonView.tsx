import React from 'react';
import { Lesson } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack }) => {
  const { language, t } = useLanguage();

  // Simple function to format content: bolding text between **
  const formatContent = (text: string) => {
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in-down">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-lg transition-all transform hover:scale-105"
        >
          &larr; {t('backToLessons')}
        </button>
        
        <article className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{lesson.title[language]}</h1>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {formatContent(lesson.content[language])}
          </div>
        </article>
      </div>
    </div>
  );
};

export default LessonView;