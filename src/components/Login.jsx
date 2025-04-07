import { useState } from "react";
import { Input } from "./Input";
import { Logo } from "./Logo";
import { validateEmail, messageValidateEmail, validatePassword, messageValidatePassword } from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({switchAuthHandler}) =>{
    const {login, isLoading} = useLogin()

    const [formState, setFormState] = useState({
        email:{
            value: "",
            isValid: false,
            showError: false
        },
        password:{
            value: "",
            isValid: false,
            showError: false
        }
    })

    const handlerInputValueChange = (value, field) =>{
        setFormState( (prevState) =>({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            }
        }))
    }

    const handlerInputValidationOnBlur = (value, field) =>{
        let isValid = false
        switch(field){
            case "email":
                isValid = validateEmail(value)
                break
            case "password": 
                isValid = validatePassword(value)
                break
            default:
                break
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleLogin = (event) =>{
        event.preventDefault()
        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisable = isLoading || !formState.email.isValid || !formState.password.isValid

    return (
        <div className="login-container">
            <Logo text = {"Login Kinal Cast"}/>
            <form className="auth-form">
                <Input
                    field = "email"
                    label = "email"
                    value = {formState.email.value}
                    onChangeHandler={handlerInputValueChange}
                    type = "text"
                    onBlurHandler={handlerInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={messageValidateEmail}
                />
                <Input
                    field = "password"
                    label = "password"
                    value = {formState.password.value}
                    onChangeHandler={handlerInputValueChange}
                    type = "password"
                    onBlurHandler={handlerInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={messageValidatePassword}
                />
                <button onClick={handleLogin} disabled = {isSubmitButtonDisable}>
                    Log in
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Don't have an account? Sign up
            </span>
        </div>
    )
}