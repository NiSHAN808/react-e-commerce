
import Banner from "../src/Banner";
import GooglePhone from "../images/phone.png";
import tshirt from "../images/tshirt.jpg";
import iphone from "../images/iphone.webp";
import keyboard from "../images/keyboard.jpg";
function HomePage(){


let datas=[{image:GooglePhone, name:"Google Phone", price:"10,000" ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:"2,000" ,sold:"12"},
    {image:iphone, name:"Apple iphoe", price:"100,000" ,sold:"8"},
    {image:keyboard, name:"keyboard", price:"5,000" ,sold:"256"},
    {image:GooglePhone, name:"Google Phone", price:"10,000" ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:"2,000" ,sold:"12"},

    {image:GooglePhone, name:"Google Phone", price:"10,000" ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:"2,000" ,sold:"12"},
    {image:iphone, name:"Apple iphoe", price:"100,000" ,sold:"8"},
    {image:keyboard, name:"keyboard", price:"5,000" ,sold:"256"},
    {image:GooglePhone, name:"Google Phone", price:"10,000" ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:"2,000" ,sold:"12"},

    {image:GooglePhone, name:"Google Phone", price:"10,000" ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:"2,000" ,sold:"12"},
    {image:GooglePhone, name:"Google Phone", price:"10,000" ,sold:"120"},
    {image:tshirt, name:"t-Shirt", price:"2,000" ,sold:"12"},
    {image:iphone, name:"Apple iphoe", price:"100,000" ,sold:"8"},
    {image:keyboard, name:"keyboard", price:"5,000" ,sold:"256"},
];



return(

    <>
       <div className="w-100vw flex justify-center bg-purple-700">
        <div className="w-[70rem]  flex justify-center flex-wrap bg-pink-700">
        {datas.map((data)=> (<Banner 
        image={data.image} 
        name={data.name}
        price={data.price}
        sold={data.sold}
        />)) }
        
        
        </div>
        </div>
    </>
)
}
export default HomePage;