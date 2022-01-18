/********************************************************************************************************************
 * Mapa.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Released under the terms of the MIT License, refer to: https://opensource.org/licenses/MIT
 *
 * JS Docs based on https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 ********************************************************************************************************************/

class Mapa {
	/**
	 * Color por defecto del vacio
	 */
	static COLOR_VACIO = "#020916";

	/**
	 * Color por defecto del suelo
	 */
	static COLOR_SUELO = "#004373";

	/**
	 * Color por defecto del borde de la cuadricula
	 */
	static COLOR_BORDE = "#0da2c2";

	/**
	 * Tamaño por defecto de cada celda de la cuadricula
	 */
	static TAMANO_CELDA = 35;

	/**
	 * Cantidad de filas por defecto - Y
	 */
	static FILAS = 5;

	/**
	 * Cantidad de columnas por defecto - X
	 */
	static COLUMNAS = 12;

	/**
	 * Cantidad de celdas vacias por mapa
	 */
	static CELDAS_VACIAS = 25;

	/**
	 * Esta funcion indica si la celda es considerada como suelo o no
	 * Manejo de funciones Arrow: https://javascript.info/arrow-functions-basics
	 * Manejo (mas profundo): https://javascript.info/arrow-functions
	 */
	static esPiso = (celda, piso = 0) => (celda === piso ? true : false);

	/**
	 * Permite construir un tablero en base a distintos parametros:
	 * 1. Matriz Nula
	 * 2. Cuadricula (instancia de Quadrille)
	 * 3. Ancho y Alto
	 * @see Quadrille
	 *
	 * En caso de ingresar valores invalidos la cuadricula sera indefinida y marcara
	 * el error
	 *
	 * Este tipo de constructores permite una mayor flexibilidad al ejecutar el programa
	 * Referencia: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
	 */
	constructor() {
		if (arguments.length === 1) {
			if (Array.isArray(arguments[0])) {
				this._cuadricula = createQuadrille(arguments[0]);
			} else if (arguments[0] instanceof Quadrille) {
				this._cuadricula = arguments[0];
			}
		} else if (
			arguments.length === 2 &&
			typeof arguments[0] === "number" &&
			typeof arguments[1] === "number"
		) {
			this._cuadricula = createQuadrille(arguments[0], arguments[1]);
		} else {
			console.error(
				"PARAMETROS INVALIDOS\nLEA LA DOCUMENTACION: https://github.com/CarlosSandoval-03/aprender_programacion_p5"
			);
			this._cuadricula = undefined;
		}
		/**
		 * Comprobamos que la cuadricula este definida y sea instancia de Quadrille para usar
		 * sus metodos
		 */
		if (
			this._cuadricula !== undefined &&
			this._cuadricula instanceof Quadrille
		) {
			this._cuadricula.rand(Mapa.CELDAS_VACIAS, color(Mapa.COLOR_VACIO));
		}
	}

	dibujar() {
		background(Mapa.COLOR_SUELO);
		drawQuadrille(this._cuadricula, {
			cellLength: Mapa.TAMANO_CELDA,
			outline: Mapa.COLOR_BORDE,
			board: true,
		});
	}
}
