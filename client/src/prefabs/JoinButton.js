
// You can write more code here

/* START OF COMPILED CODE */

class JoinButton extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0.0946818124022677, y ?? -15.930854678924106);

		// joinGameButton
		const joinGameButton = scene.add.rectangle(7.094681812402271, -8.930855123290755, 46, 128);
		joinGameButton.scaleX = 1.2723676012847889;
		joinGameButton.scaleY = 0.1394488487887552;
		joinGameButton.isFilled = true;
		joinGameButton.fillColor = 9473780;
		joinGameButton.fillAlpha = 0.8;
		joinGameButton.isStroked = true;
		joinGameButton.strokeColor = 1973790;
		this.add(joinGameButton);

		// text_3
		const text_3 = scene.add.text(-16.473409062011342, -15.326216466096458, "", {});
		text_3.scaleX = 0.2368652349187298;
		text_3.scaleY = 0.2368652349187298;
		text_3.text = "join game";
		text_3.setStyle({ "fontFamily": "Courie", "fontSize": "50px" });
		this.add(text_3);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
