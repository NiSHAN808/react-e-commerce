import Navbar from "./Navbar"
import Footer from "../public/pages/Footer" ;  import SecNavbar from "./secNav";
import Banner from "./Banner"
import phone from "../public/images/phone.png"
import HomePage from "../public/pages/HomePage"
import Product from "../public/pages/Product";
import CartPage from "../public/pages/CartPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
const router =createBrowserRouter([
  {path:"/", element: <><Navbar/><HomePage/><Footer/></>},
  {path:"/second", element:<SecNavbar/> },
  {path:"/cart", element: <><Navbar/><CartPage/><Footer/></>},
  {path:"/products/:image/:name/:price/:sold", element: <><Navbar/><Product/><Footer/></>}
])     
 function App() {
  

  return (
    <>
  <RouterProvider router={router}/>
</>)
}

export default App
