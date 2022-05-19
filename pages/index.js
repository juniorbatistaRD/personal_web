import Head from "next/head";
import HomePage from "@pages/HomePage/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Junior Batista</title>
        <meta
          name="description"
          content="I'm a frontend developer that enjoys the process of writing high-standard code. I find the challenge of problem-solving fun and rewarding. It motivates me to see a project come together and perform its purpose perfectly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          href="/icons/icon-192x192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#75daff" />
      </Head>
      <HomePage />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
