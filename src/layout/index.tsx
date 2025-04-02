import ScrollToTop from '@/components/scroll-to-top';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { ReactElement } from 'react';

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AppLayout;
