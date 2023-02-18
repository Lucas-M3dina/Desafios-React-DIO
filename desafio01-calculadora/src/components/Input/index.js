import { InputContainer } from './styles'

function Input({valor}){
  return (
    <InputContainer>
      <input value={valor} disabled/>
    </InputContainer>
  )
}

export default Input;