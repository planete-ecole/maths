import React from 'react'
import {Col, Row, Button} from 'reactstrap'

class component extends React.Component {
  render () {
    return (
      <div>
        <Row>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>7</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>8</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>9</Button></Col>
        </Row>
        <Row>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>4</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>5</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>6</Button></Col>
        </Row>
        <Row>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>1</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>2</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>3</Button></Col>
        </Row>
        <Row>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>,</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>0</Button></Col>
          <Col className='d-flex p-0'><Button className='flex-fill rounded-0'>supprimer</Button></Col>
        </Row>
      </div>
    )
  }
}

export default component
