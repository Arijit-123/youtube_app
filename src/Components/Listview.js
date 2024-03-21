import React, { useState,useEffect } from 'react'
import { YOUTUBE_LIST } from '../Utils/constants'
function Listview() {

const [data,setData]=useState();
    useEffect(() => {
        fetchdata();
    }, [])

    async function fetchdata(){

        const fetchData= await fetch(YOUTUBE_LIST);
        const json_data=await fetchData.json();
setData(json_data);
    }

    console.log("lisdatamodiji", data);
  return (
    <div className='w-11/12 shadow-lg'>
      this is the list view

      {
        data?.items?.map((item,index)=>(

            <>
            <div className='my-2 ml-2 flex '>
<div className='mx-5 mt-6 '>
    <img className='rounded-lg h-[250px] w-[800px]' src={item?.snippet?.thumbnails?.high?.url}></img>
</div>

<div className='font font-bold text text-wrap p-9 flex flex-col'>
  <div>  {item?.snippet?.description}</div>
  <div className='mt-4'>  {item?.snippet?.channelTitle}</div>
</div>

</div>
            </>
        ))
      }
    </div>
  )
}

export default Listview
