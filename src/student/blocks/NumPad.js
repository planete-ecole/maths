import React from 'react'
import {Col, Row, Button} from 'reactstrap'

const component = ({number, update}) => (
  <div>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 7)}>7</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 8)}>8</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 9)}>9</Button></Col>
    </Row>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 4)}>4</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 5)}>5</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 6)}>6</Button></Col>
    </Row>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 1)}>1</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 2)}>2</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 3)}>3</Button></Col>
    </Row>
    <Row>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>,</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = 0)}>0</Button></Col>
      <Col className='d-flex p-0'><Button className='flex-fill rounded-0' onClick={() => update(number = null)}>supprimer</Button></Col>
    </Row>
  </div>
)

export default component
