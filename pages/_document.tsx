import { Head, Html, Main, NextScript } from 'next/document';

const TITLE = 'Modern Javascript Deep Dive';
const DESCRIPTION = 'javscript study';
const AUTHOR = 'ma9pie';
const KEYWORDS = 'javscript';
const URL = 'https://modern-javascript-deep-dive.vercel.app/';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="manifest" href="/manifest.json" />

        {/* 메타 태그 설정 */}
        <meta charSet="utf-8" />
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content={AUTHOR} />
        <meta name="image" content="/images/logo/logo.svg" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={KEYWORDS} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={URL} />
        <meta property="og:site_name" content={TITLE} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:image" content="/images/logo/logo.svg" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={TITLE} />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:site_name" content={TITLE} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:image" content="/images/logo/logo.svg" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:type" content="website" />

        {/* https://favicomatic.com/ */}
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-128.png"
          sizes="128x128"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={TITLE} />
        <meta name="application-name" content={TITLE} />
        <meta name="theme-color" content="#222222" />
        <meta name="msapplication-TileColor" content="#222222" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />

        {/* https://appsco.pe/developer/splash-screens */}
        <link
          href="/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
