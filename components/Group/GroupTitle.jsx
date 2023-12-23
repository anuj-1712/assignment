import React from "react";
import { IconContext } from "react-icons";
import { GoPlus } from "react-icons/go";
import { RxDotsHorizontal } from "react-icons/rx";

export default function GroupTitle({ title, Icon, length, style }) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-3 items-center">
        <IconContext.Provider value={{ style: style }}>
          <Icon />
        </IconContext.Provider>
        <p className="font-semibold text-black text-[15px]">{title}</p>
        <p className="text-[#8D8D8D] text-[15px]">{length}</p>
      </div>
      <div className="flex gap-2">
        <IconContext.Provider value={{ className: "plus-icon" }}>
          <button>
            <GoPlus />
          </button>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "dots-icon" }}>
          <button>
            <RxDotsHorizontal />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}
