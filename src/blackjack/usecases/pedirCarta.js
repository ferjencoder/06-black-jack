
/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck array de strings de cartas
 * @returns {String} retorna la carta del deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No quedan más cartas en la baraja';
    }

    return deck.pop(); // retorna una carta
}

