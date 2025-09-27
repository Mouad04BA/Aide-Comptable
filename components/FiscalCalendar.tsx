import React, { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fiscalCalendarEvents } from '../data/fiscalCalendarData';
import { FiscalEvent } from '../types';

const categoryColors: Record<string, string> = {
  TVA: 'bg-blue-500 border-blue-500',
  IS: 'bg-green-500 border-green-500',
  IR: 'bg-yellow-500 border-yellow-500',
  CNSS: 'bg-red-500 border-red-500',
};

const getEventsForDate = (date: Date): FiscalEvent[] => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  return fiscalCalendarEvents.filter(event => {
    if (!event.appliesToMonths.includes(month)) {
      return false;
    }
    if (event.dayRule === 'end' && day === lastDayOfMonth) {
      return true;
    }
    if (typeof event.dayRule === 'number' && day === event.dayRule) {
      return true;
    }
    return false;
  });
};

const FiscalCalendar: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const locale = language === 'ar' ? 'ar-MA' : language;

  const handlePrevMonth = useCallback(() => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }, []);

  const calendarGrid = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    // Add days from previous month
    const startDayIndex = firstDay.getDay(); // 0 = Sunday, 1 = Monday
    for (let i = startDayIndex; i > 0; i--) {
      days.push({ date: new Date(year, month, 1 - i), isCurrentMonth: false });
    }
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    // Add days from next month
    const endDayIndex = lastDay.getDay();
    for (let i = 1; i < 7 - endDayIndex; i++) {
      days.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }
    return days;
  }, [currentDate]);

  const selectedDateEvents = useMemo(() => getEventsForDate(selectedDate), [selectedDate]);

  const weekdays = useMemo(() => {
    const format = new Intl.DateTimeFormat(locale, { weekday: 'short' });
    const days = [];
    for (let i = 0; i < 7; i++) { // Assuming Sunday is the start of the week
      days.push(format.format(new Date(2024, 0, 7 + i)));
    }
    return days;
  }, [locale]);
  
  const isSameDay = (d1: Date, d2: Date) => 
    d1.getFullYear() === d2.getFullYear() && 
    d1.getMonth() === d2.getMonth() && 
    d1.getDate() === d2.getDate();

  return (
    <div className="bg-white dark:bg-dark-card p-4 sm:p-6 rounded-2xl shadow-lg grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">&larr;</button>
          <h2 className="text-xl font-bold text-center text-primary-dark">
            {currentDate.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">&rarr;</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
          {weekdays.map(day => <div key={day} className="py-2">{day}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarGrid.map(({ date, isCurrentMonth }, index) => {
            const events = getEventsForDate(date);
            const isSelected = isSameDay(date, selectedDate);
            const isToday = isSameDay(date, new Date());
            return (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`p-2 h-16 rounded-lg flex flex-col items-center justify-start transition-colors duration-200
                  ${isCurrentMonth ? 'text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-600'}
                  ${isSelected ? 'bg-primary/20 dark:bg-primary-dark/30' : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'}
                `}
              >
                <span className={`w-7 h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-primary text-white' : ''}`}>
                  {date.getDate()}
                </span>
                <div className="flex gap-1 mt-1">
                  {events.map(e => <div key={e.title.en} className={`w-1.5 h-1.5 rounded-full ${categoryColors[e.category]}`}></div>)}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="md:col-span-1 bg-gray-50 dark:bg-dark-bg p-4 rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
            {selectedDate.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' })}
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {selectedDateEvents.length > 0 ? selectedDateEvents.map(event => (
              <div key={event.title.en} className={`p-3 rounded-lg border-l-4 ${categoryColors[event.category]}`}>
                  <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">{event.title[language]}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{event.description[language]}</p>
              </div>
            )) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 pt-4 text-center">{t('noEvents')}</p>
            )}
          </div>
      </div>
    </div>
  );
};

export default FiscalCalendar;