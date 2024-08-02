import React from 'react'
import { Outlet } from 'react-router-dom'

function NavHeader() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default NavHeader
