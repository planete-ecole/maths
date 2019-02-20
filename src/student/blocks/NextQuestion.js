import React from 'react'
import { Row, Col, Button } from 'reactstrap'

function component ({validation}) {
  return (
    <Row className='justify-content-center'>
      <Col className='d-flex col-10 p-3'>
        <Button className='flex-fill' color='success' onClick={() => validation()}>Question suivante</Button>
      </Col>
    </Row>
  )
}

export default component
