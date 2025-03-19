
import "./Bannerstyle.css"
function Banner(props){
    
return(
    <div className="p-1 bg-indigo-100 inline-block ">
        <img src={props.image} className="productImages"/>
     <div>
     <div className="bg-teal-200 flex h-10 items-center justify-center">{props.name}</div>
     <div className="bg-purple-300 flex h-10 items-center justify-center">rs {props.price}</div>
     <div className="bg-blue-400 flex h-10 items-center justify-center">{props.sold} sold</div>
     </div>
 
    </div>
)

}
export default Banner;