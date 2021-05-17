//Recibe una variable y lo manda a consola
var a = "Hola ";
var b = "Mundo";
console.log(a+b);
console.error("Ejemplo de mensaje de error");
console.warn("Excede el numero de edad");
console.info("Variable encontrada");
console.dir(document.links);
console.dir(document.scripts);
//Para cambiar el mensaje, hay que agregar %c
console.log("%cMensaje en color verde","color:green; font-size:30px");
console.table({Nombre:"Gabriel", Apellido:"Herrera", Edad:22});