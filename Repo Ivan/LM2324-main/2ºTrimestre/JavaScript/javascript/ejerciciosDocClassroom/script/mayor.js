var numeros = [];

function anadir(){

    var introducido = parseFloat(document.getElementById("numero").value);
    numeros.push(introducido);
    document.getElementById("guardado").innerHTML = "Los números guardados en el array son: " + numeros;
}

function mayor(){
    let mayor=numeros[0];
    for(var i=0; i<numeros.length; i++){

        if(numeros[i]>mayor)
            mayor = numeros[i];
    }
    return document.getElementById("mayor").innerHTML = mayor;
}

