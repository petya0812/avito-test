import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react"

import { TfiReload } from "react-icons/tfi"
import { fetchCommentsId } from "../../store/commentsSlice"
import Comment from "./Comment"

function Comments() {
  const dispatch = useDispatch()
  const { activePost } = useSelector((store) => store.activePost)
  const { commentsId, status } = useSelector((store) => store.comments)

  const handleReload = () => {
    dispatch(fetchCommentsId(activePost.id))
  }

  useEffect(() => {
    dispatch(fetchCommentsId(activePost.id))
  }, [activePost, dispatch])

  if (status === "loading") {
    return (
      <Flex mt='30px' align='center' justify='center'>
        <Spinner h='100px' w='100px' />
      </Flex>
    )
  } else if (!commentsId) {
    return (
      <>
        <Flex mt='30px' align='end' justify='space-between'>
          <Text fontSize='xl'>Нет комментариев</Text>
          <Button onClick={handleReload} size='sm' colorScheme='teal'>
            <TfiReload />
          </Button>
        </Flex>
        <Box m='5px 0 10px 0' h='3px' backgroundColor='teal' />
      </>
    )
  }
  return (
    <>
      <Flex mt='30px' align='end' justify='space-between'>
        <Text fontSize='xl'>Коментариев: {commentsId.length}</Text>
        <Button onClick={handleReload} size='sm' colorScheme='teal'>
          <TfiReload />
        </Button>
      </Flex>
      <Box m='5px 0 10px 0' h='3px' backgroundColor='teal' />
      {commentsId.map((id) => {
        return <Comment key={id} commentId={id} />
      })}
    </>
  )
}

export default Comments
