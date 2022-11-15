import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"

import { Badge, Container, Flex, Link, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../../store/activePostSlice"
import Comments from "../Comments/Comments"
import Loader from "../Loader/Loader"

function PostPage() {
  const dispatch = useDispatch()
  const id = useParams().id
  const { activePost } = useSelector((store) => store.activePost)

  useEffect(() => {
    dispatch(fetchPost(id))
  }, [id, dispatch])

  if (!activePost) {
    return <Loader />
  }
  return (
    <Container maxW='2xl' pt='20px'>
      <Link as={NavLink} to='/' fontSize='xl'>
        Вернуться
      </Link>
      <Flex
        direction='column'
        p='20px'
        mt='10px'
        boxShadow='0px 2px 10px #999'
        borderRadius='10px'
      >
        <Flex justify='space-between'>
          <Badge
            p='0 10px'
            mb='10px'
            w='fit-content'
            fontSize='md'
            borderRadius='full'
            colorScheme='teal'
          >
            {activePost.by}
          </Badge>
          <Text>
            {new Date(activePost.time * 1000).toLocaleDateString().slice(0, -4)}
            {new Date(activePost.time * 1000).toLocaleDateString().slice(-2)}
          </Text>
        </Flex>

        <Text mb='5px' fontSize={["xl", "2xl", "3xl", "3xl"]}>
          {activePost.title}
        </Text>

        <Flex justify='space-between'>
          <Text>{new Date(activePost.time * 1000).toLocaleTimeString()}</Text>
          <Link
            href={activePost.url}
            w='fit-content'
            alignSelf='end'
            color='teal'
            target='_blank'
          >
            К источнику
          </Link>
        </Flex>
      </Flex>

      <Comments />
    </Container>
  )
}

export default PostPage
