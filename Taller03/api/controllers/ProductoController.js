/**
 * ProductoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




//const Producto = require("../models/Producto");

//const Producto = require("../models/Producto");

module.exports = {
    

    get: function(req, res){
        //GET 
        Producto.find()
            .then(function(productos){
                //si no llega ningun producto
                if(productos.length === 0){
                    return res.send({
                        'success' : false, 
                        'message' : 'No se encontraron productos :('})
                }
                //Si llegan productos
                // res => response: es la respuesta que mandaremos
                /*return res.send({
                    'success': true,
                    'message': 'Se obtuvieron los productos',
                    'data' : productos
                });*/
            //pasamos datos a la vista de productos/index 
             res.view('productos/principal', {productos:productos});
            })   
        },
        listado: function(req,res){
           //GET 
        Producto.find()
        .then(function(productos){
            //si no llega ningun producto
            if(productos.length === 0){
                return res.send({
                    'success' : false, 
                    'message' : 'No se encontraron productos :('})
            }
            //Si llegan productos
            // res => response: es la respuesta que mandaremos
            /*return res.send({
                'success': true,
                'message': 'Se obtuvieron los productos',
                'data' : productos
            });*/
            //pasamos datos a la vista de productos/index 
            res.view('productos/inicio', {productos:productos});
            })    
        },
        create: function(req,res){
            //POST porque vamos a mandar desde una vista o una petición
            //datos a nuestra función y los vamos a guardar en la BD
            var nombre = req.body.nombre; //req, es la petición que no van a mandar
                                        //Body, es el contenido de la petición
                                        //nombre es el parámetro
            var descripcion = req.body.descripcion;
            var precio = req.body.precio;

            Producto.create({nombre:nombre, descripcion:descripcion, precio:precio}).exec(function(err){
                if(err){
                    res.send(500,{error:'Error en la base de datos'})
                }
                res.redirect('/productos');
            })

        },
    update: function(req,res){
        //PUT porque vamos a actualizar un registro ya creado de la base de datos
        /*
        req es lo que llega de la peticion
        body contiene todos los parámetros
        nombre es el parámetro al cual accedemos
        */

        var nombre = req.body.nombre; 
        var descripcion = req.body.descripcion;
        var precio = req.body.precio;
        //update(id,valores) ---> id es el identificador unico del producto, los nuevos valores del producto
        /*
        params: son los valores que llegaan desde la ruta
        id: es el valor con el que se identifica un parámetro
        */
        Producto.update({id:req.params.id},{nombre:nombre, descripcion:descripcion, precio:precio}).exec(function(err){
            if(err){
                res.send(500,{error:'Error en la base de datos'})
            }
            res.redirect('/productos');
        })
    },
    delete:function(req,res){
        //Puede ser un método POST
        //destroy(id) ---> Elimina un producto en especifico
        Producto.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500,{error:'Error en la base de datos'})
            }
            res.redirect('/productos');
        })
    },
    add:function(req, res){
       res.view('productos/agregar') 
    },
    edit:function(req, res){
        Producto.findOne({id:req.param('id')}).exec(function(err, producto){
            if(err){
                res.send(500, {error: 'Error en la base de datos'})
            }
            res.view('productos/edit', {producto:producto})
        })
    }

};
/*
    get: function(req, res){
        Producto.find()
            .then(function(productos){
                //si no llega ningun producto
                if(productos.length === 0){
                    return res.send({
                        'success' : false, 
                        'message' : 'No se encontraron productos :('})
                }
                //Si llegan productos
                // res => response: es la respuesta que mandaremos
                return res.send({
                    'success': true,
                    'message': 'Se obtuvieron los productos',
                  'data' : productos
                });
    
                
                //res.view('productos/index', {productos:productos});
            })   
    },
    add: function(req,res) {
        res.view('productos/add');
    },
    create: function(req,res){
        //POST porque vamos a mandar desde una vista o una petición
        //datos a nuestra función y los vamos a guardar en la BD
        var nombre = req.body.nombre; //req, es la petición que no van a mandar
                                      //Body, es el contenido de la petición
                                      //nombre es el parámetro
        var descripcion = req.body.descripcion;
        var precio = req.body.precio;

        Producto.create({nombre:nombre, descripcion:descripcion, precio:precio}).exec(function(err){
            if(err){
                res.send(500,{error:'Error en la base de datos'})
            }
            res.send({
                'success': true,
                'message': 'Se inserto correctamente'
            })
        })

    },
    delete: function(req, res){
        Producto.destroy({id:req.params.id}).exec(function (err) {      
            if(err){
                res.send(500,{error:'Error en la base de datos'})
            }
            res.send({
                'success': true,
                'message': 'Se elimino correctamente'
            });
        });
        return false;
    },
    edit: function (req,res) {
        Producto.findOne({id:req.param('id')}).exec(function(err, producto){
            if(err){
                res.send(500,{error:'Error en la base de datos'})
            }
            res.view('productos/edit', {producto:producto})
        });
    },
    update: function (req,res) {
        //POST porque vamos a mandar desde una vista o una petición
        //datos a nuestra función y los vamos a guardar en la BD
        var nombre = req.body.nombre; //req, es la petición que no van a mandar
                                      //Body, es el contenido de la petición
                                      //nombre es el parámetro
        var descripcion = req.body.descripcion;
        var precio = req.body.precio;

        Producto.update({id:req.params.id},{nombre:nombre, descripcion:descripcion, precio:precio}).exec(function(err){
            if(err){
                res.send(500,{error:'Error en la base de datos'})
            }
            res.send({
                'success': true,
                'message': 'Se inserto correctamente'
            })
        })
        return false;
    }


*/

