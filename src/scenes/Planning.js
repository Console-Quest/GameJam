
// You can write more code here

/* START OF COMPILED CODE */

class Planning extends Phaser.Scene {

	constructor() {
		super("Planning");

		/* START-USER-CTR-CODE */
		console.log("nextButton", NextButton);
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(142, 99, 128, 128);
		rectangle_1.scaleX = 2.9088980684327215;
		rectangle_1.scaleY = 1.7226710547810158;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 5324864;

		// text_1
		const text_1 = this.add.text(109, 62, "", {});
		text_1.text = "Hit Next\n";

		// nextButton
		console.log("nextButton", NextButton);
		const nextButton = new NextButton(this, 127, 90);
		this.add.existing(nextButton);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(this);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Arena";

		this.nextButton = nextButton;

		this.events.emit("scene-awake");
	}

	/** @type {NextButton} */
	nextButton;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.nextButton.setInteractive();

    // Add a pointer down listener to the nextButton
    this.nextButton.on('pointerdown', () => {
        this.scene.start('Arena'); // Switch to the Arena scene
    });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
