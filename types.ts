export type Language = 'ar' | 'fr' | 'en';

export enum Page {
  Home = 'Home',
  Course = 'Course',
  Simulator = 'Simulator',
  ChartOfAccounts = 'ChartOfAccounts',
  Taxes = 'Taxes',
  Resources = 'Resources',
  VideoStudio = 'VideoStudio',
}

export interface JournalEntry {
  account: string;
  debit: number | null;
  credit: number | null;
}

export interface GeminiResponse {
  journal_entries: JournalEntry[];
  explanation: string;
}

export interface FiscalAnalysisResponse {
  traitement: 'Réintégration' | 'Déduction' | 'Rien à signaler';
  explication: string;
  preuve: string;
}

export interface FiscalQuestionResponse {
  explication: string;
  references: string;
}

export interface AccountExplanationResponse {
  explanation: string;
  example: string;
}

export interface ChartAccount {
  code: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
}

export interface AccountClassInfo {
  code: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  accounts: ChartAccount[];
}

export interface QCM {
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctAnswerIndex: number;
}

export interface TD {
  problem: Record<Language, string>;
  solution: Record<Language, string>;
}

export interface Lesson {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  content: Record<Language, string>;
  quiz?: QCM[];
  td?: TD;
}

export interface FiscalEvent {
  appliesToMonths: number[]; // 1 for Jan, 12 for Dec
  dayRule: 'end' | number; // 'end' for last day of month, or a specific day number
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'TVA' | 'IS' | 'IR' | 'CNSS';
}