import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import axios from "axios";

export const metadata: Metadata ={
   title: "Product", 
     description: "Discover our featured products, specifications, and details.",
}

export interface productProps {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number;
  category: string;
  retaing: Retaing
}
export interface Retaing {
  count: number,
  rate: number
}


const Product =  async() => {
  // const res = await fetch("https://fakestoreapi.com/products");
  // const data = await res.json()
  const {data} = await axios("https://fakestoreapi.com/products")
  return (
    <div className="flex  flex-col p-10">
      <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>
       <div className="container bg-gray-100 grid grid-cols-4 gap-5  shadow-md p-4 mt-5 ">
        {data.map((item: productProps) => (
          <Link
            // href={`/Product/${item.id}`}
            href={`/About/Product/${item.id}`}
            key={item.id}
            className="w-auto h-auto bg-white p-4 duration-200 transition-all hover:scale-105"
          >
            <div className="w-full h-[180px] relative overflow-hidden">
              <img src={item.image} alt={item.title}  className="object-cover" />
            </div>
            <p className="mt-3 font-semibold flex justify-between"> Title:
              {item.title} 
            </p>
            <span> category: {item.category}</span>
            <p className="font-semibold mt-1">{item.price}</p>
            <p className="text-sm text-gray-600 text-justify">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
