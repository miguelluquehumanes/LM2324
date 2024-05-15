var colores = ["rojo",  "verde", "azul", "naranja", "purpura", "marron", "gris", "negro", "rosa", "amarillo"];
function pintarArray(){
    document.getElementById("colors").innerHTML = "";
    for (var i=0;i<colores.length;i++)
    if (i==0)
        document.getElementById("colors").innerHTML += colores[i];
    else
        document.getElementById("colors").innerHTML += ", " + colores[i];
}
pintarArray();

function eliminar() {
    colores.pop();
    document.getElementById("colors").innerHTML = colores;
}


function anadir() {
    anadirelement = document.getElementById("elementoanadir").value;
    colores.push(anadirelement);
    pintarArray();
}

function creciente() {
    colores.sort();
    document.getElementById("colors").innerHTML = colores;
}


function decreciente() {
    colores.reverse();
    document.getElementById("colors").innerHTML = colores;
}

function busqueda() {

    ncolor = document.getElementById("elementobuscar").value;
    document.getElementById("lugar").innerHTML = "El " + ncolor + " se encuentra en la posicion " + colores.indexOf(ncolor);
}
