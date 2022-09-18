import "../styles/globals.scss";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2a9461",
      },
      secondary: {
        main: "#494c7d",
      },
    },
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/favicon_dark.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
