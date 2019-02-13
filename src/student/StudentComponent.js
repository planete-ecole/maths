import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { DynamicTitle, NextQuestion, NumPad, QuestionFrame, QuestionProgress, Timer } from './blocks'

class StudentComponent extends React.Component {
  render() {
    return (
      <Container>
        <DynamicTitle />

        <Row>
          {/* affichage de la question en cours + réponse élève + pavé numérique + bouton valider */}
          <Col className='col-6 offset-3'>
            <QuestionFrame />
            <NumPad />
            <NextQuestion />
          </Col>

          {/* Timer + avancement question */}
          <QuestionProgress />
          <Timer />
        </Row>
      </Container>
    )
  }
}

export default StudentComponent
