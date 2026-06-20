import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getFeaturedBlogPosts } from "@/constants/blogs";
import { SITE_URL } from "@/constants";

export default function BlogSection() {
  const posts = getFeaturedBlogPosts(3);

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Player Nation Blog",
    description:
      "Football analytics, player development, and match insights from Player Nation.",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <section id="blog" className="scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
         
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Insights for players, coaches &amp; parents
          </h2>
          <p className="mt-4 text-muted">
            Practical guides on match stats, player development, and getting more
            from every game.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
