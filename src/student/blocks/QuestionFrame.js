import React from 'react'
import {Row, Col} from 'reactstrap'

const component = ({displayArray, firstNumber, mathSign, secondNumber}) => (
  <Row className='justify-content-center'>
    <Col className='d-flex p-1'>
      <p className='d-flex flex-fill'>{firstNumber + mathSign + secondNumber}</p>
    </Col>
    <Col className='d-flex p-1'>
      <p className='d-flex flex-fill'>{displayArray}</p>
    </Col>
  </Row>
)

export default component
