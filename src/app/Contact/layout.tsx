import type { Metadata } from "next";
export const metadata: Metadata = {
  title:"Contact",
    description: "Get in touch with our team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
        <h1 className="py-5 text-center  border-2 mt-5 text-3xl text-pink-400">Header Contact</h1>
        {children}
        <footer className="w-full py-5  border-2 mb-2 text-center text-blue-100 text-3xl font-bold">Fotter</footer>
      </>
  );
}
