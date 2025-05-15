import { useParams } from "react-router-dom";
import react, { useState } from "react";










function BuyAndCart(props) {
{console.log(props.category)}

function handdleAddtoCart(){
// console.log(props.image)
// console.log(props.name)
// console.log(props.price)
// console.log(props.sold)
// console.log(props.color)
let priceInt= props.price;
priceInt=Number(priceInt);
console.log(typeof(x));
let cartItem=JSON.parse(localStorage.getItem("cartItem"));
if(cartItem != null){ 

    cartItem.push({image:props.image, name:props.name, price:priceInt, sold: props.sold, color: props.color})
}else{
    cartItem=[{image:props.image, name:props.name, price:priceInt, sold: props.sold, color: props.color}];
}
console.log(cartItem);
localStorage.setItem("cartItem",JSON.stringify(cartItem));
}


    return (
        <div className="mt-[1rem]">
            <button className="bg-[#fcb700] text-black w-[15vw] mr-[1rem] px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-[#e6a600]">
                Buy
            </button>
            <button onClick={handdleAddtoCart} className="bg-[#00bafe] text-black w-[15vw]  px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-[#0288b9]">
                Add to Cart
            </button>
        </div>
    )
}


function Color(props) {
    let [color, setcolor] = useState("red"); props.setSlectedColor(color);
    const params = useParams();
    const imageLocation = `https://fakestoreapi.com/img/${params.image}`;

    let colorsList = ["red", "blue", "green"];
    function handleProductColorChange(col) {
        setcolor(col);   props.setSlectedColor(col);
    }
    return (
        <> 
            <div className="text-[1.2rem]">Color: {color}</div>

            {/* this allows to select images later we can use map when we have 
 actual data but for now we dont have data so its fi */}
            <div className="inline-flex mt-[0.3rem]">
                {colorsList.map((c) => <div className={color === c ? "inline-flex flex-col  items-center text-[.9rem] mr-[0.3rem] border border-[0.1rem] border-[#a7a1a1]" : "inline-flex flex-col  items-center text-[.9rem] mr-[0.3rem]"}>
                    <img onClick={() => handleProductColorChange(c)} src={imageLocation} className="w-[4rem] inline-block" />
                    {c}</div>)}


            </div>
        </>
    )
}
function Product() {
let [selectedColor,setSlectedColor]=useState("");
    let [quantity, setQuantity] = useState(1);

    const params = useParams();
    const imageLocation = `https://fakestoreapi.com/img/${params.image}`;
    function handleQuantityIncrease() {
        setQuantity(quantity + 1);
    }

    function handleQuantityDecrease() {
        setQuantity(quantity - 1);
    }



    return (<>



        <div className=" w-full h-[90vh] bg-gray-200 inline-flex justify-center items-center">
            <div className=" w-[75vw] h-[75vh] bg-white inline-flex">
                <div className=" w-[35vw] h-[75vh]  inline-block">
                    <img src={imageLocation} className="w-[30rem] h-[30rem]" />

                </div>

                <div className=" w-[35vw] h-[75vh]  inline-block">
                    <h1 className=" text-[2rem] p-[0.2rem] h-[10rem]">{params.name} multiple color option are availble</h1>
                    <hr />
                    <h4 className=" text-[1.5rem] p-[0.5rem]">{params.sold} </h4>

                    <div className=" text-[3rem] p-[0.2rem] ">$ <h3 className="  text-blue-500 inline">{params.price} </h3> </div>

                    <Color setSlectedColor={setSlectedColor}/>
                    <div className="mt-[0.3rem] text-[1.2rem]">Quantity: {quantity}</div>
                    <div className="flex">
                        <button className="bg-blue-200   h-[2.3rem] w-[2.3rem]" onClick={handleQuantityDecrease} >-</button>
                        <div contenteditable="true" className="bg-blue-300 inline-flex  h-[2.3rem] w-[2.3rem]  justify-center items-center" >{quantity}</div>
                        <button className="bg-blue-400 inline-block  h-[2.3rem] w-[2.3rem]" onClick={handleQuantityIncrease}>+</button>
                    </div>

                    <BuyAndCart image={params.image} 
                    name={params.name} 
                    price={params.price} 
                    sold={params.sold} 
                    color={selectedColor}/>
                </div>
            </div>
  s:{selectedColor}
        </div>
    </>
    )

} export default Product;                                                           