import Navbar from "@/components/Navbar";
import "../styles/global.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Cover from "@/components/cover";
import Footer from "@/components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Cover />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
