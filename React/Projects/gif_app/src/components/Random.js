// import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import axios from 'axios';
import Spinner from './Spinner';

function Random() {

    const {gif,loading,fetchData} = useGif();


  return (
    <div className='flex flex-col items-center gap-y-5  w-1/2 bg-green-400 rounded-lg border border-black border-4'>
      <h1 className='mt-[15px] font-bold text-3xl underline uppercase  '>A Random Gif</h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width={'450'}/>)
        }

      <button onClick={()=>fetchData()} className='bg-white w-10/12 rounded-md bg-slate-300 py-2 text-lg mb-3 ' >Generate</button>
    </div>
  )
}

export default Random
