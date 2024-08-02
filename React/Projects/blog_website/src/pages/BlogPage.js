// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate, useLocation, useParams } from 'react-router-dom';
// import Header from '../components/Header';
// import BlogDetails from '../components/BlogDetails';
// import { AppContext } from '../context/AppContext';
// import { baseUrl } from '../baseUrl';

// const BlogPage = () => {
//     const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
//     const [blog, setBlog] = useState(null);
//     const [relatedBlogs, setRelatedBlogs] = useState([]);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { loading, setLoading } = useContext(AppContext);
//     const { blogId } = useParams();

//     async function fetchRelatedBlogs() {
//         setLoading(true);
//         let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(data);
            
//             setBlog(data.blog);
//             setRelatedBlogs(data.relatedBlogs);
//         } catch (error) {
//             console.error("Error fetching blog data:", error);
//             setBlog(null);
//             setRelatedBlogs([]);
//         }
//         setLoading(false);
//     }

//     useEffect(() => {
//         if (blogId) {
//             fetchRelatedBlogs();
//         }
//     }, [blogId  ,location]);

//     return (
//         <div>
//             <Header />
//             <div>
//                 <button onClick={() => navigate(-1)}>
//                     Back
//                 </button>

//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : blog ? (
//                     <div>
//                         <BlogDetails post={blog} />
//                         <h3>Related Blogs</h3>
//                         <ul>
//                             {relatedBlogs.map(post => (
//                                 <li key={post.id}>
//                                     <BlogDetails post={post} />
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 ) : (
//                     <div>
//                         <p>No blog found</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default BlogPage;

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { loading, setLoading } = useContext(AppContext);
    const { blogId } = useParams();

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.error("Error fetching blog data:", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [blogId, location]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8 mt-8">
                <button 
                    onClick={() => navigate(-1)}
                    className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    Back
                </button>

                {loading ? (
                    <p className="text-center text-gray-600 text-xl">Loading...</p>
                ) : blog ? (
                    <div>
                        <BlogDetails post={blog} />
                        <h3 className="text-2xl font-bold mt-12 mb-6">Related Blogs</h3>
                        <ul className="space-y-8">
                            {relatedBlogs.map(post => (
                                <li key={post.id} className="bg-white shadow-md rounded-lg p-6">
                                    <BlogDetails post={post} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-xl text-gray-600">No blog found</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default BlogPage;