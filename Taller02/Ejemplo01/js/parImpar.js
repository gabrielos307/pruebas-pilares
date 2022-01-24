function validarNumero(){
    var numero;
    var x;
    var texto;
    numero = document.getElementById("validacion").value;

    //el value lo extrae en forma de string o cadena
    x = parseInt(numero); //string a numero 

    if(x%2 == 0){
        texto = "El numero ingresado es par"
    }else{
        texto = "El numero ingresado es impar"
    }

    document.getElementById("valida").innerHTML = texto;
    
    
}


/*
numero = 55

5+4
5/4

5%2 --> 1

10%3 --> 1

54%2 --> 0

9%3 --> 0

24%4 --> 0
*/