import { Navigate } from "react-router-dom"
import { useAuth } from "./auth_context"
import React from "react";


const PrivateRouting = ({children}) =>
{
    let { currentUser } = useAuth();
    console.log(currentUser);
    if(!currentUser)
    {
       return <Navigate to='/'/> 
    }
    return children
}
export default PrivateRouting