import phoneImage from './phone.png';
import "./Bannerstyle.css"
function Banner(){
    
return(
    <div className="p-1 bg-indigo-100 inline-block ">
        <img src={phoneImage} className="productImages"/>
     <div>
     <div className="bg-teal-200 flex h-10 items-center justify-center">keyboard</div>
     <div className="bg-purple-300 flex h-10 items-center justify-center">rs 4000</div>
     <div className="bg-blue-400 flex h-10 items-center justify-center">8 sold</div>
     </div>
 
    </div>
)

}
export default Banner;