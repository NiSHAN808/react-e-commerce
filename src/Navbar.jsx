import "./Navbarstyle.css";
import React, { useRef, useState } from "react";  import { Link } from "react-router";
function Navbar() {
    let pageStyle = useRef(0);
    const pages = useRef(0);

    function handleHamClick() {
        if (pageStyle.current === 0) {

            pages.current.style.display = "flex";
            pageStyle.current = 1;
        }
        else {
            pages.current.style.display = "none";
            pageStyle.current = 0
        }
    }
     let link="/";
    return (
        <>

            <nav className="bg-blue-300 h-[10vw] flex justify-between items-center sticky top-0 lg:h-10" >
                <div className="logo">
                    {/* website
                    logo-ecommerce
                       let link="/products/"+x+"/"+props.name+"/"+props.price+"/"+props.sold+"/"+props.category;
                        */}
    <Link to={link} className="inline-flex justify-center h-fit  inline w-[40vw] h-[10vw] overflow-hidden  hover:bg-blue-200 p-[1vw]  ">
        <img loading="lazy" src="../images/logo-ec.png" className=" h-[8vw] "/>

 
    </Link>
                </div>

                <div onClick={handleHamClick} className="hidden hamburger z-5 mr-[5vw]">

                 <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" stroke-width="10" stroke-linecap="round">
  <line x1="20" y1="30" x2="80" y2="30" />
  <line x1="20" y1="50" x2="80" y2="50" />
  <line x1="20" y1="70" x2="80" y2="70" />
</svg>


                </div>
                <div ref={pages} className="pages w-[40vw] flex justify-around backdrop-blur-md bg-[#6161611f] border-r-2 border-t-2 border-white/50 shadow-[inset_6px_-6px_20px_6px_#f5f5f51f]">
                <Link to="/" className="hover:text-purple-700 " onClick={handleHamClick} >home</Link>
                <Link to="/second" className="hover:text-purple-700 " onClick={handleHamClick}>products</Link>
                <Link to="/cart" className="hover:text-purple-700 "onClick={handleHamClick} >cart</Link>
                    {/* <a className="hover:text-purple-700 ">home</a>
                    <a className="hover:text-purple-700 ">products</a>
                    <a className="hover:text-purple-700 ">cart</a> */}
                </div>
            </nav>


        </>
    )
}
export default Navbar