import React from 'react'
import {Row, Col, Button} from 'reactstrap'

function component () {
  return (
    <Row className='justify-content-center'>
      <Col className='d-flex col-10 p-3'>
        <Button className='flex-fill' color='success'>Question suivante</Button>
      </Col>
    </Row>
  )
}

export default component
