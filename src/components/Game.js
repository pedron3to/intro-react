import React from 'react';
import styled from 'styled-components'



import Board from './Board'

const GameWrap = styled.div`
  display: flex;
  flex-direction: row;
`
const GameInfo = styled.div`
margin-left: 20px;
`

const Game = (props) => {
  
  const calculatorWinner = (boardSquares) => {
    //set of winning lines
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ];
    //loop through this set
    for (let i = 0; i < winningLines.length; i++) {
      //check  
      cons [a, b, c] = winningLines[i];

      if (boardSquares[a] && 
          boardSquares[a] === 
          boardSquares[b] && 
          boardSquares[a] === 
          boardSquares[c]) {
           return squares[a];
          }
     } 

  }

  const winner = () => {

    
  }

  return (
    <GameWrap>
      <div>
        <Board />
      </div>
      <GameInfo>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </GameInfo>
    </GameWrap>
  );
  
  

}

export default Game
