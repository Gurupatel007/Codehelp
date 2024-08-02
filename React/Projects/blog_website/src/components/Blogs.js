// import React, { useContext } from 'react'
// import { AppContext } from '../context/AppContext'
// import Spinner from '../components/Spinner';
// import BlogDetails from './BlogDetails';

// function Blogs() {
//     // consume
//     const {loading,posts} = useContext(AppContext);

//   return (
//     <div className='w-full flex justify-center items-center'>
//         <div className='w-11/12 max-w-[530px] min-h-screen py-3 flex flex-col gap-y-7 mt-14 mb-14'>
//        {
//         loading ? (<Spinner />) : 
//         (
//             posts.length === 0 ? (<h1>No posts found</h1>) : (
//                 posts.map((post) => (
//                     <div key={post.id} className='w-full bg-gray-100 p-4 rounded-md shadow-md'>
//                      <BlogDetails post={post} />
//                     </div>
//                 ))
//             )
//         )
//        }
//     </div>
//     </div>
//   )
// }

// export default Blogs

import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from '../components/Spinner';
import BlogDetails from './BlogDetails';

function Blogs() {
    const { loading, posts } = useContext(AppContext);

    return (
        <div className='w-full mt-8 mb-4'>
            {loading ? (
                <div className='flex justify-center items-center h-64'>
                    <Spinner />
                </div>
            ) : posts.length === 0 ? (
                <h1 className='text-2xl text-center text-gray-600'>No posts found</h1>
            ) : (
                <div className='space-y-8'>
                    {posts.map((post) => (
                        <div key={post.id} className='bg-white p-6 rounded-lg shadow-md'>
                            <BlogDetails post={post} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Blogs