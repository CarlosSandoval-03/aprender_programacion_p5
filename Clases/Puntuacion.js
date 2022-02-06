class Puntuacion extends Almacenamiento {
	static keyPuntaje = "puntaje";

	constructor() {
		super();
		this.puntaje = super.recuperar(Puntuacion.keyPuntaje);
	}

	getPuntaje() {
		return parseInt(super.recuperar(Puntuacion.keyPuntaje), 10);
	}
	setPuntaje(nuevoPuntaje = 0) {
		super.guardar(Puntuacion.keyPuntaje, nuevoPuntaje);
	}

	limpiarPuntaje() {
		super.limpiar(Puntuacion.keyPuntaje);
	}
}
