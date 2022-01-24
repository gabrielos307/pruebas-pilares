function sumar() {
    var numero1, numero2, resultado, texto;
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
   /*
        if(condicion1 || condición2){
            entra cuando cualquiera  
            de las dos condiciones se cumple

        }
        if(condicion1 && condición2){
            condicion1 y condicion2 se deben de cumplir
            si alguna de las no se cumple, no entra
        }
   */
    if( isNaN(numero1) || isNaN(numero2) ){
        texto = "Ingrese un numero valido";
        console.log(texto)
    }else{
        //resultado = "3" + "2.2" -> "32"
        //"hola " + "mundo" -> hola mundo
        resultado = parseFloat(numero1) + parseFloat(numero2);
        //resultado = 3 + 2 = 5
        texto = resultado;
    }  
    document.getElementById("resultado").innerHTML = texto;
}