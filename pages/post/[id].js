import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import React from "react";
import PostCard from "../../component/post/PostCard";
import { getAllPostPath, getPostData } from "../../lib/getPostData";
import PageLayout from "../../component/Layout";
import NextOptimizedImage from "../../component/NextOptimizedImage";

const component = {
  img: (props) => (
    <img
      src={props.src}
      style={{ width: "100%", height: "600px", padding: "20px 0" }}
    />
  ),
};
const PostById = ({ post, content, id }) => {
  return (
    <PageLayout>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <MDXRemote {...content} components={component} />
    </PageLayout>
  );
};

export default PostById;

export const getStaticPaths = () => {
  const allPath = getAllPostPath();
  console.log(allPath);
  return {
    paths: allPath,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const post = await getPostData(id);
  const mdxSource = await serialize(post.content, {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  });

  return {
    props: {
      id: id,
      post: post,
      content: mdxSource,
    },
  };
};
