import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../service";
import toast from "react-hot-toast";

export const useRegister = () => {

    const [isLoading, setIsLoading]  = useState(false)
    const navigate = useNavigate()

    const register = async (email, password, username) =>{
        setIsLoading(true)

        const response = await registerRequest({email, password, username})
        if(response.error){
            return toast.error(response.error?.response?.data || "Ocurrio un error al intentar registrarse")
        }
        setIsLoading(false)
        const {userDetails} = response.data

        localStorage.setItem("user", JSON.stringify(userDetails))

        toast.success("Esta registrado con exito!!!!")
        navigate("/")
    }
    return{
        register,
        isLoading
    }
}