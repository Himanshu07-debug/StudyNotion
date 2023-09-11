import React from "react";
import frameImage from "../assests/frame.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {FcGoogle} from "react-icons/fc"


const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
    return (
        <div className="flex w-11/12 max-w-[1160px] mx-auto justify-between items-center gap-x-12 gap-y-0 h-screen">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-[#DADDE2]">{desc1}</span>
                    <br />
                    <span className="text-blue-400 italic">{desc2}</span>
                </p>

                {formType === "signup" ? 
                (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex w-full items-center my-4 gap-x-2" >
                    <div className="h-[1px] w-full bg-[#474E54]" ></div>
                    <div className="text-[#474E54] font-medium leading-[1.375rem]">OR</div>
                    <div className="h-[1px] w-full bg-[#474E54]"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#DADDE2] border border-[#474E54]
                px-[12px] py-[8px] gap-x-2 my-6">
                    <FcGoogle />
                    <p>Sign Up With Google</p>
                </button>

            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} alt="Pattern" width={558} height={504} loading="lazy" />

                <img src={image} alt="img not load" width={558} height={490} loading="lazy" 
                className="absolute -top-4 right-4"
                />


            </div>

        </div>
    )
}

export default Template;