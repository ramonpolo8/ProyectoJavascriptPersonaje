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

function muestraEstadoJugador() {
    console.log("vida: " + vida);
    if (envenenado == true) {
        console.log("Envenenado.");
    }
    if (quemado == true) {
        console.log("Quemado.");
    }
}

function usarItem() {
    vida += 20;
    console.log("Te has curado con 20 puntos de vida, en total tienes: " + vida);
}

function juegaTurno() {
    var jugadaCPU = Math.round(Math.random() * 3);

    if (vida > 0) {
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