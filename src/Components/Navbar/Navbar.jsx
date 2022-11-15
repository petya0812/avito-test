import { Box, Container, Flex, Text } from "@chakra-ui/react"

function Navbar() {
  return (
    <Box backgroundColor='teal.300' mb='10px'>
      <Container maxW='2xl'>
        <Flex p='10px 0' justify='space-between' align='center'>
          <Text mr='10px' align='center' fontSize='3xl'>
            Hacker news
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
