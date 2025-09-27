import React, { useState, useCallback } from 'react';
import { Lesson } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  previousLesson: Lesson | null;
  nextLesson: Lesson | null;
  onNavigate: (lessonId: string) => void;
}

interface QuizAnswer {
  questionIndex: number;
  optionIndex: number;
  isCorrect: boolean;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack, previousLesson, nextLesson, onNavigate }) => {
  const { language, t } = useLanguage();
  
  const [isSolutionVisible, setIsSolutionVisible] = useState(false);
  
  // Quiz State
  const [quizStatus, setQuizStatus] = useState<'not_started' | 'active' | 'finished'>('not_started');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleStartQuiz = useCallback(() => {
    setQuizStatus('active');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
  }, []);

  const handleRetakeQuiz = useCallback(() => {
    setQuizStatus('not_started');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
  }, []);

  const handleAnswerSelect = useCallback((optionIndex: number) => {
    if (selectedOption !== null || !lesson.quiz) return;

    const isCorrect = optionIndex === lesson.quiz[currentQuestionIndex].correctAnswerIndex;
    setSelectedOption(optionIndex);
    setUserAnswers(prev => [...prev, {
      questionIndex: currentQuestionIndex,
      optionIndex: optionIndex,
      isCorrect: isCorrect
    }]);
  }, [selectedOption, currentQuestionIndex, lesson.quiz]);

  const handleNext = useCallback(() => {
    if (!lesson.quiz) return;
    if (currentQuestionIndex < lesson.quiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizStatus('finished');
    }
  }, [currentQuestionIndex, lesson.quiz]);


  const formatContent = (text: string) => {
    return text.split('**').map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };
  
  const renderTD = () => {
    if (!lesson.td) return null;

    return (
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('tdTitle')}</h2>
        <div className="bg-gray-50 dark:bg-dark-bg p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-2 text-primary-dark">{t('problemTitle')}</h3>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{lesson.td.problem[language]}</p>
        </div>
        <div className="mt-4">
            <button 
                onClick={() => setIsSolutionVisible(prev => !prev)}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-sm transition-all"
            >
                {isSolutionVisible ? t('hideSolution') : t('showSolution')}
            </button>
        </div>
        {isSolutionVisible && (
            <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                 <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-300">{t('solutionTitle')}</h3>
                 <div className="text-green-700 dark:text-green-200 whitespace-pre-wrap prose prose-sm dark:prose-invert">
                    <pre><code className="language-markdown">{lesson.td.solution[language]}</code></pre>
                 </div>
            </div>
        )}
      </div>
    );
  };

  const renderQuiz = () => {
    if (!lesson.quiz || lesson.quiz.length === 0) return null;
    
    const totalQuestions = lesson.quiz.length;

    if (quizStatus === 'not_started') {
      return (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t('quizTitle')}</h2>
          <button
            onClick={handleStartQuiz}
            className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            {t('startQuiz')}
          </button>
        </div>
      );
    }
    
    if (quizStatus === 'finished') {
      const score = userAnswers.filter(a => a.isCorrect).length;
      return (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">{t('quizResultsTitle')}</h2>
          <div className="mt-8 p-4 text-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <p className="text-xl font-bold text-blue-800 dark:text-blue-200">
              {t('quizScore').replace('{score}', score.toString()).replace('{total}', totalQuestions.toString())}
            </p>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleRetakeQuiz}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {t('retakeQuiz')}
            </button>
          </div>
        </div>
      );
    }

    // Quiz is active
    const question = lesson.quiz[currentQuestionIndex];
    const isAnswered = selectedOption !== null;
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

    return (
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-baseline mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('quizTitle')}</h2>
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {t('questionProgress').replace('{current}', (currentQuestionIndex + 1).toString()).replace('{total}', totalQuestions.toString())}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-6">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}></div>
        </div>

        <div className="bg-gray-50 dark:bg-dark-bg p-6 rounded-lg shadow-sm">
          <p className="font-semibold mb-4 text-gray-800 dark:text-gray-200 text-lg">{question.question[language]}</p>
          <div className="space-y-3">
            {question.options[language].map((option, oIndex) => {
              const isSelected = selectedOption === oIndex;
              const isCorrect = question.correctAnswerIndex === oIndex;
              let optionClass = 'w-full text-left p-4 rounded-md border-2 transition-all duration-200 ';

              if (isAnswered) {
                if (isCorrect) {
                  optionClass += 'bg-green-100 border-green-400 dark:bg-green-900/40 dark:border-green-600 text-gray-800 dark:text-gray-200';
                } else if (isSelected && !isCorrect) {
                  optionClass += 'bg-red-100 border-red-400 dark:bg-red-900/40 dark:border-red-600 text-gray-800 dark:text-gray-200';
                } else {
                  optionClass += 'bg-white dark:bg-dark-card border-gray-300 dark:border-gray-600 opacity-60';
                }
              } else {
                optionClass += 'bg-white dark:bg-dark-card border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary-dark cursor-pointer';
              }

              return (
                <button
                  key={oIndex}
                  onClick={() => handleAnswerSelect(oIndex)}
                  disabled={isAnswered}
                  className={optionClass}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {isAnswered && (
          <div className="mt-6 text-center">
            <div className={`p-3 mb-4 rounded-md font-bold ${selectedOption === question.correctAnswerIndex ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'}`}>
              {selectedOption === question.correctAnswerIndex ? t('correctFeedback') : t('incorrectFeedback')}
            </div>
            <button 
              onClick={handleNext} 
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {isLastQuestion ? t('finishQuiz') : t('nextQuestion')}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{lesson.title[language]}</h1>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {formatContent(lesson.content[language])}
          </div>
          {renderTD()}
          {renderQuiz()}
        </article>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center gap-4">
            <button
                onClick={() => previousLesson && onNavigate(previousLesson.id)}
                disabled={!previousLesson}
                className="px-6 py-3 text-sm font-medium rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
                &larr; {t('previousLesson')}
            </button>

            <button
                onClick={onBack}
                className="px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
                {t('backToLessons')}
            </button>

            <button
                onClick={() => nextLesson && onNavigate(nextLesson.id)}
                disabled={!nextLesson}
                className="px-6 py-3 text-sm font-medium rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
                {t('nextLesson')} &rarr;
            </button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;