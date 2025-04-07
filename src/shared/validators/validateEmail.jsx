export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
 
    return regex.test(email)
}

export const messageValidateEmail = "Ingrese una direccion de correo electronico valida"