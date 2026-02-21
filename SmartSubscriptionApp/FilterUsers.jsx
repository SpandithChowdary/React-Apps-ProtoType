import React, { useState } from 'react';
import { FaEye,FaEyeSlash} from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import LoadData from './LoadData';
function FilterUsers({SubscribedUsers,deleteuser}) {
  const [isToggle , setisToggle] = useState(true);
  const [SearchItem , setSearchItem] = useState("");
   const [filterType , setFilterType] = useState("none");

  let finalUsers = [...SubscribedUsers];

  const handleToggle = () =>{
    setisToggle(!isToggle);
  }

  if(filterType){
    console.log(filterType);
    if (filterType === "byName") {
      finalUsers.sort((a, b) => a.username.localeCompare(b.username));
    }
    if (filterType === "newUsers") {
      finalUsers.sort((a, b) => b.id - a.id);
    }
    if (filterType === "oldUsers") {
      finalUsers.sort((a, b) => a.id - b.id);
    }
  }

  if (SearchItem) {
    finalUsers = finalUsers.filter(user =>
      user.username.toLowerCase().includes(SearchItem.toLowerCase())
    );
  }

  return (
      <div style={{width:"100%",height:"max-content",backgroundColor:"palevioletred" , display:"flex" ,flexDirection:"column"}}>
          
          <div style={{width:"100%",height:50, display:"flex" ,flexDirection:"row", justifyContent:"space-between", alignItems:"center",backgroundColor:"rgba(255,255,255,0.3)"}}>
            <h1 style={{fontFamily:"cursive", marginLeft:30}}>User Logs</h1>
            <div style={{display:"flex" ,flexDirection:"row" , gap:30, marginRight:30}}>
              <button onClick={handleToggle} style={{fontSize:20, backgroundColor:"transparent", fontWeight:900 , borderStyle:"none" , cursor:"pointer", marginTop:6}}>
                {isToggle?<FaEye />:<FaEyeSlash />}
              </button>
              <h3>{isToggle?"Hide":"Show"}</h3>
            </div>
          </div>
          <div >

          </div>
          {isToggle?
          <LoadData Users={finalUsers} onSearchChange={setSearchItem} DeleteUser={deleteuser} filter={setFilterType}/>:
          <div style={{width:"100%",minHeight:235, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h1 style={{fontFamily:"monospace" , opacity:0.5}}><IoPersonRemove />  User Logs are Hidden...</h1>
          </div>}
      </div>
  )
}

export default FilterUsers
