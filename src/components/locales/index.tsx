'use client';
import { ReactNode, useEffect, useState } from 'react';

// THIRD - PARTY

// PROJECT IMPORTS
import useAppLanguage from '@/hooks/useAppLanguage';
import { I18n } from '@/types/i18';
import { IntlProvider, MessageFormatElement } from 'react-intl';

// load locales files
const loadLocaleData = (locale: I18n) => {
  switch (locale) {
    case 'fr':
      return import('@/utils/locales/fr.json');
    case 'ro':
      return import('@/utils/locales/ro.json');
    case 'zh':
      return import('@/utils/locales/zh.json');
    case 'en':
      return import('@/utils/locales/en.json');
    case 'vi':
    default:
      return import('@/utils/locales/vi.json');
  }
};

// ==============================|| LOCALIZATION ||============================== //

const Locales = ({ children }: { children: ReactNode }) => {
  const { i18n } = useAppLanguage();

  const [messages, setMessages] = useState<
    Record<string, string> | Record<string, MessageFormatElement[]> | undefined
  >();

  useEffect(() => {
    loadLocaleData(i18n).then(
      (d: {
        default: Record<string, string> | Record<string, MessageFormatElement[]> | undefined;
      }) => {
        setMessages(d.default);
      }
    );
  }, [i18n]);

  return (
    <>
      {messages && (
        <IntlProvider locale={i18n} defaultLocale="vi" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

export default Locales;
