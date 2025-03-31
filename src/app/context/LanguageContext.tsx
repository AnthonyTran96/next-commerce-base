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
  const [i18n, setI18] = useLocalStorage('app-language', initialState);
  const onChangeLocalization = (lang: I18n) => {
    setI18(lang);
  };

  const store = useMemo(
    () => ({
      i18n,
      onChangeLocalization
    }),
    [i18n]
  );

  return <LanguageContext.Provider value={store}>{children}</LanguageContext.Provider>;
}

export { LanguageContext, LanguageProvider };

