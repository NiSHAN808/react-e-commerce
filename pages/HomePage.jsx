
import Banner from "../src/Banner";
import GooglePhone from "../images/phone.png"


function HomePage(){


let datas=[{image:GooglePhone,name:"Google Phone", price:"10,000" ,sold:"120"},
    {image:GooglePhone,name:"t-Shirt", price:"2,000" ,sold:"12"},
    {image:GooglePhone,name:"Apple iphoe", price:"100,000" ,sold:"8"},
    {image:GooglePhone,name:"keyboard", price:"5,000" ,sold:"256"},



];



return(

    <>
       <div>
        {datas.map((data)=> (<Banner 
        image={data.image} 
        name={data.name}
        price={data.price}
        sold={data.sold}
        />)) }
        
        
        
        </div>
    </>
)
}
export default HomePage;