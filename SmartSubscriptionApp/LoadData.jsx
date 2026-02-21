import React from 'react'

import { MdDelete } from "react-icons/md";

function LoadData({Users,DeleteUser,filter, onSearchChange}) {

  const handleFilter = (e) => {
    filter(e.target.value);
  };

  const handleSearch = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div>
      <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <div style={{width:"100%",padding:15}}>
              <input type="text" onChange={handleSearch} placeholder='Search here...' style={{width:"40%", height:25,fontWeight:600,fontFamily:"cursive", fontSize:16}} />
            </div>
            <div style={{display:'flex',flexDirection:"row" , gap:30}}>
              <label style={{fontFamily:"cursive",fontSize:"20",fontWeight:600}}>Filter</label>
              <select name="filter" onChange={handleFilter} id="filter" style={{fontFamily:"cursive",fontSize:"20",fontWeight:600 , marginRight:20 , width:150}}>
                <option value="NoFilter">None</option>
                <option value="byName">By Name</option>
                <option value="newUsers">New Users</option>
                <option value="oldUsers">Old Users</option>
              </select>
            </div>
          </div>
        {Users.length>0?
        <div style={{width:"100%",minHeight:175}}>
          <table style={{display:"flex", flexDirection:"column" , justifyContent:"space-between" , fontFamily:"monospace" , fontWeight:600, fontSize:17}}>
            <thead style={{width:"100%",backgroundColor:"darkcyan" , height:30, paddingTop:10, color:"white"}}>
              <tr style={{display:"flex", flexDirection:"row" , justifyContent:"space-around"}}>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{width:"100%"}}>
              {
                Users.map(user=>{
                  return(
                    <tr key={user.id} style={{width:"100%", height:30, paddingTop:10, color:"black" , display:"flex" , justifyContent:"space-around" , backgroundColor:"rgba(231, 170, 223, 0.38)"}}>
                      <td style={{width:"24%",textAlign:"center"}}>{user.id}</td>
                      <td style={{width:"24%",textAlign:"center"}}>{user.username}</td>
                      <td style={{width:"24%",textAlign:"center"}}>{user.email}</td>
                      <td style={{width:"24%",textAlign:"center"}}>{user.plan}</td>
                      <td style={{width:"24%",textAlign:"center"}}><button onClick={()=>DeleteUser(user.id)} style={{borderStyle:"none" , fontSize:15, color:"red", fontWeight:800, borderRadius:5,cursor:"pointer"}}><MdDelete /></button></td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
        :
        <div style={{width:"100%",minHeight:175, display:"flex", justifyContent:"center", alignItems:"center"}}>
          <h1 style={{fontFamily:"monospace" , opacity:0.5}}>No User Data Exists...</h1>
        </div>
        }
    </div>
  )
}

export default LoadData
