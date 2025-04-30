import React from 'react';
import Item from './items';
import Link from 'next/link';

function Buttons({ open, setOpen }) {
const handleCategoryChange = (item) => {
    setOpen(item);
  };

  return (
    <>
    {Item.map((item) => (
        <Link href={item.href}
          key={item.id}
          onClick={() => handleCategoryChange(item)}
          className={`outline-none rounded-lg cursor-pointer transition-all duration-150 ease-in-out 
            border border-solid border-black px-4 py-2 sm:px-6 sm:py-3 
            text-[14px] sm:text-[18px] uppercase focus:outline-none 
            hover:bg-[#203e72] hover:text-white
            ${open === item ? "bg-[#203e72] text-white" : "text-black"}`}
        >
          {item.text}
        </Link>
      ))}
    </>
  );
}

export default Buttons;
