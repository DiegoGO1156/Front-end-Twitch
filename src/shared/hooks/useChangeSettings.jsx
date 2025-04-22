import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getChannelsSettings, updateChannelSettings } from "../../service";

export const useChannelSettings = () =>{
    const [channelSettings, setChannelSettings] = useState()

    const fetchChannelSettings = async() =>{
        const response = await getChannelsSettings()

        if(response.error){
            return toast.error(
                response.e?.response?.data || "Ocurrio un error al intentar obtener la data del canal"
            )
        }
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarUrl: response.data.avatarUrl,
            steamKey: response.data.steamKey
        })
    }


    const saveSettings = async (data) =>{
        const response  = await updateChannelSettings(data)
        if(response.error){
            return toast.error(
                response.e?.response?.data || "Ocurrio un error al actualizar la información"
            )
        }
        toast.success("Información actualizada con exito!")
    }

    useEffect(() =>{
        fetchChannelSettings()
    }, [])

    return({
        isFetching: !channelSettings,
        channelSettings,
        saveSettings
    })
}