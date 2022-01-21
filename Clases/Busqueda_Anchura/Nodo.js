/********************************************************************************************************************
 * Nodo.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/aprender_programacion_p5
 * Publicado bajo los términos de la licencia GPLv3, consulte: http://www.gnu.org/licenses/gpl.html
 *
 * JS Docs basados en: https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 * y: https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc
 * Referencia: https://www.youtube.com/watch?v=piBq7VD0ZSo - The Coding Train (Breadth-First)
 * Articulo: https://es.wikipedia.org/wiki/Búsqueda_en_anchura
 ********************************************************************************************************************/
class Nodo {
	/**
	 * Cada nodo estara definifo como no visitado (visitado = false), no tendra
	 * conexiones, su padre estara indefinido al igual que su distancia
	 * (conexiones.length)
	 * @constructor
	 * @param {*} Valor que va a tener el nodo
	 */
	constructor(valor) {
		this.valor = valor;
		this.conexiones = [];
		this.visitado = false;
		this.padre = null;
	}

	conectar(vecino) {
		this.conexiones.push(vecino);
	}
}
