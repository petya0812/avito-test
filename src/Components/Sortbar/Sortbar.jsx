import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { TfiReload } from "react-icons/tfi"
import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react"
import { fetchPostsId } from "../../store/postsSlice"
import { setSearchValue } from "../../store/searchSlice"

function Sortbar() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const { searchValue } = useSelector((store) => store.search)

  const changeSearchValue = () => {
    dispatch(setSearchValue(search))
  }

  const handleReload = () => {
    dispatch(fetchPostsId())
  }

  useEffect(() => {
    if (search === "") {
      changeSearchValue()
    }
  }, [search])

  return (
    <Container maxW='2xl'>
      <Flex mt='20px' align='center' justify='space-between'>
        <Input
          value={search}
          onChange={(e) =>
            e.target.value.length < 30 ? setSearch(e.target.value) : null
          }
          mr='20px'
          placeholder='Поиск'
          variant='outline'
        />
        <Button onClick={changeSearchValue} colorScheme='teal'>
          Найти
        </Button>
      </Flex>
      <Flex mt='30px' align='center' justify='space-between'>
        <Text fontSize='xl'>
          {searchValue.length
            ? `Результаты по поиску: "${searchValue}"`
            : "100 новых постов"}{" "}
        </Text>
        <Button onClick={handleReload} size='sm' colorScheme='teal'>
          <TfiReload />
        </Button>
      </Flex>
      <Box m='5px 0 10px 0' h='3px' backgroundColor='teal' />
    </Container>
  )
}

export default Sortbar
