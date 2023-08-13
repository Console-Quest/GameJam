
// You can write more code here

/* START OF COMPILED CODE */

class NextButton extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 119, y ?? 76);

		this.setInteractive(new Phaser.Geom.Rectangle(-15.758918335310838, -2.785901057279915, 71.51783667062169, 33.785901057279915), Phaser.Geom.Rectangle.Contains);
		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.setOffset(-16, -3);
		this.body.setSize(72, 22, false);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(20, 8, 128, 128);
		rectangle_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		rectangle_2.scaleX = 0.5587330989892318;
		rectangle_2.scaleY = 0.16852970401999856;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 2131476;
		this.add(rectangle_2);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(rectangle_2);

		// text
		const text = scene.add.text(22, 16, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Next\n";
		this.add(text);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(this);

		// onPointerDownScript (prefab fields)
		onPointerDownScript.eventEmitter = "scene.events";

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Arena";

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	arenaScene = "Arena";

	/* START-USER-CODE */

	// Write your code here.
onPointerDown() {
	console.log("onPointerDown");
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
