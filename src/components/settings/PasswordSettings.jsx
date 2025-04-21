import { useState } from "react";
import { messageValidatePassword, validatePassword } from "../../shared/validators";
import { useChangePassword } from "../../shared/hooks/useChangePassword";
import { Input } from "../Input";

const inputs = [
    {
        field: "password",
        label: "Password",
        validationMessage: validatePassword,
        type: "password"
    },{
        field: "NewPassword",
        label: "New Password",
        validationMessage: messageValidatePassword,
        type: "password"
    }
]

export const PasswordSettings = () =>{
    const [formState, setFormState] = useState({
        password: {
            isValid: false,
            showError: false,
            value: ""
        },
        newPassword:{
            isValid: false,
            showError: false,
            value: ""
        }
    })

    const {changePassword} = useChangePassword()

    const handleInputValueChange = (value, field) => {
        setFormState((preState) => ({
            ...preState,
            [field]: {
                ...preState[field],
                value
            }
        }))
    }

    const handelInputValidationOnBlur = (value, field) =>{
        let isValid = validatePassword(value)
        setFormState((prevState) =>({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const isSubmintButtonDisabled = !formState.password.isValid || !formState.newPassword.isValid

    const handleFormSubmit = (event) =>{
        event.preventDefault()
        changePassword(formState.password.value, formState.newPassword.value)
    }

    return (
        <form className="settings-form">
            {inputs.map((input) => (
                <Input
                    key={input.field}
                    field={input.field}
                    label={input.label}
                    value={formState[input.field].value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handelInputValidationOnBlur}
                    showErrorMessage={formState[input.field].showError}
                    validationMessage={input.validationMessage}
                    type={input.type}
                    textArea={input.textArea}
                />
            ))}
            <button onClick={handleFormSubmit} disabled={isSubmintButtonDisabled}>
                Actualizar Contraseña
            </button>
        </form>
    )
}

