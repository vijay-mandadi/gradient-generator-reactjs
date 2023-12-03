// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.first},
    ${props => props.second}
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 25px;
`

export const Paragraph = styled.p`
  font-size: 15px;
  color: white;
  font-family: 'Roboto';
`

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`

export const ColorPickContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 18px;
`
export const FirstInput = styled.input`
  margin: 15px;
  background-color: transparent;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  border: 0px;
`
export const SecondInput = styled(FirstInput)``

export const Generate = styled.button`
  background-color: #00c9b7;
  border-radius: 5px;
  height: 35px;
  width: 80px;
  border: 0px;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 20px;
`
