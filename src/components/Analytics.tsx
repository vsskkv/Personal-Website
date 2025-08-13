'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { gtag } from '@/lib/analytics';

export function Analytics() {
  const pathname = usePathname();
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (GA_ID && pathname) {
      gtag.pageview({
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname,
      });
    }
  }, [pathname, GA_ID]);

  // Don't render analytics in development unless explicitly enabled
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_ENABLE_ANALYTICS) {
    return null;
  }

  if (!GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}