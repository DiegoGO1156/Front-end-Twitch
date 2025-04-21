import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../service";

export const useChangePassword = () =>{
    const changePass = async (password, newPassWord) =>{
        const responseData = await changePasswordRequest({password, newPassWord})
        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || "No fue posible actualizar la contraseña"
            )
        }
        toast.success("PassWord actualizada con exito!")
    }
    return{
        changePass
    }
}