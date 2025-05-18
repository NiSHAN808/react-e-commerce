function StarRating(props){
function StarMake(props){
let val=props.data+"%";
    return(
<>

  <svg viewBox="0 0 24 24" width="18" height="18">
    <defs>
      <clipPath id="starClip5">
        <path d="M12 2l2.9 6.9L22 10l-5 5.3 1.2 7.7L12 18l-6.2 5 1.2-7.7L2 10l7.1-1.1L12 2z"/>
      </clipPath>
    </defs>
   
    <rect width="100%" height="100%" fill="lightgray" clip-path="url(#starClip5)" />
 
    <rect width={val} height="100%" fill="var(--color-blue-500)" clip-path="url(#starClip5)" />
  </svg>


</>
    )
}
let rating=props.rating;
let stars=[];
for(let i=0;i<5;i++){
if(rating >= 1){
 stars.push(<StarMake data="100" />)
    rating--;
} else if(rating >0 && rating < 1){

stars.push(<StarMake data={rating*100}/>)
rating=0;
}else{
stars.push(<StarMake data="0"/>)
}
}

return(

<>

{stars}

</>
)

}

export default StarRating;