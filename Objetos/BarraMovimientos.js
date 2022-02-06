const BarraMovimientos = {
	lista_movimiento: document.getElementById("pantalla-movimientos"),
	acciones: [],
	actualizarLista: function () {
		return [...ControlJugador.acciones];
	},
	dibujar: function () {
		this.acciones = this.actualizarLista();
		this.lista_movimiento.innerHTML = ""; //--> limpieza lista
		for (let i = 0; i < this.acciones.length; i++) {
			let li = document.createElement("li");
			li.innerHTML = this.imagen(this.acciones[i]);
			this.lista_movimiento.appendChild(li);
		}
	},
	imagen: function (accion) {
		switch (accion) {
			case "I": // Giro Izquierda
				return "&#x21BA;";
			case "D": // Giro Derecha
				return "&#x21BB;";
			case "W": // Avanzar
				return "&#x2B06;";
		}
	},
};
