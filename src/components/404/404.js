import { Box,  Heading, Text } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <Box  w={'1000px'}>
      <Heading fontSize={'80px'} textAlign={'center'}pb={'20px'} mt={'200px'} color={'#002540'}>404</Heading>
      <Text textAlign={'center'} fontSize={'50px'} color={'#002540'}>Page Not Found</Text>
    </Box>
  )
}

export default NotFound