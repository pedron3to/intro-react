import React from 'react';
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


const Board = (props) => {
  
  function renderSquare(i) {
    return <Square value={i}/>;
  }
  
  const status = 'Next player: X';

  return (
    <div>
      <Status>{status}</Status>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </div>
  );
  
  

}

export default Board
