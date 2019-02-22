import React from 'react'
import { Button, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({audio, onChange, question, voice}) => (
  <FormGroup>
    <InputGroup>
      <InputGroupAddon addonType='prepend'>
        <Button color='primary' onClick={() => audio.play(question.answer, voice)}>
          <i className='fas fa-volume-up' />
        </Button>
      </InputGroupAddon>
      <Input value={question.input} onChange={event => onChange(event.target.value)} />
    </InputGroup>
  </FormGroup>
)

component.propTypes = {
  audio: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  voice: PropTypes.string.isRequired
}

export default component
