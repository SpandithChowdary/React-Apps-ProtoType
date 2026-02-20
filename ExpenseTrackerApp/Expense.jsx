import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import Settings from "./Settings";

const Expenses = ({AddItem,List , DeleteItem , maxAmt , limit , goal , status}) =>{

  const [Amount , SetAmount] = useState("");
  const [Reason, SetReason] = useState("");
  const [isToggle , setisToggle] = useState(false);
  const StatusColor = (status==="Safe~")?"Green":"red";
  const handleReason = (e) =>{
    let val = e.target.value;
    SetReason(val);
  }

  const handleAmount = (e) =>{
    let val = e.target.value;
    SetAmount(val);
  }

  const setGoalAmt = (value)=>{
    console.log(value);
    limit(value);
    setisToggle(!isToggle);
  }

  const handleAddBtn = () =>{
    SetAmount("");
    SetReason("");
    AddItem(Reason,Amount)
  }

  return(
    <div style={{minHeight:"90vh",width:"100%",backgroundColor:"lightcyan",display:"flex",flexDirection:"column",justifyContent:"flex-start" , alignItems:"center"}}>
      <>
      <div className="tracker-header" style={{minHeight:50, width:"100%", backgroundColor:"orangered",display:"flex", alignItems:"center" ,justifyContent:"space-between", color:"white"}}>
        <h1 style={{marginLeft:30, fontFamily:"monospace"}}>Expense Tracker</h1>
        <button onClick={()=>setisToggle(!isToggle)} style={{background:"transparent", borderStyle:"none", color:"white", fontSize:30 ,marginRight:20 , marginTop:10}}><IoSettingsOutline /></button>
      </div>
      <div className="tracker-body" style={{minHeight:"86.5vh" , width: "100%",display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
        <div className="tracker-amt-display" style={{width: "100%",display:"flex",flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
          <h1 style={{marginLeft:30 , color:"purple", fontFamily:"sans-serif"}}>Amount spent: <span style={{fontSize:40 , fontFamily:"serif" , backgroundColor:"lightblue", padding:5, borderRadius:10}}>{maxAmt} / {goal} </span> </h1>
          <h1 style={{marginRight:30, fontFamily:"monospace", color:StatusColor , fontSize:40}}>{status}</h1>
        </div>
        <div className="tracker-subtitle" style={{color:"darkblue", fontFamily:"monospace"}}>
          {goal===0 ?<h3 style={{marginLeft:30}}>Open settings to Set your Limit</h3>:<p style={{marginLeft:30}}>Add your daily expenses for insights</p>}
        </div>
        <div  className="tracker-inputs" style={{display:"flex", flexDirection:"row" , justifyContent:"space-between"}}>
          <div className="tracker-amount-input" style={{display:"flex" , flexDirection:"row", alignItems:"center",width:"20%", paddingLeft:30}}>
            <label><h3 style={{fontSize:15, fontFamily:"monospace"}}>Amount:</h3></label>
            <input type="number" value={Amount} onChange={handleAmount} placeholder="enter amount....." style={{width:"80%", height:"10px" , marginLeft:"20px", fontFamily:"monospace" , fontWeight:600 , padding:8 , fontSize:15}}></input>
          </div>
          <div className="tracker-reason-input" style={{display:"flex" , flexDirection:"row", alignItems:"center",width:"40%", paddingLeft:30}}>
            <label><h3 style={{fontSize:15, fontFamily:"monospace"}}>Reason:</h3></label>
            <input value={Reason} onChange={handleReason} placeholder="enter expenses reason....." type="text" style={{width:"80%", height:"8px" , marginLeft:"20px" , fontFamily:"monospace" , fontWeight:600 , padding:10 , fontSize:15}}></input>
          </div>
          <div className="tracker-add-btn" style={{display:"flex" , flexDirection:"row", alignItems:"center", paddingLeft:30}}>
            <button onClick={()=>handleAddBtn()}  style={{width:100 , height:35 , marginRight:30 , borderStyle:"none", backgroundColor:"green" , color:"white", fontFamily:"monospace" , fontWeight:600 , padding:10 , fontSize:15 , borderRadius:10}}>ADD</button>
          </div>
        </div>
        <div className="tracker-table" style={{ height:"max-content",width:"100%"}}>
          <table style={{display:"flex", flexDirection:"column" , justifyContent:"space-between" , fontFamily:"monospace" , fontWeight:600, fontSize:17}}>
            <thead style={{width:"100%",backgroundColor:"orangered" , height:30, paddingTop:10, color:"white"}}>
              <tr style={{display:"flex", flexDirection:"row" , justifyContent:"space-around"}}>
                <th>S / No.</th>
                <th>Reason</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody style={{width:"100%"}}>
              {List.map((list,index)=>(
              <tr key={index} style={{width:"100%",backgroundColor:"yellowgreen" , height:30, paddingTop:10, color:"darkslateblue" , display:"flex" , justifyContent:"space-around"}}>
                <td style={{width:"24%",textAlign:"center"}}>{index+1}</td>
                <td style={{width:"24%",textAlign:"center"}}>{list[0]}</td>
                <td style={{width:"24%",textAlign:"center"}}>{list[1]}</td>
                <td style={{width:"24%",textAlign:"center"}}><button onClick={()=>DeleteItem(index)} style={{borderStyle:"none" , fontSize:15, color:"red", fontWeight:800, borderRadius:5}}>X</button></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
      {isToggle &&
      <div style={{minHeight:"90vh",width:"100%",backgroundColor:"rgba(255, 255, 255, 0.4)",display:"flex",flexDirection:"column",justifyContent:"flex-start" , alignItems:"center", position:"fixed",top:75,backdropFilter:"blur(8px)"}}>
        <>
        <Settings Confirm={setGoalAmt}/>
        </>
      </div>
      }
    </div>
  );
};

export default Expenses;