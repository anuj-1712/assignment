"use client";
import { Context } from "@/contextapi/contextapi";
import React, { useContext, useEffect, useState } from "react";
import CardTags from "./CardTags";
import { FaRegUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Card({ id, title, userId, status, level, tags }) {
  const { viewState, userState, statusState, priorityState } =
    useContext(Context);

  const state = statusState.filter((s) => status === s.title);
  const priority = priorityState.filter((p) => level === p.level);
  const StatusIcon = state[0].icon;
  const statusStyle = state[0].style;
  const PriorityIcon = priority[0].icon;
  const priorityStyle = priority[0].icon;

  return (
    <div className="bg-[#ffffff] p-4 rounded-md shadow-lg">
      <div className="flex justify-between items-center my-2 w-full">
        <p className="text-[#8d8d8d]">{id}</p>
        {viewState !== "User" && (
          <IconContext.Provider value={{ style: { color: "" } }}>
            <FaRegUserCircle />
          </IconContext.Provider>
        )}
      </div>
      <div className="flex gap-2 items-start my-2">
        {viewState !== "Status" && (
          <span>
            <IconContext.Provider value={{ style: statusStyle }}>
              <StatusIcon />
            </IconContext.Provider>
          </span>
        )}
        <span className="font-semibold -mt-1">{title}</span>
      </div>
      <div className="flex gap-2 items-center">
        {viewState !== "Priority" && (
          <div className="p-[0.1rem] rounded-sm border-[1px] border-[#8d8d8d]">
            <IconContext.Provider value={{ style: priorityStyle }}>
              <PriorityIcon />
            </IconContext.Provider>
          </div>
        )}
        {tags.map((tag, index) => {
          return (
            <React.Fragment key={index}>
              <CardTags tag={tag} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
