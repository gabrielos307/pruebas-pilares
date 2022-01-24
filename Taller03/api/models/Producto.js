/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'productos',
  attributes: {

    nombre:{type:'string', required:true},
    precio:{type:'number', required:true},
    descripcion:{type: 'string'},
    carritos:{
      collection:'carrito',
      via:'owner'
    }

  }

};

