import ErrorPage from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../../components/layout";
import DateFormatter from "../../components/date-formatter";
import Iframe from "../../components/iframe";
import markdownToHtml from "../../lib/markdown";
import { getPostBySlug, getAllPosts } from "../../lib/api";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, summary, ogImage } = post;
  const meta = { title, description: `${title} - ${summary}`, ogImage };
  return (
    <div className="container mx-auto px-5">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <Layout meta={meta}>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              image={post.image}
              date={post.date}
              alternativeCover={post.alternativeCover}
            />
            <PostBody content={post.content} />
          </article>
        </Layout>
      )}
    </div>
  );
}

function PostHeader({ title, image, date, alternativeCover }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          {alternativeCover ? (
            <Iframe src={alternativeCover} title={title} />
          ) : (
            <Image src={image} alt={`${title}`} width={1440} height={1080} />
          )}
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-2 py-2 md:py-8">
        <PostTitle>{title}</PostTitle>
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}

function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-5xl font-mono font-bold tracking-tighter mb-2">
      {children}
    </h1>
  );
}

function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "image",
    "alternativeCover",
    "date",
    "slug",
    "summary",
    "category",
    "content",
    "ogImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
