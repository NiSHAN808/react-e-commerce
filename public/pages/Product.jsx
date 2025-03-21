import { useParams } from "react-router-dom";
 import  react,{ useRef } from "react";


           
function Product() {
    const params = useParams();

    
    const imageLocation = `/images/${params.image}`;
    console.log(imageLocation);
    return (<>
        
        { <img src={imageLocation} className="w-[30rem]" /> }
        <div> {params.name}</div>
        <div> {params.price}</div>
        <div> {params.sold}</div>


        
    </>
    )

} export default Product;                                                           