import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
function Sidebar(props) {
  // const colors =[ "rgb(251, 146, 60)" ,"rgb(234 179 8)","rgb(56 189 248)" ,"rgb(139 92 246)" ,"rgb(190 242 100)"]
  const colors = ["#fb923c", "#eab308", "#38bdf8", "#8b5cf6", "#bee664"];
  const [listOpen , setlistOpen] = useState(false)
  return (
    <div className="flex flex-col gap-[40px]">
      <span onClick={()=>setlistOpen(!listOpen)} className="  ">
        <FaCirclePlus className="h-[50px] w-[50px] cursor-pointer" />
      </span>
      <ul className={` flex flex-col gap-[20px] items-center  sidebar-list ${listOpen&&"sidebar-list-active"} `}>
      {colors.map((item, index) => 
        <li key={index} 
        style={{ backgroundColor: item }}
        className=" rounded-[50%] h-[24px] w-[24px] list-none cursor-pointer"
        onClick={()=>props.addNote(item)}
         />
      )} 
      </ul>
    </div>
  );
}

export default Sidebar;
