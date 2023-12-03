// Write your code here
import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, changeDirection, direction} = props
  const {value, displayText} = item

  const onChangeDirection = () => {
    changeDirection(value)
  }

  return (
    <li>
      <Button onClick={onChangeDirection} isActive={direction === value}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
