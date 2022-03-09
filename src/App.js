import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Todo from './components/Todo'

const App = () => {
  return (
    <div>
      <Routes basename='/todo-react'>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App