import React from 'react'
import {Row, Col} from 'reactstrap'
/* import NumPad from './NumPad' */

class component extends React.Component {
  render () {
    return (
      <Row className='justify-content-center'>
        <Col className='d-flex p-1'>
          <p className='d-flex flex-fill'>question en cours</p>
        </Col>
        <Col className='d-flex p-1'>
          <p className='d-flex flex-fill'>oui</p>
        </Col>
      </Row>
    )
  }
}

export default component
