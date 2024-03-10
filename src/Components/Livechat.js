import React from 'react'
import Chatmessage from './Chatmessage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomName } from './helper';
function Livechat() {

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
    <div className='w-[250px] h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
    {chatmessage.map((item,i)=><>
      <Chatmessage key={i} name={item.name} message={item.message}/>
    </>)}
     
    </div>
  )
}

export default Livechat
