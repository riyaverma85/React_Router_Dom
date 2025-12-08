import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import About from './assets/About'
import Service from './assets/Service'
import Contect from './assets/Contect'
import Layout from './Layout'
const App = () => {
  return (
    <>
   
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='service'element={<Service/>}/>
            <Route path='contect' element={<Contect/>}/>
        </Route>
    </Routes>
    </>

  )
}

export default App 