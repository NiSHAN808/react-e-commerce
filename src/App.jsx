import Navbar from "./Navbar"
import Banner from "./Banner"
import phone from "../public/images/phone.png"
import HomePage from "../public/pages/HomePage"
import Product from "../public/pages/Product";
import CartPage from "../public/pages/CartPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
const router =createBrowserRouter([
  {path:"/", element: <><Navbar/><HomePage/></>},
  {path:"/second", element: <><Navbar/><Banner image={phone} name="phone" price="100,000" sold="8"/></>},
  {path:"/cart", element: <><Navbar/><CartPage/></>},
  {path:"/products/:image/:n", element: <><Navbar/><Product/></>}
])     
 function App() {
  

  return (
    <>
  <RouterProvider router={router}/>
</>)
}

export default App
