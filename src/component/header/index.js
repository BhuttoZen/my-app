import React from 'react'
import './styles.scss'
import Logo from '../../assets/graphics/logo.png'
const Header =(props)=>{
  return(<header data-test="headerComponent">
    <div className="wrap">
      <div className="logo">
        <img src={Logo} alt="test logo" data-test="logoIMG" ></img>
      </div>
    </div>
  </header>
  )
}

export default Header;