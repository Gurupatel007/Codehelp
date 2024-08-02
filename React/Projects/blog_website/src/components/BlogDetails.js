// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const BlogDetails = ({ post }) => {
//     return (
//         <div>
//             <NavLink to={`/blog/${post.id}`} className='text-blue-500 underline font-bold text-xs'>
//             <span>{post.title}</span>
//             </NavLink>

//             <p>
//                 By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>
//                     <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>{post.category}</NavLink>
//                 </span>
//             </p>

//             <p>Posted On {post.date}</p>
//             <p>{post.content}</p>
//             <div>
//                 {post.tags.map((tag, index) => (
//                     <span key={index}>
//                         <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} className='text-blue-500 underline font-bold text-xs'>
//                             #{tag}
//                         </NavLink>    
//                     </span>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default BlogDetails

import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <NavLink to={`/blog/${post.id}`} className='text-blue-600 hover:text-blue-800 font-semibold text-lg mb-2 inline-block'>
                <span>{post.title}</span>
            </NavLink>

            <p className="text-sm text-gray-600 mb-2">
                By <span className='italic'>{post.author}</span> on {' '}
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} className="font-medium text-blue-600 hover:underline">
                    {post.category}
                </NavLink>
            </p>

            <p className="text-sm text-gray-500 mb-4">Posted on {post.date}</p>
            <p className="text-base text-gray-700 mb-4">{post.content}</p>
            <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                    <NavLink 
                        key={index}
                        to={`/tags/${tag.replaceAll(" ","-")}`} 
                        className='text-sm text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded-full'
                    >
                        #{tag}
                    </NavLink>    
                ))}
            </div>
        </div>
    )
}

export default BlogDetails