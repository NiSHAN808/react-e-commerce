import "./Navbarstyle.css";
import React, { useRef, useState } from "react";
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

            <nav>
                <div className="logo">
                    website
                </div>

                <div onClick={handleHamClick} className="hamburger">=</div>
                <div ref={pages} className="pages">

                    <a>home</a>
                    <a>products</a>
                    <a>cart</a>
                </div>
            </nav>


        </>
    )
}
export default Navbar