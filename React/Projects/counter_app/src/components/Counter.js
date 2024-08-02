import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    function incrementHandler(){
        dispatch(increment());
    }

    function decrementHandler(){
        dispatch(decrement()); 
    }

  return (
    <div>
        {/* give me using tailwind css */}
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-800 text-white font-bold rounded-lg border shadow-lg p-10 flex flex-col gap-8">
                <h2 className="text-5xl text-center">{count}</h2>
                <div className="flex space-x-3">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={incrementHandler}>Increment</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decrementHandler}>Decrement</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter
