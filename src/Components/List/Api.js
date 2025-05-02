"use client";
import { useState, useEffect } from "react";
import React from "react";

import Link from "next/link";
function Api() {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProduct(data);

  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="wrapper">
        <section className="mx-auto px-  md: container lg: xl:container">
          <h2 className="lg:text-5xl mb-6 xs:text-2xl text-center mt-8">
            პროდუქტები
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {product.map((item) => (
              <div key={item.id} className="p-8 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <Link href={`/products/${item.id}`} >
              
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
               </Link>

                <div className="flex justify-between">
                  <Link href={`/products/${item.id}`}  >
                  
                  <h3 className="font-sans font-bold">
                   {item.title}
                  </h3>
                  </Link>
                  <span className="text-base font-mono">$49.90</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Api;
