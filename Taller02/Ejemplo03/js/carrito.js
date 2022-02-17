var carrito = [];
var bandera = 0;
function agregar(producto){
  if(this.carrito.length!=0){
    for(let i = 0; i<this.carrito.length; i++ ){
      if(this.carrito[i][0] == producto[0]){
        this.carrito[i][3] = this.carrito[i][3] + 1;
        bandera = 1;
        break;
        // a = a + 1 
      }
    }
    if(bandera == 0){
      producto.push(1);
      this.carrito.push(producto);
    
    }
    bandera = 0;
  }else{
    producto.push(1);
    this.carrito.push(producto); 
  }
  console.log(this.carrito);
    
}

function eliminar(producto){
    var indice = this.carrito.indexOf(producto);
    this.carrito.splice(indice, 1);
}


function listar() {
    texto = "";
    for(let i = 0; i < this.carrito.length; i++){
      texto += '<h1>'+carrito[i][1]+' x'+carrito[i][3]+'</h1>'; 
    }
    document.getElementById("titulo").innerHTML = texto;
}
