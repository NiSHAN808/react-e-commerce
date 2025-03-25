import { useParams } from "react-router-dom";
import react, { useState } from "react";










function BuyAndCart() {

    return (
        <div className="mt-[1rem]">
            <button className="bg-[#fcb700] text-black w-[15vw] mr-[1rem] px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-[#e6a600]">
        Buy
      </button>
      <button className="bg-[#00bafe] text-black w-[15vw]  px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-[#0288b9]">
        Add to Cart
      </button>
        </div>
    )
}
function Color() {
    let [color, setcolor] = useState("red");
    const params = useParams();
    const imageLocation = `/images/${params.image}`;


    function handleProductColorChange(col) {
        setcolor(col);
    }
    return (
        <>
            <div className="text-[1.2rem]">color: {color}</div>

            {/* this allows to select images later we can use map when we have 
 actual data but for now we dont have data so its fi */}
            <div className="inline-flex mt-[0.3rem]">

                <div className="inline-flex flex-col text-[.9rem] mr-[0.3rem]">
                    <img onClick={() => handleProductColorChange("red")} src={imageLocation} className="w-[4rem] inline-block" />
                    red</div>

                <div className="inline-flex flex-col text-[.9rem] mr-[0.3rem]">
                    <img onClick={() => handleProductColorChange("blue")} src={imageLocation} className="w-[4rem] inline-block" />
                    blue</div>


            </div>
        </>
    )
}
function Product() {

    let [quantity, setQuantity] = useState(1);

    const params = useParams();
    const imageLocation = `/images/${params.image}`;
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
                    <img src={imageLocation} className="w-[30rem]" />

                </div>

                <div className=" w-[35vw] h-[75vh]  inline-block">
                    <h1 className=" text-[2rem] p-[0.2rem] h-[10rem]">{params.name} multiple color option are availble</h1>
                    <hr />
                    <h4 className=" text-[1.5rem] p-[0.5rem]">{params.sold} </h4>

                    <div className=" text-[3rem] p-[0.2rem] ">rs <h3 className="  text-green-500 inline">{params.price} </h3> </div>

                    <Color />
                    <div className="mt-[0.3rem] text-[1.2rem]">Quantity: {quantity}</div>
                    <div className="flex">
                        <button className="bg-blue-500   h-[2.3rem] w-[2.3rem]" onClick={handleQuantityDecrease} >-</button>
                        <div contenteditable="true" className="bg-blue-500 inline-flex  h-[2.3rem] w-[2.3rem]  justify-center items-center" >{quantity}</div>
                        <button className="bg-blue-500 inline-block  h-[2.3rem] w-[2.3rem]" onClick={handleQuantityIncrease}>+</button>
                    </div>

                    <BuyAndCart />
                </div>
            </div>

        </div>
    </>
    )

} export default Product;                                                           