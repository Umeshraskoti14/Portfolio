import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';
export type LanguageMode = 'en' | 'ne';

type UiPreferencesContextValue = {
  theme: ThemeMode;
  language: LanguageMode;
  toggleTheme: () => void;
  toggleLanguage: () => void;
};

const THEME_STORAGE_KEY = 'portfolio-theme-mode';
const LANGUAGE_STORAGE_KEY = 'portfolio-language-mode';

const UiPreferencesContext = createContext<UiPreferencesContextValue | null>(null);

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialLanguage(): LanguageMode {
  if (typeof window === 'undefined') return 'en';

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage === 'en' || storedLanguage === 'ne') {
    return storedLanguage;
  }

  return 'en';
}

export function UiPreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [language, setLanguage] = useState<LanguageMode>(getInitialLanguage);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === 'ne' ? 'ne' : 'en';
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<UiPreferencesContextValue>(
    () => ({
      theme,
      language,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'ne' : 'en')),
    }),
    [theme, language],
  );

  return <UiPreferencesContext.Provider value={value}>{children}</UiPreferencesContext.Provider>;
}

export function useUiPreferences() {
  const context = useContext(UiPreferencesContext);
  if (!context) {
    throw new Error('useUiPreferences must be used within UiPreferencesProvider.');
  }

  return context;
}
