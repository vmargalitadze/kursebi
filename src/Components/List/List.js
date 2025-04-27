"use client"
import React, {  useState } from "react";
import Buttons from "./Buttons";
function List() {
   const [open, setOpen] = useState([]);
  return (
    <>
      <div className="flex flex-row items-center h-9 justify-center gap-8">
      <Buttons open={open} setOpen={setOpen}/>
      </div>
    </>
  );
}

export default List;
