 import { data } from "react-router";
import Banner from "../Banner";
import React,{useState,useEffect} from "react";

function Intro(){
    return(
<>
<div className="pt-[5rem] mb-[5rem] flex justify-around items-center">
<div className="flex flex-col">
<h2 className="inline-flex text-[4rem] text-blue-800">Shop Effectively</h2>
<h3 className="inline-flex text-[1.2rem]">opens 24 7</h3>
</div>
<img className="w-[30vw]" src="../images/shopingImage.webp"></img>
    
</div>




</>
    )
}
function Products(){
    return(
<>
<div className=" h-[5rem] w-full text-[2rem] font-mono inline-flex justify-center">

Products


</div>




</>
    )
}


function Dropdown (){
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");
  
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none"
      >
        {selected}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



function HomePage(){

let [temp,setTemp]=useState([]);


useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setTemp(data));
  
},[])


return(

    <div className="bg-gray-200">
         <Intro/>   
         <Products/>
         <Dropdown/>
       <div  className="w-100vw flex justify-center bg-gray-200 pb-[2rem]">
        <div className="w-[80rem]  flex justify-center flex-wrap ">
       
        {temp===null ? <>NO ITEM IN CART</>: temp.map((data)=> (<Banner key={data.id} 
        image={data.image} 
        name={data.title}
        price={data.price}
        sold={data.rating.count}
        rating={data.rating.rate}
     category= {data.category}
        />))} 
        
        
        </div>
        </div>
    </div>
)
}
export default HomePage;