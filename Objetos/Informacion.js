const Informacion = {
	vidas: undefined,
	puntos: undefined,
	divPuntos: document.getElementById("puntos"),
	divVidas: document.getElementById("vidas"),
	actualizar: function () {
		this.vidas = jugador.getVidas();
		this.puntos = puntaje.getPuntaje();
	},
	dibujar: function () {
		this.actualizar();
		this.divPuntos.innerHTML = `Puntos: ${this.puntos}`;
		this.divVidas.innerHTML = `Vidas: ${this.vidas}`;
	},
};
