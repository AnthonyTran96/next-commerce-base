'use client';
import CartSidebarModal from '@/components/Common/CartSidebarModal';
import PreviewSliderModal from '@/components/Common/PreviewSlider';
import QuickViewModal from '@/components/Common/QuickViewModal';
import ScrollToTop from '@/components/Common/ScrollToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReduxProvider } from '@/redux/provider';
import { ReactElement } from 'react';
import { CartModalProvider } from './context/CartSidebarModalContext';
import { PreviewSliderProvider } from './context/PreviewSliderContext';
import { ModalProvider } from './context/QuickViewModalContext';

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <ReduxProvider>
        <CartModalProvider>
          <ModalProvider>
            <PreviewSliderProvider>
              <Header />
              {children}
              <QuickViewModal />
              <CartSidebarModal />
              <PreviewSliderModal />
            </PreviewSliderProvider>
          </ModalProvider>
        </CartModalProvider>
      </ReduxProvider>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default ProviderWrapper;
