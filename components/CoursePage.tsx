import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { courseData } from '../data/courseData';
import { Lesson } from '../types';
import LessonView from './LessonView';

const LessonCard: React.FC<{ lesson: Lesson; onSelect: () => void; }> = ({ lesson, onSelect }) => {
  const { language } = useLanguage();
  return (
    <button
      onClick={onSelect}
      className="w-full text-left bg-white dark:bg-dark-card p-6 rounded-xl shadow-md card-3d"
    >
      <h2 className="text-xl font-bold mb-2 text-primary-dark">{lesson.title[language]}</h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{lesson.description[language]}</p>
    </button>
  );
};

const CoursePage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  const selectedLesson = courseData.find(lesson => lesson.id === selectedLessonId);

  if (selectedLesson) {
    return <LessonView lesson={selectedLesson} onBack={() => setSelectedLessonId(null)} />;
  }

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in-down">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('courseListTitle')}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('courseListSubtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {courseData.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} onSelect={() => setSelectedLessonId(lesson.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;