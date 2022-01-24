function fecha_act(){


    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var anio = fecha.getFullYear();
    var dia_sem = fecha.getDay();
    var formato;

    var arr_mes = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    var arr_sem = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    if(hora => 13){
        hora = hora -12;
        if(hora < 10){
            hora = "0"+hora;
        }
        formato = "PM"
    }else{
        formato = "AM";
    }

    if(minuto < 10){
        minuto = "0"+minuto;
    }
    if(segundo < 10){
        segundo = "0"+segundo;
    }

    document.getElementById("hora-html").innerHTML = hora;
    document.getElementById("minuto-html").innerHTML = minuto;
    document.getElementById("segundo-html").innerHTML = segundo;
    document.getElementById("formato").innerHTML = formato;

    document.getElementById("dia-semana").innerHTML = arr_sem[dia_sem];
    document.getElementById("dia-html").innerHTML = dia;
    document.getElementById("mes-html").innerHTML = arr_mes[mes];
    document.getElementById("anio-html").innerHTML = anio;

}

var intervalo = setInterval(fecha_act, 1000);
