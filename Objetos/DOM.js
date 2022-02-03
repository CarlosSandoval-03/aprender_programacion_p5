const DOM = {
	derrota: function () {
		let derrota = document.getElementById("derrota");
		derrota.style.visibility = "visible";
		derrota.style.height = "100%";

		let canva = document.getElementById("mainGame");
		canva.style.visibility = "hidden";
	},
};
