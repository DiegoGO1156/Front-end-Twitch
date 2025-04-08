import logo from "../assets/img/Logo_Kinal.png"

export const Logo = ({text}) =>{
    return(
        <div className="auth-form-logo-container">
            <img src={logo} alt="Logo_Kinal" style={{maxWidth: 150}}/>
            <span>{text}</span>
        </div>
    )
}