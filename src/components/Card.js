import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import PropTypes from 'prop-types'

const component = ({children, title}) => (
  <Card className='my-3'>
    <CardHeader>
      <h6>{title}</h6>
    </CardHeader>
    <CardBody>
      {children}
    </CardBody>
  </Card>
)

component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired
}

export default component
