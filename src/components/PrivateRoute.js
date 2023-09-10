import React from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({isLoggedIn, children}) => {

    if(isLoggedIn){
        // children is nothing but props.children, as we are not using props, we had directly written children
        
        return children;    // children is Dashboard
    }

    toast.error("Login First");

    return <Navigate to="/login" />
    
}

export default PrivateRoute;