function actualizarFecha() {
    
    //creamos el objeto fecha
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var año = fecha.getFullYear();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
    var semana_dia = fecha.getDay(); //Dia de la semana (0-6)

    //cambiando a formato de 12 horas
    if(hora > 12){
        hora = hora - 12;
        if(hora<10){
            hora = "0"+hora;
        
        }
    }
    if(minuto < 10){
        //6 minutos -> 06 minutos
        minuto = "0"+minuto;
    }
    if(segundo <10){
        segundo = "0"+segundo;
    }
    document.getElementById("hora").innerHTML = hora;
    document.getElementById("minuto").innerHTML = minuto;
    document.getElementById("segundo").innerHTML = segundo;

    //Cambiar el formato de la fecha
    //Arreglo de dias de la semana
    ///                     0        1        2           3           4          5         6               
    var dias_semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    //              0         1         2        3        4       5        6        7         8             9            10          11       
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    document.getElementById("semana").innerHTML = dias_semana[semana_dia];
    document.getElementById("dia").innerHTML = dia;
    //mes = 5
    //meses[mes]
    document.getElementById("mes").innerHTML = meses[mes];
    document.getElementById("año").innerHTML = año;
}

//actualizarFecha();
//setInterval(funcion_ejecutada, milisegundos)
var intervalo = setInterval(actualizarFecha, 1000);

