import React from 'react'
import Container from './Container'
import './css/Main.css'
import FirstContainer from './FirstContainer'
import Footer from './Footer'
import Header from './Header'

function Main() {
  return (
    <div className='main'>
        <Header/>
      <FirstContainer/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default Main