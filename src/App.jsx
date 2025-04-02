import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import routes from "./routes.jsx"

export const App = () =>{
  
  let elements = useRoutes(routes)
  
  return (
    <>
      {elements}
        
      <Toaster

        position = "botton-right"
        reverseOrder = {false}

      />
    </>
  )
}