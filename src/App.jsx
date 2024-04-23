import { useRef } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const inputRef=useRef();
  const [skillArr,setSkillArr]=useState([])

  const handleInput=()=>{
   setSkillArr([...skillArr,inputRef.current.value])
   inputRef.current.value=''
   console.log(skillArr)
  }

  const handleRemoveItemFromArr=(data)=>{
  const newArr=skillArr.filter((item)=>item!==data)  
  setSkillArr(newArr)
  }

  return (
    <center>
    <div className='flex justify-center items-center w-[100%] h-[500px]'>
    {skillArr.map((data,i)=>{
     return <div className='w-[100]'>
     <p key={i} className='mr-5 text-white'>{data}<span className=' bg-red-500 px-2 py-1 rounded-full text-white cursor-pointer text-[0.60rem] ml-2' onClick={()=>handleRemoveItemFromArr(data)}>X</span></p>
     </div>
    })}<input ref={inputRef} className='border-2'/><button className='ml-5 bg-green-600 text-white rounded-md px-4 py-1' onClick={handleInput}>Add</button>
    </div>
    </center>
  )
}

export default App
