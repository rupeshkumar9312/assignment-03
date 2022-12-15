import React from 'react'
import ContainerItem from './ContainerItem'
import './css/Container.css'

function Container() {
  return (
    <div className='container'>
        <ContainerItem/>
        <ContainerItem/>
        <ContainerItem/>
    </div>
  )
}

export default Container