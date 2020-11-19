import React from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.showToast("i was clicked")}>Click me</button>
  );
};

export default Button;
