"use client";
import { Context } from "@/contextapi/contextapi";
import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { IoFilterSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function DisplayBtn() {
  const { showDropDown, setShowDropDown } = useContext(Context);
  return (
    <button
      className="flex justify-evenly items-center p-2 w-[130px] rounded-md shadow-lg"
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <IconContext.Provider value={{ className: "filter-icon" }}>
        <IoFilterSharp />
      </IconContext.Provider>
      <span>Display</span>
      {!showDropDown && (
        <IconContext.Provider value={{ className: "arrow-down-icon" }}>
          <MdKeyboardArrowDown />
        </IconContext.Provider>
      )}
      {showDropDown && (
        <IconContext.Provider value={{ className: "arrow-up-icon" }}>
          <MdKeyboardArrowUp />
        </IconContext.Provider>
      )}
    </button>
  );
}
