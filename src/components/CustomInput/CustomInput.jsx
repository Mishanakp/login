import React from 'react'
import "./CustomInput.css"

const CustomInput = (props) => {
  return (
    <>
        <input placeholder={props.placeholder} type={props.type} className='custom_inp' />
    </>
  )
}

export default CustomInput