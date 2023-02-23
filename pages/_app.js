import { Provider } from "jotai";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DentalCareOne</title>
        <meta name="description" content="Dental" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
