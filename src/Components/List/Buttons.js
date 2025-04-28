import React from 'react';
import Item from './items';

function Buttons({ open, setOpen }) {
const handleItemChange = (item) => {
    setOpen(item);
  };

  return (
    <>
    {Item.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemChange(item)}
          className={`outline-none rounded-lg cursor-pointer transition-all duration-150 ease-in-out 
            border border-solid border-black px-4 py-2 sm:px-6 sm:py-3 
            text-[14px] sm:text-[18px] uppercase focus:outline-none 
            hover:bg-black hover:text-white
            ${open === item ? "bg-black text-white" : "text-black"}`}
        >
          {item.text}
        </button>
      ))}
    </>
  );
}

export default Buttons;
