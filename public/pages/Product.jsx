import { useParams } from "react-router-dom";
import react, { useState } from "react";



function Product() {
    const params = useParams();
    let [quantity, setQuantity]=useState(1);
    let [color, setcolors]=useState("red");
function handleQuantityIncrease(){
setQuantity(quantity+1);
}

function handleQuantityDecrease(){
    setQuantity(quantity-1);   
}

    const imageLocation = `/images/${params.image}`;
    console.log(imageLocation);
    return (<>



        <div className=" w-full h-[90vh] bg-gray-200 inline-flex justify-center items-center">
            <div className=" w-[75vw] h-[75vh] bg-white inline-flex">
                <div className=" w-[35vw] h-[75vh]  inline-block">
                    <img src={imageLocation} className="w-[30rem]" />

                </div>

                <div className=" w-[35vw] h-[75vh]  inline-block">
                    <h1 className=" text-[2rem] p-[0.2rem] h-[10rem]">{params.name} multiple color option are availble</h1>
                    <hr />
                    <h4 className=" text-[1.5rem] p-[0.5rem]">{params.sold} </h4>

                    <div className=" text-[3rem] p-[0.2rem] ">rs <h3 className="  text-green-500 inline">{params.price} </h3> </div>

                    <div>color: {color}</div>
                    <div className="flex">
                    <button className="bg-blue-500   h-[2.3rem] w-[2.3rem]" onClick={handleQuantityDecrease} >-</button>
                    <div contenteditable="true" className="bg-blue-500 inline-flex  h-[2.3rem] w-[2.3rem]  justify-center items-center" >{quantity}</div>
                    <button className="bg-blue-500 inline-block  h-[2.3rem] w-[2.3rem]" onClick={handleQuantityIncrease}>+</button>
                    </div>
                </div>
            </div>

        </div>
    </>
    )

} export default Product;                                                           