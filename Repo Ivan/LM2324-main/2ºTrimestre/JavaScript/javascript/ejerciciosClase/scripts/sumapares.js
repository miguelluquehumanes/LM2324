var numeros = [1,8,16,5]


function guardar(){
    
    
    newElem = parseInt(document.getElementById("introducir").value) ;
    numeros.push(newElem);
    document.getElementById("comunicar").innerHTML= "Se ha introducido correctamente el número "+ newElem + " en el Array";
   

}


function sumar(){
    contador = 0;
    for(i=0; i < numeros.length; i++){

        if (numeros[i] % 2 == 0) {
            
            suma = contador + numeros[i];
            contador = suma;
        }
        
    } 
        document.getElementById("comunicar").innerHTML = "La suma de los numeros pares del array da como resultado: "+ suma;
}

