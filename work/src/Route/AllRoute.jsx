import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'

export default function AllRoute() {
  return (
    <Routes>
        <Route   path='/register'  element={<Register/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Home' element={<Home/>} />
    </Routes>
  )
}
