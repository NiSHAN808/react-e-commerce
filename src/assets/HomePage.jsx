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


function Dropdown (props){
  const [isOpen, setIsOpen] = useState(false);
 
  
  

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none"
      >
        {props.selCato}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          {props.categories.map((option, index) => (
            <div
              key={index}
              onClick={() => {
              props.setSelCato(option);
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
  const [temp, setTemp] = useState([]);
  const [categories, setCategories] = useState([]);
const [selCato,setSelCato]=useState("ALL");
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setTemp(data);
        const uniqueCategories = createCatoArray(data);
        console.log(uniqueCategories);
        setCategories(uniqueCategories);
      });
  }, []);

  function createCatoArray(data) {
    const catoArray = ["ALL"];
    for (let index = 0; index < data.length; index++) {
      if (!catoArray.includes(data[index].category)) {
        catoArray.push(data[index].category);
      }
    }
    return catoArray;
  }

return(

    <div className="bg-gray-200">
         <Intro/>   
         <Products/>

         <Dropdown categories={categories} selCato={selCato} setSelCato={setSelCato} setTemp={setTemp}/>
       <div  className="w-100vw flex justify-center bg-gray-200 pb-[2rem]">
        <div className="w-[80rem]  flex justify-center flex-wrap ">
       
        {temp===null ? <>NO ITEM IN CART</>: temp.map((data)=> ( selCato==="ALL"? <Banner key={data.id} 
        image={data.image} 
        name={data.title}
        price={data.price}
        sold={data.rating.count}
        rating={data.rating.rate}
     category= {data.category}/>
         : data.category===selCato ? <Banner key={data.id} 
        image={data.image} 
        name={data.title}
        price={data.price}
        sold={data.rating.count}
        rating={data.rating.rate}
     category= {data.category}
        /> :<></> ))} 
        
        {selCato}
        </div>
        </div>
    </div>
)
}
export default HomePage;