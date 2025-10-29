import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata ={
   title: "Product", 
     description: "Discover our featured products, specifications, and details.",
}
const products = [
  { id: "1", name: "Gol", price: "100 AF", image: "/gol.jpeg", time: "1 day ago" },
  { id: 2, name: "Car", price: "10000 AF", image: "/foldar.jpeg", time: "1 day ago" },
  { id: 3, name: "Caw", price: "50000 AF", image: "/caw.jpeg", time: "1 day ago" },
  { id: 4, name: "زعفران", price: "100 AF", image: "/زعفران.jpeg", time: "1 day ago" },
  { id: 5, name: "Sofa", price: "10000 AF", image: "/sofa.jpeg", time: "1 day ago" },
  { id: 6, name: "Table", price: "10000 AF", image: "/table.jpeg", time: "1 day ago" },
];

const Product = () => {
  return (
    <div className="flex min-h-screen flex-col p-10">
      <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>
       <div className="container bg-gray-100 grid grid-cols-4 gap-5 shadow-md p-4 mt-5">
        {products.map((item) => (
          <Link
            // href={`/Product/${item.id}`}
            href={`/About/Product/${item.id}`}
            key={item.id}
            className="w-auto h-[350px] bg-white p-4 duration-200 transition-all hover:scale-105"
          >
            <div className="w-full h-[180px] relative overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <p className="mt-3 font-semibold flex justify-between">
              {item.name} <span>{item.time}</span>
            </p>
            <p className="font-semibold mt-1">{item.price}</p>
            <p className="text-sm text-gray-600 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
