function validacion(){
    var nombre, password, correo, genero,sucursal, edad,archivo;
    nombre = document.getElementById("nombre").value;
    password = document.getElementById("password").value;
    correo = document.getElementById("correo").value;
    genero = document.getElementById("genero").value;
    sucursal = document.getElementById("sucursal").value;
    edad = document.getElementById("edad").value;
    archivo  = document.getElementById("archivo").value;
    expresion = /\w+@\w+\.+[a-z]/;
     if(nombre ==="" || password ==="" || correo ==="" || genero ==="" || sucursal==="" || edad ==="" || archivo===""){
         alert("Todos los campos son obligatorios");
         return false;
     }
     else if(nombre.length >30){
         alert("El nombre esta muy largo");
         return false;
     }
     else if(password.length >12){
         alert("La password esta muy larga");
         return false;
     }
     else if(correo.length > 100){
         alert("El correo está muy largo");
         return false;
     }
     
}