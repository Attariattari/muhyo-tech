import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      name: "Web Engineering",
      description:
        "Crafting robust, high-performance web applications using modern technologies.",
      slug: "web-engineering",
    },
    {
      name: "UI/UX Architecture",
      description:
        "Designing premium user interfaces with a focus on high-end aesthetics and usability.",
      slug: "ui-ux-architecture",
    },
    {
      name: "Brand Identity",
      description:
        "Developing unique visual identities that resonate with your target audience.",
      slug: "brand-identity",
    },
  ];

  return (
    <main className="p-32 bg-black text-white min-h-screen">
      <h1 className="text-6xl font-black mb-16 italic tracking-tight uppercase">
        Solutions
      </h1>
      <div className="flex flex-col gap-12">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group p-16 border border-white/5 bg-white/5 rounded-3xl hover:bg-white/10 transition flex items-center justify-between"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-black italic">{service.name}</h2>
              <p className="opacity-60 text-xl max-w-lg leading-relaxed">
                {service.description}
              </p>
            </div>
            <span className="text-4xl opacity-10 group-hover:opacity-100 transition">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
