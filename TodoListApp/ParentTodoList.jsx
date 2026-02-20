import React , {useState} from "react";
import TodoList from "./TodoList";

const ParentTodoList = () =>{
    const [Tasks, setTasks] = useState([
  "WakeUp at 5 am",
  "Drink 3L water",
  "Be in sunlight for 10 min",
  "Sleep before 10 pm"
]);


    const addTask = (inputValue) =>{
      if(inputValue && inputValue.trim()!=""){
      setTasks(prev=>[...prev ,inputValue]);
      }
    }

    const removeTask = (clickedIndex)=>{
       setTasks(prev=>
        prev.filter((_,index)=>index!=clickedIndex)
       )
    }

    return(
      <div style={{minHeight:"97.5vh",backgroundColor:"lightgray", display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",adding:30, gap:0}}>
      <TodoList items={Tasks} handleClick = {addTask} handleDelete = {removeTask}/>
      </div>
    );
}

export default ParentTodoList;