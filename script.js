let moon=document.querySelector(".mode")
let currentmode ="light";

moon.addEventListener("click",()=>{
    if(currentmode==="light"){
        currentmode="dark";
        document.querySelector(".navbar").style.backgroundColor="black";
        document.querySelector(".fadd").style.color="white";
        document.querySelector(".sadd").style.color="white";
        document.querySelector(".fa-solid fa-location-dot").style.color="white";
        
      
    }
    else{
        currentmode="light";
        document.querySelector(".navbar").style.backgroundColor="white";
        document.querySelector(".fadd").style.color="black";
        document.querySelector(".sadd").style.color="black";
        document.querySelector(".fa-solid fa-location-dot").style.color="black";
       
    }
})
