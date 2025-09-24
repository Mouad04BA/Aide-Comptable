export type Language = 'ar' | 'fr' | 'en';

export enum Page {
  Home = 'Home',
  Course = 'Course',
  Simulator = 'Simulator',
  ChartOfAccounts = 'ChartOfAccounts',
  Taxes = 'Taxes',
  Resources = 'Resources',
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

export interface Lesson {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  content: Record<Language, string>;
}