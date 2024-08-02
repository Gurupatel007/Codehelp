// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Blogs from '../components/Blogs';
// import Pagination from '../components/Pagination';
// import { useLocation } from 'react-router-dom';

// const CategoryPage = () => {

//     const navigation = useNavigate();
//     const location = useLocation();
//     const category = location.pathname.split('/').at(-1);

//   return (
//     <div className='w-full'>
//         <Header />
//         <div className='flex flex-col items-center justify-start'>
//             <div className='w-11/12 max-w-[530px] mt-16 flex gap-4 font-bold text-xl'>
//                 <button className='border px-2 rounded-md border-black'  onClick={() => navigation(-1)}>
//                     Back
//                 </button>
//                 <h2>
//                     Blogs Tagged with <span>#{category}</span>
//                 </h2>
//             </div>
//             <Blogs />
//             <Pagination />
//         </div>
//     </div>
//   )
// }

// export default CategoryPage


import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);

    return (
        <div className='min-h-screen bg-gray-50'>
            <Header />
            <main className='container mx-auto px-4 py-8 mt-8 mb-8'>
                <div className='max-w-3xl mx-auto'>
                    <div className='flex items-center justify-between mb-8'>
                        <button 
                            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'  
                            onClick={() => navigation(-1)}
                        >
                            Back
                        </button>
                        <h2 className='text-2xl font-bold'>
                            Blogs on <span className='text-blue-600'>{category}</span>
                        </h2>
                    </div>
                    <Blogs />
                    <Pagination />
                </div>
            </main>
        </div>
    )
}

export default CategoryPage