var notas = []; //variable global para las calificaciones

function anadir(){
    let numero = parseFloat(document.getElementById("numero").value);
    if (isNaN(numero)){ //Si true significa que no es un número
        document.getElementById("aviso").innerHTML ="Debes introducir un número entre 0 y 10"
    }
    else{
        //Compruebo que está comprendido entre 0 y 10
        if(numero<0 || numero>10){
            document.getElementById("aviso").innerHTML ="Debes introducir un número entre 0 y 10"
        }
        else{
            notas.push(numero);
            document.getElementById("notas").innerHTML = notas;
        }
    }
}

function borrar(){
    document.getElementById("aviso").innerHTML="";
    document.getElementById("notas").innerHTML="";
    notas=[];
}

function calcularMedia(){
    let total = 0.0;
    for (var i =0; i<notas.length; i++){
        total = total+notas[i]; //total += nota[i];
    }
    total = total/notas.length;
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}