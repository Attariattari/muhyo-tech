import BlogPostDetail from "@/components/BlogPostDetail";
import { portfolioData } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return portfolioData.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const paramKeys = Object.keys(params || {});
  const slugValue = params?.[paramKeys[0]] || params?.slug || params?.id;
  
  if (!slugValue) return { title: "Blog Not Found" };
  
  const target = String(decodeURIComponent(slugValue)).toLowerCase().trim();
  const blogs = portfolioData?.blogs || [];
  
  const blog = blogs.find((b) => {
    const sSlug = String(b.slug || "").toLowerCase().trim();
    const sId = String(b.id || "").toLowerCase().trim();
    return sSlug === target || sId === target;
  });

  if (!blog) return { title: "Article Not Found | Muhyo Tech" };

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

export default async function BlogPostPage(props) {
  const params = await props.params;
  const blogs = portfolioData?.blogs || [];
  
  // Try to find the slug from any key in params
  const values = Object.values(params || {});
  const target = values.length > 0 ? String(decodeURIComponent(values[0])).toLowerCase().trim() : "";

  const blog = blogs.find((b) => {
    const sSlug = String(b.slug || "").toLowerCase().trim();
    const sId = String(b.id || "").toLowerCase().trim();
    return sSlug === target || sId === target;
  });

  if (!blog) {
    // If not found, let's return a simple UI instead of notFound() to see what's happening
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-20 text-white bg-black">
        <h1 className="text-4xl font-black mb-4 uppercase">Article Lookup Failed</h1>
        <p className="opacity-50 mb-8 max-w-md text-center italic">
          Target Slug: &quot;{target}&quot; <br/>
          Available Articles: {blogs.length} <br/>
          Param Keys: {JSON.stringify(Object.keys(params || {}))}
        </p>
        <Link href="/blog" className="px-8 py-4 bg-accent rounded-full font-bold uppercase text-[10px]">
          Return to Journal
        </Link>
      </div>
    );
  }

  return <BlogPostDetail blog={blog} />;
}
