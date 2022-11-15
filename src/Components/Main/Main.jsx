import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Container, Flex, Grid, Spinner, Text } from "@chakra-ui/react"
import { fetchPostsId } from "../../store/postsSlice"
import Loader from "../Loader/Loader"
import Navbar from "../Navbar/Navbar"
import Sortbar from "../Sortbar/Sortbar"
import PostItem from "../PostItem/PostItem"

function Main() {
  const dispath = useDispatch()
  const { foundItems } = useSelector((store) => store.search)
  const { postsId, status } = useSelector((store) => store.posts)

  useEffect(() => {
    dispath(fetchPostsId())
    const interval = setInterval(() => {
      dispath(fetchPostsId())
    }, 60000)
    return () => clearInterval(interval)
  }, [dispath])

  if (!postsId) {
    return <Loader />
  }
  return (
    <>
      <Navbar />
      <Sortbar />
      <Container maxW='2xl'>
        {status === "loading" ? (
          <Flex mt='30px' align='center' justify='center'>
            <Spinner h='100px' w='100px' />
          </Flex>
        ) : null}
        <Grid templateColumns='1fr' gap={6}>
          {postsId.map((postId) => (
            <PostItem key={postId} id={postId} />
          ))}
        </Grid>
        {!foundItems.length && status !== "loading" ? (
          <Text>Нет результатов</Text>
        ) : null}
      </Container>
    </>
  )
}

export default Main
