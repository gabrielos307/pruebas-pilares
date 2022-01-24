var carros = ["bmw","volkswagen", "chevrolet", "Nissan"];
console.log(carros[3]);


//Metodo que quita el ultimo elemento de un arreglo
carros.pop();
console.log(carros);

//Metodo que agrega un elemento al final de un arreglo
carros.push("Ferrari");
console.log(carros)

//Metodo que elimina el primer elemento
carros.shift();
console.log(carros);

//metodo que agrego un elemento al principio del arreglo
carros.unshift("Alpha romeo");
console.log(carros)

//Metodo para concatenar (juntar) arreglos
var motos = ["harley","honda", "ducati"];
var autos_motos = carros.concat(motos);

document.getElementById("elemento").innerHTML = autos_motos;
console.log(autos_motos)

//Iterar en cada elemento FOREACH
var texto = "";
autos_motos.forEach(miFuncion);
document.getElementById("ciclo").innerHTML = texto;


function miFuncion(value, index, array){
    texto = texto + value + "<br>";
}


