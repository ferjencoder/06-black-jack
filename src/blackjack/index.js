

import _ from 'underscore';
import { crearCarta, crearDeck, pedirCarta, turnoComputadora, acumularPuntos } from "./usecases";

let deck = [];
const tipos = [ 'C', 'D', 'H', 'S' ],
    cartasEspeciales = [ 'A', 'J', 'Q', 'K' ];

let puntosJugadores = [];

// Referencias del HTML
const btnDetener = document.querySelector( '#btnDetener' ),
    btnPedir = document.querySelector( '#btnPedir' ),
    btnNuevo = document.querySelector( '#btnNuevo' ),
    divCartasJugador = document.querySelector( '#jugador-cartas' ),
    divCartasJugadores = document.querySelectorAll( '.divCartas' ),
    puntosHTML = document.querySelectorAll( 'small' );

// Esta función inicializa el juego
const inicializarJuego = ( numJugadores = 2 ) => {

    deck = crearDeck( tipos, cartasEspeciales );

    puntosJugadores = [];
    for ( let i = 0; i < numJugadores; i++ ) {
        puntosJugadores.push( 0 );
    }

    puntosHTML.forEach( elem => elem.innerHTML = 0 );
    divCartasJugadores.forEach( elem => elem.innerHTML = '' );

    btnPedir.disabled = false;
    btnDetener.disabled = false;

}

// Eventos
btnPedir.addEventListener( 'click', () => {

    const carta = pedirCarta( deck );
    let puntosJugador = acumularPuntos( puntosJugadores, puntosHTML, carta, 0 ),
        turno = puntosJugadores.length - 1;

    divCartasJugador.append( crearCarta( carta, turno ) );

    if ( puntosJugador > 21 ) {

        console.warn( 'Lo siento, perdiste' );
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores, deck, puntosHTML ); //puntosJugadores, deck, puntosHTML

    } else if ( puntosJugador === 21 ) {

        console.warn( '21, genial!' );
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores, deck, puntosHTML ); //puntosJugadores, deck, puntosHTML

    }

} );

btnDetener.addEventListener( 'click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugadores, deck, puntosHTML );

} );

btnNuevo.addEventListener( 'click', () => {

    inicializarJuego();

} );
