import React from 'react'
import { Outlet,Link } from 'react-router-dom'
const Layout = () => {
  return (
    <>
     <header>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="service">Service</Link></li>
            <li><Link to="contect">Contect</Link></li>
        </ul>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout