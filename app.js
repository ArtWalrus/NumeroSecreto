//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10'

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    
    //let numeroUsuario = document.querySelector('input').value;
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log('intento: ', intentos);

    if (numeroUsuario === numeroSecreto){
        //El usuario acierta
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acierta
        if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor.')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log('Número secreto: ', + numeroGenerado);
     console.log(listaNumerosSecretos);
    //Si ya se usaron todos los números secretos posibles
    if (listaNumerosSecretos.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se usaron todos los números secretos posibles.')
    } else {
        //Verificar si el numero generado ya fue usado anteriormente
        if (listaNumerosSecretos.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSecretos.push(numeroGenerado);
        return numeroGenerado;
        }
    }

    

}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del número secreto!!!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar intentos
    condicionesIniciales();
    
    //Deshabilitar botón Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();