/********************************************************************************************************************
 * Posicion.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Publicado bajo los términos de la licencia GPLv3, consulte: http://www.gnu.org/licenses/gpl.html
 *
 * JS Docs basados en: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 * y: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc
 ********************************************************************************************************************/
class Posicion {
	/**
	 * Inicializamos la posicion en el tablero
	 * @constructor
	 * @param {Number} x equivalente a su posicion en columnas
	 * @param {Number} y equivalente a su posicion en filas
	 */
	constructor(x, y) {
		this._xPos = x;
		this._yPos = y;
	}

	getPosicionX() {
		return this._xPos;
	}
	setPosicionX(nuevaX) {
		this._xPos = nuevaX;
	}
	getPosicionY() {
		return this._yPos;
	}
	setPosicionY(nuevaY) {
		this._yPos = nuevaY;
	}
}
