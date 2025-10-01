import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { courseData } from '../data/courseData';
import { Lesson } from '../types';
import LessonView from './LessonView';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import QuestionMarkCircleIcon from './icons/QuestionMarkCircleIcon';
import PencilSquareIcon from './icons/PencilSquareIcon';
import CheckIcon from './icons/CheckIcon';

const LessonCard: React.FC<{ lesson: Lesson; onSelect: () => void; isCompleted: boolean; }> = ({ lesson, onSelect, isCompleted }) => {
  const { language, t } = useLanguage();
  return (
    <button
      onClick={onSelect}
      className="w-full text-left bg-white dark:bg-dark-card p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-primary-dark pr-4">{lesson.title[language]}</h2>
        <div className="flex-shrink-0 flex items-center gap-2">
          {isCompleted && (
            <div title={t('lessonCompleted')} className="flex items-center justify-center h-7 w-7 bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 rounded-full">
              <CheckIcon className="h-4 w-4" />
            </div>
          )}
          {lesson.td && (
            <div title={t('lessonContainsTD')} className="flex items-center justify-center h-7 w-7 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-full">
              <PencilSquareIcon className="h-4 w-4" />
            </div>
          )}
          {lesson.quiz && (
             <div title={t('lessonContainsQuiz')} className="flex items-center justify-center h-7 w-7 bg-secondary/10 text-secondary-dark dark:bg-secondary/20 dark:text-secondary rounded-full">
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{lesson.description[language]}</p>
    </button>
  );
};

const CoursePage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('completedLessons');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return new Set(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to parse completed lessons from localStorage", e);
    }
    return new Set();
  });

  const handleSelectLesson = (lessonId: string) => {
    if (!completedLessons.has(lessonId)) {
        const newCompleted = new Set(completedLessons).add(lessonId);
        setCompletedLessons(newCompleted);
        try {
            localStorage.setItem('completedLessons', JSON.stringify(Array.from(newCompleted)));
        } catch(e) {
            console.error("Failed to save completed lessons to localStorage", e);
        }
    }
    setSelectedLessonId(lessonId);
  };
  
  const handleNavigateLesson = (lessonId: string) => {
      handleSelectLesson(lessonId);
  };

  const selectedLessonIndex = courseData.findIndex(lesson => lesson.id === selectedLessonId);
  const selectedLesson = courseData[selectedLessonIndex];
  const previousLesson = selectedLessonIndex > 0 ? courseData[selectedLessonIndex - 1] : null;
  const nextLesson = selectedLessonIndex < courseData.length - 1 ? courseData[selectedLessonIndex + 1] : null;

  if (selectedLesson) {
    return <LessonView 
        lesson={selectedLesson} 
        onBack={() => setSelectedLessonId(null)}
        previousLesson={previousLesson}
        nextLesson={nextLesson}
        onNavigate={handleNavigateLesson}
    />;
  }

  const totalLessons = courseData.length;
  const completedCount = completedLessons.size;
  const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimationWrapper className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('courseListTitle')}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('courseListSubtitle')}</p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                {t('courseProgress').replace('{completed}', completedCount.toString()).replace('{total}', totalLessons.toString())}
            </h2>
            <span className="font-bold text-secondary">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
              <div
                  className="bg-secondary h-4 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                  aria-valuenow={progressPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
              ></div>
          </div>
        </ScrollAnimationWrapper>
        
        <div className="grid md:grid-cols-2 gap-8">
          {courseData.map((lesson, index) => (
            <ScrollAnimationWrapper key={lesson.id} staggerIndex={index % 2}>
              <LessonCard 
                  lesson={lesson} 
                  onSelect={() => handleSelectLesson(lesson.id)} 
                  isCompleted={completedLessons.has(lesson.id)}
              />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;