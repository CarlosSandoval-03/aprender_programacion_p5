let tablero, jugador;

function setup() {
	createCanvas(VAR_CANVA.ancho, VAR_CANVA.alto);
	tablero = createQuadrille(VAR_MATH.columnas, VAR_MATH.filas);
	tablero.rand(
		PARAMETRO.candidaCeldasVacias,
		color(VAR_CANVA.colorCasillaVacia)
	);
	jugador = new Jugador();
}

function draw() {
	background(VAR_CANVA.colorTablero);
	drawQuadrille(tablero, {
		cellLength: VAR_MATH.tamanoCelda,
		outline: VAR_CANVA.colorBordeTablero,
		board: true,
	});
}
