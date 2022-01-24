function actualizaFecha (){
    var fecha = new Date();
    var diaSemana = fecha.getDay();
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var anio = fecha.getFullYear();
    var formato = '';
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();

    
                //0        //1         //2      //3     //4     //5     //6
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    document.getElementById("diaSemana").innerHTML = semana[diaSemana];
    document.getElementById("dia").innerHTML = dia;
    document.getElementById("mes").innerHTML = meses[mes];
    document.getElementById("anio").innerHTML = anio;

    //Pasar la horas a formato 12 horas
    if (hora > 12){
        hora = hora -12;
        formato = 'PM';
    }else{
        formato = 'AM';
    };

    document.getElementById("hora").innerHTML = hora;
    document.getElementById("formato").innerHTML = formato;
    

    if(minuto <10 ){
        minuto = "0"+minuto;
    };
    if(segundo <10){
        segundo = "0"+segundo;
    }


    document.getElementById("minuto").innerHTML = minuto;
    document.getElementById("segundosFecha").innerHTML = segundo;

}

actualizaFecha()

var intervalo = setInterval(actualizaFecha, 1000);

