let tablero, jugador, grafico;

function setup() {
	createCanvas(
		Mapa.COLUMNAS * Mapa.TAMANO_CELDA,
		Mapa.FILAS * Mapa.TAMANO_CELDA
	);
	tablero = new Mapa(Mapa.COLUMNAS, Mapa.FILAS);
	jugador = new Jugador();
	grafo = new Grafo();

	/**  Solicitamos la cuadricula que representa el mapa */
	let cuadricula = tablero.cuadricula;
	/** Recorremos todas las posiciones de la cuadricula */
	for (let filas = 0; filas < cuadricula.height; filas++) {
		for (let columnas = 0; columnas < cuadricula.width; columnas++) {
			/** Obtenemos el valor de la cuadricula */
			let valorCelda = cuadricula.read(filas, columnas);
			/** Verificamos que sea una celda valida (diferente a vacio) */
			if (Mapa.esPiso(valorCelda)) {
				/** Obtenemos las coordendas de la celda */
				let coordenada = [columnas, filas]; // => (x, y)
				/** Verificamos si existe en el grafo */
				let nodoCoordenada = grafo.obtenerNodo(coordenada);
				if (nodoCoordenada === undefined) {
					/** Lo definimos si no existe */
					nodoCoordenada = new Nodo(coordenada);
				}
				/** Agregamos el nodo */
				grafo.agregarNodo(nodoCoordenada);
			}
		}
	}
	console.log(grafo);
}

function draw() {
	tablero.dibujar();
}
