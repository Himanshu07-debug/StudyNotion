import React from "react";
import signUpImg from "../assests/signup.png";
import Template from "../components/Template";

const SignUp = ({setIsLoggedIn}) =>{
    return (
        <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signUpImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default SignUp;