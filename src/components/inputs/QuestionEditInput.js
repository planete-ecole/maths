import React from 'react'
import { Button, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({onChange, onDelete, value}) => (
  <FormGroup>
    <InputGroup>
      <Input
        onChange={event => onChange(event.target.value)}
        placeholder={('placeholder.question')}
        value={value}
      />
      <InputGroupAddon addonType='append'>
        <Button onClick={onDelete}>
          <i className='fas fa-trash' />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  </FormGroup>
)

component.propTypes = {
  key: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default component
