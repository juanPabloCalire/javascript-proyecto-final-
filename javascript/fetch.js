
programarAcciones()

 function programarAcciones()
 {
   programarBotonVer()
   
 }

 function programarBotonVer()
 {
     const btn = document.getElementById("ver");
     btn.addEventListener("click", ()=>{
         cargarListadoDePosts();
     })
 }

 function cargarListadoDePosts()
 {

   fetch('https://jsonplaceholder.typicode.com/posts/')
   .then((res)=>res.json())
   .then((json)=>mostrarListadoDePosts(json))
   .catch((error)=>alert("No puedo mostrar info. Intente mas tarde "+error))

 }

 function mostrarListadoDePosts(posts)
 {
    const container = document.getElementById("appContainer")
    container.innerHTML=""
    posts.forEach(blogpost=>{

         mostrarPost(blogpost, container)

    })
 }

 function mostrarPost(post, div)
 {
      const divPost = document.createElement("div");
      divPost.innerHTML=`<h2>${post.title}</h2>
                         <p>${post.body.substr(0,20)}...</p>
                         `
      const btn = document.createElement("button")
      btn.innerHTML="VER MÁS"
      btn.addEventListener("click", ()=>{
         loadMoreInfo(post.id)
      })
      divPost.appendChild(btn)
      divPost.setAttribute("style", "width:25%;padding:2%;border-radius:20px;border:1px solid black; margin:2%")
   div.appendChild(divPost);    
   
 }


//------------------------

async function loadMoreInfo(idPost)
 {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    let json = await response.json()
    mostrarPostById(json);
   
    
 }

 function mostrarPostById(post)
 {
   const container = document.getElementById("appContainer")
   container.innerHTML=""
   container.innerHTML=`<h1 style="display:block">${post.title}</h1>
                        <p>${post.body}</p>`

 }

 function programarBotonLocal()
 {
   const btn = document.getElementById("locales");
   btn.addEventListener("click", ()=>{
       cargarProductosLocal();
   })
     

 }

 function cargarProductosLocal()
 {
   fetch("/js/data/products.data.json")
   .then((res)=>res.json())
   .then((json)=>console.log(json))
 }

  


