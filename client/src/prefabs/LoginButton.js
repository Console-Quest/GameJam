
// You can write more code here

/* START OF COMPILED CODE */

class LoginButton extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -3.332493037078166e-7, y ?? 0);

		// rectangle_2
		/** @type {Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }} */
		const rectangle_2 = scene.add.rectangle(27.551797971494544, 0, 128, 128);
		rectangle_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		rectangle_2.scaleX = 0.9964910892041315;
		rectangle_2.scaleY = 0.12790489208476796;
		scene.physics.add.existing(rectangle_2, false);
		rectangle_2.body.moves = false;
		rectangle_2.body.allowGravity = false;
		rectangle_2.body.setSize(128, 128, false);
		rectangle_2.isFilled = true;
		rectangle_2.fillAlpha = 0.6;
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 2;
		this.add(rectangle_2);

		// text_2
		const text_2 = scene.add.text(4.982440739139815, -7, "", {});
		text_2.scaleX = 0.16842803904742332;
		text_2.scaleY = 0.16842803904742332;
		text_2.text = "LOGIN";
		text_2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Comic Sans", "fontSize": "86px" });
		this.add(text_2);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */

		// custom definition props
		this.property;
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
