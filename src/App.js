import React, { useState } from "react";
import './App.css';


function App() {
 
  const [optionsState,setoptionsState] = useState("select color");

  // const arr = [
 
  //   {
  //     colors:"red",
  //   }

  // ]

  const [color,setColor] = useState("white");


  const handleChange = (e) =>{
    setoptionsState(e.target.value);
    // console.log(setoptionsState);
    console.log(optionsState);

    if(e.target.value==="violet"){
      setColor("violet");
    }
    else if(e.target.value==="indigo"){
      setColor("indigo");
    }
    else if(e.target.value==="blue"){
      setColor("blue");
    }
    else if(e.target.value==="green"){
      setColor("green");
    }
    else if(e.target.value==="yellow"){
      setColor("yellow");
    }
    else if(e.target.value==="orange"){
      setColor("orange");
    }
    else if(e.target.value==="red"){
      setColor("red");
    }
    else{
      setColor("white");
    }
    
  }

  // const handleclick = ()=>{

  // }

  return (
    <div className="App" style={{background:color}}>
      <h2>change background color using below<br/> <span>Dropdown <span className="vib">{"VIBGYOR"}</span> List</span></h2>
      <select value={optionsState} onChange={handleChange}>

        <option value="">select color</option>
        <option value="violet">Violet</option>
        <option value="indigo">Indigo</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
      </select>
      
    </div>
  );
}

export default App;
