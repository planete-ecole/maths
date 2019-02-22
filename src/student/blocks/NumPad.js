import React from 'react'
import {Col, Row, Button} from 'reactstrap'

const component = ({del, update, float}) => (
  <div>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('7')}>7</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('8')}>8</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('9')}>9</Button></Col>
    </Row>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('4')}>4</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('5')}>5</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('6')}>6</Button></Col>
    </Row>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('1')}>1</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('2')}>2</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('3')}>3</Button></Col>
    </Row>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => float('.')}>.</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update('0')}>0</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => del()}>supprimer</Button></Col>
    </Row>
  </div>
)

export default component
