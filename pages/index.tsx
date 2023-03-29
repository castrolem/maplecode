import Head from "next/head";

import Separator from "../components/separator";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>MapleCode - We make sticky experiences</title>
      </Head>
      <h1 className="text-[19vw] tracking-[-0.5vw] text-stone-50 leading-none pt-16 pb-0 mb-0 block">
        Maple Code
      </h1>
      <Separator />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
