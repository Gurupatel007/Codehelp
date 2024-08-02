import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai';
import {Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast';

function LoginForm(props) {
    const {setIsLoggedIn} = props;
    const navigate = useNavigate();

    const [formData,setFormData] = useState({ email:"" , password:""}); 

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(event){
        const {name,value} = event.target;
        setFormData(prevData=>{
            return {...prevData, [name]: value}
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("printing the formData");
        console.log(formData)
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler} 
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Enter email address<sup className='text-pink-200'>*</sup></p>
            <input
            type='email' 
            value={formData.email} 
            onChange={changeHandler}
            placeholder='Enter email id'
            name='email'
            required
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'
            />
        </label>

        <label className='relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>
                Password
                <sup className='text-pink-200'>*</sup>
            </p>
            <input
            type={showPassword ? "text" : "password"} 
            value={formData.password} 
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
            required
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'
            />

            <span 
            onClick={()=> setShowPassword(prev=>!prev)}
            className='absolute right-3 top-[38px] cursor-pointer'
            >
                {showPassword ? 
                (<AiOutlineEyeInvisible 
                fontSize={24} fill='#AFB2BF'
                />) : 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                }
            </span>
            <Link to="#">
                <p className='text-blue-100 text-xs mt-1 max-w-max ml-auto'>Forgot Password</p>
            </Link>
        </label>
        
        <button className='bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6 '>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm
