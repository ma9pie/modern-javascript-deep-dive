import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { DESCRIPTION, IMAGE_URL, TITLE, URL } from '@/constants';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title={TITLE}
        description={DESCRIPTION}
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: URL,
          siteName: TITLE,
          description: DESCRIPTION,
          images: [{ url: IMAGE_URL }],
        }}
      ></DefaultSeo>
      <Component {...pageProps} />
    </>
  );
}
