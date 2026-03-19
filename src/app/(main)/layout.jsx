import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import InitialLoader from "@/components/InitialLoader";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhyo Tech - Professional Portfolio",
  description: "Senior Full-Stack Developer & UI Designer Portfolio.",
};

export default function MainLayout({ children }) {
  return (
      <div
        className={`${inter.className} transition-colors duration-300 relative`}
      >
          <InitialLoader />
          <ScrollProgress />
          <Sidebar />
          <AnimatedBackground />
          <WhatsAppButton />
          <div
            className="flex flex-col min-h-screen relative z-10 transition-[padding] duration-500 ease-in-out pt-16 lg:pt-0"
            style={{ paddingLeft: "var(--sidebar-width, 0px)" }}
          >
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
      </div>
  );
}
