import React, { useState } from "react"; // Importing the useState hook
import GameGrid from "./GameGrid.js";

function Game() {
   // State to manage moves and turn
   const [moves, setMoves] = useState(new Array(9).fill("")); // Initialize grid with 9 empty strings
   const [turn, setTurn] = useState("X"); // Initialize the turn with "X"

   function gridClick(whichSquare) {
      // Check if the square is empty
      if (moves[whichSquare] === "") {
         // Create a copy of the moves array
         const movesCopy = [...moves];
         // Set the clicked square to the current player's turn
         movesCopy[whichSquare] = turn;
         // Update the moves state
         setMoves(movesCopy);
         // Alternate the turn
         setTurn(turn === "X" ? "O" : "X");
      }
   }

   // Function to reset the game
   function newGame() {
      setMoves(new Array(9).fill("")); // Reset all moves to empty strings
      setTurn("X"); // Reset turn to "X"
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button> {/* Call newGame on click */}
         </p>
      </>
   );
}

export default Game;
