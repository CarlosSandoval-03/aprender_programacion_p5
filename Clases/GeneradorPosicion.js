/********************************************************************************************************************
 * GeneradorPosicion.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Publicado bajo los términos de la licencia GPLv3, consulte: http://www.gnu.org/licenses/gpl.html
 *
 * JS Docs basados en: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 * y: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc
 ********************************************************************************************************************/
class GeneradorPosicion {
	/**
	 * Esta funcion permite generar un numero aleatorio entre el intervalo que se le
	 * otorge
	 *
	 * Fuente: https://desarrolloweb.com/articulos/763.php
	 *
	 * @static
	 * @param {Number} min limite inferior del invervalo
	 * @param {Number} max limite superior del intervalo
	 * @returns {Number} valor aleatorio entre el intervalo
	 */
	static generarNumeroAleatorio(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	/**
	 * @constructor
	 * @param {Mapa} mapa instancia que permite acceder al tablero de juego
	 * @param {Jugador} jugador intancia que permite acceder a los parametros del jugador
	 */
	constructor(mapa, posiciones = {}) {
		this.mapa = mapa;
		this.casillasValidas = [];
		this.posiciones = posiciones;
	}

	/**
	 * Esta funcion permite almacenar las coordenadas de las casillas que son validas
	 * recorre el tablero y si la casilla es habitable la almacena en el arreglo
	 * @private
	 */
	_almacenamientoCoordenadas() {
		let cuadricula = this.mapa.getCuadricula();
		let coordenada;
		for (let filas = 0; filas < cuadricula.height; filas++) {
			for (let columnas = 0; columnas < cuadricula.width; columnas++) {
				let valorCelda = cuadricula.read(filas, columnas);
				if (Mapa.esPiso(valorCelda)) {
					coordenada = [columnas, filas];
					this.casillasValidas.push(coordenada);
				}
			}
		}
	}

	/**
	 * Esta funcion permite generar una posicion aleatoria dentro del tablero al tiempo
	 * que retira esta para que no sea seleccionada de nuevo
	 * @private
	 * @returns {Array} arreglo con las coordenadas de las casillas validas
	 */
	_coordenada() {
		this._almacenamientoCoordenadas();
		let indice = GeneradorPosicion.generarNumeroAleatorio(
			0,
			this.casillasValidas.length - 1
		);
		let coordenada = [...this.casillasValidas[indice]];
		this.casillasValidas.splice(indice, 1); // Se elimina para no elegir la misma
		return coordenada;
	}

	/**
	 * La funcion crea un par de coordenadas que indican el camino a seguir por el jugador para
	 * concretar el nivel
	 * @returns {Object} objeto con las coordenadas de la posicion del jugador y la meta
	 */
	crearCamino() {
		this.posiciones["coordenadasIniciales"] = this._coordenada();
		this.posiciones["coordenadasFinales"] = this._coordenada();

		if (
			this.posiciones["coordenadasIniciales"] ===
			this.posiciones["coordenadasFinales"]
		) {
			location.reload();
		}

		return this.posiciones;
	}
}
