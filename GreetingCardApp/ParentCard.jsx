import React from "react";
import Card from "./Card";
const ParentCard = () => {
  return (
    <div style={{minHeight:"100vh",backgroundColor:"lightgray", display:"flex",flexDirection:"column", alignItems:"center",padding:30, gap:0}}>
      <Card name="sara" message="hello" age={19}>
        Children's
      </Card>
      <Card name="akhil" message="hola" age={15} />
      <Card name="ragu" message="namaste" age={29} />
      <Card name="Ayshu" message="konnichiwa" age={14} />
    </div>
  );
};

export default ParentCard;
