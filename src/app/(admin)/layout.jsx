import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhyo Tech - Admin Panel",
  description: "Secure dashboard for managing Muhyo Tech content.",
};

export default function AdminLayout({ children }) {
  return (
    <div className={`${montserrat.className} bg-background transition-colors min-h-screen text-foreground`}>
      {children}
    </div>
  );
}
