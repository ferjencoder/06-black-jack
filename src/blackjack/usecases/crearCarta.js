


/**
 * Esta función crea el img de las cartas
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCarta = ( carta ) => {

    if ( !carta ) throw new Error( 'La carta es un argumento obligatorio' );

    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `assets/cartas/${carta}.png` // 3H, AS, 10S
    imgCarta.classList.add( 'carta' );
    imgCarta.alt = carta;

    return imgCarta;

};