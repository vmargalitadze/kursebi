"use client"
import { useState, useEffect } from 'react'
import React from 'react'

import Link from 'next/link'
function Api() {
const [product, setProduct] = useState([])




const fetchProducts = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')  
    const data = await res.json()
    setProduct(data.results)
   
    }

useEffect(() => {
    fetchProducts()
}   
, [])
  return (
   <>
   <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
        {product.map((item) => (
          <div key={item.id}>
           <div className="relative overflow-hidden group">
                <Link href={`/products/${item.id}`} >
                  <img
                    className="w-full rounded-md transform duration-300 group-hover:scale-110"
                    alt="product-card"
                    src={item.image}
                  />
                </Link>
  
                <div className="flex rounded-md flex-col items-start gap-3 md:gap-4 absolute z-20 w-11/12 bottom-3 xl:bottom-5 left-1/2 transform -translate-x-1/2 p-4 xl:p-5 bg-white bg-title  bg-opacity-[85%] group-hover:-translate-y-1/2 duration-500 group-hover:opacity-0 group-hover:invisible">
                 
                  <h5 className="font-normal text-black text-paragraph leading-[1.5]">
                    <Link href="/product-details" className="text-xl md:text-2xl" data-discover="true">
                      {item.name}
                    </Link>
                  </h5>
                </div>
  
              
              </div>
          </div>
        ))}
      </div> 

   
   </>
  )
}

export default Api