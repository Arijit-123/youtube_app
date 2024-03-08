import React from 'react'

function Videocard({info,key}) {
    console.log("videocard",info);
const {snippet, statistics}=info;
const {channelId,title, thumbnails}=snippet;
console.log(title);
 let title_new=title?.substring(0, 29);
  return (
    <div  className=' m-2 shadow-lg'>
      <img alt='video' className='rounded-lg ' src={thumbnails.medium.url}></img>
    <ul>
      <li   className='font-bold'>{title_new}...</li>
      <li>{snippet?.channelTitle}</li>
      <li>{statistics?.viewCount} views</li>
    </ul>
    </div>
  )
}


export const AdvideoCard=({info,key})=>{
  return(

    <>
    <div className='p-1 m-1 border border-red-800'>
      <Videocard/>
      </div>
    </>
  ) 
}
export default Videocard
