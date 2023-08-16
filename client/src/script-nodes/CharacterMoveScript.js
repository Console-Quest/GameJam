
// You can write more code here

/* START OF COMPILED CODE */

class CharacterMoveScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		// leftKey
		const leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		this.leftKey = leftKey;
		this.rightKey = rightKey;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.player = this.gameObject; // Assuming the gameObject is the player itself
		this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
		this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
		this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
		this.downKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {any} */
	player = Player;

	/* START-USER-CODE */


	update() {
		this.movePlayer();
	}

	movePlayer() {
		const body = this.player.body;
		const speed = 150;

		let horizontalDirection = '';
		let verticalDirection = '';

		if (this.leftKey.isDown) {
			body.velocity.x = -speed;
			horizontalDirection = 'left';
		} else if (this.rightKey.isDown) {
			body.velocity.x = speed;
			horizontalDirection = 'right';
		} else {
			body.velocity.x = 0;
		}

		if (this.upKey.isDown) {
			body.velocity.y = -speed;
			verticalDirection = 'up';
		} else if (this.downKey.isDown) {
			body.velocity.y = speed;
			verticalDirection = 'down';
		} else {
			body.velocity.y = 0;
		}

		this.player.lastDirection = verticalDirection + (verticalDirection && horizontalDirection ? '-' : '') + horizontalDirection;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
