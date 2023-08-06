
// You can write more code here

/* START OF COMPILED CODE */

class NextButton extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 119, y ?? 76);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(20, 8, 128, 128);
		rectangle_2.scaleX = 0.5587330989892318;
		rectangle_2.scaleY = 0.16852970401999856;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 2131476;
		this.add(rectangle_2);

		// text
		const text = scene.add.text(22, 16, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Next\n";
		this.add(text);

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
