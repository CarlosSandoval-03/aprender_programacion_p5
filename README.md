# Proyecto: Desarrollo de un Videojuego para Motivar el Pensamiento Computacional - Universidad Nacional de Colombia

- [Proyecto: Desarrollo de un Videojuego para Motivar el Pensamiento Computacional - Universidad Nacional de Colombia](#proyecto-desarrollo-de-un-videojuego-para-motivar-el-pensamiento-computacional---universidad-nacional-de-colombia)
  - [Acceso Al Proyecto](#acceso-al-proyecto)
  - [Objetivo General](#objetivo-general)
  - [Objetivos Especificos](#objetivos-especificos)
  - [Estructura de Clases](#estructura-de-clases)
    - [Busqueda en Anchura](#busqueda-en-anchura)
    - [Celdas de Importancia](#celdas-de-importancia)
      - [Clases que Heredan de Posición](#clases-que-heredan-de-posición)
    - [Clases Generales](#clases-generales)
      - [Clases que Heredan de Almacenamiento](#clases-que-heredan-de-almacenamiento)
  - [Estructura de Objetos](#estructura-de-objetos)
    - [Manejo del DOM](#manejo-del-dom)
    - [Comunicación Entre Objetos](#comunicación-entre-objetos)
  - [Limitaciones](#limitaciones)
  - [Futuras Mejoras](#futuras-mejoras)
  - [Conclusiones](#conclusiones)
  - [Referencias](#referencias)

## Acceso Al Proyecto

[Deploy](https://aprender-programacion-p5.vercel.app/)

## Objetivo General

Desarrollar juego tipo laberinto que permita les permita a los jóvenes tener su primer contacto con la resolución de problemas a través de algoritmos, fortaleciendo las capacidades cognitivas relacionadas con el pensamiento computacional.

## Objetivos Especificos

- Investigar referencias, librerías y algoritmos aplicables al proyecto.
- Diseñar sistema de juego, estructura de clases y UI.
- Implementar algoritmo de búsqueda en anchura enfocado a celdas.
- Generación de niveles aleatorios y posterior implementación de validación.
- Manejo de imágenes y arquitectura HTML básica.
- Implementación de movimiento a través de botones.

## Estructura de Clases

### Busqueda en Anchura

Al buscar un juego basado en niveles aleatorios se indago sobre algoritmos para la búsqueda de caminos, en las primeras fases se tenia la idea de implementar el algoritmo de Dijkstra, pero finalmente dada la forma de cuadricula se empleo un algoritmo de búsqueda en anchura que permite recorrer de una forma parecida el mapa solventando la problemática principal.

- Árbol: La clase posee un arreglo de almacenamiento para los nodos y un objeto literal para representar el grafo, además de inicio y final que representan el origen y la meta del mapa que está en juego.
- Nodo: Clase que permite la construcción de "nodos" los cuales almacenan un valor, posee un arreglo donde se almacenan sus conexiones en forma de cruz (ya que son los únicos movimientos posibles), una variable booleana que indica si el nodo es visitado y finalmente un padre el cual nos permitirá encontrar el camino entre los puntos.
- Verificación Mapa: La clase posee métodos estáticos que le permite crear el grafo del mapa en juego, al igual que realiza las conexiones entre los nodos, finalmente su labor principal es aplicar el algoritmo, él se encarga de realizar la búsqueda en anchura y finalmente verificar que el camino sea válido.

### Celdas de Importancia

El manejo de los objetos que interactuaran en el mapa, como el jugador, la meta y la posición que ambos poseen.

- Posición: Esta clase se encarga de administrar las coordenadas, al igual que realizar verificaciones como: es la misma posición, es una posición invalida.

#### Clases que Heredan de Posición

- Jugador: Esta clase administra todo lo relacionado al jugador, como el asset que va en base a la rotación, vidas, cambios de posición, etc.
- Meta: Esta clase maneja su propio asset y la posición de la meta. Se aplica abstracción para que esta no pueda moverse.

### Clases Generales

- Generador Posición: Clase diseñada para crear los puntos de origen y meta del mapa.
- Mapa: Clase que maneja el mapa del juego, posee un constructor basado en argumentos que da una mayor flexibilidad a la hora de crear mapas, al igual que se encarga de la representación gráfica y mostrar esta última.
- Almacenamiento: Clase que facilita el almacenamiento en localStorage y permite de una forma sencilla la manipulación de los datos facilitando la lectura.

#### Clases que Heredan de Almacenamiento

- Puntuación: Clase hija que se encarga de administrar únicamente puntajes en el localStorage.

## Estructura de Objetos

### Manejo del DOM

- DOM: Objeto literal el cual se encarga de hacer visible la alerta sobre la derrota, este tiene la integración de [Alertify.js](https://alertifyjs.com) para esta tarea
- Barra Movimientos: Objeto literal encargado de manipular la lista que representa los movimientos seleccionados por el usuario, este analiza los movimientos almacenados, los representa en carácter ANSI y los muestra en pantalla.
- Información: Objeto literal, diseñado para la representación de los puntos (niveles completado), las vidas del jugador por nivel y representarlos en código HTML.

### Comunicación Entre Objetos

- Comunicación: Objeto literal, este posee métodos de verificación de posiciones, detección de victoria y almacena las instancias de jugador, mapa y meta para realizar sus métodos.
- Control Jugador: Este permite la comunicación entre las imágenes precargadas, los botones en el HTML y la instancia de Jugador, permitiendo cambiar su representación grafica en base a la rotación y moverlo a través del mapa.
- Validación: Realiza las operaciones entre: Verificación del mapa, generadores de coordenadas, conteo de bugs en caso de presentarse y administración del algoritmo de búsqueda en anchura, aplicado para simplificar la lectura en el código Sketch.

## Limitaciones

Al momento de esta versión en producción, existe un bug que genera niveles de forma consecutiva, sin permitir la interacción del jugador, este es controlado con el sistema de conteo de bugs, que realiza una recarga de la página sin afectar los datos almacenados, pero sigue presente en el juego. De igual manera con una notificación constante la cual indica que la trayectoria completa debe ser presentada (esto en casos de victoria no tiene sentido).

Se presentan problematicas a la hora de implementar animaciones que describan de mejor manera el movimiento del jugador y le den un toque mas profesional al movimiento.

## Futuras Mejoras

- Implementación de un sistema de movimiento basado en bloques e integración con ciclos que permitan abarcar más conceptos de programación.
- Mejora en el diseño UI y UX para que sea más amigable con el usuario.
- Mejora en patrones de diseño para que sean más amigables con el desarrollador.
- Corrección de errores en el algoritmo de generación de niveles.
- Implementación de un sistema de backend que permite almacenamiento en base de datos y eliminar la dependencia del chache.
- Búsqueda de nuevas librerías que permitan mejorar el estado del proyecto.

## Conclusiones

La programación orientada a objetos es un paradigma que presenta muchas ventajas en base al tipo de proyecto que se tiene en mente, el desarrollar de esta manera me ha permitido indagar mas a fondo en el lenguaje, manejo de librerías, manejo de licencias, patrones de diseño, aplicación de principios SOLID (al menos una implementación muy básica), creación de grafos, aplicación de algoritmos de búsqueda, etc.
El proyecto ha sido diseñado para ser una herramienta libre, que permita desarrollar el pensamiento computacional al tiempo que se juega, y es un inicio para que el usuario pueda indagar más sobre este tema con las nociones más básicas en la resolución de problemas a través de algoritmos.

## Referencias

1. Librería [Quadrille](https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js)
2. Algoritmo "Búsqueda en anchura" para la búsqueda de caminos [Articulo](https://es.wikipedia.org/wiki/B%C3%BAsqueda_en_anchura)
3. Aplicación del algoritmo en P5 para buscar camino en data .Json [The Coding Train - 1](https://www.youtube.com/watch?v=piBq7VD0ZSo) y [The Coding Train - 2](https://www.youtube.com/watch?v=-he67EEM6z0)
4. Solución a no recargar la página entera, sino cargar nuevo nivel: [Respuesta de Rabbid76](https://stackoverflow.com/questions/61724523/reset-sketch-in-p5js)
   1. Perfil de GitHub de [Rabbid76](https://github.com/Rabbid76)
5. Iconos de [iconos creados por Flat Icons - Flaticon](https://www.flaticon.es/iconos-gratis/)
6. Documentación en EC6 [JSDdocs](https://stackoverflow.com/questions/41715994/how-to-document-ecma6-classes-with-jsdoc)
7. Licencia [GPLv3](http://www.gnu.org/licenses/gpl.html)
8. Función para la creación de números aleatorios [Código](https://desarrolloweb.com/articulos/763.php)
9. Explicación y aplicación de la función shift
   [Coding Challenge #68.2: Breadth-First Search Part 2](https://www.youtube.com/watch?v=-he67EEM6z0) y [Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
10. Manejo de funciones Arrow [básico](https://javascript.info/arrow-functions-basics) y [profundización](https://javascript.info/arrow-functions)
11. Manejo de constructores a través del objeto [arguments](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/arguments) y su [aplicación](https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js)
12. El porque usar métodos get y set puede generar problemas [Midudev](https://www.twitch.tv/videos/1274644444) - 01:21:00
13. Alertify.js: Liberia que facilita la creacion de prompts [Documentacion](https://alertifyjs.com/)
14. Manejo del localStorage [Documentacion](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
15. Manejo de Json [Documentacion](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)
16. Uso de JSON.parse y JSON.stringify [Guia](https://platzi.com/clases/2419-javascript-poo-intermedio/39813-jsonparse-y-jsonstringify/?utm_source=google&utm_medium=cpc&utm_campaign=12915366154&utm_adgroup=&utm_content=&gclid=Cj0KCQiAgP6PBhDmARIsAPWMq6kUuduSWZu4F8KdwevWM22Xa6EPxx6DVOyZqRKdwzsOSAxbBHBvISIaArccEALw_wcB&gclsrc=aw.ds)
17. Uso de parseInt [Documentacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
18. Juego de referencia 1 [Doodle: Celebración del 50 aniversario de Kids Coding](https://www.google.com/doodles/celebrating-50-years-of-kids-coding)
19. Juego de referencia 2 [Minijuego: The Navigator](https://clubpenguin.fandom.com/wiki/The_Navigator)
