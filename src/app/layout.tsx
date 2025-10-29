import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/component/NavBar";
export const metadata: Metadata = {
  title: {
      default: "Home",
      template : "Test | %s"
  },
  description: "This website is designed to showcase products and Next.js tutorials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* <h1 className="py-5 text-center  shadow text-3xl">Header</h1> */}
        <NavBar />
        {children}
        <footer className="w-full py-5 text-center bg-blue-100 text-3xl font-bold">Fotter</footer>
      </body>
    </html>
  );
}
