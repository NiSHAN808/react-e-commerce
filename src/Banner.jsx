import phoneImage from './phone.png';
import "./Bannerstyle.css"
function Banner(){
    
return(
    <div className="prosuctCard">
        <img src={phoneImage} className="productImages"/>
     <div>
     <div className="productName">keyboard</div>
     <div className="productPrice">rs 4000</div>
     <div className="productSolds">8 sold</div>
     </div>
   
    </div>
)

}
export default Banner;