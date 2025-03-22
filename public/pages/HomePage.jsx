 import Banner from "../../src/Banner";


const GooglePhone = "../images/phone.png"
const tshirt = "../images/tshirt.jpg";
const iphone = "../images/iphone.webp";
const keyboard =  "../images/keyboard.jpg";
function HomePage(){


let datas=[{image:GooglePhone, name:"Google Phone 9 256gb 8gb pink color", price:"10,000" ,sold:"120"},
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
       <div className="w-100vw flex justify-center bg-gray-200">
        <div className="w-[80rem]  flex justify-center flex-wrap ">
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