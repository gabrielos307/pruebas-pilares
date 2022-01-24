   
/**
 * CarritoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
function verificar(lista,external){ //valida si se encuentra el producto en la psocion
    var pos  = -1; //bandera
    var listaCar = new Array(lista);
    for(var i = 0; i<= listaCar.length;i++){
        console.log(listaCar);
        if(i.external == external){
            pos = i;
            return pos; //dependiendo de la posicion del producto
        }   
    }
    return pos; //pos = -1
    }
module.exports = {
    
  async agregarProducto (req,res){
      /*
    var carrito = req.session.carrito;
    var external = req.params.external;
    Producto.find()
        .then(function(productos){
       if(productos){
           var pos = verificar(carrito,external);
           if(pos ==-1){
               var datos = {
                   id : productos._id,
                   external : external,
                   nombre : productos.nombre,
                   cantidad : 1,
                   precio : productos.precio,
                   precio_total : productos.precio,
                   descripcion : productos.descripcion
               };
               var car = new Array(carrito);
               car.push(datos);
           }else{
               var dato = carrito[pos];
               dato.cantidad = dato.cantidad + 1;
               dato.precio_total = dato.cantidad*dato.precio;
               carrito[pos] = dato;
           }
           req.session.carrito = carrito;
           console.log(req.session.carrito);
           //req.status(200).json(req.session.carrito);
       } 
    });
    */
    var external = req.params.external;
    var producto = await Producto.find({
        where: {'id' : external}
    });
    
    res.send(producto);
  },
  quitarProducto(req, res){
    var carrito = req.session.carrito;
    var external = req.params.external;
    var pos = verificar(carrito, external);
    var dato = carrito[pos];
    if(dato.cantidad > 1){
        dato.cantidad = dato.cantidad - 1;
        dato.precio_total = dato.cantidad * dato.precio;
        carrito[pos] = dato;
        req.session.carrito = carrito;
        res.status(200).json(req.session.carrito);
    }else{
        var aux = [];
        for (var i=0; i < carrito.length; i++){
            var items = carrito[i];
            if(items.external != external){
                aux.push(items);
            }
        }
        req.session.carrito = aux;
        req.status(200).json(req.session.carrito);
    }
  },
  mostrarCarrito(req, res){
    res.status(200).json(req.session.carrito);
  },
  
  
};


