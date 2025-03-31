'use client';
import CartSidebarModal from '@/components/Common/CartSidebarModal';
import PreviewSliderModal from '@/components/Common/PreviewSlider';
import QuickViewModal from '@/components/Common/QuickViewModal';
import ScrollToTop from '@/components/Common/ScrollToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Locales from '@/components/locales';
import { ReduxProvider } from '@/redux/provider';
import { ReactElement } from 'react';
import { CartModalProvider } from './context/CartSidebarModalContext';
import { LanguageProvider } from './context/LanguageContext';
import { PreviewSliderProvider } from './context/PreviewSliderContext';
import { ModalProvider } from './context/QuickViewModalContext';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <ReduxProvider>
        <LanguageProvider>
          <Locales>
            <CartModalProvider>
              <ModalProvider>
                <PreviewSliderProvider>
                  <Header />
                  {children}
                  <Footer />
                  <QuickViewModal />
                  <CartSidebarModal />
                  <PreviewSliderModal />
                </PreviewSliderProvider>
              </ModalProvider>
            </CartModalProvider>
            <ScrollToTop />
          </Locales>
        </LanguageProvider>
      </ReduxProvider>
    </>
  );
};

export default ProviderWrapper;
