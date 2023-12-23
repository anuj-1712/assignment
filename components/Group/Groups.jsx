/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Context } from "@/contextapi/contextapi";
import React, { useContext, useEffect } from "react";
import GroupTitle from "./GroupTitle";
import GroupItems from "./GroupItems";
import { FaRegUserCircle } from "react-icons/fa";

export default function Groups() {
  const {
    viewState,
    setStatusState,
    setPriorityState,
    statusState,
    priorityState,
    setUserState,
    userState,
    tickets
  } = useContext(Context);

  const filterTickets = () => {
    switch (viewState) {
      case "User":
        let updatedUserArr = userState.map((user) => ({
          ...user,
          data: tickets.filter((ticket) => user.id === ticket.userId),
        }));
        setUserState(updatedUserArr);
        break;
      case "Priority":
        let updatedPriorityArr = priorityState.map((p) => ({
          ...p,
          data: tickets.filter((t) => p.level === t.priority),
        }));
        setPriorityState(updatedPriorityArr);
        break;
      default:
        let updatedStatusArr = statusState.map((status) => ({
          ...status,
          data: tickets.filter((ticket) => status.title === ticket.status),
        }));
        setStatusState(updatedStatusArr);
    }
  };

  useEffect(() => {
    filterTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewState, tickets]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-[2%] gap-5">
      {viewState === "Status" &&
        statusState.map(({ title, icon, data, style }, index) => {
          return (
            <div key={index}>
              <GroupTitle title={title} Icon={icon} length={data.length} style={style}/>
              <GroupItems data={data}/>
            </div>
          );
        })}
      {viewState === "Priority" &&
        priorityState.map(({ title, icon, data, style }, index) => {
          return (
            <div key={index}>
              <GroupTitle title={title} Icon={icon} length={data.length} style={style}/>
              <GroupItems data={data}/>
            </div>
          );
        })}
      {viewState === "User" &&
        userState?.map(({ name, data, style }, index) => {
          return (
            <div key={index}>
              <GroupTitle title={name} Icon={FaRegUserCircle} />
              <GroupItems data={data}/>
            </div>
          );
        })}
    </div>
  );
}
