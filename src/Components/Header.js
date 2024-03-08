import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appslice';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { cacheResults } from '../Utils/searchslice';
function Header() {
const[query,setQuery]=useState("");
const[suggestion,setSuggestion]=useState([]);

const [showsuggestion,setShowsuggestion]=useState();

const searchCache=useSelector((store)=>store.search);
  const dispatch=useDispatch();
  const togglemenuhandler=()=>{
    dispatch(toggleMenu())
  }

const searchcache=useSelector(store=>store.search);

  useEffect(()=>{
    console.log('query',query);
   
  const timer=  setTimeout(()=>{
    if(searchCache[query]){
      setSuggestion(searchCache[query]);
    }
    else{
      searchsuggestion();
    }
   
  

},400);
      
    return()=>{
      clearTimeout(timer);
    };
  },[query])
  

  async function searchsuggestion(){

    console.log('API CALL')
    const data=await fetch(YOUTUBE_SEARCH_API+query);
    const json= await data.json();
    console.log('newjson',json);

    setSuggestion(json[1]);

    dispatch(cacheResults({[query]:json[1]}));
  }
  console.log('new suggestion', suggestion);
  return (
    <>
    <div className='grid p-5 grid-flow-col shadow-lg'>
    <div className='flex col-span-1'>
    <img onClick={()=>togglemenuhandler()} className='h-8' src="https://static-00.iconduck.com/assets.00/hamburger-menu-icon-2048x1536-6qrrvtw1.png"></img>
    <img className='h-8 mx-4' src='https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png'></img>
 
    </div>
    <div  className='col-span-10 px-10'>
    <div >
      <input type='text' className='w-1/2 border border-gray-500 p-2 rounded-l-full'  value={query} onChange={(e)=>setQuery(e.target.value)}></input>
      
      <button className='border border-gray-500 px-5 py-2 rounded-r-full'>🔍</button>
      </div>
      <div className='fixed bg-white w-1/3'>
      <ul>
      {
        
        suggestion?.map((suggest,index)=>(
          <>
          
          <li className='py-2 shadow-sm hover:bg-gray-100'> 🔍 {suggest}</li>
          
          </>
        ))
       
      }
      </ul>
    {/* <ul>
      <li className='py-2 shadow-sm hover:bg-gray-100'> 🔍 iphone12</li>
      <li className='py-2 shadow-sm hover:bg-gray-100'> 🔍 iphone14  </li>
      <li className='py-2 shadow-sm hover:bg-gray-100'> 🔍 iphone12  </li>
      <li className='py-2 shadow-sm hover:bg-gray-100'> 🔍 iphone12</li>
      <li className='py-2 shadow-sm hover:bg-gray-100'> 🔍 iphone14</li>
    </ul> */}
    </div>
     
      
    </div>
    
    
   
    
    <div>
      <img className='h-8' src='https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg'></img>
    </div>
    
    </div>
    
    </>
  )
}

export default Header
