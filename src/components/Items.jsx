import React from 'react'
import './css/Items.css'

function Items(props) {
  return (
        <div className='items'>{props.name}</div>
  )
}

export default Items