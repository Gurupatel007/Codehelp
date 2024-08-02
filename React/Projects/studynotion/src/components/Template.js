import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
// import image from '../assets/login.png';
import frameImg from '../assets/frame.png'; 
import { FcGoogle } from 'react-icons/fc';

function Template({title,desc1,desc2,image,formType,setIsLoggedIn}) {
  return (
    <div className='w-11/12 max-w-[1160px] flex py-12 mx-auto gap-x-12 gap-y-0 justify-between'>
        <div className=' w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading[2.357rem] '>{title}</h1>
            <p className='text-[1.125rem] leading[1.625rem] mt-4 '>
                <span className='text-richblack-100'>
                    {desc1}
                </span>
                <br />
                <span className='text-blue-100 italic'>
                    {desc2}
                </span>
            </p>

            { 
                formType === "signup" ? 
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
                (<LoginForm setIsLoggedIn={setIsLoggedIn} />) 
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700 '></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700 '></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-100 px-[12px] py-[8px] gap-x-2 gap-y-6 '>
                <FcGoogle />
                <span>Sign in with Google</span>
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img 
            src={image} alt="students" width={558} height={490}
            className='absolute -top-4 right-4 '
            />
            <img src={frameImg} alt="frame" width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template