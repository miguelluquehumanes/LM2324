var Numeros =[];
var resultado = 0;

function anadir(){

    var NewNumb = document.getElementById("new").value;
    Numeros.push(NewNumb);
    document.getElementById("resultado").innerHTML= "Se ha añadido correctamente "+ NewNumb +" en el Array";
    
}

function sumar(){

    for(i=0; i<Numeros.length; i++){
        
        if(i==0){
            
            var contador = Numeros[i];
        }else{

            var suma = parseFloat(contador) + parseFloat(Numeros[i]);
            contador = suma;
        }
    }
    document.getElementById('resultado').innerHTML= suma + " es el resultado de sumar todos los elementos del Array";
}
    
function multiplicar(){

    for(i=0; i<Numeros.length; i++){
        
        if(i==0){
            
            var contador = Numeros[i];
        }else{

            var multiplicacion = parseFloat(contador) * parseFloat(Numeros[i]);
            contador = multiplicacion;
        }
    }
    document.getElementById('resultado').innerHTML= multiplicacion + " es el resultado de sumar todos los elementos del Array";
}