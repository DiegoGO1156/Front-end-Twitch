import { useEffect } from "react"
import { NavBar } from "../../components/navbars/Navbar"
import {LoadingSpinner} from "../../components/LoadingSpinner"
import {Content} from "../../components/dashboard/Content"
import { Sidebar } from "../../components/navbars/Sidebar"
import {useChannels} from "../../shared/hooks/useChannels"
import {useUserDetails} from "../../shared/hooks"
import "./dashBoardPage.css"

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching, followedChannels } = useChannels()
  const {isLogged} = useUserDetails()
  
  useEffect(() =>{
    getChannels(isLogged)
  }, [])

  if(isFetching){
    return <LoadingSpinner />
  }

  return (
    <div className="dashboard-container">
        <NavBar />
        <Content channels={allChannels} getChannels={getChannels}/>
        <Sidebar channels={followedChannels}/>
    </div>
  )
}

