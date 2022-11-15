import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { NavLink } from "react-router-dom"
import { Badge, Flex, GridItem, Skeleton, Text } from "@chakra-ui/react"
import { addFoundItem, removeFoundItem } from "../../store/searchSlice"
import { getPostById } from "../../api"

function PostItem({ id }) {
  const dispatch = useDispatch()
  const [item, setItem] = useState()
  const { postsId } = useSelector((store) => store.posts)
  const { searchValue } = useSelector((store) => store.search)

  useEffect(() => {
    if (item && !item.title.toLowerCase().includes(searchValue.toLowerCase())) {
      dispatch(removeFoundItem(id))
    } else {
      dispatch(addFoundItem(id))
    }
  }, [searchValue, item, dispatch, id])

  useEffect(() => {
    async function getPost() {
      const post = await getPostById(id)
      setItem(post)
    }
    getPost()
  }, [postsId, id])

  if (!item) {
    return <Skeleton height='104px' />
  }
  if (!item.title.toLowerCase().includes(searchValue.toLowerCase())) {
    return null
  }
  return (
    <NavLink to={`/post/${id}`}>
      <GridItem
        boxShadow='0px 3px 10px #999'
        p='10px'
        borderRadius='5px'
        _hover={{ boxShadow: "0px 5px 15px #999", backgroundColor: "#f5faf9" }}
      >
        <Flex justify='space-between' align='center'>
          <Badge
            align='center'
            borderRadius='full'
            px='2'
            colorScheme='teal'
            w='fit-content'
          >
            {item.by}
          </Badge>
          <Text align='end'>
            {new Date(item.time * 1000).toLocaleDateString().slice(0, -4)}
            {new Date(item.time * 1000).toLocaleDateString().slice(-2)}
          </Text>
        </Flex>
        <Text padding='0 2px' fontSize='xl'>
          {item.title}
        </Text>
        <Flex justify='space-between'>
          <Text>Рейтинг: {item.score}</Text>
          <Text align='end'>
            {new Date(item.time * 1000).toLocaleTimeString()}
          </Text>
        </Flex>
      </GridItem>
    </NavLink>
  )
}

export default PostItem
