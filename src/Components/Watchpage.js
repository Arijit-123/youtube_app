import React, { useEffect } from 'react'
import { UseDispatch, useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appslice';
import { useParams, useSearchParams } from 'react-router-dom';
import Commentsconatiner from './Commentsconatiner';

function Watchpage() {

  const dispatch=useDispatch();
// const params=useParams();

const[searchParams]=useSearchParams();

console.log(searchParams.get("v"));

  useEffect(()=>{
    dispatch(closeMenu());
  },[]);

  return (
    <div className='flex flex-col'>
      <div className='px-4'>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <Commentsconatiner/>
    </div>
  )
}

export default Watchpage
