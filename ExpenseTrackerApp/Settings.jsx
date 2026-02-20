import React, { useState } from "react";

const Settings = ({Confirm}) =>{
  const [Value,setValue] = useState("");

  const handleInput = (e) =>{
    const val = e.target.value;
    setValue(val);
  }
  return(
    <div style={{width:"40%", minHeight:"30vh", backgroundColor:"white", marginTop:90 , display:"flex" , flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
      <h1>Set Your Expenses Limit</h1>
      <div className="tracker-amount-input" style={{display:"flex" , flexDirection:"row", alignItems:"center",width:"70%", paddingLeft:30}}>
            <label><h3 style={{fontSize:15, fontFamily:"monospace"}}>Amount:</h3></label>
            <input type="number" min={0} onChange={handleInput} value={Value} placeholder="enter amount....." style={{width:"80%", height:"10px" , marginLeft:"20px", fontFamily:"monospace" , fontWeight:600 , padding:8 , fontSize:15}}></input>
      </div>
      <div className="tracker-add-btn" style={{display:"flex" , flexDirection:"row", alignItems:"center", paddingLeft:30}}>
            <button onClick={()=>Confirm(Value)} style={{width:100 , height:35 , marginRight:30 , borderStyle:"none", backgroundColor:"green" , color:"white", fontFamily:"monospace" , fontWeight:600 , padding:10 , fontSize:15 , borderRadius:10}}>Confirm</button>
      </div>
    </div>
  );
}

export default Settings;