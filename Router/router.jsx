import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from "../pages/Home"
import Login from '../Auth/Login'
const Router = () => {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route element={<Home/> } path='/' />
        <Route element={<Login/> } path='/login' />
      </Routes>
    </BrowserRouter>
  )
}

export default Router