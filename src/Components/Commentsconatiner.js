import React from 'react'

function Commentsconatiner() {

  const Comment=({data})=>{
    return(
      <div>
        Comment
        <img></img>
      </div>
    )
  }
  return (
    <div className='m-5 p-2'>
<h1 className='text 2xl font-bold'>Comments</h1>
    
      <Comment/>
    </div>
  )
}

export default Commentsconatiner
