import { Container, Content, Row} from './styles'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operador, setOperador] = useState('');

  const handleAddNumber = (e) => {
    
    if ((currentNumber - 1) === -1) {
      setCurrentNumber( e.target.textContent )
    } else {
      setCurrentNumber( currentNumber + e.target.textContent)
    }
    
  }

  const limparCampos = () => {
    setOperador('');
    setCurrentNumber(0);
    setFirstNumber(0);
  }

  const setandoOperador = (e) => {
    setOperador(e.target.textContent);
    setFirstNumber(currentNumber);
    if (currentNumber !== 0 && firstNumber !== 0) {
      calculo();
      
    }else{
      setCurrentNumber(0);
    }
  }

  const calculo = () => {
    switch (operador) {
      case '+':
        let soma = parseInt(firstNumber) + parseInt(currentNumber);
        limparCampos();
        setCurrentNumber(soma);
        break;
      
      case '-':
        let subtracao = parseInt(firstNumber) - parseInt(currentNumber);
        limparCampos();
        setCurrentNumber(subtracao);
        break;

      case 'x':
        let multiplicacao = parseInt(firstNumber) * parseInt(currentNumber);
        limparCampos();
        setCurrentNumber(multiplicacao);
        break;

      case '/':
        let divisao = parseInt(firstNumber) / parseInt(currentNumber);
        limparCampos();
        setCurrentNumber(divisao);
        break;
    
      default:
        break;
    }


    /* if (currentNumber !== '0') {
      if (currentNumber.split(' - ').length === 2 ) {
        var n1 = parseInt(currentNumber.split(' - ')[0]);
        var n2 = parseInt(currentNumber.split(' - ')[1]);
        setCurrentNumber(n1 - n2);
      } else if (currentNumber.split(' + ').length === 2 ) {
        var n1 = parseInt(currentNumber.split(' + ')[0]);
        var n2 = parseInt(currentNumber.split(' + ')[1]);
        setCurrentNumber(n1 + n2);
      } else if (currentNumber.split(' / ').length === 2 ) {
        var n1 = parseInt(currentNumber.split(' / ')[0]);
        var n2 = parseInt(currentNumber.split(' / ')[1]);
        setCurrentNumber(n1 / n2);
      } else if (currentNumber.split(' x ').length === 2 ) {
        var n1 = parseInt(currentNumber.split(' x ')[0]);
        var n2 = parseInt(currentNumber.split(' x ')[1]);
        setCurrentNumber(n1 * n2);
      }
      
    } */


  }

  return (
    <Container>
      <Content>
        <Input valor={currentNumber}/>
        <Row>
          <Button onClick={ (e) => {setandoOperador(e)}} label='x'/>
          <Button onClick={ (e) => {setandoOperador(e)}} label='/'/>
          <Button onClick={ () => { limparCampos()}} label='C'/>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='0'/>
        </Row>

        <Row>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='7'/>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='8'/>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='9'/>
          <Button onClick={ (e) => {setandoOperador(e)}} label='-'/>
        </Row>

        <Row>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='4'/>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='5'/>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='6'/>
          <Button onClick={ (e) => {setandoOperador(e)}} label='+'/>
        </Row>

        <Row>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='1'/>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='2'/>
          <Button onClick={ (e) => {handleAddNumber(e)}} label='3'/>
          <Button onClick={ (e) => {calculo()}} label='='/>
        </Row>

          
      </Content>
    </Container>
  );
}

export default App;
