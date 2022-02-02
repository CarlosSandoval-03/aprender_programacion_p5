let tablero, jugador, imagen, controlador, generador;

const coord = {
	coordenadasIniciales: [0, 0],
	coordenadasFinales: [2, 3],
};

function preload() {
	imagen = loadImage(Jugador.RUTA_IMAGEN);
}

function setup() {
	/** Construccion del canva */
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	/** Creacion del mapa */
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);

	generador = new GeneradorPosicion(tablero);

	/** Creacion jugador e implementacion de su imagen */
	jugador = new Jugador(imagen, { x: 0, y: 0 });

	/** El arbol de celdas para verificar si tiene solucion */
	arbol = VerificacionMapa.crearArbolMapa(tablero.getCuadricula());
	arbol = VerificacionMapa.conectarMapa(arbol);
	/** Creamos el controlador encargado de aplicar el algoritmo */
	controlador = new VerificacionMapa();
	controlador.busquedaCaminoValido(arbol, coord);

	console.log(controlador.tieneSolucion);
}

function draw() {
	tablero.dibujar();
	jugador.dibujar();
}
