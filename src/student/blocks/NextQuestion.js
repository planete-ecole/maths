import React from 'react'
import { Button } from 'reactstrap'

function component ({validation}) {
  return (
    <Button className='flex-fill' color='success' onClick={() => validation()}>Question suivante</Button>
  )
}

export default component
