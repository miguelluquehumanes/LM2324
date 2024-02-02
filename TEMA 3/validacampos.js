function validar(elementos){
    let estanCorrectos = true;
    for(var i=0; i<elementos.length; i++){
        document.getElementById("campo" + (i+1).toString()).innerHTML = "";
        if(elementos[i].value ==""|| (i==6 && !elementos[i].checked)){
            document.getElementById("campo" + (i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    return estanCorrectos;
}
if(!validarEmail()){
    document.getElementById("campo3").innerHTML = "Email no válido";
    estanCorrectos = false;
}
if (!validaPasswords()){
    document.getElementById("campo4").innerHTML = "La contraseña no cumple con los requisitos"
    document.getElementById("campo6").innerHTML = "La contraseña no cumple con los requisitos"
}
function validarEmail(){
    var valido;
    var emailField = document.getElementById('email');
    var validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(validEmail.test(emailField.value)){
        valido = true;
    }else{
        valido = true;
    }
    return valido;
}
function validaPasswords(){
    let clave1 = document.getElementById("password").value;
    let clave2 = document. getElementById("password2").value;
    let passwordOK = true; //Cumple con los requisitos establecidos
    if(clave1.length<8 || (clave1 !=clave2))
        passwordOK = false;
    return passwordOK;
}
function validarDNI(){
    let letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var cadena = document.getElementById("dni").value; //DNI completo
    var numero = 
    
}
