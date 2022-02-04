class Puntuacion {
	constructor() {
		this.puntaje = this.getPuntaje() ?? 0;
	}

	getPuntaje() {
		return localStorage.getItem("puntaje");
	}
}
