import React, { useState } from 'react'
import './App.css';
import NotesCont from './components/notesCont';
import Sidebar from './components/sidbare';
function App() {
  const [notes,setNotes] =useState([
    {
      text: "hi today is a good day ",
      time: "2:12 AM",
      color: "red",
    },
    {
      text: "hi today is a good day ",
      time: "3:12 AM",
      color: "yellow",
    }
    ,
    {
      text: "hi today is a good day ",
      time: "4:12 AM",
      color: "pink",
    }
    ,
    {
      text: "hi today is a good day ",
      time: "5:12 AM",
      color: "cyan", 
    }
  ])
  const addNote=(color)=>{
    const tempNotes = [...notes];
    tempNotes.push({
      text:"",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      color,
    })
    setNotes(tempNotes)
    
  }
  return (
    <div className='app' >
      <Sidebar  addNote={addNote}/>
      <NotesCont notes={notes} />
    </div>
  );
}

export default App;
