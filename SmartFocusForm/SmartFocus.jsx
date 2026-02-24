import { useRef , useEffect} from "react"
import React from 'react'
import "./SmartFocus.css"

function SmartFocus() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const invalidRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[])

  const handleKey = (e, nextInputRef) =>{
    console.log(e.key);
    if(e.key === "Enter"){
      e.preventDefault();
      if(nextInputRef){
        nextInputRef.current.focus();
      }else{
        handleClick(e);
      }
    }
  }
  const handleClick = (e) =>{
    e.preventDefault();
    if(inputRef.current.value === "React"){
      if(inputRef2.current.value === "React"){
        alert("Form Submitted Successfully!");
        inputRef.current.value = "";
        inputRef2.current.value = "";
        invalidRef.current.style.display = "none";
        inputRef.current.focus();
      }else{
        invalidRef.current.style.display = "block";
        inputRef2.current.focus();
      }
    }else{
      invalidRef.current.style.display = "block";
      inputRef.current.focus();
    }

  }
  return (
    <div className='Focus-Page'>
      <form className='Focus-Container'>
        <h1 className='Focus-Title'>Smart Focus Form</h1>
        <p>Type React in both inputs for validation....</p>
        <label className='Focus-label'>
          <h3>Input 1</h3>
          <input className='Focus-Input' onKeyDown={(e)=>handleKey(e,inputRef2)} type="text" ref={inputRef}/>
        </label>
        <label className='Focus-label'>
          <h3>Input 2</h3>
          <input className='Focus-Input' onKeyDown={(e)=>handleKey(e,null)} type="text" ref={inputRef2}/>
        </label>
        <span className='Focus-Invalid' ref={invalidRef}>Invalid Text</span>
        <button className='Focus-Btn' onClick={(e)=>handleClick(e)}>Submit</button>
      </form>
    </div>
  )
}

export default SmartFocus
