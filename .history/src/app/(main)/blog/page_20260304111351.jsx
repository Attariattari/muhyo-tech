import Blog from "@/components/Blog";

import { portfolioData } from "@/lib/data";

export default async function BlogPage() {
  const { blogs } = portfolioData;

  return (
    <div className="pt-20">
      <Blog data={blogs} />
    </div>
  );
}
