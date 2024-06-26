import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Relocation-Agency",
  description: "A website for relocation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
