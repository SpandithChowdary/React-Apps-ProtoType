import React, { useState } from 'react'
import Subscription from './Subscription'
import FilterUsers from './FilterUsers'
function FormHandler() {
  const [Users , setUsers] = useState([])
  const handleSubscription = (Name,email,plan) =>{
     const data = {
        id: Date.now(),
        username: Name,
        email: email,
        plan: plan
      };
      console.log(data);
      setUsers(prev=>[...prev,data]);
  }

  const handleDeletion = (userId) =>{
    console.log("delete")
    setUsers(prev=>prev.filter((user)=>user.id!==userId));
  }

  return (
    <div style={{width:"100%",minHeight:"97vh",backgroundColor:"lightblue" , display:"flex" , justifyContent:"center" , flexDirection:"column"}}>
        <Subscription userData={handleSubscription}/>
        <FilterUsers SubscribedUsers = {Users} deleteuser={handleDeletion}/>
    </div>
  )
}

export default FormHandler
