import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';

function Testimonials(props) {
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

    const leftShiftHandler = () => {
      if(index -1 < 0){
        setIndex(reviews.length - 1);
      }else{
        setIndex(index - 1);
      }
    }
    const rightShiftHandler = () => {
        if(index + 1 >= reviews.length){
          setIndex(0);
        }else{
          setIndex(index+1);
        }
    }
    const surpriseHandler = () => {
      setIndex(Math.floor(Math.random() * reviews.length))    
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700  hover:shadow-xl rounded-2xl'>
      <Card review={reviews[index]} />

      <div className='flex justify-center items-center text-3xl mt-5 gap-3 text-violet-400 font-bold '>
                <button
                onClick={leftShiftHandler}
                className='hover:text-violet-400'>
                    <FiChevronLeft />
                </button>
                <button
                onClick={rightShiftHandler}
                className='hover:text-violet-400 '>
                    <FiChevronRight />
                </button>
            </div>

            <div className='mt-5'>
                <button
                onClick={surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprise me
                </button>
            </div>
    </div>
  )
}

export default Testimonials
