import React, { useState } from "react";

function Item(props) {
    let imageLocation = `/images/${props.image}`;
    const[quantity,setQuantity]=useState(1);

    function cartItemSeletec(e) { if(e.target.checked){
        props.setBillPrice(props.billPrice + props.price);   }else{props.setBillPrice(props.billPrice - props.price);}
    }
    function handleQuantityIncrease() {
        setQuantity(quantity + 1);
    }

    function handleQuantityDecrease() {
        setQuantity(quantity - 1);
    }
    return (

        <div className="bg-white inline-flex w-[80vw] p-[0.5rem] w-[10rem] mt-[1rem]">
            <input className="h-[2rem] w-[2rem] mr-[3rem]" onClick={cartItemSeletec} type="checkbox"></input>
            <img src={imageLocation} className="w-[10vw] h-[10vw] inline-block" />
            <div className="inline-block w-[42%] ml-[2rem]">
                <h3 > {props.name}</h3>
                <h3 className="text-[1.5rem] text-blue-800"> Rs : {props.price}</h3>

            </div>
            <div className="inline-flex h-auto  flex-col  justify-center items-center  ml-[2rem]">
                <h3 className="text-[1.6rem] font-serif"> color :  {props.color}</h3>
                <div className="flex">
                        <button className="bg-blue-100   h-[2.3rem] w-[2.3rem]" onClick={handleQuantityDecrease} >-</button>
                        <div contenteditable="true" className="bg-blue-200 inline-flex  h-[2.3rem] w-[2.3rem]  justify-center items-center" >{quantity}</div>
                        <button className="bg-blue-300 inline-block  h-[2.3rem] w-[2.3rem]" onClick={handleQuantityIncrease}>+</button>
                    </div>

            </div>
            <div onClick={(e)=>cartItemSeletec(e)} className="inline-block"></div>
        </div>
    )
}


function CartPage() {

    const [billPrice, setBillPrice] = useState(0);
  //  const imageLocation = `/images/${params.image}`;

let cartList=JSON.parse(localStorage.getItem("cartItem"));

    // let cartList = [{ image: "/images/keyboard.jpg", name: "keyboard Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nihil rerum qui saepe ratione quia ", price: 5000, sold: "256"},
    // { image: "/images/phone.png", name: "Google Phone", price: 10000, sold: "120" },
    // { image: "/images/tshirt.jpg", name: "t-Shirt", price: 2000, sold: "12" },]

    return (

        <div className=" flex flex-col  items-center bg-gray-200 w-full">


            {cartList === null ?<>no data availabe</> : cartList.map(elm => <Item
                billPrice={billPrice}
                setBillPrice={setBillPrice}
                image={elm.image}
                name={elm.name}
                price={elm.price}
                color={elm.color}
            />)}

            {billPrice}
        </div>
    )
}
export default CartPage;