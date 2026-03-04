import { Montserrat } from "next/font/google";
import "../../globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhyo Tech - Admin Panel",
  description: "Secure dashboard for managing Muhyo Tech content.",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="admin-wrapper bg-slate-900 text-white min-h-screen">
          <nav className="p-4 border-b border-white/10 uppercase tracking-widest text-xs font-bold text-center">
            Admin Management Console
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
