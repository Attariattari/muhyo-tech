import Blog from "@/components/Blog";
import { portfolioData } from "@/lib/data";

export const metadata = {
  title: "Insights & Tech Blogs | Muhyo Tech",
  description:
    "Explore the latest in web development, AI, and design. Expert insights from Pir Ghulam Muhyo Din and the Muhyo Tech team.",
  openGraph: {
    title: "Muhyo Tech Blog | Digital Innovation Insights",
    description:
      "Stay ahead of the curve with our technical blogs, tutorials, and industry insights.",
    images: [
      "https://res.cloudinary.com/dg5gwixf1/image/upload/v1772738795/ChatGPT_Image_Mar_5_2026_12_26_08_PM_hdvfoz.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhyo Tech Blog | Pir Ghulam Muhyo Din",
    description:
      "Deep dives into modern tech stacks and architectural excellence.",
  },
};

export default async function BlogPage() {
  const { blogs } = portfolioData;

  return (
    <div className="pt-0">
      <Blog data={blogs} />
    </div>
  );
}
