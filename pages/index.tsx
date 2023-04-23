import Head from "next/head";

import Separator from "../components/separator";
import Layout from "../components/layout";
import Posts from "../components/posts";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import Footer from "../components/footer";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>MapleCode | Makers of sticky experiences</title>
      </Head>
      <h1 className="mb-0 block pb-0 pt-16 text-[19vw] leading-none tracking-[-0.5vw] text-stone-50">
        Maple Code
      </h1>
      <Separator />
      <div className="grid grid-cols-2 py-2 align-middle">
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Full stack developers
        </p>
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Luis Castro
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-2 py-2 align-middle">
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          JavaScript experts
        </p>
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Alexis Duran
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-2 py-2 align-middle">
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Mobile development
        </p>
        <p className="m-0 pt-1 text-xl leading-tight text-stone-50 md:text-[1.5vw]">
          Orlando del Aguila
        </p>
      </div>
      <Separator />
      <Posts posts={allPosts} />
      <Footer />
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
    "coverColor",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
