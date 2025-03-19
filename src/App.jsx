import Navbar from "./Navbar"
import Banner from "./Banner"
import phone from "../images/phone.png"
import HomePage from "../pages/homePage"
import CartPage from "../pages/CartPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
const router =createBrowserRouter([
  {path:"/", element: <><Navbar/><HomePage/></>},
  {path:"/second", element: <><Navbar/><Banner image={phone} name="phone" price="100,000" sold="8"/></>},
  {path:"/cart", element: <><Navbar/><CartPage/></>}
])     
 function App() {
  

  return (
    <>
  <RouterProvider router={router}/>
</>)
}

export default App
