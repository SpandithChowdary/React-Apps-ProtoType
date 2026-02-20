import React, { useState } from "react";

const Toggle = () =>{
  const [istoggle,setIstoggle] = useState(true);
  const page = istoggle? "black":"lightgray";
  const container = istoggle?"darkblue":"white";
  const fontColor = istoggle?"white":"black";
  const btnColor = istoggle?"pink":"lightblue";
      return(
        <div style={{backgroundColor:page, minHeight:"100vh", width:"100%",display:"flex", justifyContent:"center",alignItems:"center"}}>
          <div style={{backgroundColor:container, minHeight:400,width:400 , borderRadius:20,display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",color:fontColor}}>
            <h2>{istoggle ? "ON" : "OFF"}</h2>
            <button style={{borderRadius:5,padding:10,backgroundColor:btnColor} } onClick={()=>setIstoggle(!istoggle)}>Toggle</button>
          </div>
        </div>
      );
}

export default Toggle