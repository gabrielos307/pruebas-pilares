var carrito = [];
function agregar(producto){
    validar(producto[3], this.carrito);
    producto.push(1); //[id, nombre, precio, cantidad*]
    
    this.carrito.push(producto);
        
    
    console.log(this.carrito);
    
}

function eliminar(producto){
    var indice = this.carrito.indexOf(producto);
    this.carrito.splice(indice, 1);
}

function validar(elemento, producto){
    if(elemento == producto){
        return true;
    }
    return false;
}
function listar() {
    document.getElementById("carrito").innerHTML = carrito;
}
