import useGif from '../hooks/useGif';
import { useState } from 'react';
import Spinner from './Spinner';


function Tag() {

    const [tag,setTag] = useState('car');
    const {gif,loading,fetchData} = useGif(tag);


  return (
    <div className='flex flex-col items-center gap-y-5  w-1/2 bg-blue-400 rounded-lg border border-black border-4'>
      <h1 className='mt-[15px] font-bold text-3xl underline uppercase  '> Random {tag} Gif</h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width={'450'}/>)
        }

        <input type='text' value={tag} className=' bg-white w-10/12 rounded-md bg-slate-300 py-2 text-lg mb-3 text-center ' onChange={(event)=> setTag(event.target.value)} />

      <button onClick={()=>fetchData()} className='bg-white w-10/12 rounded-md bg-slate-300 py-2 text-lg mb-3 ' >Generate</button>
    </div>
  )
}

export default Tag
