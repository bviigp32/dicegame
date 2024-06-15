import React from "react";
import "./Button.css";

function Button({ color, onClick, children }) {
  return (
    <button className={`Button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
