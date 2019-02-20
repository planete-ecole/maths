import React from 'react'
import { Progress, Col } from 'reactstrap'

const component = () => (
  <Col className='p-1'>
    <Progress animated color="info" value={50}/>
  </Col>
)

export default component
