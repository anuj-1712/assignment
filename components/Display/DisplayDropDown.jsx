"use client";
import { Context } from "@/contextapi/contextapi";
import React, { useContext, useEffect } from "react";

const options = [
  {
    title: "Grouping",
    values: ["Status", "User", "Priority"],
  },
  {
    title: "Ordering",
    values: ["Priority", "Title"],
  },
];
export default function DisplayDropDown() {
  const {
    viewState,
    setViewState,
    setSortState,
    sortState,
    userState,
    statusState,
    priorityState,
    setUserState,
    setPriorityState,
    setStatusState,
  } = useContext(Context);

  const handleChange = (e, title) => {
    if (title === "Grouping") {
      setViewState(e.target.value);
    } else {
      setSortState(e.target.value);
      sortTickets();
    }
  };

  const sortTickets = () => {
    if (viewState === "Status") {
      const sortedArr = handleSort(statusState);
      // console.log(sortedArr)
    } else if (viewState === "Priority") {
      const sortedArr = handleSort(priorityState);
      // console.log(sortedArr)
    } else {
      const sortedArr = handleSort(userState);
      // console.log(sortedArr)
    }
  };

  const handleSort = (items) => {
    const sortedArr = [...items].map((a) => {
      if (sortState === "Priority") {
        a.data.sort((x, y) => {
          return x.priority - y.priority;
        });

      } else if (sortState === "Title") {
        a.data.sort((x, y) => {
          return y.title - x.title;
        });
      }
    });
    return sortedArr
  };

  return (
    <div className="absolute top-[7%] left-[2%] px-8 py-4 sm:w-[350px] w-[250px] bg-white shadow-lg rounded-md">
      {options.map((filter, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between w-full my-4"
          >
            <p className="text-[#8D8D8D] text-lg">{filter.title}</p>
            <select
              className="w-2/5 p-2 border-[1px] border-[#8D8D8D] rounded-md outline-none"
              onChange={(e) => handleChange(e, filter.title)}
              value={filter.title === "Grouping" ? viewState : sortState}
            >
              {filter.values.map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </div>
  );
}
