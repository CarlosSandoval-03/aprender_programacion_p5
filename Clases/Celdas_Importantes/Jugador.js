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
	 * Estructura de la cuadricula que representara el jugador
	 * @static
	 */
	static BASE_JUGADOR = [
		[0, 0, 0],
		[0, undefined, 1],
		[0, 0, 0],
	];
	/**
	 * Inicializamos la posicion de la meta en el tablero
	 * @constructor
	 * @param {Number} x equivalente a su posicion en columnas
	 * @param {Number} y equivalente a su posicion en filas
	 * @see Posicion
	 */
	constructor(x, y) {
		super(x, y);
		this._hitbox = createQuadrille(Jugador.BASE_JUGADOR);
	}
	getHitbox() {
		return this._hitbox;
	}
	setHitbox(nuevoHitbox) {
		this._hitbox = nuevoHitbox;
	}

	implementarAsset(imagen) {
		let cuadricula = this.getHitbox();
		for (let filas = 0; filas < cuadricula.height; filas++) {
			for (let columnas = 0; columnas < cuadricula.width; columnas++) {
				if (cuadricula.read(filas, columnas) === undefined) {
					cuadricula.fill(filas, columnas, imagen);
				}
			}
		}
		this.setHitbox(cuadricula);
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
