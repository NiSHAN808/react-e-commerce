import { Link } from "react-router";


function Banner(props){
    let x=props.image; x=x.slice(10,x.length);
   let link="/products/"+x+"/"+props.name+"/"+props.price+"/"+props.sold;
return(
    <Link to={link} className="inline-block h-fit mt-[0.5rem] ml-[0.5rem] inline w-[14rem] bg-white hover:bg-blue-200 p-[0.3rem]">
        <img loading="lazy" src={props.image} className="w-[14rem]"/>
     <div className="pl-[0.4rem]">
     <div className=" flex h-10">{props.name}</div>
     <div className=" flex h-7 text-blue-500 text-[1.2rem]">rs {props.price}</div>
     <div className="flex h-10 text-[0.8rem]">{props.sold} sold</div>
     </div>
 
    </Link>
)

}
export default Banner;