import Head from "next/head";
import Image from "next/image";
import PageLayout from "../component/Layout";
import PostCard from "../component/post/PostCard";
import { getPostData, getPostMetaData } from "../lib/getPostData";
import styles from "../styles/Home.module.css";

export default function Home({ postMetaData }) {
  console.log(postMetaData);
  return (
    <PageLayout>
      <PostCard postMetaData={postMetaData} />
    </PageLayout>
  );
}
export const getStaticProps = () => {
  const postMetaData = getPostMetaData();
  console.log(postMetaData);
  return {
    props: {
      postMetaData,
    },
  };
};
