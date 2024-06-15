import React, { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";
import logo from "../assets/logo.png";
import "../index.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [opponentNum, setOpponentNum] = useState(1);
  const [opponentSum, setOpponentSum] = useState(0);
  const [opponentGameHistory, setOpponentGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOpponentNum = random(6);
    setNum(nextNum);
    setSum((prevSum) => prevSum + nextNum);
    setGameHistory((prevHistory) => [...prevHistory, nextNum]);

    setOpponentNum(nextOpponentNum);
    setOpponentSum((prevSum) => prevSum + nextOpponentNum);
    setOpponentGameHistory((prevHistory) => [...prevHistory, nextOpponentNum]);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setOpponentNum(1);
    setOpponentSum(0);
    setOpponentGameHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button color="blue" onClick={handleRollClick}>
            던지기
          </Button>
          <Button color="red" onClick={handleClearClick}>
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <h2 className="Board-heading">나</h2>
          <Dice color="blue" num={num} />
          <h2 className="Board-heading">총점</h2>
          <p>{sum}</p>
          <h2 className="Board-heading">기록</h2>
          <p>{gameHistory.join(", ")}</p>
        </div>
        <div className="Board App-board">
          <h2 className="Board-heading">상대</h2>
          <Dice color="red" num={opponentNum} />
          <h2 className="Board-heading">총점</h2>
          <p>{opponentSum}</p>
          <h2 className="Board-heading">기록</h2>
          <p>{opponentGameHistory.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
