import Hero from "@/components/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
// import AllPosts from "@/components/post/all-post";
import Head from "next/head";
export default function ProjectPage() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="These are my Protfolio Porject to showcase how much i can code!"
        />
      </Head>
      <Hero />
      <Portfolio />
    </>
  );
}
