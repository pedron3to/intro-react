import React, { useState } from 'react';
import styled from 'styled-components'

import Square from './Square'

const Status = styled.div`
  margin-bottom: 10px;
`
const BoardRow = styled.div`
  clear: both;
  content: "";
  display: table;
`


//Board
const Board = (props) => {
  
  //state
  //boardState
  const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)])
  //turnState
  const [xIsNext, setXIsNext] = useState(true)
  //handleClick
  const handleClick = index => {
    //copy of our board state
    const squares = [...boardSquares];
    //if the index of the board is filled, return
    if (squares[index]) return;
    //mutate that copy, and X or 0
    squares[index] = xIsNext ? "X" : "O"    
    //calculate next turn    
    // set the state of the board
    setBoardSquares(squares);
    // set the state of the turn
    setXIsNext(!xIsNext);
  }

  //function that calculates the winner

  
  const renderSquare = (index) => {
    return (
      <Square value={boardSquares[index]} onClick={() => handleClick(index)}
      />
    );
  }

  //initialize status
  let status;
  
  status = `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <Status>{status}</Status>
      <BoardRow>
        
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </BoardRow>
      <BoardRow>
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </BoardRow>
      <BoardRow>
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </BoardRow>
    </div>
  );
  
  

}

export default Board
