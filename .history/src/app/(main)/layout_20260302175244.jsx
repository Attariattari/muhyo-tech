import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhyo Tech - Main Site",
  description: "A professional portfolio of Muhyo Tech.",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}
