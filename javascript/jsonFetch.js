
//fetch-json//

document.getElementById('jsonBtn').addEventListener('click', cargarJson)

function cargarJson() {
    
    fetch('./javascript/data/productos.data.json')
        .then(function (res){
        return res.json();
        })
        .then(function (data){
            let html = '';
            data.forEach(function (producto) {
                html += `
                <li>${producto.nombre} ventas: ${producto.ventas}</li>`

            }) 
            document.getElementById('resultado').innerHTML = html;
        })
}