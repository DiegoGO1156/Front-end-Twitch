export const validateTitle = (title) =>{
    return title.length >= 3 && title.length <= 30
}

export const messageValidateTitle = "El titulo no debe de tener entre 3 y 30 caracteres"