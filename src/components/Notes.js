import React from 'react'

function Notes(props) {
  
  return (
    <div style={{backgroundColor:props.note.color}} className='p-[25px] h-[280px] w-[280px] flex flex-col   bg-violet-500 rounded-2xl font-semibold' >
        
          <textarea className=' flex-1  resize-none bg-transparent text-md outline-none leading-7 overflow-hidden ' defaultValue={props.note.text}></textarea>
          <p>{props.note.time}</p>
        
    </div>
  )
}

export default Notes