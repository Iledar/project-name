scrollTrigger.create ({
	trigger: "body",
	start: "top top",
	end: "bottom bottom",
	onUpdate: (self) => {
		console.log("direction:", self.direction);
		if (self.direction === 1) {
			$(".rotate").timeScale(1);
		} else {
			$(".rotate").timeScale(-1);
		}
	}
});