'use client';
import useLocalStorage from '@/hooks/useLocalStorage';
import { I18n } from '@/types/i18';
import { createContext, ReactElement, useMemo } from 'react';

const initialState = {
  i18n: 'vi' as I18n,
  onChangeLocalization: (lang: I18n) => {}
};

const LanguageContext = createContext(initialState);

function LanguageProvider({ children }: { children: ReactElement }) {
  const [locale, setLocale] = useLocalStorage('app-language', initialState.i18n);
  const onChangeLocalization = (lang: I18n) => {
    setLocale(lang);
  };

  const store = useMemo(
    () => ({
      i18n: locale,
      onChangeLocalization
    }),
    [locale]
  );

  return <LanguageContext.Provider value={store}>{children}</LanguageContext.Provider>;
}

export { LanguageContext, LanguageProvider };
