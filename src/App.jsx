import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import GameList from "./components/GameList";
function App() {
  return (
    <div className="game-list">
      <BrowserRouter>
        <GameList></GameList>
      </BrowserRouter>
    </div>
  );
}

export default App;
