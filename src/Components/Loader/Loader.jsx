import { Flex, Spinner } from "@chakra-ui/react"

function Loader() {
  return (
    <Flex h='90vh' margin='0 auto' align='center' justify='center'>
      <Spinner
        w='100px'
        h='100px'
        color='blue.500'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
      />
    </Flex>
  )
}

export default Loader
