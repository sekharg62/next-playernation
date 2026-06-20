import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/constants/blogs";

type BlogCardProps = {
  post: BlogPost;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 transition-colors hover:border-primary/25">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-video overflow-hidden"
        aria-label={`Read article: ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-0.5 font-medium text-primary">
            {post.category}
          </span>
          <time dateTime={post.publishedAt} className="text-muted">
            {formatDate(post.publishedAt)}
          </time>
          <span className="text-muted" aria-hidden="true">
            ·
          </span>
          <span className="text-muted">{post.readTimeMinutes} min read</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
