let tablero, jugador, imagen;

function preload() {
	imagen = loadImage(Jugador.RUTA_IMAGEN);
}

function setup() {
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);

	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);
	Validacion.iniciar(tablero);

	let posicion = Validacion.jugador;
	jugador = new Jugador(imagen, { x: posicion[0], y: posicion[1] });
}

function draw() {
	tablero.dibujar();
	jugador.dibujar();
}
