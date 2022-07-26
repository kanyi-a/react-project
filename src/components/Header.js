import React from 'react'
import logo from '../img/logo.png' //can  import since react uses webpack
//making the header a flex box centering everything

const Header = () => {
  return (
    <header className='center'>  
    <img src= {logo} alt='' />
 
    </header>
  )
}

export default Header
