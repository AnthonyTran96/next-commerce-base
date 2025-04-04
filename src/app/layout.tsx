'use client';
import '@/styles/euclid-circular-a-font.css';
import '@/styles/global.css';

import PreLoader from '@/components/preLoader';
import { useEffect, useState } from 'react';
import ProviderWrapper from './ProviderWrapper';

export default function RootLayout({ children }: { children: React.ReactElement }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body>{loading ? <PreLoader /> : <ProviderWrapper>{children}</ProviderWrapper>}</body>
    </html>
  );
}
