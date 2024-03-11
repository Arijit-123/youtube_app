import React from 'react'

function Chatmessage({name,message}) {
  return (
    <div className='flex my-2'>
     <img className='w-11 h-18' src='https://w7.pngwing.com/pngs/416/62/png-transparent-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer-monochrome.png'></img>
     <div>
     <span className='font-bold px-4'>{name}</span>
     <span>{message}</span>
     </div>
    </div>
  )
}

export default Chatmessage
