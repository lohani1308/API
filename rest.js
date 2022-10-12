fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments").then(
    (res)=>res.json()
).then(data=>console.log(data));