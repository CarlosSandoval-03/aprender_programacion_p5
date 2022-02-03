let tablero,
	jugador,
	meta,
	imagenJugador,
	imagenMeta,
	esVictoria,
	estaEjecutando = false;

const VELOCIDAD_JUGADOR = 30;

function preload() {
	imagenJugador = loadImage(Jugador.RUTA_IMAGEN);
	imagenMeta = loadImage(Meta.RUTA_IMAGEN);
}
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
	/** Ubicamos el jugador */
	let posicion = Validacion.jugador;
	jugador = new Jugador(imagenJugador, { x: posicion[0], y: posicion[1] });

	/** Ubicamos la meta */
	let objetivo = Validacion.meta;
	meta = new Meta(imagenMeta, { x: objetivo[0], y: objetivo[1] });

	/** Controlador de movimientos */
	ControlJugador.setJugador(jugador);
	ControlJugador.acciones = []; // Limpia las acciones del jugador
}

function setup() {
	let canva = createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	/** Manejo del dom para aplicar estilos */
	canva.id("mainGame");
	select("#canvas-container").child(canva);

	/** Crea un nivel valido */
	while (!Validacion.contolador.tieneSolucion) {
		nivel();
	}
}

function draw() {
	tablero.dibujar();
	meta.dibujar();
	jugador.dibujar();
	/** Comprobar casos de reinicio de nivel */
	if (esVictoria || !Validacion.contolador.tieneSolucion) {
		nivel();
		esVictoria = false;
	}
	/** Esto permite ejecutar el codigo una unica vez y comprobar la solucion */
	if (estaEjecutando && frameCount % VELOCIDAD_JUGADOR === 0) {
		ControlJugador.ejecutarAcciones();
		if (ControlJugador.acciones.length === 0) {
			estaEjecutando = false;
		}
	}
}
