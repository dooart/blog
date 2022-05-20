import { getAllPosts } from "/lib/api";
import Layout from "../components/layout";
import PostPreview from "../components/post-preview";

export default function Index({ allPosts }) {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-screen-lg">
        <div className="columns-[268px] gap-8 sm:space-y-10 pb-28">
          {allPosts.map((post) => (
            <div key={post.slug} className="break-inside-avoid py-5">
              <PostPreview
                title={post.title}
                image={post.image}
                date={post.date}
                slug={post.slug}
                summary={post.summary}
                category={post.category}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "image",
    "date",
    "slug",
    "summary",
    "category",
  ]);

  return {
    props: { allPosts },
  };
}
