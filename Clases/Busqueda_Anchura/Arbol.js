/********************************************************************************************************************
 * Grafo.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Publicado bajo los términos de la licencia GPLv3, consulte: http://www.gnu.org/licenses/gpl.html
 *
 * JS Docs basados en: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 * y: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc
 * Referencia: https://www.youtube.com/watch?v=piBq7VD0ZSo - The Coding Train (Breadth-First)
 * Articulo: https://es.wikipedia.org/wiki/Búsqueda_en_anchura
 ********************************************************************************************************************/
class Arbol {
	/**
	 * @constructor
	 */
	constructor() {
		this.nodos = [];
		this.grafo = {};
		this.inicio = null;
		this.final = null;
	}

	agregarNodo(nodo) {
		this.nodos.push(nodo);

		let dato = nodo.valor;
		this.grafo[dato] = nodo;
	}

	obtenerNodo(nodo) {
		let nodoObtenido = this.grafo[nodo];
		return nodoObtenido;
	}

	definirInicio([x, y]) {
		let coordenada = `${x},${y}`;
		this.inicio = this.grafo[coordenada];
	}

	definirFinal([x, y]) {
		let coordenada = `${x},${y}`;
		this.final = this.grafo[coordenada];
	}
}
