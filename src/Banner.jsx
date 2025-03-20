

function Banner(props){
    
return(
    <div className="inline-block h-fit mt-[0.5rem] ml-[0.5rem] inline w-[10rem] bg-white hover:bg-blue-200 p-[0.3rem]">
        <img loading="lazy" src={props.image} className="w-[10rem]"/>
     <div className="pl-[0.4rem]">
     <div className=" flex h-10">{props.name}</div>
     <div className=" flex h-7 text-green-500 text-[1.2rem]">rs {props.price}</div>
     <div className="flex h-10 text-[0.8rem]">{props.sold} sold</div>
     </div>
 
    </div>
)

}
export default Banner;