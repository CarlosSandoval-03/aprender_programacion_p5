/********************************************************************************************************************
 * Meta.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Publicado bajo los términos de la licencia GPLv3, consulte: http://www.gnu.org/licenses/gpl.html
 *
 * JS Docs basados en: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 * y: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc
 ********************************************************************************************************************/
class Meta extends Jugador {
	/**
	 * Imagen que representara el jugador en el mapa
	 * Fuente: https://www.flaticon.com/free-icons/goal - [Goal icons created by Freepik - Flaticon]
	 * @static
	 */
	static RUTA_IMAGEN = "/Assets/meta.png";
	/**
	 * Inicializamos la posicion de la meta en el tablero
	 * @constructor
	 * @param {Number} x equivalente a su posicion en columnas
	 * @param {Number} y equivalente a su posicion en filas
	 * @see Posicion
	 */
	constructor(imagen, { x, y }) {
		super(imagen, { x: x, y: y });
		super._controladorOrientacion = NaN; /** No poder mover la meta */
	}
}
