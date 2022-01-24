module.exports = {

    friendlyName: 'verificar',
  
  
    description: 'Return id a product exists on car',
  
  
    inputs: {
  
      lista: {
        type: 'json',
        columnType: 'array',
        example: '',
        description: 'lista',
        required: true
      },
      external:{
            type: 'json',
            columnType:'string',
            example: '',
            description: 'external',
            required: true
          
      }
  
    },
  
  
    fn: async function (inputs, exits) {
        var pos  = -1; //bandera
        for(var i = 0; i<= lista.length;i++){
            if(lista[i].external = external){
                pos = i;
                return pos; //dependiendo de la posicion del producto
            }   
        }
        return pos; //pos = -1
    }
  
  };