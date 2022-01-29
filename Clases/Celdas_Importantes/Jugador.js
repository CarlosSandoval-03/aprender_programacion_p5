/********************************************************************************************************************
 * Jugador.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Publicado bajo los términos de la licencia GPLv3, consulte: http://www.gnu.org/licenses/gpl.html
 *
 * JS Docs basados en: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 * y: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc
 ********************************************************************************************************************/
class Jugador extends Posicion {
	/**
	 * Imagen que representara el jugador en el mapa
	 * Fuente: https://www.flaticon.es/iconos-gratis/robot - [Robot iconos creados por DinosoftLabs - Flaticon]
	 * @static
	 */
	static RUTA_IMAGEN = "/Assets/robot.png";

	/**
	 * Estructura de la cuadricula que representara el jugador, donde estara
	 * el personaje y el 1 indicara el frente de la figura
	 * @static
	 * @param {Image} Imagen del personaje
	 */
	static BASE_JUGADOR = (imagen) => [imagen, 1];
	/**
	 * Inicializamos la posicion de la meta en el tablero
	 * @constructor
	 * @param {Number} x equivalente a su posicion en columnas
	 * @param {Number} y equivalente a su posicion en filas
	 * @see Posicion
	 */
	constructor(imagen, { x, y }) {
		super(x, y);
		this._hitbox = createQuadrille(Jugador.BASE_JUGADOR(imagen));
	}
	getHitbox() {
		return this._hitbox;
	}
	setHitbox(nuevoHitbox) {
		this._hitbox = nuevoHitbox;
	}

	dibujar() {
		drawQuadrille(this.getHitbox(), {
			row: super.getPosicionY(),
			col: super.getPosicionX(),
			cellLength: Mapa.TAMANO_CELDA,
			outline: Mapa.COLOR_BORDE,
			board: true,
		});
	}
}
