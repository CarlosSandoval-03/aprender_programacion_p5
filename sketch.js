let tablero, jugador, imagen, esVictoria;

/**
 * Funcion que permite crear un nivel, de esta manera se tiene un mejor manejo de los mapas
 * sin la necesidad de recargar el navegador en su totalidad
 *
 * Creditos a: [Rabbid76] (https://github.com/Rabbid76)
 * Referencia: https://stackoverflow.com/questions/61724523/reset-sketch-in-p5js
 */
function nivel() {
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);
	Validacion.iniciar(tablero);

	let posicion = Validacion.jugador;
	jugador = new Jugador(imagen, { x: posicion[0], y: posicion[1] });
}

function preload() {
	imagen = loadImage(Jugador.RUTA_IMAGEN);
}

function setup() {
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	/** Crea un nivel valido */
	while (!Validacion.contolador.tieneSolucion) {
		nivel();
	}
}

function draw() {
	tablero.dibujar();
	jugador.dibujar();
	/** Comprobar casos de reinicio de nivel */
	if (esVictoria || !Validacion.contolador.tieneSolucion) {
		nivel();
		esVictoria = false;
	}
}
