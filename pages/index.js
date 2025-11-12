import Layout from "../components/layout";
import PostPreview from "../components/post-preview";
import { getAllPosts } from "/lib/api";

export default function Index({ allPosts }) {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-28">
          {allPosts.map((post) => (
            <div key={post.slug} className="py-5">
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
