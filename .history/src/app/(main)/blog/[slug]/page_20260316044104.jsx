import BlogPostDetail from "@/components/BlogPostDetail";
import { portfolioData } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || resolvedParams.id;
  const decodedSlug = slug ? decodeURIComponent(slug) : "";
  const blog = portfolioData.blogs.find((b) => b.slug === decodedSlug);

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
  const resolvedParams = await params;
  const slug = resolvedParams.slug || resolvedParams.id;
  const decodedSlug = slug ? decodeURIComponent(slug) : "";
  console.log("== BlogPostPage Debug ==");
  console.log("resolvedParams:", resolvedParams);
  console.log("decodedSlug:", decodedSlug);
  
  const blog = portfolioData.blogs.find((b) => b.slug === decodedSlug);
  console.log("Found blog:", blog ? blog.title : "Not found");

  if (!blog) {
    notFound();
  }

  return <BlogPostDetail blog={blog} />;
}
