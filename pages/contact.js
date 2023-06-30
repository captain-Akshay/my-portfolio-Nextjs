import Contact from "@/components/Contact";
import Head from "next/head";
export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Send me your messages! and connect with me guys !! "
        />
      </Head>
      <Contact />
    </>
  );
}
