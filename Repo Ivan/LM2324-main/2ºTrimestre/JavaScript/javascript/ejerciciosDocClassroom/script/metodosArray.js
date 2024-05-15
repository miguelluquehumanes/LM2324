
var vehiculos = ["coche","bus","moto"]

function mecanismo(){
    document.getElementById("escribir").innerHTML = "";
    for (var i=0;i<vehiculos.length;i++)
        if (i==0)
            document.getElementById("escribir").innerHTML = vehiculos[i];
        else
            document.getElementById("escribir").innerHTML += ", " + vehiculos[i];
}

function add() {

    var elemento = document.getElementById("elemento").value;
    vehiculos.push(elemento);
    mecanismo();
}

function remove(){
    vehiculos.pop();
    mecanismo();
}

function dec(){

    document.write(vehiculos.reverse(function(a, b){return b - a}));
}

function crec(){

    document.write(vehiculos.sort(function(a, b){return a - b}))

}

function search(){

    busqueda = document.getElementById("introducido").value;
    document.getElementById("escribir").innerHTML = "El " + ncolor + " se encuentra en la posicion " + colores.indexOf(busqueda);
}

