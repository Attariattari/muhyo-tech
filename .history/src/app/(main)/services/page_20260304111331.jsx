import Services from "@/components/Services";

import { portfolioData } from "@/lib/data";

export default async function ServicesPage() {
  const { services } = portfolioData;

  return (
    <div className="pt-20">
      <Services data={services} />
    </div>
  );
}
