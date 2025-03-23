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
    return (
        <>

            <nav className="bg-blue-400 h-10 flex justify-between items-center sticky top-0">
                <div className="logo">
                    website
                </div>

                <div onClick={handleHamClick} className="hidden hamburger z-5">=</div>
                <div ref={pages} className="pages w-[40vw] flex justify-around">
                <Link to="/" className="hover:text-purple-700 " >home</Link>
                <Link to="/second" className="hover:text-purple-700 " >products</Link>
                <Link to="/cart" className="hover:text-purple-700 " >cart</Link>
                    {/* <a className="hover:text-purple-700 ">home</a>
                    <a className="hover:text-purple-700 ">products</a>
                    <a className="hover:text-purple-700 ">cart</a> */}
                </div>
            </nav>


        </>
    )
}
export default Navbar