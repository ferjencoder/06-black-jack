
/**
 * Esta función determina el ganador o empate
 * @param {Array<Number>} puntosMinimos 
 * @param {Number} puntosComputadora 
 */


export const determinarGanador = ( puntosMinimos, puntosComputadora ) => {


    setTimeout( () => {

        if ( puntosComputadora === puntosMinimos ) {
            alert( 'Nadie gana :(' )
        } else if ( puntosMinimos > 21 ) {
            alert( 'Computadora Gana' )
        } else if ( puntosComputadora > 21 ) {
            alert( 'Jugador Gana' )
        } else {
            alert( 'Computadora Gana' )
        }

    }, 100 );

};