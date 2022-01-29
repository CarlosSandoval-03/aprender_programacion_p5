let tablero, jugador, grafico, controlador;

const coord = {
	coordenadasIniciales: [0, 0],
	coordenadasFinales: [2, 3],
};

function setup() {
	/** Construccion del canva */
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	/** Creacion del mapa y el jugador */
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);
	jugador = new Jugador();

	/** El arbol de celdas para verificar si tiene solucion */
	arbol = VerificacionMapa.crearArbolMapa(tablero.getCuadricula());
	arbol = VerificacionMapa.conectarMapa(arbol);
	controlador = new VerificacionMapa();
	controlador.busquedaCaminoValido(arbol, coord);
	console.log(arbol);
	console.log(controlador.tieneSolucion);
}

function draw() {
	tablero.dibujar();
}
