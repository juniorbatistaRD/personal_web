import "../styles/globals.css";
import { NextIntlProvider } from "next-intl";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <title>Junior Batista</title>

        <meta
          name="description"
          content="I'm a frontend developer that enjoys the process of writing high-standard code. I find the challenge of problem-solving fun and rewarding. It motivates me to see a project come together and perform its purpose perfectly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#75daff" />
        <meta
          name="keywords"
          content="Web Development, Next.js , Junior Batista"
        />
        <meta name="author" content="Junior Batista" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          href="/icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href="/icon.png"></link>
      </Head>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
