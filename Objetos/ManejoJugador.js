const ControlJugador = {
	/** El jugador y los assets que se representaran */
	jugador: undefined,
	imagenes: {
		Rigth: undefined,
		Down: undefined,
		Left: undefined,
		Up: undefined,
	},
	/** Metodos GET y SET */
	getJugador: function () {
		return this.jugador;
	},
	setJugador: function (nuevoJugador) {
		this.jugador = nuevoJugador;
	},
	getImagenes: function () {
		return this.imagenes;
	},
	setImagenes: function (nuevasImagenes) {
		this.imagenes = nuevasImagenes;
	},
	/** Acciones:
	 * I = giroIzquierda
	 * D = giroDerecha
	 * W = avanzar
	 */
	acciones: [],
	/** Manejo de la posicion */
	izquierda: function () {
		this.acciones.push("I");
	},
	derecha: function () {
		this.acciones.push("D");
	},
	avanzar: function () {
		this.acciones.push("W");
	},
	/** Se analiza el movimiento y realiza */
	ejecutarAcciones: function () {
		let movimiento = this.acciones.shift();
		if (movimiento === "I") {
			this.jugador.girarIzquierda();
		} else if (movimiento === "D") {
			this.jugador.girarDerecha();
		} else if (movimiento === "W") {
			this.jugador.adelante();
		}
	},

	/**
	 * Se elige el sprite a representar
	 * @see sketch.js - funcion preload
	 */
	definirImagen() {
		switch (this.jugador.obtenerGiro()) {
			case 0:
				this.jugador.setImagen(this.getImagenes().Rigth); // Derecha
				break;
			case 1:
				this.jugador.setImagen(this.getImagenes().Down); // Abajo
				break;
			case 2:
				this.jugador.setImagen(this.getImagenes().Left); // Izquierda
				break;
			case 3:
				this.jugador.setImagen(this.getImagenes().Up); // Arriba
				break;
		}
	},
};
