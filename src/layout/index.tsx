import ScrollToTop from '@/components/Common/ScrollToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
