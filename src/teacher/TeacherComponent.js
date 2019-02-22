import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { MainInfo } /* , QuestionList, Session, Settings, Visibility */ from './blocks'

class TeacherComponent extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <h1>Teacher Component</h1>
        </Row>
        <Col className='col-8'>
          <MainInfo />
          {/* <QuestionList /> */}
        </Col>
        <Col className='col-4'>
          {/* <Settings />
          <Visibility />
          <Session /> */}
        </Col>
      </Container>
    )
  }
}

export default TeacherComponent
