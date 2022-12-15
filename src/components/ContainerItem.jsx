import React from 'react'
import Button from './Button'
import ChildContainer from './ChildContainer'
import './css/ContainerItems.css'
import TextComponent from './TextComponent'

function ContainerItem() {
  return (
    <div className='container-item'>
        <ChildContainer/>
        <TextComponent/>
        <Button />
    </div>
  )
}

export default ContainerItem