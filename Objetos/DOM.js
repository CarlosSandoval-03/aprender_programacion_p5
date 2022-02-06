const DOM = {
	/** Se hace visible el div de derrota */
	derrota: function () {
		alertify.confirm(
			"GAME OVER!",
			`Tu puntaje fue de ${puntaje.getPuntaje()}, deseas volver a jugar?`,
			function () {
				alertify.success("Ok");
				puntaje.limpiarPuntaje(); // Limpiamos el puntaje
				location.reload();
			},
			function () {
				alertify.error("No volver a jugar, leer mas sobre el juego");
				puntaje.limpiarPuntaje(); // Limpiamos el puntaje
				/** Redirecciona al Readme.md */
				window.open(
					"https://github.com/CarlosSandoval-03/aprender_programacion_p5/blob/main/README.md",
					"_blank"
				);
			}
		);
	},
};
