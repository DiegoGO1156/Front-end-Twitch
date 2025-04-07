

export const Input = ({
    field, 
    label,
    value,
    onChangeHandler,
    type, 
    showErrorMessage, 
    validationMessage,
    onBlurHandler,
    textArea
}) =>{
    const handleValueChange = (event) =>{
        onChangeHandler(event.target.value, field)
    }

    const handlerInputBlur = (event) =>{
        onBlurHandler(event.target.value, field)
    }

    return (
        <>

            <div className="auth-from-label">
                <span>{label}</span>
            </div>
            <div>
                { textArea ? (
                    <textArea
                        type = {type}
                        value = {value}
                        onChange = {handleValueChange}
                        onBlur = {handlerInputBlur}
                        rows = {5}
                        style = {{maxWidth: "400px"}}
                    />
                ) : (
                    <Input
                        type = {type}
                        value = {value}
                        onChange = {handleValueChange}
                        onBlur = {handlerInputBlur}
                    />
                )}
            </div>
                <span className="auth-form-validation-message">
                    {showErrorMessage && validationMessage}
                </span>
        </>
    )
}