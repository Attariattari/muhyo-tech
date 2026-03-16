import BlogPostDetail from "@/components/BlogPostDetail";
import { portfolioData } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = portfolioData.blogs.find((b) => b.id.toString() === id);

  if (!blog) return {};

  return {
    title: `${blog.title} | Muhyo Tech Blog`,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      images: [blog.image],
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [blog.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const blog = portfolioData.blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    notFound();
  }

  return <BlogPostDetail blog={blog} />;
}
