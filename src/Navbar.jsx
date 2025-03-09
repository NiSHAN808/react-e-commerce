import "./Navbarstyle.css";
import React,{useRef} from "react";
function Navbar(){
    const pages=useRef(0);

 function   handleHamClick(){
      console.log("clicked");
         
       pages.current.style.height= "100vh";
        pages.current.justifyContent=" center";
        pages.current.flexDirection= "column";
        pages.current.stylePosition= "absolute";
        pages.current.style.top= "0px";
        pages.current.style.right= "0px";
/*    height: 100vh;t
    justify-content: center;
    
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 0px;
    right: 0px;  */
    }
return(
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