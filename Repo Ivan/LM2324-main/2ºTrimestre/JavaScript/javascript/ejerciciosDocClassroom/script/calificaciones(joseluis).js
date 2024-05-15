var notas=[];

function anadir(){

    let numero = parseFloat(document.getElementById("numero").value);
    //Compruebo que esta comprendido entre 0 y 10
    document.getElementById("aviso").innerHTML = "";
    if(isNaN(numero)){

        document.getElementById("aviso").innerHTML="Debes introducir un número entre 0 y 10";
    }else{

        if(numero<0 || numero >10){
            document.getElementById("aviso").innerHTML="Debes introducir un número entre 0 y 10";
        }else{
            notas.push(numero);
            document.getElementById("notas").innerHTML = notas;
        }
    }
}

function borrar(){

    document.getElementById("aviso").innerHTML ="";
    document.getElementById("notas").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    notas=[];
}

function calcularMedia(){

    let total = 0.0;
    for(i=0;i<notas.length;i++){
        total += notas[i];
    }
    total = total/notas.length;
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}

