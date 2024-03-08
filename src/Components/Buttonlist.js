import React from 'react'
import Button from './Button'

function Buttonlist() {

  const list=["All", "Gaming", "Football", "Cooking", "Live", "IPL", "Kapil Sharma", "Favourite"];
  return (
    <div className='flex'>
    {
      list.map((item ,index)=>{
        return (
          <>
          <div key={index}>
            <Button name={item}/>
            </div>
          </>
        )
      })
    }
     
    </div>
  )
}

export default Buttonlist
