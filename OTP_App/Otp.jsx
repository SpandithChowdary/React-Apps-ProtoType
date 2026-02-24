import React, { useEffect, useRef } from 'react';
import "./Otp.css";

function Otp() {
  const Inputs = useRef([]);

  useEffect(()=>{
    Inputs.current[0].focus();
  },[]);

  const handleInput = (e, index) =>{
    if(e.target.value.length === 1 && index < Inputs.current.length - 1){
      Inputs.current[index + 1]?.focus();
    }
  }

  const handleKey = (e,prevIndex , currIndex) =>{
    if(e.key === "Backspace"){
      e.preventDefault();
      if(prevIndex >= 0){
        Inputs.current[prevIndex]?.focus();
        Inputs.current[currIndex].value = "";
      }else{
        Inputs.current[currIndex].value = "";
      }
    }
    if(e.key === "Enter" && currIndex === Inputs.current.length - 1){
      e.preventDefault();
      handleClick(e);
    }
  }

  const handleClick = (e) =>{
    e.preventDefault();
    const otp = Inputs.current.map(input => input.value).join("");
    if(otp === "1234"){  // note : In real applications, never hardcode OTPs and always verify them on the server side for security reasons.
      alert("OTP Verified Successfully!");
      Inputs.current.forEach(input => input.value = "");
      Inputs.current[0].focus();
    }else{
      alert("Invalid OTP! Please try again.");
      Inputs.current.forEach(input => input.value = "");
      Inputs.current[0].focus();
    }
  }
  return (
    <div className='Otp-Page'>
      <div className='Otp-Container'>
        <h1 className='Otp-Title'>OTP Verification</h1>
        <p className='Otp-Desc'>Enter the 4-digit OTP : 1234</p>
        <div className='Otp-Inputs'>
          <input className='Otp-Input' type="text" maxLength={1} onChange={(e)=>handleInput(e, 0)} ref={(el) => Inputs.current[0] = el} onKeyDown={(e)=>handleKey(e,-1,0)}/>
          <input className='Otp-Input' type="text" maxLength={1} onChange={(e)=>handleInput(e, 1)} ref={(el) => Inputs.current[1] = el} onKeyDown={(e)=>handleKey(e,0,1)}/>
          <input className='Otp-Input' type="text" maxLength={1} onChange={(e)=>handleInput(e, 2)} ref={(el) => Inputs.current[2] = el} onKeyDown={(e)=>handleKey(e,1,2)}/>
          <input className='Otp-Input' type="text" maxLength={1} onChange={(e)=>handleInput(e, 3)} ref={(el) => Inputs.current[3] = el} onKeyDown={(e)=>handleKey(e,2 ,3)}/>
        </div>
        <button className='Otp-Btn' onClick={(e)=>handleClick(e)}>Verify</button>
      </div>
    </div>
  )
}

export default Otp
