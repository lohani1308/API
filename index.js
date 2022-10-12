const container=document.getElementById("container");
const btn=document.getElementById("btn")
const url="https://apis.scrimba.com/bored/api/activity";

const handleClick=async()=>{
    const response=await fetch(url).
    then((res)=>res.json()).
    then((data)=>{
        
        container.innerHTML=`
        <div>${data.activity}</div>
        <div>${data.type}</div>
        <div>${data.participants}</div>        
        <div>${data.price}</div>
        `;  
    })
}

btn.addEventListener('click',handleClick);

