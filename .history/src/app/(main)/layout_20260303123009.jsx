import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} transition-colors duration-300 relative`}
      >
        <ThemeProvider>
          <InitialLoader />
          <Sidebar />
          <AnimatedBackground />
          <div
            className="flex flex-col min-h-screen relative z-10 transition-[padding] duration-500 ease-in-out pt-16 lg:pt-0"
            style={{ paddingLeft: "var(--sidebar-width, 0px)" }}
          >
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
