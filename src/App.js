import React from 'react'
import "./App.css"
import SignIn from './views/SignIn/SignIn'
import Home from './views/home/Home'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Error404 from './components/404Error/Error404'

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<SignIn/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </Container>
  )
}

export default App