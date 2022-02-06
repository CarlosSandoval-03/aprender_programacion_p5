/**
 * Objeto que permite ubicar la meta y el jugador en el mapa, su principal fin es liberar
 * codigo en sketch y aplicar un objeto literal
 */
const Validacion = {
	contolador: new VerificacionMapa(),
	generador: undefined,
	arbol: undefined,
	coordenadas: undefined,
	contadorBug: 0,
	jugador: [],
	meta: [],
	/** Al constructor solicitar el mapa es necesario crear una funcion que me permita acceder al objeto */
	crearGenerador: function (mapa) {
		this.generador = new GeneradorPosicion(mapa);
	},
	crearCoordenadas: function () {
		this.coordenadas = this.generador.crearCamino();
	},
	verificacionMapa: function (cuadricula) {
		this.arbol = VerificacionMapa.crearArbolMapa(cuadricula);
		this.arbol = VerificacionMapa.conectarMapa(this.arbol);
		this.contolador.busquedaCaminoValido(this.arbol, this.coordenadas);
	},
	controlBug: function () {
		if (this.contadorBug >= 100) {
			this.contadorBug = 0;
			alertify.error("Estamos teniendo problemas, por favor espere...");
			location.reload();
		}
	},
	iniciar: function (mapa) {
		this.controlBug();
		this.controlador = new VerificacionMapa();
		this.crearGenerador(mapa);
		this.crearCoordenadas();
		this.verificacionMapa(mapa.getCuadricula());
		console.log(this.contolador.tieneSolucion); // Temporal
		if (this.contolador.tieneSolucion) {
			this.contadorBug++;
		}
		/** Actualizacion de las coordenadas de ambos estados */
		this.jugador = this.coordenadas.coordenadasIniciales;
		this.meta = this.coordenadas.coordenadasFinales;
	},
};
