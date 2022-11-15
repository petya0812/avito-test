import { Routes, Route } from "react-router-dom"

import PostPage from "../PostPage/PostPage"
import Main from "../Main/Main"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/*' element={<h1>Страница не найдена</h1>} />
      </Routes>
    </div>
  )
}

export default App
