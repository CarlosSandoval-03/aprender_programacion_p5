let tablero, jugador, grafico;

function setup() {
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);
	jugador = new Jugador();
	arbol = tablero.crearArbolMapa();
	arbol = tablero.conectarMapa(arbol);
	console.log(arbol);
}

function draw() {
	tablero.dibujar();
}
