import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  BgContainer,
  Heading,
  Paragraph,
  ListContainer,
  ColorPickContainer,
  ColorInputContainer,
  Label,
  FirstInput,
  SecondInput,
  Generate,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    first: '#8ae323',
    second: '#014f7b',
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  changeBackground = () => {
    const {firstColor, secondColor} = this.state
    this.setState({first: firstColor, second: secondColor})
  }

  render() {
    const {direction, firstColor, secondColor, first, second} = this.state
    return (
      <BgContainer
        data-testid="gradientGenerator"
        direction={direction}
        first={first}
        second={second}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <ListContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              item={each}
              direction={direction}
              changeDirection={this.changeDirection}
            />
          ))}
        </ListContainer>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorPickContainer>
          <ColorInputContainer>
            <Label htmlFor="first">{firstColor}</Label>
            <FirstInput
              type="color"
              id="first"
              value={firstColor}
              onChange={this.onChangeFirstColor}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <Label htmlFor="second">{secondColor}</Label>
            <SecondInput
              type="color"
              id="second"
              value={secondColor}
              onChange={this.onChangeSecondColor}
            />
          </ColorInputContainer>
        </ColorPickContainer>
        <Generate onClick={this.changeBackground}>Generate</Generate>
      </BgContainer>
    )
  }
}

export default GradientGenerator
