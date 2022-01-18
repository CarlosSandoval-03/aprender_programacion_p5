let tablero, jugador;

function setup() {
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);
	jugador = new Jugador();
}

function draw() {
	tablero.dibujar();
}
