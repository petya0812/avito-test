export const getPostsId = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    )
    const data = await response.json()
    return data.slice(0, 100)
  } catch {
    alert(
      "Ошибка при получении данных, проверьте подключение к интернету и перезагрузите страницу."
    )
  }
}

export const getPostById = async (id) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
      .then((res) => res.json())
      .then((data) => data)

    return response
  } catch {
    alert(
      "Ошибка при получении данных, проверьте подключение к интернету и перезагрузите страницу."
    )
  }
}

export const getCommentsId = async (id) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
    const data = await response.json()
    return data.kids
  } catch {
    alert(
      "Ошибка при получении данных, проверьте подключение к интернету и перезагрузите страницу."
    )
  }
}

export const getCommentById = async (id) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
      .then((res) => res.json())
      .then((data) => data)
    return response
  } catch {
    alert(
      "Ошибка при получении данных, проверьте подключение к интернету и перезагрузите страницу."
    )
  }
}
