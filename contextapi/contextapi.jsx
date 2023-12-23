"use client";
import React, { createContext, useState } from "react";
import { LuCircleDashed } from "react-icons/lu";
import { BsFillMoonFill } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { AiOutlineDash } from "react-icons/ai";
import { TbAntennaBars3 } from "react-icons/tb";
import { TbAntennaBars4 } from "react-icons/tb";
import { TbAntennaBars5 } from "react-icons/tb";
import { BsFillExclamationSquareFill } from "react-icons/bs";


export const Context = createContext();

export const AppContext = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [sortState,setSortState] = useState("Priority")
  const [viewState, setViewState] = useState("Status");
  const [tickets,setTickets] = useState([])
  const [userState,setUserState] = useState([])
  const [statusState, setStatusState] = useState([
    {
      title: "Backlog",
      icon: LuCircleDashed,
      data: [],
      style:{height:"14px",width:"14px"}
    },
    {
      title: "Todo",
      icon: FaRegCircle,
      data: [],
      style:{height:"14px",width:"14px"}
    },
    {
      title: "In progress",
      icon: BsFillMoonFill,
      data: [],
      style:{height:"14px",width:"14px",transform:"rotate(257deg)",color:"rgb(245, 200, 66)"}
    },
    {
      title: "Done",
      icon: FaCheckCircle,
      data: [],
      style:{height:"14px",width:"14px",color:"blue"}
    },
    {
      title: "Cancelled",
      icon: MdCancel,
      data: [],
      style:{height:"15px",width:"15px",color:"grey"}
    },
  ]);

  const [priorityState, setPriorityState] = useState([
    {
      title: "No priority",
      icon: AiOutlineDash,
      level: 0,
      data: [],
      style:{height:"14px",width:"14px"}
    },
    {
      title: "Low",
      icon: TbAntennaBars3,
      level: 1,
      data: [],
      style:{height:"14px",width:"14px"}
    },
    {
      title: "Medium",
      icon: TbAntennaBars4,
      level: 2,
      data: [],
      style:{height:"14px",width:"14px"}
    },
    {
      title: "High",
      icon: TbAntennaBars5,
      level: 3,
      data: [],
      style:{height:"14px",width:"14px"}
    },
    {
      title: "Urgent",
      icon: BsFillExclamationSquareFill,
      level: 4,
      data: [],
      style:{height:"14px",width:"14px",color:"orange"}
    },
  ]);
  return (
    <Context.Provider
      value={{
        showDropDown,
        setShowDropDown,
        viewState,
        setViewState,
        setPriorityState,
        priorityState,
        statusState,
        setStatusState,
        userState,
        setUserState,
        setTickets,
        tickets,
        setSortState,
        sortState
      }}
    >
      {children}
    </Context.Provider>
  );
};
