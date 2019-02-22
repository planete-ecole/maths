import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { DynamicTitle, NextQuestion, NumPad, QuestionFrame, QuestionProgress, Timer } from './blocks'

class StudentComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: '0',
      displayArray: [],
      firstNumber: 9,
      mathSign: '/',
      secondNumber: 2
    }
  }

  pushNumber = (number) => {
    const displayArray = this.state.displayArray
    const storageArray = displayArray.concat([number])
    this.setState({displayArray: storageArray}, () => console.log(this.state.displayArray))
  }

  pushFloat = () => {
    const displayArray = this.state.displayArray
    if (!displayArray.includes('.')) {
      this.pushNumber('.')
    }
  }

  Delete = () => {
    this.setState({displayArray: []})
  }

  resolve (state) {
    switch (state.mathSign) {
      case '-':
        return state.firstNumber - state.secondNumber
      case '+':
        const addition = state.firstNumber + state.secondNumber
        return addition
      case '/':
        const division = state.firstNumber / state.secondNumber
        return division
      case '*':
        const multiplication = state.firstNumber * state.secondNumber
        return multiplication
    }
  }

  validation = () => {
    const result = this.resolve(this.state)
    if (result == this.state.displayArray.join('')) {
      alert ('Bonne réponse')
    } else {
      alert ('Mauvaise réponse')
    }
  }

  render () {
    return (
      <Container>
        <Row>
          <Col className='col-3'>
            <DynamicTitle />
          </Col>
        </Row>
        <Row>
          {/* display current question + student answer + numpad + validation button + timer */}
          <Col className='col-6 offset-3'>
            <QuestionFrame
              displayArray={this.state.displayArray}
              firstNumber={this.state.firstNumber}
              mathSign={this.state.mathSign}
              secondNumber={this.state.secondNumber}
            />
            <NumPad
              update={this.pushNumber}
              float={this.pushFloat}
              del={this.Delete}
            />
            <Row>
              <Col className='p-1'>
                <Timer />
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col className='d-flex col-10 p-3'>
                <NextQuestion 
                  validation={this.validation}
                />
              </Col>
            </Row>
          </Col>
          {/* question progress */}
          <Col className='col p-1'>
            <QuestionProgress />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default StudentComponent
