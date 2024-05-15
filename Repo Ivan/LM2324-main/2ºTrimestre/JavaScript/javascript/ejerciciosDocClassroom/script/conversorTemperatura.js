function conversor(temperatura){

    let cifra = document.getElementById("cifra").value;
    let resultado = 0;
    if(temperatura == "celsius"){
        resultado = 5* (cifra - 32)/9;
        document.getElementById("resultado").innerHTML = "Son " + resultado + "º";
    }else{
        resultado = (cifra * 9/5) + 32;
        document.getElementById("resultado").innerHTML = "Son " + resultado + "F";
       }
}

