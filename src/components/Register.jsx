import { useState } from "react";
import {Logo} from "./Logo"
import {Input} from "./Input"
import {validateConfirmPassword, passConfirmationMessage, validateEmail, messageValidateEmail, validatePassword, messageValidatePassword, validateUsername, messageValidateUsername} from "../shared/validators"
import { useRegister } from "../shared/hooks";

export const Register = ({switchAuthHandler}) =>{
    
    const {register, isLoading} = useRegister()

    const[formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false
        },
        username:{
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        },
        passwordConfirm:{
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
            case "username":
                isValid = validateUsername(value)
                break
            case "password": 
                isValid = validatePassword(value)
                break
            case "passwordConfirm": 
                isValid = validateConfirmPassword(formState.password.value,value)
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

    const handleRegister = (event) =>{
        event.preventDefault()
        register(formState.email.value, formState.password.value, formState.username.value)
    }

    const isSubmitButtonDisable = isLoading || !formState.email.isValid || !formState.password.isValid || !formState.username.isValid || !formState.passwordConfirm.isValid

    return (
        <>
            <div className="register-container">
                <Logo text= {"Register Kinal cast"}/>
                <form className="auth-form">
                    <Input
                        field = "email"
                        label = "Email"
                        value={formState.email.value}
                        onChangeHandler={handlerInputValueChange}
                        type = "text"
                        onBlurHandler = {handlerInputValidationOnBlur}
                        showErrorMessage={formState.email.showError}
                        validationMessage={messageValidateEmail}
                    />
                    <Input
                        field = "username"
                        label = "UserName"
                        value={formState.username.value}
                        onChangeHandler={handlerInputValueChange}
                        type = "text"
                        onBlurHandler = {handlerInputValidationOnBlur}
                        showErrorMessage={formState.username.showError}
                        validationMessage={messageValidateUsername}
                    />
                    <Input
                        field = "password"
                        label = "Password"
                        value={formState.password.value}
                        onChangeHandler={handlerInputValueChange}
                        type = "password"
                        onBlurHandler = {handlerInputValidationOnBlur}
                        showErrorMessage={formState.password.showError}
                        validationMessage={messageValidatePassword}
                    />
                    <Input
                        field = "passwordConfirm"
                        label = "Password Confirmation"
                        value={formState.passwordConfirm.value}
                        onChangeHandler={handlerInputValueChange}
                        type = "password"
                        onBlurHandler = {handlerInputValidationOnBlur}
                        showErrorMessage={formState.passwordConfirm.showError}
                        validationMessage={passConfirmationMessage}
                    />
                    <button onClick={handleRegister} disabled= {isSubmitButtonDisable}>
                        Register
                    </button>
                </form>
                <span onClick={switchAuthHandler} className="auth-form-switch-label">
                    Already have an account? Sign up
                </span>
            </div>
        </>
    )

}