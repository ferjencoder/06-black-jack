
/**
 * Esta función le asigna un valor a cada carta
 * @param {String} carta 
 * @returns {Number} retorna el valor de la carta en número, 10 para las letras excepto el A que vale 11
 */

export const valorCarta = ( carta ) => {

    // Extraer el número
    const valor = carta.substring( 0, carta.length - 1 );

    return ( isNaN( valor ) )
        ? ( valor === 'A' ) ? 11 : 10
        : valor * 1;

};