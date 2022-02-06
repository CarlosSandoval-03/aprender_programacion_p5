const Comunicacion = {
	/** Objetos a comunicar */
	jugador: undefined,
	mapa: undefined,
	meta: undefined,
	/** Metodos GET y SET */
	getJugador: function () {
		this.jugador;
	},
	setJugador: function (nuevoJugador) {
		this.jugador = nuevoJugador;
	},
	getMapa: function () {
		this.mapa;
	},
	setMapa: function (nuevoMapa) {
		this.mapa = nuevoMapa;
	},
	getMeta: function () {
		return this.meta;
	},
	setMeta: function (nuevaMeta) {
		this.meta = nuevaMeta;
	},
	posicionValida() {
		let x = this.jugador.getPosicionX(),
			y = this.jugador.getPosicionY();
		let cuadricula = this.mapa.getCuadricula();
		/** Si esta dentro del mapa o es una celda habitable, es una posicion valida */
		if (
			!Posicion.fueraMapa(this.jugador) &&
			cuadricula.read(y, x) === Mapa.VALOR_SUELO
		) {
			return true;
		}
		return false;
	},
	/** Verificamos que el jugador y la meta esten el la misma posicion */
	victoria() {
		let xJugador = this.jugador.getPosicionX(),
			yJugador = this.jugador.getPosicionY();

		let xMeta = this.meta.getPosicionX(),
			yMeta = this.meta.getPosicionY();

		if (xJugador === xMeta && yJugador === yMeta) {
			return true;
		}
		return false;
	},
};
