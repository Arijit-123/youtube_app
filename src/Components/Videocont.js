import React, { useEffect, useState } from 'react';
import Videocard, { AdvideoCard } from './Videocard';
import { YOUTUBE_API } from '../Utils/constants';
import {Link} from 'react-router-dom' 
function Videocont() {

const [livemessage,setLivemessage]=useState();
  useEffect(()=>{
    datafetch();
  },[]);

const [vid,setVid]=useState(null);

  async function datafetch(){
const data= await fetch(YOUTUBE_API);
const jsondata= await data.json();
console.log("youtube data", jsondata);
setVid(jsondata.items);
  }
  console.log("infocont");
  return (
    <>

    {/* {vid[0] && <AdvideoCard key={1} info={vid[0]}/>} */}
    <div className='flex ml-8 flex-wrap'>
    {
      vid?.map((item,index)=>(
    <div >
    <Link to={'/watchpage?v='+ item.id}>
     <Videocard key={index} info={item}/>
     </Link>
    </div>
      ))
    }
    </div>
    </>
  )
}

export default Videocont
