var carrito = [];
function agregar(producto){
    for(let i = 0; i < this.carrito.length; i++){
        
        if(this.carrito[i][0] == producto[0]){
            this.carrito[i][3] = this.carrito[i][3] + 1;
        }else{
            producto.push(1); //[id, nombre, precio, cantidad*]
            this.carrito.push(producto);
        }
    }
    console.log(this.carrito);
    
}

function eliminar(producto){
    var indice = this.carrito.indexOf(producto);
    this.carrito.splice(indice, 1);
}


function listar() {
    document.getElementById("carrito").innerHTML = this.carrito;
}
