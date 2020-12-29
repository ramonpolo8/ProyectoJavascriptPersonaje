var turno = 1;
var vida = 100;

//Estados jugadores
var vivo = true;
var envenenado = false;
var quemado = false;

//Jugadas CPU
var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;

var pocion = 0;
var resurreccion = 1;
var pocionQuemadura = 2;

function usarItem(objeto) {
    if (objeto == pocion) {
        vida += 50;
    }
    if (objeto == resurreccion) {
        vivo = true;
    }
    if (objeto == pocionQuemadura) {
        quemado = false;
    }

}


function muestraEstadoJugador() {
    if (vivo == true) {
        console.log("vida: " + vida);
        if (envenenado == true)
            console.log("Envenenado.");

        if (quemado == true)
            console.log("Quemado.");
    }
    else {
        console.log("Estas Muerto");
    }
}


function juegaTurno() {
    var jugadaCPU = Math.round(Math.random() * 3);
    if (vida <= 0) {
        vivo = false;
    }
    if (vivo == true) {
        console.log(jugadaCPU);
        if (jugadaCPU == atacar) {
            vida -= 10;
            console.log("Te han atacado.")

        } else if (jugadaCPU == quemar) {
            quemado = true;
            console.log("Te han quemado.")

        } else if (jugadaCPU == envenenar) {
            envenenado = true;
            console.log("Te han envenenado.")

        } else if (jugadaCPU == fallar) {
            console.log("Han fallado. Tienes suerte!!!")
        }

        muestraEstadoJugador();
    }
    else {
        console.log("Estas muerto");
    }
}