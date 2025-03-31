'use client';
import Locales from '@/components/locales';
import AppLayout from '@/layout';
import { ReduxProvider } from '@/redux/provider';
import { ReactElement } from 'react';
import { LanguageProvider } from './context/LanguageContext';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <ReduxProvider>
        <LanguageProvider>
          <Locales>
            <AppLayout>{children}</AppLayout>
          </Locales>
        </LanguageProvider>
      </ReduxProvider>
    </>
  );
};

export default ProviderWrapper;
