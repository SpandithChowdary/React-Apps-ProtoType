import React, { useState } from "react";

const TodoList = ({ items, handleClick, handleDelete }) => {
  const [isToggle, setisToggle] = useState(false);
  const Option = isToggle ? "Cancel" : "Add";
  const btnColor = isToggle ? "red" : "green";
  const [InputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <div
      style={{
        padding: 10,
        minHeight: "100%",
        width: 800,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <h1>Todo-List</h1>
        <button
          style={{
            backgroundColor: btnColor,
            borderStyle: "none",
            width: 100,
            height: 30,
            color: "white",
            fontWeight: 600,
          }}
          onClick={() => setisToggle(!isToggle)}
        >
          {Option}
        </button>
      </div>
      {isToggle && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <input
            placeholder="Enter the task...."
            style={{ padding: 5, width: 660, marginRight: 20 }}
            value={InputValue}
            onChange={handleChange}
          ></input>
          <button
            style={{
              backgroundColor: "green",
              borderStyle: "none",
              width: 100,
              color: "white",
              fontWeight: 600,
            }}
            onClick={() => {
              handleClick(InputValue);
            }}
          >
            Add
          </button>
        </div>
      )}

      <div
        style={{
          marginTop: 10,
          width: "100%",
          backgroundColor: "lightsteelblue",
          gap: 20,
        }}
      >
        {items.map((task, index) => (
          <div
            key={index}
            style={{
              padding: 10,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              borderBottomColor: "1px solid black",
            }}
          >
            <div>{task}</div>
            <button
              style={{
                color: "red",
                background: "white",
                borderStyle: "none",
                borderRadius: 5,
                marginRight: 20,
              }}
              onClick={() => {
                handleDelete(index);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
