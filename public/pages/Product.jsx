import { useParams } from "react-router-dom";
 import  react,{ useRef } from "react";


           
function Product() {
    const params = useParams();

    // let imageLocation = "../images/" + params.image
    const imageLocation = `/images/${params.image}`;
    console.log(imageLocation);
    return (<>
        <div> {params.name}</div>  <div> {imageLocation}</div>
        { <img src={imageLocation} className="w-[10rem]" /> }





        
    </>
    )

} export default Product;                                                           