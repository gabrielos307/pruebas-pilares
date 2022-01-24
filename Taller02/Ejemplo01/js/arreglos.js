var lenguajes = ["Javascript", "Python", "C"];
console.log(lenguajes[1]);

document.getElementById("arr").innerHTML = lenguajes[1];

//Funcion que quita el ultimo elemento del arreglo
lenguajes.pop();
console.log(lenguajes);

//Agrega un elemento al final del arreglo
lenguajes.push("Java");
console.log(lenguajes);


//Funcion que elimina el primer elemento
lenguajes.shift();
console.log(lenguajes)

//Funcion que agrega un elemento al principio del arreglo
lenguajes.unshift("PHP");
console.log(lenguajes)

//Funcion para concatena o juntar arreglos
var frameworks = ["Bootstrap", "Laravel", "VueJS"];
var desarrollo_web = lenguajes.concat(frameworks);
console.log(desarrollo_web);