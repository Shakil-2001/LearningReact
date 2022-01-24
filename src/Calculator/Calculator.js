import { Container, Row, Col, Card  } from 'react-bootstrap';
import Text from './text';
import Key from './button';
import './custom.css';

import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculator() {

  const [sum, changeSum] = useState(''); 
  const [result, setResult] = useState('');
  const ops = ['/', '*' , '+' , '-', '.' ];

  const updateCalc = (prop) => {

    if ((ops.includes(sum.charAt(sum.length-1)) && ops.includes(prop.value)) || ops.includes(prop.value) && sum === ''){
      return false;
    }

    changeSum(sum + prop.value.toString());

    if (!ops.includes(prop.value)){
      setResult(eval(sum + prop.value).toString());
    }
  }

  const calcEquals = () => {
    changeSum(result);
  }

  const clear = () => {
    changeSum('');
    setResult('');
  }

  return (
  <Container className='size py-5' >
    <Card className='px-5 py-5' bg='light'>
      <Row>
        <Text number={sum || 0}/>
      </Row>

      <Row>
        <Col><Key value='' id='c' text='C' color='danger' buttonClick={clear}/></Col>
        <Col><Key value='=' id='=' text='=' color='success' buttonClick={calcEquals}/></Col>
        <Col><Key value='/' id='/' text='/' color='warning' buttonClick={updateCalc}/></Col>
        <Col><Key value='*' id='*' text='X' color='warning' buttonClick={updateCalc}/></Col>
      </Row>

      <Row>
        <Col><Key value='7' id='7' text='7' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='8' id='8' text='8' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='9' id='9' text='9' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='-' id='-' text='-' color='warning' buttonClick={updateCalc}/></Col>
      </Row>

      <Row>
        <Col><Key value='4' id='4' text='4' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='5' id='5' text='5' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='6' id='6' text='6' color='outline-dark'buttonClick={updateCalc}/></Col>
        <Col><Key value='+' id='+' text='+' color='warning' buttonClick={updateCalc}/></Col>
      </Row>

      <Row>
        <Col><Key value='1' id='1' text='1' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='2' id='2' text='2' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='3' id='3' text='3' color='outline-dark' buttonClick={updateCalc}/></Col>
        <Col><Key value='.' id='.' text='.' color='warning' buttonClick={updateCalc}/></Col>
      </Row>

      <Row>
        <Col xs={3}><Key value='0' id='0' text='0' color='outline-dark' buttonClick={updateCalc}/></Col>  
      </Row>

    </Card>
  </Container>
  );
}

export default Calculator;
