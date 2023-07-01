import React from 'react'
import "./CustomButton.css"

const CustomButton = (props) => {
  return (
    <>
    <button className='Custom_btn' onClick={props.handleClick} >{props.name}</button>
    </>
  )
}

export default CustomButton