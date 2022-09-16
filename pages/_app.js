import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon_dark.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
