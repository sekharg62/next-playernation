import BlogCard from "@/components/BlogCard";
import { blogPosts, getBlogImageUrl } from "@/constants/blogs";
import { SITE_URL } from "@/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | PlayerNation",
  description:
    "Football analytics tips, player development guides, and match insights for grassroots players, coaches, and parents.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | PlayerNation",
    description:
      "Football analytics tips, player development guides, and match insights for grassroots players, coaches, and parents.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PlayerNation Blog",
    description:
      "Football analytics tips, player development guides, and match insights.",
    url: `${SITE_URL}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      image: getBlogImageUrl(post.image),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-primary"
          >
            ← Back to home
          </Link>

          <header className="mx-auto mt-8 max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              PlayerNation Blog
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Guides on match stats, highlight reels, and player development for
              grassroots football.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
