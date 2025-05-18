 import { data } from "react-router";
import Banner from "../Banner";
import React,{useState,useEffect} from "react";

function Intro(){
    return(
<>
<div className="pt-[5rem] mb-[5rem] flex justify-around items-center">
<div className="flex flex-col">
<h2 className="inline-flex text-[6vw] text-blue-800">Shop Effectively</h2>  
{/* 4 rem  */}
<h3 className="inline-flex text-[3vw]">opens 24 7</h3>
</div>
<img className="w-[30vw]" src="../images/shopingImage.webp"></img>
    
</div>




</>
    )
}
function Products(){
    return(
<div className="flex justify-center items-center">
<div className=" w-[90vw] flex justify-around items-center">
<div> <svg width="25vw" height="1" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="0" x2="25vw" y2="0" stroke="#888" stroke-width="6" />
</svg>
</div>

<div className=" h-[10vw]  text-[7vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[3vw] ml-[3vw] mr-[3vw] font-mono inline-flex justify-center">
Products
</div>

<div><svg width="25vw" height="1" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="0" x2="25vw" y2="0" stroke="#888" stroke-width="6" />
</svg></div>
</div>



</div>
    )
}
function Dropdown (props){
  const [isOpen, setIsOpen] = useState(false);
 
  
  

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none"
      >
        {props.selCato}
      </button> 
        {/* absolute left-0 */}
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
       <div  className="w-100vw flex justify-center bg-gray-200 pb-[2.5vw]">
        <div className="w-[90vw]  flex justify-center flex-wrap ">
       
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
        
        
        </div>
        </div>
    </div>
)
}
export default HomePage;