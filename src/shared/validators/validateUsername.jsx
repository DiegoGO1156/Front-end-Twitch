export const validateUsername = (username) =>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}

export const messageValidateUsername = "El nombre de usuario debe de contener entre 3 y 8 caracteres"