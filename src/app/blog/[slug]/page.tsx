import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  return {
    title: "Page Not Found | PlayerNation",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  void params;
  notFound();
}
