let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario =parseInt(document.getElementById("valorDeUsuario").value);
    
    console.log(numeroSecreto === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos === 1? "vez" :"veces"}`);
        document.getElementById("reiniciar"). removeAttribute("disabled");
    } else {
        //el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El número secreto es menor");
        } else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value ="";
}

function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    }   else {
    // si el número generado está incluido en la lista

    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento("h1","juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar el mensaje de intervalo de números (1 al 10)
    // Generar nuevo número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

