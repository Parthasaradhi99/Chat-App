import './App.css'
// import { Button } from '@chakra-ui/react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import HomePage  from "../pages/HomePage"
import ChatPage from "../pages/ChatPage"

function App() {

  return (

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>} exact/>
          <Route path='/chat' element={<ChatPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
