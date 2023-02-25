import React from 'react'
import HeaderWrap from './HeaderWrap'
import Navbar from './Navbar'
import "./Header.css"
import HeaderWrapDown from './HeaderWrapDown'

function Header() {
  return (
    <div>
      <HeaderWrap/>
      <Navbar/>
      <HeaderWrapDown/>
    </div>
  )
}

export default Header
