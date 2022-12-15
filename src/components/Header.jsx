import React from 'react'
import './css/Header.css'
import Items from './Items'
import bloom from '../images/bloom.png'
function Header() {
  return (
    <div className='header'>
        <div className='nav-items'/>
        <div className='nav-items'/>
        <div className='nav-items'>
            <Items name="Home"/>
            <Items name="About Us"/>
            <Items name="Services"/>
            <Items name="Portfolio"/>
            <Items name="Contact Us"/>
        </div>
    </div>
  )
}

export default Header