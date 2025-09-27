import React, { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fiscalCalendarEvents } from '../data/fiscalCalendarData';
import { FiscalEvent } from '../types';
import BellAlertIcon from './icons/BellAlertIcon';

interface UpcomingDeadlineReminderProps {
  onNavigate: () => void;
}

interface UpcomingEvent {
  event: FiscalEvent;
  date: Date;
}

const findNextUpcomingEvent = (): UpcomingEvent | null => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to start of day

  let closestEvent: UpcomingEvent | null = null;

  // Check for the next 12 months to handle year rollovers
  for (let i = 0; i < 12; i++) {
    const targetDate = new Date(today.getFullYear(), today.getMonth() + i, 1);
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth(); // 0-11

    const eventsInMonth = fiscalCalendarEvents.filter(e => e.appliesToMonths.includes(month + 1));

    for (const event of eventsInMonth) {
      let eventDate: Date;
      if (event.dayRule === 'end') {
        eventDate = new Date(year, month + 1, 0);
      } else {
        eventDate = new Date(year, month, event.dayRule);
      }
      
      eventDate.setHours(0, 0, 0, 0);

      if (eventDate >= today) {
        if (!closestEvent || eventDate < closestEvent.date) {
          closestEvent = { event, date: eventDate };
        }
      }
    }
    if (closestEvent) {
      break; // Found the closest event in the current or a future month
    }
  }

  return closestEvent;
};

const UpcomingDeadlineReminder: React.FC<UpcomingDeadlineReminderProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const nextEvent = useMemo(() => findNextUpcomingEvent(), []);

  if (!nextEvent) {
    return null; // Don't render if no upcoming events are found
  }
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysRemaining = Math.ceil((nextEvent.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  const locale = language === 'ar' ? 'ar-MA' : language;
  const eventDateString = nextEvent.date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  const daysRemainingText = daysRemaining === 1 
    ? t('reminderDaysRemaining_one').replace('{count}', '1')
    : t('reminderDaysRemaining_other').replace('{count}', daysRemaining.toString());

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-md animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
            <BellAlertIcon className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
                <h3 className="font-bold text-blue-800 dark:text-blue-200">{t('reminderTitle')}</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                    {nextEvent.event.title[language]} - <span className="font-semibold">{eventDateString}</span>
                </p>
            </div>
        </div>
        <div className="text-center sm:text-right">
             <div className="font-bold text-lg text-blue-800 dark:text-blue-200">{daysRemainingText}</div>
             <button
                onClick={onNavigate}
                className="mt-1 px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-md shadow-sm transition-all"
             >
                {t('reminderButton')}
             </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDeadlineReminder;
