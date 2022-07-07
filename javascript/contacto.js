class Usuario {
    constructor(username, password, nombre, apellido)
    {
        this.username=username;
        this.password=password
        this.nombre=nombre; 
        this.apellido=apellido;
    }
}

programarCrearCuenta();


function programarCrearCuenta()
{
    const btn = document.getElementById("submitCreate");
    btn.addEventListener("click", ()=>{
        crearUsuario();
    })
}

function crearUsuario()
{
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let pwd= document.getElementById("regPassword").value;
    let cpwd= document.getElementById("cpassword").value;
    let username= document.getElementById("regUsername").value
  
    if(nombre==="" || apellido==="" || pwd==="" || username==="")
    {
        alert("DATOS INCOMPLETOS");
    }
    else if(pwd!==cpwd)
    {
        alert("PASSWORD NO COINCIDE");
    }
    else {
        alert("USUARIO CREADO");
        const usuario = new Usuario(username, pwd, nombre, apellido);
        localStorage.setItem("usuario", JSON.stringify(usuario));
    }
}