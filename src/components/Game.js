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
