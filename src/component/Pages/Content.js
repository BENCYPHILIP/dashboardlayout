import React from 'react'
import {Flex} from '@chakra-ui/react'
import Home from './Home'
const Content = () => {
  return (
        <Flex direction={'column'} w={'full'} h={'full'} bg={'gray.200'} >
                <Home/>
        </Flex>
  )
}

export default Content;