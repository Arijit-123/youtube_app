import React from 'react'

function Chatmessage({name,message}) {
  return (
    <div>
     <img className='w-11 h-18' src='https://w7.pngwing.com/pngs/416/62/png-transparent-anonymous-person-login-google-account-computer-icons-user-activity-miscellaneous-computer-monochrome.png'></img>
     <span className='font-bold px-4'>{name}</span>
     <span>{message}</span>
    </div>
  )
}

export default Chatmessage
