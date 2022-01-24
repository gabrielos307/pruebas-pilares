function esPar(){
  var x,x1, texto;
  x = document.getElementById("num1").value; //se guarda como string
  x1 = parseInt(x); //lo pasamos a entero
  if(x1%2 == 0){
    texto = "Es un numero par";
  }else{
    texto = "Es un numero impar";
  }
  document.getElementById("par").innerHTML = texto;
}
