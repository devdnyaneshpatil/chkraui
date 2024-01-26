import { Button, Flex, HStack, Heading, Input } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <Flex as="nav" width="100%" bg="blueviolet" justifyContent="space-between" p="20px">
      <Heading>MOVIFLIX</Heading>
      <HStack>
        <Input bg={'whitesmoke'} placeholder='Search your Movie'></Input>
        <Button>Search</Button>
      </HStack>
      <HStack>
        <Button bg={'blue'} color={'whitesmoke'}>Logout</Button>
        <Button bg={'greenyellow'}>Watchlist</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar