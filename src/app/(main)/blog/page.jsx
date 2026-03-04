import Blog from "@/components/Blog";

async function getBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/blogs`,
  );
  return res.json();
}

export default async function BlogPage() {
  const { blogs } = await getBlogs();

  return (
    <div className="pt-20">
      <Blog data={blogs} />
    </div>
  );
}
