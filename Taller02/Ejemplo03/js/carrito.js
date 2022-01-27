var carrito = [];
function agregar(producto){
   
    producto.push(1); //[id, nombre, precio, cantidad*]
    
    this.carrito.push(producto);
        
    
    console.log(this.carrito);
    
}

function eliminar(producto){
    var indice = this.carrito.indexOf(producto);
    this.carrito.splice(indice, 1);
}


function listar() {
    for(let i = 0; i < this.carrito.length; i++){
      '<h1>'
        +carrito[0][1]
      '</h1>'
        document.getElementById("titulo").innerHTML = carrito[i][1];
        document.getElementById("precio").innerHTML = carrito[i][2];
    }
}
