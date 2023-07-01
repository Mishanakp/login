import React from 'react'
import "./CustomCard.css"
const CustomCard = (Props) => {
  return (
    <div className='custom_card' >
        <img className='w-25' src={Props.image} alt="not found" />
        <div style={{display:"flex",alignItems:"flex-start",width:"50%",flexDirection:"column"}} >
            <h4 className='m-0 p-0' >{Props.country}</h4>
            <p className='m-0 p-0 text-secondary' >{Props.continent}</p>
        </div>
    </div>
  )
}

export default CustomCard