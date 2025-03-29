 import Banner from "../../src/Banner";


const GooglePhone = "../images/phone.png"
const tshirt = "../images/tshirt.jpg";
const iphone = "../images/iphone.webp";
const keyboard =  "../images/keyboard.jpg";

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

function HomePage(){


let datas=[{image:GooglePhone, name:"Google Phone 9 256gb 8gb pink color", price:10000 ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:2000 ,sold:"12"},
    {image:iphone, name:"Apple iphoe", price:100000 ,sold:"8"},
    {image:keyboard, name:"keyboard", price:5000 ,sold:"256"},
    {image:GooglePhone, name:"Google Phone", price:10000 ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:2000 ,sold:"12"},

    {image:GooglePhone, name:"Google Phone", price:10000 ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:2000 ,sold:"12"},
    {image:iphone, name:"Apple iphoe", price:100000 ,sold:"8"},
    {image:keyboard, name:"keyboard", price:5000 ,sold:"256"},
    {image:GooglePhone, name:"Google Phone", price:10000 ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:2000 ,sold:"12"},

    {image:GooglePhone, name:"Google Phone", price:10000 ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:2000 ,sold:"12"},
    {image:GooglePhone, name:"Google Phone", price:10000 ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:2000 ,sold:"12"},
    {image:iphone, name:"Apple iphoe", price:100000 ,sold:"8"},
    {image:keyboard, name:"keyboard", price:5000 ,sold:"256"},
];



return(

    <div className="bg-gray-200">
         <Intro/>   
         <Products/>
       <div className="w-100vw flex justify-center bg-gray-200 pb-[2rem]">
        <div className="w-[80rem]  flex justify-center flex-wrap ">
        {datas.map((data)=> (<Banner 
        image={data.image} 
        name={data.name}
        price={data.price}
        sold={data.sold}
        />)) }
        
        
        </div>
        </div>
    </div>
)
}
export default HomePage;