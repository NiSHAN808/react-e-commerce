import Navbar from "./Navbar"
import Footer from "../public/pages/Footer"
import Banner from "./Banner"
import phone from "../public/images/phone.png"
import HomePage from "../public/pages/HomePage"
import Product from "../public/pages/Product";
import CartPage from "../public/pages/CartPage"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
const router =createBrowserRouter([
  {path:"/", element: <><Navbar/><HomePage/><Footer/></>},
  {path:"/second", element: <><Navbar/><Banner image={phone} name="phone" price="100,000" sold="8"/></>},
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
