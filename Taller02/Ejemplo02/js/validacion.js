function validar(){
    var nombre, password, correo, archivo, genero, sucursal, edad;
    nombre = document.getElementById("nombre").value;
    password = document.getElementById("pass").value;
    correo = document.getElementById("correo").value;
    archivo = document.getElementById("archivo").value;
    genero = document.getElementsByName("genero").value;
    sucursal = document.getElementById("sucursal").value; 
    edad = document.getElementById("edad").value;

    expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre =="" && password =="" || correo=="" || archivo || sucursal =="" || genero == "" || edad==""){
        alert("Por favor completa los campos");
        return false;
    }else if(nombre.length >30){
        alert("Nombre inválido, tiene más de 30 caracteres");
        return false;
    }else if(password.length > 30){
        alert("Password inválida, su longitud es mayor a lo esperado");
        return false;
    }else if(correo.length > 50){
        alert("Longitud de correo invalidad");
        return false;
    }else if(edad.length>3){
        alert("Edad inválida");
        return false;
    }else if(isNaN(edad)){
        alert("La edad debe ser numérica");
        return false;
    }else if(!expresion.test(correo)){
        alert("Correo invalido");
        return false;
    }
    
    


}