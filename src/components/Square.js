import React, {useState} from 'react';
import styled from 'styled-components'

const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
  outline: none;
}

`



const Square = (props) => {

  const [state, setState] = useState(0)

  return (
    <SquareButton 
      onClick={() => { setState({value: 'X'})}}
    >
     {state.value}
    </SquareButton>
  )
}

export default Square
