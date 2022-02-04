/********************************************************************************************************************
 * VerificacionMapa.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Publicado bajo los términos de la licencia GPLv3, consulte: http://www.gnu.org/licenses/gpl.html
 *
 * JS Docs basados en: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 * y: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc
 * Referencia: https://www.youtube.com/watch?v=-he67EEM6z0 - The Coding Train (Breadth-First Search Part 2)
 * Articulo: https://es.wikipedia.org/wiki/Búsqueda_en_anchura
 ********************************************************************************************************************/
class VerificacionMapa {
	/**
	 * La funcion evaluara todas las casillas de la cuadricula, en caso de ser
	 * una celda vacia la ignora, en caso de ser suelo lo añade al arbol
	 * @static
	 * @param {Quadrille} cuadricula instancia de Quadrille
	 * @returns {Arbol} instancia de la clase arbol que posee los nodos conectados
	 */
	static crearArbolMapa(cuadricula) {
		let arbol = new Arbol();
		for (let filas = 0; filas < cuadricula.height; filas++) {
			for (let columnas = 0; columnas < cuadricula.width; columnas++) {
				let valorCelda = cuadricula.read(filas, columnas);

				/** Verificamos que sea una celda valida (diferente a vacio) */
				if (Mapa.esPiso(valorCelda)) {
					let coordenada = [columnas, filas]; // => (x, y)

					/** Verificamos si existe en el grafo */
					let nodoCoordenada = arbol.obtenerNodo(coordenada);
					if (nodoCoordenada === undefined) {
						/** Lo definimos si no existe */
						nodoCoordenada = new Nodo(coordenada);
					}
					/** Agregamos el nodo */
					arbol.agregarNodo(nodoCoordenada);
				}
			}
		}
		return arbol;
	}

	/**
	 * Se realizan las conexiones entre celdas, primero obtenemos el grafo y lo
	 * recorremos, por cada nodo almacenado en el grafo y adquirimos sus valores
	 * despues buscamos
	 * @static
	 * @param {Arbol} objeto a conectar
	 * @returns {Arbol} Actualiza la propiedad de grado con las conexiones
	 */
	static conectarMapa(arbol) {
		let grafo = arbol.grafo;

		for (let nombreNodo in grafo) {
			let nodo = grafo[nombreNodo];
			let coordenadas = nodo.valor;
			let [x, y] = coordenadas;

			for (let nombreVecino in grafo) {
				let vecino = grafo[nombreVecino];
				let [vecinoX, vecinoY] = vecino.valor;

				if (vecinoX === x && (vecinoY === y + 1 || vecinoY === y - 1)) {
					grafo[nombreNodo].conectar(vecino);
				} else if ((vecinoX === x + 1 || vecinoX === x - 1) && vecinoY === y) {
					grafo[nombreNodo].conectar(vecino);
				}
			}
		}
		return arbol;
	}

	/**
	 * Constructor del controlador el cual crea las referencias en memoria necesarias
	 * para aplicar el algoritmo de busqueda, como tambien obtener de manera sencilla
	 * el estado del mapa (solucionable o no solucionable)
	 * @constructor
	 */
	constructor() {
		this.cola = [];
		this.camino = [];
		this.tieneSolucion = false;
	}

	/**
	 * Se aplica el algoritmo de busqueda en anchura basado en 2 coordenadas del mapa
	 * donde estaran ubicados el jugador y la meta
	 * @param {Arbol} arbol escaneo del mapa de juego que permite realizar la busqueda
	 * @param {Object} coordenadas iniciales y finales en formas de Arreglos
	 */
	busquedaCaminoValido(arbol, { coordenadasIniciales, coordenadasFinales }) {
		// Indicamos el inicio y el final de la busqueda
		arbol.definirInicio(coordenadasIniciales);
		arbol.definirFinal(coordenadasFinales);

		// Definimos el nodo inicial como "VISITADO"
		arbol.inicio.visitado = true;
		this.cola.push(arbol.inicio);

		let flag = true;
		// Recorremos la cola de busqueda
		while (this.cola.length > 0 && flag) {
			/**
			 * El método shift() elimina el primer elemento del array y lo retorna.
			 * Este método modifica la longitud del array.
			 * Fuentes: https://www.youtube.com/watch?v=-he67EEM6z0 - [Coding Challenge #68.2: Breadth-First Search Part 2]
			 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
			 */
			let celdaActual = this.cola.shift();

			/**
			 * Verificamos si hemos llegado al resultado y en ese caso indicamos
			 * a nuestra bandera que hay una solucion valida
			 */
			if (celdaActual === arbol.final) {
				flag = false;
			}

			/**
			 * En caso de no encontrarlos agregamos las conexiones y recorremos
			 * el arreglo
			 */
			let conexiones = celdaActual.conexiones;
			for (let i = 0; i < conexiones.length; i++) {
				let vecino = conexiones[i];
				/** Si el nodo no ha sido visitado se actualiza su estado y su padre */
				if (!vecino.visitado) {
					vecino.visitado = true;
					vecino.padre = celdaActual;
					/** Lo agregamos a la cola de busqueda */
					this.cola.push(vecino);
				}
			}
		}

		/**
		 * Almacenamos en memoria el camino recorrido
		 */
		this.camino.push(arbol.final);

		/** Nos devolvemos por el camino solucion almacenado los padres */
		let siguiente = arbol.final.padre;
		while (siguiente !== null) {
			this.camino.push(siguiente);
			siguiente = siguiente.padre;
		}
		/**
		 * El ciclo anterior nos dara el camino pero en orden inverso, unicamente
		 * aplicamos reverse() al arreglo y ya tenemos el camino original, el tamaño
		 * del arreglo nos indicara la minima cantidad de pasos para solucionar el mapa
		 */
		this.camino.reverse();

		/**
		 * En caso de existir solucion la propidad del controlador sera cambiara para
		 * facilitar el proceso de creacion de nuevos mapas
		 */
		if (this.caminoValido()) {
			this.tieneSolucion = true;
		}
	}

	/** Se observa si la solucion planteada es valida, y retorna un booleano con ese valor */
	caminoValido() {
		if (this.camino === []) {
			return false;
		}

		for (const key in Object.keys(this.camino)) {
			if (this.camino[key].visitado === false) {
				return false;
			}
		}
		return true;
	}
}
