export const portfolioData = {
  profile: {
    name: "Alex Cameron",
    role: "Senior Full-Stack Developer & UI Designer",
    bio: "Driving digital innovation through scalable architectures and premium user experiences.",
    longDescription:
      "With 3 years of dedicated experience in full-stack development, I specialize in crafting high-performance web applications that merge robust backend logic with intuitive, high-end design. My mission is to build seamless digital solutions that solve complex problems while maintaining the highest standards of clean code and accessibility.",
    mission:
      "To deliver exceptional digital value by engineering high-performance systems and immersive user interfaces.",
    values: [
      "Strategic Innovation",
      "Architectural Excellence",
      "Aesthetic Precision",
      "Radical Efficiency",
      "Uncompromising Integrity",
    ],
    avatar: "/about-portrait-new.jpg",
    email: "alex@muhyo.tech",
    phone: "+1 (555) 000-1234",
    location: "San Francisco, CA",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  skills: [
    { name: "React / Next.js", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Node.js / Express", level: 85, category: "Backend" },
    { name: "TypeScript", level: 88, category: "Languages" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "Framer Motion", level: 85, category: "Animation" },
    { name: "GraphQL", level: 75, category: "API" },
  ],
  services: [
    {
      id: 1,
      title: "Web Development",
      description:
        "Building fast, responsive, and SEO-optimized web applications with Next.js.",
      problemSolved:
        "Helps businesses establish a strong online presence with high-converting websites.",
      benefits: [
        "Fast loading speeds",
        "SEO friendly",
        "Mobile responsive",
        "Scalable architecture",
      ],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Designing modern, clean, and interactive interfaces that wow users.",
      problemSolved:
        "Simplifies complex user journeys, reducing bounce rates and increasing engagement.",
      benefits: [
        "Intuitive navigation",
        "Consistent branding",
        "Accessibility focused",
        "Premium look & feel",
      ],
    },
    {
      id: 3,
      title: "API Development",
      description:
        "Creating robust and secure RESTful and GraphQL APIs for your applications.",
      problemSolved:
        "Ensures seamless data flow between frontend and backend systems.",
      benefits: [
        "High performance",
        "Secure endpoints",
        "Well-documented",
        "Easy integration",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Quantum E-Commerce",
      description:
        "A premium e-commerce platform with real-time inventory and glassmorphism UI.",
      techStack: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      purpose: "E-Commerce",
      details:
        "Developed a full-featured online shop with dynamic product filtering and secure checkout.",
      thumbnail: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Skyline Real Estate",
      description:
        "Modern real estate listing portal with advanced map search and property analytics.",
      techStack: ["React", "Node.js", "Google Maps API", "PostgreSQL"],
      purpose: "Real Estate",
      details:
        "A platform for realtors to list properties and for buyers to find their dream homes.",
      thumbnail: "/images/project2.jpg",
    },
  ],
  blogs: [
    {
      id: 1,
      title: "The Future of Web Development with Next.js 15",
      summary:
        "Exploring the new features and improvements in the latest version of Next.js.",
      content:
        "Next.js 15 brings significant performance improvements and a more streamlined development experience...",
      date: "2024-03-01",
      author: "Alex Cameron",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS for Premium UIs",
      summary:
        "Tips and tricks for creating high-end designs using Tailwind's utility-first approach.",
      content:
        "Tailwind CSS has revolutionized the way we style applications. By leveraging its configuration system...",
      date: "2024-02-15",
      author: "Alex Cameron",
    },
  ],
  messages: [], // For contact form submissions
};
