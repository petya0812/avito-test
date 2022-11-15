import { useState, useEffect } from "react"
import { Badge, Box, Flex, Skeleton, Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { useDispatch } from "react-redux"

import { getCommentById } from "../../api"
import { deleteComment } from "../../store/commentsSlice"

function Comment({ commentId, index = 0 }) {
  const dispatch = useDispatch()
  const [comment, setComment] = useState()
  const [showKids, setShowKids] = useState(index > 0)
  const ind = index + 1

  useEffect(() => {
    async function getComment() {
      const comment = await getCommentById(commentId)
      setComment(comment)
    }
    getComment()
  }, [commentId])

  useEffect(() => {
    if (comment && comment.deleted) {
      dispatch(deleteComment(comment.id))
    }
  }, [comment, dispatch])

  if (!comment) {
    return <Skeleton h='100px' mb='20px' />
  }
  if (comment.deleted) {
    return null
  }
  return (
    <Box
      mb='10px'
      mt='10px'
      ml={[
        ind < 4 && ind !== 1 ? `${(4 - ind) * 3}px` : 0,
        ind < 5 && ind !== 1 ? `${(5 - ind) * 4}px` : 0,
        ind < 6 && ind !== 1 ? `${(6 - ind) * 4}px` : 0,
        ind < 6 && ind !== 1 ? `${(6 - ind) * 4}px` : 0,
      ]}
      p='10px 5px 10px 5px'
      borderLeft={
        ind !== 1
          ? `1px solid #${(ind + 2) % 10}${(ind + 4) % 10}${(ind + 6) % 10}${
              ind % 10
            }${ind % 10}${ind % 10}`
          : null
      }
      borderRadius='10px'
      overflow='clip'
    >
      <Flex justify='space-between' align='center' mb='5px'>
        <Badge
          mr='10px'
          p='0 10px'
          w='fit-content'
          borderRadius='full'
          colorScheme='teal'
          fontSize='md'
        >
          {comment.by}
        </Badge>
        <Text>
          {new Date(comment.time * 1000).toLocaleDateString().slice(0, -4)}
          {new Date(comment.time * 1000).toLocaleDateString().slice(-2)}
        </Text>
      </Flex>

      <Box mb='5px' dangerouslySetInnerHTML={{ __html: comment.text }}></Box>

      <Flex justify='space-between'>
        <Text>{new Date(comment.time * 1000).toLocaleTimeString()}</Text>

        {comment.kids ? (
          <Link onClick={() => setShowKids(!showKids)} color='teal'>
            {ind === 1
              ? showKids
                ? "Скрыть ответы"
                : "Показать ответы"
              : null}
          </Link>
        ) : null}
      </Flex>

      {showKids && comment.kids
        ? comment.kids.map((id) => {
            return <Comment key={id} commentId={id} index={ind} />
          })
        : null}
    </Box>
  )
}

export default Comment
