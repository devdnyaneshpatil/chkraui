import { Box, Button, Container, Flex, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Form } from 'react-router-dom'

function Login() {
    const inputstyle={
        ':hover':{
            border:"2px solid orange"
        },
    }
  return (
    <Flex
      as={"div"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      h={"100vh"}
    >
      <Box
        width={400}
        bg={"whitesmoke"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        pb={10}
        boxShadow={
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        }
      >
        <Form>
          <Heading textAlign={"center"} p={5}>
            Login Here
          </Heading>

          <FormControl mb={5}>
            <Input
              type="email"
              name="email"
              border="2px solid grey"
              sx={inputstyle}
            />
            <FormHelperText>Enter your Email Here</FormHelperText>
          </FormControl>

          <FormControl mb={5}>
            <Input
              type="password"
              name="password"
              border="2px solid grey"
              sx={inputstyle}
            />
            <FormHelperText>Enter your password Here</FormHelperText>
          </FormControl>

          <Button
            type="submit"
            display={"block"}
            margin="auto"
            colorScheme="messenger"
          >
            Submit
          </Button>
        </Form>
      </Box>
    </Flex>
  );
}

export default Login