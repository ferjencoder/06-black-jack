import { valorCarta } from './valorCarta';

/**
 * Esta función suma el valor de la carta al puntaje de cada jugador. Turno: 0 = primer jugador y el último será la turnoComputadora
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML 
 * @param {Number} turno 0 será el primer jugador y el último la computadora
 * @param {String} carta 
 * @returns {Number} retorna los puntos del jugador
 */

export const acumularPuntos = ( puntosJugadores, puntosHTML, carta, turno ) => {

    puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta( carta );
    puntosHTML[ turno ].innerText = puntosJugadores[ turno ];

    return puntosJugadores[ turno ];
};