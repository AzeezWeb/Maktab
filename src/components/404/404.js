import { Box,  Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <Box  w={'1000px'}>
      <Heading fontSize={'80px'} textAlign={'center'}pb={'20px'} mt={'200px'} color={useColorModeValue('#002540', '#fff')}>404</Heading>
      <Text textAlign={'center'} fontSize={'50px'} color={useColorModeValue('#002540', '#fff')}>Page Not Found</Text>
    </Box>
  )
}

export default NotFound