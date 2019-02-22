import React from 'react'
import { FormGroup, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import Card from '../../components/Card'

const component = ({instruction, name, onChange}) => (
  <Card title={('title.description')}>
    <FormGroup>
      <Input
        placeholder={('field.name')}
        onChange={event => onChange('name', event.target.value)}
        value={name}
      />
    </FormGroup>
    <FormGroup>
      <Input
        name='instruction'
        placeholder={('field.instruction')}
        onChange={event => onChange('instruction', event.target.value)}
        value={instruction}
      />
    </FormGroup>
  </Card>
)

component.propTypes = {
  instruction: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default component
