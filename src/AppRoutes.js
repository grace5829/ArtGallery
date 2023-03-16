import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllArt from './AllArt'
import Home from './Home'
import SingleArt from './SingleArt'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/artwork"  element={<AllArt />} />
      <Route path="/artwork/:id"  element={<SingleArt/>} />
      </Routes>

    </div>
  )
}

export default AppRoutes