import Navbar from "./Navbar"
import Banner from "./Banner"
import HomePage from "../pages/homePage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
const router =createBrowserRouter([
  {path:"/", element: <><Navbar/><HomePage/></>},
  {path:"/s", element: <><Navbar/><Banner/></>}
])     
 function App() {
  

  return (
    <>
  <RouterProvider router={router}/>
</>)
}

export default App
