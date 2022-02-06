class Almacenamiento {
	constructor() {
		this.almacenamiento = window.localStorage; // Almacenamiento local
	}

	guardar(nombre, datos) {
		this.almacenamiento.setItem(nombre, JSON.stringify(datos));
	}

	recuperar(nombre) {
		return this.almacenamiento.getItem(nombre) ?? 0;
	}

	limpiar(nombre) {
		this.almacenamiento.removeItem(nombre);
	}
}
