// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  height: 35px;
  width: 80px;
  border: 0px;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
