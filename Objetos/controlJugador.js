const ControlJugador = {
	jugador: undefined,
	getJugador: function () {
		return this.jugador;
	},
	setJugador: function (nuevoJugador) {
		this.jugador = nuevoJugador;
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

	ejecutarAcciones: function () {
		for (const movimiento of this.acciones) {
			if (movimiento === "I") {
				this.jugador.girarIzquierda();
			} else if (movimiento === "D") {
				this.jugador.girarDerecha();
			} else if (movimiento === "W") {
				this.jugador.adelante();
			}
		}
		/** Limpiamos las acciones para recibir mas */
		this.acciones = [];
	},
};
