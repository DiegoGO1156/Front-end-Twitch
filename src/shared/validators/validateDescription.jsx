export const validteDescription = (description) =>{
    return description.length >= 10 && description <= 200
}

export const descriptionMessage = "La descripcion es desmasiado larga o demasiado corta"