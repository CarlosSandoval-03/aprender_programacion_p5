let tablero, jugador, imagen, controlador;

const coord = {
	coordenadasIniciales: [0, 0],
	coordenadasFinales: [2, 3],
};

function preload() {
	let imagen = loadImage(Jugador.RUTA_IMAGEN);
}

function setup() {
	/** Construccion del canva */
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	/** Creacion del mapa */
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);

	/** Creacion jugador e implementacion de su imagen */
	jugador = new Jugador();
	jugador.implementarAsset(imagen);

	/** El arbol de celdas para verificar si tiene solucion */
	arbol = VerificacionMapa.crearArbolMapa(tablero.getCuadricula());
	arbol = VerificacionMapa.conectarMapa(arbol);
	/** Creamos el controlador encargado de aplicar el algoritmo */
	controlador = new VerificacionMapa();
	controlador.busquedaCaminoValido(arbol, coord);
	console.log(arbol);
	console.log(controlador.tieneSolucion);
}

function draw() {
	tablero.dibujar();
}
