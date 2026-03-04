import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AdminSidebar from "@/components/AdminSidebar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Muhyo Tech - Admin Panel",
  description: "Secure dashboard for managing Muhyo Tech content.",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.className} bg-background transition-colors`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen bg-[#0a0f1c]">
            <AdminSidebar />
            <div className="flex-grow flex flex-col pl-64">
              <nav className="p-4 border-b border-border bg-card/60 backdrop-blur sticky top-0 z-10">
                <div className="flex justify-between items-center text-xs tracking-widest font-bold text-foreground">
                  <span className="uppercase">Admin Console</span>
                  <div className="flex items-center gap-4">
                    <span className="bg-accent/10 px-2 py-1 rounded-sm text-accent">
                      Active Session
                    </span>
                  </div>
                </div>
              </nav>
              <main className="p-8 flex-grow overflow-y-auto">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
