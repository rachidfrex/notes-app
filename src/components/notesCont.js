import React from "react";
import Notes from "./Notes";
function NotesCont(props) {
  const reverAraay=(arr)=>{
    const araay=[]

    for (let i = arr.length -1 ; i >=0 ; --i){
      araay.push(arr[i]);
    }
    return araay;
  };
  const notes=reverAraay(props.notes)
  console.log(props.notes,notes)
  return (
    
    <div className=" ms-2 ">
      <h1 className=" font-bold text-6xl mb-[20px]">Notes</h1>
      <div className=" flex flex-wrap gap-[20px] h-[90%] scroll ">
        {
          props.notes.map((item,index)=><Notes
          key={index}
          note={item}
          />
          )
         }
        
      </div>
    </div>
  );
}

export default NotesCont;
