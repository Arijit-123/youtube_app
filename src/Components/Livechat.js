import React, { useState } from 'react'
import Chatmessage from './Chatmessage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomName } from './helper';
function Livechat() {
const[livem,setLivem]=useState();
const dispatch=useDispatch();

const chatmessage=useSelector((store)=>store.chat.messages);
  useEffect(() => {
const i=  setInterval(() => {

dispatch(addMessage({
  name:generateRandomName(),
  message:"Lorem Ipsum Dolor Emmet",
})
);
    
  }, 2000);
  return()=>clearInterval(i);
  }, []);

  return (
    <>
    <div className='w-[330px] h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    {chatmessage.map((item,i)=><>
      <Chatmessage key={i} name={item.name} message={item.message}/>
    </>)}
     
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{e.preventDefault();
    dispatch(addMessage({
      name:"ARIJIT KARAN",
      message:livem,
    }));
    setLivem("")
    }}>
<input className='w-94' type='text' value={livem} onChange={(e)=>setLivem(e.target.value)}></input>
<button  className='bg-green-200 px-2 mx-2'>Send</button>
    </form>
    </>
  )
}

export default Livechat
