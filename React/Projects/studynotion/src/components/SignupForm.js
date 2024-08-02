import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai';    

function SignupForm(props) {

    const {setIsLoggedIn} = props;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => {
            return { ...prevData, [name]: value }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password Do no match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountsData = {
            ...formData
        };

        const finalData = {
            ...accountsData,
            accountType
        }
        console.log("printing final account data");
        console.log(finalData);

        navigate('/dashboard');
    }

    return (
        <div>
            <div 
            className='bg-richblack-800 flex p-1 gap-x-1 my-6 rounded-full max-w-max '>
                <button
                className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-300`}
                onClick={()=>setAccountType("student")}
                >
                    Student
                </button>
                <button
                className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-4'
            >
                {/* firstname lastname */}
                <div className='flex w-full gap-x-4 '>
                    <label className='w-full'>
                        <p className='text-white text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                            placeholder='Enter First name' 
                            required
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'
                            />
                    </label>
                    <label className='w-full'>
                        <p className='text-white text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler}
                            placeholder='Enter Last name' 
                            required
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'
                            />
                    </label>
                </div>

                {/* add email */}
                <label className='w-full'>
                    <p className='text-white text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Enter Email' 
                        required
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'
                        />
                </label>

                {/* create pass and confirm pass */}
                <div className='flex w-full gap-x-4 '>
                    <label className='w-full relative'>
                        <p className='text-white text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder='Enter Password' 
                            required
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'
                            />
                        <span 
                        onClick={() => setShowPassword(prev => !prev)}
                        className='absolute right-3 top-[38px] cursor-pointer'
                        >
                            {showPassword ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <p className='text-white text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            type={showConfirmPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder='Confirm Password' 
                            required
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2'
                            />
                        <span 
                        onClick ={() => setShowConfirmPassword(prev => !prev)}
                        className='absolute right-3 top-[38px] cursor-pointer'
                        >
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>
            <button
            className='bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6 '
            >
                Create Account
            </button>
            </form>
        </div>
    )
}

export default SignupForm
