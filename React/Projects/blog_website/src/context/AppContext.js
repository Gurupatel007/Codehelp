import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';
import { useNavigate } from 'react-router-dom';

// step1
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const navigate = useNavigate();

    // data filling pending

    async function fetchBlogPosts(page = 1,tag=null,category){
        setLoading(true);
        // let url = `${baseUrl}?page=${page}`;
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }catch(error){
            console.error("Error in fetching data "+error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        // setPage(page);
        // fetchBlogPosts(page);
        navigate({search : `?page=${page}`});
        setPage(page);
    }

    const value ={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }


    // step2 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}