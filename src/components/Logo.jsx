import logo from "../assets/img/Logo_Kinal.png"

export const Logo = ({text}) =>{
    return(
        <div className="auth-form-logo-container">
            <img src={logo} alt="Logo_Kinal" />
            <span>{text}</span>
        </div>
    )
}