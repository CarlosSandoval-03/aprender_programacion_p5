const DOM = {
	/** Se hace visible el div de derrota */
	derrota: function () {
		let derrota = document.getElementById("derrota");
		derrota.style.visibility = "visible";
		derrota.style.height = "100%";
		/** Se esconde el canva */
		let canva = document.getElementById("mainGame");
		canva.style.visibility = "hidden";
	},
};
