import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:""

    })

    const [showPassword,setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData( (prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }) )
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password do not Match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");

        console.log("Printing the formData");
        console.log(formData);

        const accountData = {...formData}  

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing Final data:")
        console.log(finalData);

        navigate("/dashboard");
    }

    return (
        <div className="flex flex-col w-full gap-y-4 mt-6">

            <div className="flex bg-[#2F363C] rounded-full gap-x-1 p-1 max-w-max">
                <button onClick={() => setAccountType("student")}
                className={`${accountType === "student" ?
                "bg-[#010B13] text-white":
                "bg-transparent text-[#c4c6c9]"} py-2 px-5 rounded-full transition-all duration-200`}
                >
                Student
                </button>

                <button onClick={() => setAccountType("instructor")}
                className={`${accountType === "instructor" ?
                "bg-[#010B13] text-white":
                "bg-transparent text-[#c4c6c9]"} py-2 px-5 rounded-full transition-all duration-200`}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                
                <div className="flex gap-x-4 mt-4">

                    <label className="w-full">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-[#d1d4d9]">
                            First Name<sup className="text-pink-600">*</sup></p>
                        <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className="bg-[#2F363C] rounded-[0.5rem] text-[#d1d4d9] w-full p-[12px]"
                        />
                    </label>

                    <label className="w-full">
                        <p className=" text-[0.875rem] mb-1 leading-[1.375rem] text-[#d1d4d9]">
                            Last Name<sup className="text-pink-600">*</sup></p>
                        <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter last Name"
                        value={formData.lastName}
                        className="bg-[#2F363C] rounded-[0.5rem] text-[#d1d4d9] w-full p-[12px]"
                        />
                    </label>

                </div>

                <label className="mt-3">
                    <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-[#d1d4d9] mt-4">
                        Email Address<sup className="text-pink-600">*</sup></p>
                    <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address"
                    value={formData.email}
                    className="bg-[#2F363C] rounded-[0.5rem] text-[#d1d4d9] w-full p-[12px]"
                    />
                </label>

                <div className="flex gap-x-4 mt-5">
                    <label className="relative w-full">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-[#d1d4d9]">
                            Create Password<sup className="text-pink-600">*</sup></p>
                        <input
                        required
                        type={showPassword ? "text":"password"}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className="bg-[#2F363C] rounded-[0.5rem] text-[#d1d4d9] w-full p-[12px]"
                        />

                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer "
                        onClick={ () => setShowPassword( (prev) => !prev ) }>
                            {showPassword ?
                             <AiOutlineEyeInvisible font-size={24} fill='#AFB2BF' /> : 
                             (<AiOutlineEye font-size={24} fill='#AFB2BF' />)} 
                        </span>

                    </label>


                    <label className="relative w-full">
                        <p className="text-[0.875rem] mb-1 leading-[1.375rem] text-[#d1d4d9]">
                            Confirm Password<sup className="text-pink-600">*</sup></p>
                        <input
                        required
                        type={showConfirmPassword ? ("text"):("password")}
                        name="confirmpassword"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.confirmpassword}
                        className="bg-[#2F363C] rounded-[0.5rem] text-[#d1d4d9] w-full p-[12px]"
                        />

                        <span 
                        className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={ () => setShowConfirmPassword( (prev) => !prev ) }>
                            {showConfirmPassword ?
                             (<AiOutlineEyeInvisible font-size={24} fill='#AFB2BF' />) 
                             : (<AiOutlineEye font-size={24} fill='#AFB2BF' />)} 
                        </span>

                    </label>

                </div>

                <button className="bg-yellow-400 rounded-[8px] font-medium text-[#010B13] px-[12px] py-[8px] w-full mt-10">
                    Create Account
                </button>


            </form>

        </div>
    )
}

export default SignUpForm;