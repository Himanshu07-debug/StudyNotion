import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword,setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }) )
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
        >
            <label className="w-full">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-[#d1d4d9]">
                    Email Address<sup className="text-pink-600">*</sup></p>

                <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                className="bg-[#2F363C] rounded-[0.5rem] text-[#d1d4d9] w-full p-[12px]"
                />

            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-[#d1d4d9]">
                    Password<sup className="text-pink-600">*</sup></p>

                <input
                required
                type={showPassword ? ("text"):("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                className="bg-[#2F363C] rounded-[0.5rem] text-[#d1d4d9] w-full p-[12px]"
                />

                <span 
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={ () => setShowPassword( (prev) => !prev ) }>
                    {/* Just changing the previous values of showPassword... i.e toggling each time  */}
                    {showPassword ? 
                    (<AiOutlineEyeInvisible font-size={24} fill='#AFB2BF' />) :
                    (<AiOutlineEye font-size={24} fill='#AFB2BF' />)} 
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-400 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>

            </label>

            <button className="bg-yellow-400 rounded-[8px] font-medium text-[#010B13] px-[12px] py-[8px] mt-5">
                Sign In
            </button>


        </form>
    )
}

export default LoginForm;