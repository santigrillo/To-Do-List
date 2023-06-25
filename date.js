
const $fecha= document.querySelector('.fecha');

function Relojdigital(){
    let f=new Date(),
    dia= f.getDate(),
    mes= f.getMonth()+1;

    dia= ('0'+dia).slice(-2);
    mes=('0'+mes).slice(-2);

    if (mes == 1){
        mes = "January"
    } 

    if (mes == 2){
        mes = "February"
    }
    if (mes == 3){
        mes = "March"
    }
    if (mes == 4){
        mes = "April"
    }
    if (mes == 5){
        mes = "May"
    }
    if (mes == 6){
        mes = "June"
    }
    if (mes == 7){
        mes = "July"
    }
    if (mes == 8){
        mes = "August"
    }
    if (mes == 9){
        mes = "September"
    }
    if (mes == 10){
        mes = "October"
    }
    
    if (mes == 11){
        mes = "November"
    }
    if (mes == 12){
        mes = "December"
    }
    $fecha.innerHTML = `${mes}, ${dia}`
}
setInterval(() =>{
    Relojdigital()
},1000);