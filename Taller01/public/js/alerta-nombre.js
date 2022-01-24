function edad_fun(){
		var edad = prompt("Ingresa tu edad");
		var mensaje;
		var mensaje2;
		if(edad <= 15 ){
			alert("Eres menor de edad, no puedes ingresar");
			mensaje = ""
			mensaje2 = ""
		}else{
			mensaje = "Hola cumples con la edad";
			var nombre = prompt("Ingresa tu nombre");
			mensaje2 = "Bienvenid@, "+nombre;
		}
		document.getElementById("saludo").innerHTML = mensaje;
		document.getElementById("mi-nombre").innerHTML = mensaje2;
	}