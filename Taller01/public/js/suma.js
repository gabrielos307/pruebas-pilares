//Suma de dos numeros.
function sumaNumeros() {  
    var x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      //x = "5" -> pasa como string
      //y = "6" -> pasan como string
      //Suma = 5 + 6  = 11
      //suma = "hola" + "mundo" = "holamundo" 
      //text = 11
      suma=parseFloat(x)+parseFloat(y);  
      text= suma;  
    }  
    //Inserta en el id el contendo de text
    document.getElementById("sumando").innerHTML = text;  
  }  