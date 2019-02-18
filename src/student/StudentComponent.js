import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { DynamicTitle, NextQuestion, NumPad, QuestionFrame, QuestionProgress, Timer } from './blocks'

class StudentComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {number: 0}
  }
  render () {
    return (
      <Container>
        <DynamicTitle />

        <Row>
          {/* affichage de la question en cours + réponse élève + pavé numérique + bouton valider */}
          {/* number={this.state.number} update={(number) => this.setState({number})} */}
          <Col className='col-6 offset-3'>
            <QuestionFrame number={this.state.number} />
            <NumPad number={this.state.number} update={(number) => this.setState({number})} />
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
