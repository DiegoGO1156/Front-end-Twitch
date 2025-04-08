import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Logo_Kinal.png"
import { useUserDetails } from "../../shared/hooks";

const NavLogo = () =>{
    return(
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                width="100%"
                height="100%"
                src={Logo}
                alt="Logo Kinal"
            />
        </div>
    )
}

const NavButton = ({text, onclickHandler}) =>{
    return(
        <span className="nav-button" onClick={onclickHandler}>
            {text}
        </span>
    )
}

export const NavBar = () =>{
    const {isLogged, logOut} = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuthPage = () =>{
        navigate("/auth")
    }

    const handleNavigateToSettingPage = () =>{
        navigate("/settings")
    }

    const handleNavigateToChannels = () =>{
        navigate("/channels")
    }

    const handleLogOut = () =>{
        logOut()
    }

    return (
        <div className="nav-container">
            <NavLogo/>
            <div className="nav-buttons-container">
                <NavButton text= "Browse" onclickHandler= {handleNavigateToChannels}/>
                {!isLogged ? (<NavButton text="Login" onclickHandler= {handleNavigateToAuthPage}/>) : (
                    <div>
                        <NavButton text= "My Account" onclickHandler = {handleNavigateToSettingPage}/>
                        <NavButton text= "Logout" onclickHandler = {handleLogOut}/>
                    </div>
                )}
            </div>
        </div>
    )

}