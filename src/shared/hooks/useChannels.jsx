import { useState } from "react";
import toast from "react-hot-toast";
import { getFollowedChannels, getChannels as getRequestChannels, getFollowedChannels as getRequestFollowedChannels} from "../../service/api";

export const useChannels = ()=>{
    const [channels, setChannels] = useState(null)

    const getChannels = async(isLogged = false) =>{
    
        const channelsData = await getRequestChannels()

        if(channelsData.error){
            return toast.error(
                channelsData.e?.response?.data || "Ocurrio un error al leer los datos de los canales"
            )
        }

        if(!isLogged){
            return setChannels({
                channels: channelsData.data.channels
            })
        }
    
        const followedChannelsData = await getFollowedChannels()

        if(followedChannelsData.error){
            return toast.error(
                channelsData.e?.response?.data || "Ocurrio un error al buscar los canales que sigues"
            )
        }

        setChannels({
            channels: channelsData.data.channels,
            followedChannelsData: followedChannelsData.data.channels.filter(channel => 
                followedChannelsData.data.followedChannels.includes(channel.id)
            )
        })
    }

    return{
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels.channels,
        followedChannels: channels.followedChannels
    }

}