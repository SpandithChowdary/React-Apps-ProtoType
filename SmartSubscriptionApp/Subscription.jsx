import React, { useState } from 'react'

function Subscription({userData}) {
  const [userName,setUserName] = useState("");
  const [userEmail,setUserEmail] = useState("");
  const [Plan,setPlan] = useState("Basic");

  const handleName = (e) =>{
    setUserName(e.target.value);
  }

  const handleEmail = (e) =>{
    setUserEmail(e.target.value);
  }

  const handlePlan = (e) =>{
    setPlan(e.target.value);
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault();
    if(userName!==""){
      if(userEmail!==""){
        userData(userName,userEmail,Plan)
      }else{
        alert("Please enter email")
      }
    }else{
      alert("Please enter Name")
    }
    setUserName("")
    setUserEmail("")
    setPlan("Basic")
  }

  const handleReset = () =>{
    setUserName("")
    setUserEmail("")
    setPlan("Basic")
  }

  return (
    <div style={{width:"100%",height:"max-content", display:"flex" , justifyContent:"center" , marginBottom:"30px"}}>
      <div style={{width:"40%" ,maxHeight:"max-content" , backgroundColor:"rgba(255, 255, 255, 0.54)" , marginTop:30 , borderRadius:20 , display:'flex',flexDirection:"column" , alignItems:"center",justifyContent:"flex-start" , padding:20 , boxShadow:"-3px 3px 3px rgb(255, 255, 255)"}}>
        <form onSubmit={handleSubmitForm} style={{width:"100%",display:"flex", flexDirection:"column" , alignItems:"center", gap:30}}>
          <h1 style={{fontSize:35}}>Smart Subscription</h1>
            <div style={{width:"100%",display:"flex", flexDirection:"row" , alignItems:"center",justifyContent:"center", gap:30}}>
              <label style={{display:"flex",flexDirection:"row",gap:20, fontFamily:"monospace",fontSize:20 ,alignItems:"center"}}>Name :</label>
              <input value={userName} onChange={handleName} placeholder='enter your name...' style={{fontFamily:"-apple-system" , fontSize:15 , padding:2 , borderRadius:5, borderStyle:"double" ,width:"60%", height:25}}></input>
            </div>
            <div style={{width:"100%",display:"flex", flexDirection:"row" , alignItems:"center",justifyContent:"center",gap:30}}>
              <label style={{display:"flex",flexDirectio:"row",gap:20, fontFamily:"monospace",fontSize:20, alignItems:"center"}}>email:</label>
              <input value={userEmail} onChange={handleEmail} placeholder='enter your email...' style={{fontFamily:"-apple-system" , fontSize:15 , padding:2 , borderRadius:5, borderStyle:"double" ,width:"60%", height:25}}></input>
            </div>
            <div style={{width:"100%",display:"flex", flexDirection:"row" , alignItems:"center",justifyContent:"center",gap:30}}>
              <label style={{display:"flex",flexDirection:"row",gap:20, fontFamily:"monospace",fontSize:20, alignItems:"center"}}>Plan :</label>
                <select name="plan" value={Plan} onChange={handlePlan} id="plan" style={{fontFamily:"-apple-system" , fontSize:15 , padding:2 , borderRadius:5, borderStyle:"double" ,width:"60%", height:25 , cursor:"pointer"}}>
                  <option value="Basic">Basic</option>
                  <option value="Pro">Pro</option>
                  <option value="Premium">Premium</option> 
                </select>
            </div>
            <div style={{width:"100%",display:"flex", flexDirection:"row" , alignItems:"center",justifyContent:"center",gap:30}}>
              <button type="submit" style={{padding:"5px 20px", fontFamily:"monospace", backgroundColor:"lightgreen", borderStyle:"none" , borderRadius:6 , boxShadow:"1px 2px 4px" , fontWeight:800 , cursor:"pointer"}}>Subscribe</button>
              <button type="reset" onClick={handleReset}style={{padding:"5px 20px", fontFamily:"monospace", backgroundColor:"orangered", borderStyle:"none" , borderRadius:6 , boxShadow:"1px 2px 4px", fontWeight:800 , cursor:"pointer"}}>Cancel</button>
            </div>
         </form>
      </div>
    </div>
  )
}

export default Subscription
