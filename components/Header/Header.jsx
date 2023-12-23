"use client"
import React, { useContext } from "react";
import DisplayBtn from "../Display/DisplayBtn";
import DisplayDropDown from "../Display/DisplayDropDown";
import { Context } from "@/contextapi/contextapi";

export default function Header() {
    const {showDropDown} = useContext(Context)
  return (
    <header className="w-full flex justify-between items-center h-[70px] bg-[#FFFFFF] p-[2%]">
      <DisplayBtn />
      {showDropDown && <DisplayDropDown />}
    </header>
  );
}
