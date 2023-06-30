import About from "@/components/about/About";
import Head from "next/head";
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me!</title>
        <meta
          name="description"
          content="little bit bragging about me dont take me seriously"
        />
      </Head>
      <About />
    </>
  );
}
