import { OutletRounded } from '@mui/icons-material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

const Layout = () => {
  return (
    <>
    <NavBar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout