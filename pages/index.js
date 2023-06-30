import LatestCode from "@/components/LatestCode";
import getLatestRepos from "@/lib/getLatestRepos";
import userData from "@/constants/data";
import Intro from "@/components/home/Intro";
import Head from "next/head";
export default function HomePage({ repositories }) {
  return (
    <>
      <Head>
        <title>Akshay&apos; Portfolio</title>
        <meta
          name="description"
          content="I post about programming and web development.Hello! I'm Akshay Sharma. I'm a Full Stack Developer. I studied BE.CSE(AIML) at CU, I enjoy building web applications and learning new technologies. I'm currently working at nextjs to be a Full Stack Developer. I'm also a freelancer . I love to travel and explore new places. I'm currently based in India."
        />
      </Head>
      <Intro />
      <LatestCode repositories={repositories} />
    </>
  );
}
export async function getStaticProps() {
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(userData, token);
  return {
    props: {
      repositories: repositories,
    },
    revalidate: 600,
  };
}
