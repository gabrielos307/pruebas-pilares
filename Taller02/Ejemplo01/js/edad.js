
function validarEdad(){
    var edad; //guardarlas en memoria
    var nombre;
    var mensaje;
    var mensaje2; //undifined
    edad = prompt("Ingresa una edad")
    console.log(edad);
    //edad = sdsadsad   
    if(edad > 100){
        alert("ingresa una edad valida");
        validarEdad();
    }else{
        if(edad > 12){
            //alert("Bienvenid@");
            nombre = prompt("Dime tu nombre: ");
            mensaje = "Bienvenid@, "+nombre;
            mensaje2 = "Escuela Código ofrece los mejores servicios"
        }else{
            alert("no pueden entrar al sitio");
            mensaje = "No cumples con la edad";
            mensaje2 = "";
        }

        document.getElementById("bienvenida").innerHTML = mensaje;
        document.getElementById("escuela-codigo").innerHTML = mensaje2; //""
    }     
}





//validarEdad();
/*
if (el agua esta muy dulce) {
    agregar limon
}else{
    servir
}

edad <= 12 -> 1 2 3 4 5 ... 12
edad < 12 -> 1 2 3 4 5 ... 11
edad > 12 -> 13 14 15...
edad >= 12 -> 12 13 14 ...
edad == 12 -> 12
edad === 12 -> 12 //con el mismo tipo de dato

///Error
if (edad = 12) {
    
}
///

edad = false
!edad -> true

*/