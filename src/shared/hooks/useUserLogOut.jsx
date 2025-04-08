export const logOut = () =>{
    localStorage.removeItem("user")

    window.location.href = "/"
   // window.location.href = "/channels"
}