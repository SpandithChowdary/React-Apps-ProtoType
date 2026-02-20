import React from "react";

const Card = ({ name, message, age, children }) => {
  return (
    <div>
      <h1>{children}</h1>
      <p>Name: {name}</p>
      <p>Message: {message}</p>
      <p>Age: {age} {age > 18 ? "(Adult)" : "(Minor)"}</p>
    </div>
  );
};

export default Card;