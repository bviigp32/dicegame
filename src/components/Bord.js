import React, { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";



function Bord({name, color, gameHistory}) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((acc, cur) => acc + cur, 0);
  return (
      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(", ")}</p>
      </div>
  );
}

export default Bord;
