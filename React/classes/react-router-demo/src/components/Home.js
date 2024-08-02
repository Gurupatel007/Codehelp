import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Outlet />
      Home Page
    </div>
  )
}

export default Home
