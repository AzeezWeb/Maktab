import React from 'react'
import { withLayout } from '../../../layout/layout'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ClassesData = () => {

  const paramas = useParams()
  console.log(paramas);
  return (
   <Box>
   </Box>
  )
}

export default withLayout(ClassesData)