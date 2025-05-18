import { Link } from "react-router";
import StarRating from "../public/pages/StarRating";

function Banner(props){
    let x=props.image; x=x.slice(29,x.length);
   let link="/products/"+x+"/"+props.name+"/"+props.price+"/"+props.sold+"/"+props.category;
return(
    <Link to={link} className="inline-block h-fit mt-[2.5vw] ml-[2.5vw] inline w-[40vw] bg-white hover:bg-blue-200 p-[1vw]">
        <img loading="lazy" src={props.image} className="w-[42.5vw] h-[40vw]"/>
     <div className="pl-[0.4rem]">
     <div className=" flex h-12 overflow-hidden">{props.name.length > 50?  props.name.slice(0,50)+"...." : props.name}</div>
     <div className=" flex h-7 text-blue-500 text-[1.2rem]">$ {props.price}</div>
     <div className="flex h-7 text-[0.8rem]">{props.sold}sold {props.rating}</div>
        <div className="flex h-7 "> 
        
        
        
        


        
        
    <StarRating rating={props.rating}/>
        
        
        
        
        
        
        <div/>
     </div>
 </div>
    </Link>
)

}
export default Banner;