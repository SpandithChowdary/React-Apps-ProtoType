import React, { useState,useEffect } from "react";
import Expenses from "./Expense";
const ParentExpenses = () =>{

  const [ExpensesList,SetExpensesList] = useState([]);
  const [TotalExpenses , SetTotalExpenses] = useState(0);
  const [ GoalAmt , setGoalAmt] = useState(0);
  const [userStatus , setuserStatus] = useState("safe");

  
  useEffect(() => {
  if (TotalExpenses > GoalAmt) {
    setuserStatus("Danger");
  }
  else if (TotalExpenses === GoalAmt) {
    setuserStatus("Warning!");
  } else {
    setuserStatus("Safe~");
  }
}, [TotalExpenses, GoalAmt]);

  const addExpenses = (Reason,Amount) =>{
      if(Amount>0){
        SetTotalExpenses(prev=>prev+Number(Amount));
        SetExpensesList(prev=>[...prev,[Reason,Amount]]);
      }else{
        alert("Please enter amount...")
      }
  }

  const deleteExpenses = (clickedIndex) => {
      let tempVal = ExpensesList[clickedIndex][1];
      SetTotalExpenses(prev=>prev-Number(tempVal));
      SetExpensesList((prev)=>prev.filter((_,index)=>index!=clickedIndex));
  }

  const ExpensesLimit = (inputValue)=>{
    const numericValue = Number(inputValue);
    if (numericValue !== 0) {
      setGoalAmt(numericValue);
    }else{
      alert("please set minimum goal amt");
    }
  }


  return(
    <>
      <Expenses AddItem={addExpenses} List={ExpensesList} DeleteItem={deleteExpenses} maxAmt={TotalExpenses} limit={ExpensesLimit} goal={GoalAmt} status={userStatus}/>
    </>
  );
};


export default ParentExpenses;