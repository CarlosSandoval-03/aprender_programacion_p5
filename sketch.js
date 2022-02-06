let tablero,
	jugador,
	meta,
	imagenMeta,
	accionesFinalizadas = false,
	estaEjecutando = false;

let imagenJugador1, imagenJugador2, imagenJugador3, imagenJugador4;
let sprites;

let puntaje, topScore;

const VELOCIDAD_JUGADOR = 30;

function preload() {
	/** Imagen */
	imagenJugador1 = loadImage(Jugador.RUTA_IMAGEN1);
	imagenJugador2 = loadImage(Jugador.RUTA_IMAGEN2);
	imagenJugador3 = loadImage(Jugador.RUTA_IMAGEN3);
	imagenJugador4 = loadImage(Jugador.RUTA_IMAGEN4);
	/** Objeto de sprites */
	sprites = {
		Rigth: imagenJugador1,
		Down: imagenJugador2,
		Left: imagenJugador3,
		Up: imagenJugador4,
	};
	/** Implementamos los sprites */
	ControlJugador.setImagenes(sprites);

	/** Meta */
	imagenMeta = loadImage(Meta.RUTA_IMAGEN);
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
	nivel();
	if (!Validacion.contolador.caminoValido()) {
		location.reload();
	}

	/** Sistema de puntuacion */
	puntaje = new Puntuacion();
	puntaje.setPuntaje(puntaje.getPuntaje()); // Recuperamos el puntaje existente y lo almacenamos
}

function draw() {
	tablero.dibujar();
	meta.dibujar();
	ControlJugador.definirImagen();
	jugador.dibujar();

	/** Si no hay vidas, detiene el juego */
	if (jugador.getVidas() <= 0) {
		DOM.derrota();
		topScore = puntaje.getPuntaje();
		puntaje.limpiarPuntaje();
	}

	if (Comunicacion.esVictoria()) {
		ControlJugador.acciones = []; // Se limpian las demas acciones
		alertify.success(
			"Felicidades, has ganado!\nBuscando el siguiente nivel..."
		);
		puntaje.setPuntaje(puntaje.getPuntaje() + 1); // Incremento Puntaje
		nivel(); //Siguiente Nivel
	}

	/** Comprobar casos de reinicio de nivel */
	if (!Validacion.contolador.caminoValido()) {
		nivel();
	}

	/** Esto permite ejecutar el codigo una unica vez y comprobar la solucion */
	if (estaEjecutando && frameCount % VELOCIDAD_JUGADOR === 0) {
		ControlJugador.ejecutarAcciones();
		if (!Comunicacion.posicionValida()) {
			/** Si el jugador pierde vida, se inicia un nuevo nivel */
			ControlJugador.acciones = []; // Se limpian las demas acciones
			jugador.perderVida();
			alertify.error('"Perdiste una vida, recuerda no caer"');
		}
		if (ControlJugador.acciones.length === 0) {
			estaEjecutando = false;
			accionesFinalizadas = true;
		}
	}

	/**
	 * En caso de que se ejecuten las acciones y el personaje no llegue a la meta
	 * se reinicia el nivel y se pierde una vida
	 */
	if (!Comunicacion.esVictoria() && accionesFinalizadas) {
		ControlJugador.acciones = []; // Se limpian las demas acciones
		jugador.renicio();
		alertify.warning("Debes indicar la trayectoria completa");
		accionesFinalizadas = false;
	}
}
/**
 * Funcion que permite crear un nivel, de esta manera se tiene un mejor manejo de los mapas
 * sin la necesidad de recargar el navegador en su totalidad
 *
 * Creditos a: [Rabbid76] (https://github.com/Rabbid76)
 * Referencia: https://stackoverflow.com/questions/61724523/reset-sketch-in-p5js
 */
function nivel() {
	/** Nuevo mapa y verificamos que tenga solucion */
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);
	Validacion.iniciar(tablero);

	/** Ubicamos el jugador */
	let posicion = Validacion.jugador;
	jugador = new Jugador(imagenJugador1, { x: posicion[0], y: posicion[1] });

	/** Ubicamos la meta */
	let objetivo = Validacion.meta;
	meta = new Meta(imagenMeta, { x: objetivo[0], y: objetivo[1] });

	/** Controlador de movimientos */
	ControlJugador.setJugador(jugador);
	ControlJugador.acciones = []; // Limpia las acciones del jugador

	/** Comunicacion entre los elementos */
	Comunicacion.setJugador(jugador);
	Comunicacion.setMapa(tablero);
	Comunicacion.setMeta(meta);
}
