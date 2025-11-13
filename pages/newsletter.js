import Layout from "../components/layout";
import NewsletterForm from "../components/newsletter-form";

export default function Newsletter() {
  return (
    <Layout
      meta={{
        title: "Lab Notes Newsletter - dooart.dev",
        description:
          "Behind-the-scenes from my mad scientist experiments. See what breaks before it works.",
      }}
    >
      <div className="mx-auto w-full max-w-2xl px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tighter mb-6 text-center">
          subscribe to lab notes
        </h1>
        <div className="mb-8 space-y-4">
          <p className="text-lg leading-relaxed">
            The behind-the-scenes version of my experiments. What broke, what I
            learned, and the stupid bugs that shouldn't have taken that long.
          </p>
          <p className="text-lg leading-relaxed">
            Published whenever I finish something worth sharing. Could be weekly,
            could be monthly—depends on how many things explode.
          </p>
        </div>
        <NewsletterForm showInline={false} />
      </div>
    </Layout>
  );
}

