import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import InitialLoader from "@/components/InitialLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhyo Tech - Professional Portfolio",
  description: "Senior Full-Stack Developer & UI Designer Portfolio.",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} transition-colors duration-300 relative`}
      >
        <ThemeProvider>
          <AnimatedBackground />
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
