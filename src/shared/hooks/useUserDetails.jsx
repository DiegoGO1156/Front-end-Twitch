import { useState } from "react";
import { logOut as lougOutHandler } from "./useUserLogOut";

const getuserDetails = () => {
    const userDetails = localStorage.getItem("user")

    if(userDetails){
        return JSON.parse(userDetails)
    }else{
        return null
    }
}

export const useUserDetails = () =>{
    const [userDetails, setUserDetails] = useState(getuserDetails)

    const logOut = () =>{
        lougOutHandler()
    }
    return{
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : "Guest",
        logOut
    }
}