import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About",
    template: "Test | About | %s"
  },
    description: "Learn more about our company, mission, and team.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <>
        <h1 className="py-2 text-center  shadow border-2 border-red-200 text-3xl mt-3">Header About</h1>
        {children}
        <footer className="w-full py-5 text-center bg-red-400 text-3xl font-bold">Fotter About</footer>
       </>
  );
}
