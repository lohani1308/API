const url="https://apis.scrimba.com/jsonplaceholder/posts";
const container=document.getElementById("container");

let postArray=[]

function renderPosts(){
    let returnHTML="";
    for(const x of postArray){
        returnHTML+=`
            <h3>${x.title}</h3>
            <p class="desc">${x.body}</p>
            <hr/>
        `
        container.innerHTML=returnHTML;
    }
}

fetch(url).then(
    (res)=>res.json()
).then((data)=>{
    postArray=data.slice(0,5);
    renderPosts();
});

const btn=document.getElementById("new-post");

btn.addEventListener("submit",(event)=>{
    event.preventDefault();
    const postTitle=document.getElementById("title").value;
    const postBody=document.getElementById("body").value;
    
    const data={
        title:postTitle,
        body:postBody
    }

    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(
        (res)=>res.json()
    ).then((post)=>{
        postArray.unshift(post);
        renderPosts();
        document.getElementById("title").value=null;
        document.getElementById("body").value=null;
    });
    
})





