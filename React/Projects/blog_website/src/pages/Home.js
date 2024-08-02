import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='w-full'>
        <Header />
        <div className='w-full flex flex-col items-center justify-center'>
            <Blogs />
            <Pagination />
        </div>
    </div>
  )
}

export default Home
