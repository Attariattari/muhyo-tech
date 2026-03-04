import Services from "@/components/Services";

async function getServices() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/services`,
  );
  return res.json();
}

export default async function ServicesPage() {
  const { services } = await getServices();

  return (
    <div className="pt-20">
      <Services data={services} />
    </div>
  );
}
