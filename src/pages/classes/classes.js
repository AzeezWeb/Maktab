import React from 'react'
import { withLayout } from '../../layout/layout'
import { Container } from '@chakra-ui/react'
import Header from '../../layout/header/header'

const Classes = () => {
  return (
    <Container>
      <Header/>
    </Container>
  )
}

export default withLayout(Classes)