
"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" },
  { name: "Login", path: "/Login" },
  { name: "Register", path: "/Register" },
];

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="navBar w-full h-[100px] flex items-center justify-between px-10 bg-gray-500 py-5 mb-2 shadow-md">
        <button className="px-4 py-2 bg-gray-700  rounded hover:bg-gray-600"  onClick={() => router.back()}>  ← Back </button>
        <div className="flex items-end justify-center gap-5">
            {links.map((link) => (
                <Link key={link.path} href={link.path} className={`link px-3 py-1 rounded ${  pathname === link.path ? "text-red-500 border-b-2 underline bg-blue-600" : " hover:bg-gray-600"  }`}>
                    {link.name}
                </Link>
            ))}
        </div>
        <button  className="px-4 py-2 bg-gray-700  rounded hover:bg-gray-600"   onClick={() => router.forward()} >  Forward → </button>
    </div>
  );
};

export default NavBar;
