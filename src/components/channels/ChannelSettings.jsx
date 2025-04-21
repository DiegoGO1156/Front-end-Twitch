import { useState } from "react";
import { validateUsername, 
    messageValidateUsername, 
    validationAvatarUrl, 
    avatarUrlValidationMessage, 
    descriptionMessage, 
    validteDescription, 
    validateTitle, 
    messageValidateTitle } from "../../shared/validators";

import { Input } from "../Input";

const inputs = [
    {
        field: "username",
        label: "Username",
        validationMessage: messageValidateUsername,
        type: text
    },
    {
        field: "title",
        label: "Title",
        validationMessage: messageValidateTitle,
        type: text
    },
    {
        field: "avataUrl",
        label: "Avatar Url", 
        validationMessage: avatarUrlValidationMessage,
        type: "text"
    },
    {
        field: "description",
        label: "Description", 
        validationMessage: descriptionMessage,
        type: "text"
    }
]

export const ChannelSettings = ({settings, saveSettings}) =>{
    const [formState, setFormState] = useState({
        username:{
            isValid: validateUsername(settings.username),
            showError: false,
            value: settings.username
        },
        title:{
            isValid: validateTitle(settings.title),
            showError: false,
            value: settings.title
        },
        avatarUrl:{
            isValid: validationAvatarUrl(settings.avatarUrl),
            showError: false,
            value: settings.avatarUrl
        },
        description:{
            isValid: validteDescription(settings.descripton),
            showError: false,
            value: settings.description
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState((preState) => ({
            ...preState,
            [field]: {
                ...preState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) =>{
        
        let isValid = false
        switch(field){
            case "username":
                isValid = validateUsername(value)
                break;
            case "title":
                isValid = validateTitle(value)
                break;
            case "avatarUrl":
                isValid = validationAvatarUrl(value)
                break;
            case "description":
                isValid = validteDescription(value)
                break;
        }
        setFormState((prevState) =>({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault()

        saveSettings({
            username: formState.username.value,
            title: formState.title.value,
            avatarUrl: formState.avatarUrl.value,
            description: formState.description.value
        })
    }

}