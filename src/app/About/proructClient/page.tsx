"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { productProps } from "../Product/page";

const ProductClient = () => {
  const [products, setProducts] = useState<productProps[]>([]); // ✅ مقدار اولیه آرایه

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col p-10">
      <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>

      <div className="container bg-gray-100 grid grid-cols-4 gap-5 shadow-md p-4 mt-5">
        {products.length === 0 ? (
          <p className="text-center col-span-4">Loading...</p>
        ) : (
          products.map((item) => (
            <Link
              href={`/About/Product/${item.id}`}
              key={item.id}
              className="w-auto h-auto bg-white p-4 duration-200 transition-all hover:scale-105"
            >
              <div className="w-full h-[180px] relative overflow-hidden">
                <img src={item.image} alt={item.title} className="object-cover" />
              </div>
              <p className="mt-3 font-semibold flex justify-between">
                Title: {item.title}
              </p>
              <span>Category: {item.category}</span>
              <p className="font-semibold mt-1">${item.price}</p>
              <p className="text-sm text-gray-600 text-justify">
                {item.description}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductClient;
