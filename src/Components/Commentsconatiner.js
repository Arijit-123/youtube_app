import React from 'react'

function Commentsconatiner() {

  const Comment=({data})=>{
    return(
      <div className='flex'>
       
        <img className="w-11 h-18 " src='https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg'></img>
        <div className=''>
<p className='font-bold text-sm'>Name</p>
<p className='text-sm'>Comment lorem ipsum dolor </p>
        </div>
        
      </div>
    )
  }
  return (
    <div className='m-5 p-2'>
<h1 className='text 2xl font-bold'>Comments</h1>
    
      <Comment/>
      <div className='pl-5 border border-l-black ml-5'>
      <Comment/>
      </div>
    </div>
  )
}

export default Commentsconatiner
