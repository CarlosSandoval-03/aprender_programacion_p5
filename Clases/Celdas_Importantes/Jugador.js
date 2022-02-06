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
	static RUTA_IMAGEN1 = "/Assets/robot/robotDerecha.png";
	static RUTA_IMAGEN2 = "/Assets/robot/robotAbajo.png";
	static RUTA_IMAGEN3 = "/Assets/robot/robotIzquierda.png";
	static RUTA_IMAGEN4 = "/Assets/robot/robotArriba.png";

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
		this._imagen = imagen;
		this._origen = { x: x, y: y };
		this._hitbox = createQuadrille(Jugador.BASE_JUGADOR(this._imagen));
		this._vidas = 3;
		this._controladorOrientacion = 0;
		this.orientacion = [1, 0];
	}

	getImagen() {
		return this._imagen;
	}
	setImagen(nuevaImagen) {
		this._imagen = nuevaImagen;

		/** Actualizacion personaje */
		let hitbox = createQuadrille(Jugador.BASE_JUGADOR(nuevaImagen));
		this.setHitbox(hitbox);
	}

	/** "Reinicio de nivel", mas exactamente posicion */
	getOrigen() {
		return this._origen; // --> Solo lectura
	}

	/** Representacion de la cuadricula */
	getHitbox() {
		return this._hitbox;
	}
	setHitbox(nuevoHitbox) {
		this._hitbox = nuevoHitbox;
	}

	/** Manejo de giros */
	getControladorOrientacion() {
		return this._controladorOrientacion;
	}
	setControladorOrientacion(nuevoControladorOrientacion) {
		this._controladorOrientacion = nuevoControladorOrientacion;
	}

	/** Manejo de vidas */
	getVidas() {
		return this._vidas;
	}
	setVidas(nuevaCantidadVidas) {
		this._vidas = nuevaCantidadVidas;
	}

	renicio() {
		super.setPosicionX(this.getOrigen().x);
		super.setPosicionY(this.getOrigen().y);
		this.setControladorOrientacion(0); // --> Reinicio de orientacion
	}

	perderVida() {
		this.setVidas(this.getVidas() - 1);
		this.renicio();
	}

	/**
	 * Crear matrices de comparacion [1,0] [0,1] [-1,0] [0,-1] y
	 * y cambiar la direccion del movimiento en base a esto
	 */
	obtenerGiro() {
		/** Cambio de los estados */
		if (this.getControladorOrientacion() >= 4) {
			let movimiento = this.getControladorOrientacion() - 4;
			this.setControladorOrientacion(movimiento);
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
		return this.getControladorOrientacion();
	}

	girarIzquierda() {
		this.setControladorOrientacion(this.getControladorOrientacion() + 3);
	}

	girarDerecha() {
		this.setControladorOrientacion(this.getControladorOrientacion() + 1);
	}

	adelante() {
		this.obtenerGiro();
		/**
		 * En base a la orientacion realizara un movimiento distinto equivalente
		 * a sumar la cantidad del arreglo correspondiente a la coordenada actual
		 */
		let nuevaCoordenada = new Posicion(
			super.getPosicionX() + this.orientacion[0],
			super.getPosicionY() + this.orientacion[1]
		);
		/** Si no esta fuera del mapa ejecuta */
		if (!Posicion.fueraMapa(nuevaCoordenada)) {
			super.setPosicionX(nuevaCoordenada.getPosicionX());
			super.setPosicionY(nuevaCoordenada.getPosicionY());
		}
	}

	dibujar() {
		this.obtenerGiro();
		drawQuadrille(this.getHitbox(), {
			row: super.getPosicionY(),
			col: super.getPosicionX(),
			cellLength: Mapa.TAMANO_CELDA,
			outline: Mapa.COLOR_BORDE,
			board: true,
		});
	}
}
