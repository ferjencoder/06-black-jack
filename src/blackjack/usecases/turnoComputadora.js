
import { acumularPuntos } from './acumularPuntos';
import { crearCarta } from './crearCarta';
import { determinarGanador } from './determinarGanador';
import { pedirCarta } from './pedirCarta';

/**
 * Esta función juega el turno de la computadora
 * @param {Array>Number} puntosJugadores 
 * @param {Array<String>} deck 
 * @param {HTMLElement} puntosHTML 
 */

export const turnoComputadora = ( puntosJugadores, deck, puntosHTML ) => {

    const divCartasComputadora = document.querySelector( '#computadora-cartas' );

    if ( !deck ) throw new Error( 'El deck es obligatorio' );

    let turno = puntosJugadores.length - 1;

    let [ puntosMinimos, puntosComputadora ] = puntosJugadores;
    if ( !puntosMinimos ) throw new Error( 'Puntos mínimos son obligatorios' );

    do {

        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos( puntosJugadores, puntosHTML, carta, turno );

        const imgCarta = crearCarta( carta, puntosJugadores.length - 1 );
        divCartasComputadora.append( imgCarta );


    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

    determinarGanador( puntosMinimos, puntosComputadora );

};