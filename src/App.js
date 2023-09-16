import TicTacToa from "./Components/TicTacToa";
import './App.css';
import { useState } from "react";

function App() {
  const goToGame = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  return (
    <div>
      <div className="player-info">
        <div className="container">
          <h1 className="welcome-text"> Welcome to Tic Tac Toe</h1>
          <div className="player-name">
            <input type="text" placeholder="Player1 name" className="player-input" onChange={(e)=>{setPlayer1(e.target.value)}}/>
            <input type="text" placeholder="Player2 name" className="player-input" onChange={(e)=>{setPlayer2(e.target.value)}}/>
            <button onClick={goToGame} className="start-button">Start</button>
          </div>
        </div>
      </div>
      <TicTacToa firstPlayer={player1} secondPlayer={player2}/>
    </div>
  );
}

export default App;
