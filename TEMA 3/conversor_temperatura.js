function convertir(grados){
    let valor = document.getElementById("valores").value;
    //let resultado = 0;
    if (grados=="celsius"){
        //Convierto a celsius
        resultado = (valor -32) *5/9;
        document.getElementById("resultado").innerHTML = resultado + "ºC";
    }
    else{
        //Convierto a farenheit
        resultado = valor * ((9/5) +32);
        document.getElementById("resultado").innerHTML = resultado + "ºF";
    }
}