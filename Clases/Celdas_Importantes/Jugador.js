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
	 * Fuente: https://www.flaticon.es/iconos-gratis/robot - [Robot iconos creados por Flat Icons - Flaticon]
	 * @static
	 */
	static RUTA_IMAGEN = "/Assets/robot.png";

	/**
	 * Estructura de la cuadricula que representara el jugador, donde estara
	 * el personaje y el 1 indicara el frente de la figura
	 * @static
	 * @param {Image} Imagen del personaje
	 */
	static BASE_JUGADOR = (imagen) => [imagen];

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
		this._controladorOrientacion = 0;
		this.orientacion = [1, 0];
	}
	getHitbox() {
		return this._hitbox;
	}
	setHitbox(nuevoHitbox) {
		this._hitbox = nuevoHitbox;
	}
	getControladorOrientacion() {
		return this._controladorOrientacion;
	}
	setControladorOrientacion(nuevoControladorOrientacion) {
		this._controladorOrientacion = nuevoControladorOrientacion;
	}

	/**
	 * Crear matrices de comparacion [1,0] [0,1] [-1,0] [0,-1] y
	 * y cambiar la direccion del movimiento en base a esto
	 */
	obtenerGiro() {
		/** Cambio de los estados */
		if (this._controladorOrientacion === 4) {
			this._controladorOrientacion = 0;
		}

		switch (this.getControladorOrientacion()) {
			case 0:
				this.orientacion = [1, 0]; // Derecha
				break;
			case 1:
				this.orientacion = [0, 1]; // Abajo
				break;
			case 2:
				this.orientacion = [-1, 0]; // Izquierda
				break;
			case 3:
				this.orientacion = [0, -1]; // Arriba
				break;
		}
	}

	girarIzquierda() {
		this.setControladorOrientacion(this.getControladorOrientacion() + 1);
	}

	girarDerecha() {
		this.setControladorOrientacion(this.getControladorOrientacion() - 1);
	}

	adelante() {
		this.obtenerGiro();
		/**
		 * En base a la orientacion realizara un movimiento distinto equivalente
		 * a sumar la cantidad del arreglo correspondiente a la coordenada actual
		 */
		let nuevaCoordenada = [
			super.getPosicionX() + this.orientacion[0],
			super.getPosicionY() + this.orientacion[1],
		];
		super.setPosicionX(nuevaCoordenada[0]);
		super.setPosicionY(nuevaCoordenada[1]);
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
