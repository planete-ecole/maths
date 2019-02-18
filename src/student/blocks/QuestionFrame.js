import React from 'react'
import {Row, Col} from 'reactstrap'

const component = ({number}) => (
  <Row className='justify-content-center'>
    <Col className='d-flex p-1'>
      <p className='d-flex flex-fill'>question en cours</p>
    </Col>
    <Col className='d-flex p-1'>
      <p className='d-flex flex-fill'>{number}</p>
    </Col>
  </Row>
)

export default component
