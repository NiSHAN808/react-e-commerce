function Footer(){
return(
    <footer>
     <div className="inline-block w-full bg-blue-800 text-white inline-block p-[3rem]">
        <div className="inline-block"><header className="text-[2.5rem]">Support</header>
        <ul>
       <li className="mt-[1.8rem]">Contact us</li>
       <li className="mt-[1.8rem]">Return policy</li>
       <li className="mt-[1.8rem]">Terms & conditions</li>

        </ul>
        
        </div>



        <div className="w-full h-content pt-[3rem] inline-flex justify-center items-center  flex-col">
         <div className="flex justify-around w-[20rem] ">
            <img src="/icon/x.png" className="w-[2rem]"/>
            <img src="/icon/fb.png" className="w-[2rem]"/>
            <img src="/icon/pin.png" className="w-[2rem]"/>
            <img src="/icon/insta.png" className="w-[2rem]"/>
            </div>   
         <h6 className="pt-[3rem]">© 2025 NiSHAN, Company . All Rights Reserved</h6>
         </div>
     </div>

    </footer>
)

}export default Footer;