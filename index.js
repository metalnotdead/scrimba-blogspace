let postArray = [];
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
function renderPosts(){
    let html = "";

    for(post of postArray){
   
    html += `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <hr/>
    `

}        
    
    
    document.getElementById("blog").innerHTML = html
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(response => response.json())
.then(data => {
     postArray = data.slice(0,5);
    renderPosts();
})

document.getElementById("new-post").addEventListener("submit",function(e){
    e.preventDefault();
    const postTitle = titleInput.value
    const postBody = bodyInput.value

    const data = {
            title:postTitle,
            body:postBody

    }


fetch("https://apis.scrimba.com/jsonplaceholder/posts",{method: "POST",
body: JSON.stringify(data),
headers: {
    "Content-Type":"application/json"
}


})

.then(res => res.json())
.then(post => {
    postArray.unshift(post)
    renderPosts();
    titleInput.value = "";
    bodyInput.value = "";
})

})

