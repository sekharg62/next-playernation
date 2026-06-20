import ContentPageLayout from "@/components/ContentPageLayout";
import { blogPosts, getBlogImageUrl, getBlogPost } from "@/constants/blogs";
import { SITE_URL } from "@/constants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Player Nation",
    };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;

  const imageUrl = getBlogImageUrl(post.image);

  return {
    title: `${post.title} | Player Nation Blog`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [
        {
          url: imageUrl,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: getBlogImageUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Player Nation",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Player Nation",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
    wordCount: post.content.join(" ").split(/\s+/).length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ContentPageLayout title={post.title} description={post.description}>
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-border">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
            {post.category}
          </span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTimeMinutes} min read</span>
        </div>

        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}

        <section>
          <h2>Keep improving every match</h2>
          <p>
            Upload your next game to Player Nation for pro-style stats, automated
            highlights, and player ratings that help you train with purpose.
          </p>
        </section>

        <p className="text-sm">
          <Link
            href="/blog"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            ← Back to all articles
          </Link>
        </p>
      </ContentPageLayout>
    </>
  );
}
