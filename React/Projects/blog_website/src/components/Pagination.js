// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'

// function Pagination() {

//     const {page,handlePageChange,totalPages} = useContext(AppContext);

//   return (
//     <div className='w-full flex justify-center items-center border fixed bottom-0 bg-white'>
//         <div className='flex justify-between w-11/12 max-w-[530px] py-2'>
//             <div className='flex gap-2'>
//             {
//                 page > 1 &&
//                 (<button className='rounded-md border border-black px-4' onClick={()=>handlePageChange(page-1)} >Previous</button>)
//             }
//             {
//                 page < totalPages &&
//                 (<button className='rounded-md border border-black px-4' onClick={()=>handlePageChange(page+1)} >Next</button>)
//             }
//             </div>

//             <p>
//                 Page {page} of {totalPages}
//             </p>
//         </div>
//     </div>
//   )
// }

// export default Pagination

import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
    const { page, handlePageChange, totalPages } = useContext(AppContext);

    return (
        <div className='fixed bottom-0 left-0 right-0 bg-white shadow-md'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex justify-around items-center'>
                    <div className='space-x-2'>
                        {page > 1 && (
                            <button 
                                className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'
                                onClick={() => handlePageChange(page - 1)}
                            >
                                Previous
                            </button>
                        )}
                        {page < totalPages && (
                            <button 
                                className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'
                                onClick={() => handlePageChange(page + 1)}
                            >
                                Next
                            </button>
                        )}
                    </div>
                    <p className='text-gray-600'>
                        Page <span className='font-semibold'>{page}</span> of <span className='font-semibold'>{totalPages}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pagination