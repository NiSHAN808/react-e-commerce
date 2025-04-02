import React, { useState,useEffect } from "react";

function Item(props) {
    let imageLocation = `https://fakestoreapi.com/img/${props.image}`;
    const[quantity,setQuantity]=useState(1);
function handleDelClick(){
    props.setCartList(props.cartList.filter((item,index)=> index != props.index)); 
   }
    useEffect(() => {
        localStorage.setItem("cartItem",JSON.stringify(props.cartList));
      }, [props.cartList]);


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

        <div className="bg-white inline-flex w-[80vw] p-[0.5rem] w-[10rem] mt-[1rem]"><div className=" flex flex-col justify-around">
            <input className="h-[2rem] w-[2rem] mr-[3rem]" onClick={cartItemSeletec} type="checkbox"></input>
            <button onClick={handleDelClick}> 
            
<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M3 6H5H21"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M10 11V17"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M14 11V17"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
                </button></div>
            <img src={imageLocation} className="w-[10vw] h-[10vw] inline-block" />
            <div className="inline-block w-[42%] ml-[2rem]">
                <h3 > {props.name}</h3>
                <h3 className="text-[1.5rem] text-blue-800"> $ {props.price}</h3>

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
    const [cartList,setCartList]=useState([]);

useEffect(()=>{
setCartList(JSON.parse(localStorage.getItem("cartItem")));
},[]);
    return (

        <div className=" flex flex-col  items-center bg-gray-200 w-full">


            {cartList.length===0 ?<>no data availabe</> : cartList.map((elm,index) => <Item
                billPrice={billPrice}
                setBillPrice={setBillPrice}
                image={elm.image}
                name={elm.name}
                price={elm.price}
                color={elm.color}
                
                cartList={cartList}
                setCartList={setCartList}
                index={index}
            />)}

            {billPrice}
        </div>
    )
}
export default CartPage;