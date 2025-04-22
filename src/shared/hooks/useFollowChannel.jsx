import toast from "react-hot-toast";
import { followChannel as followChannelRequest} from "../../service";

export const useFollowChannel = () =>{

    const followChannel = async(channelId, onSucces) =>{

        const responseData = await followChannelRequest(channelId)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data || "Ocurrio un error al intentar seguir al canal"
            )
        }
        toast.success("Channel Followed succesfully!!!")
        onSucces(true)
    }

    return{
        followChannel
    }
}