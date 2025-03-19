

function Banner(props){
    
return(
    <div className="inline-block h-fit mt-[0.5rem] ml-[0.5rem] inline w-[10rem]">
        <img src={props.image} className="w-[10rem]"/>
     <div>
     <div className="bg-teal-200 flex h-10 items-center justify-center">{props.name}</div>
     <div className="bg-purple-300 flex h-10 items-center justify-center">rs {props.price}</div>
     <div className="bg-blue-400 flex h-10 items-center justify-center">{props.sold} sold</div>
     </div>
 
    </div>
)

}
export default Banner;