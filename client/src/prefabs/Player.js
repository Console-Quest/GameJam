
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 78, y ?? 37, texture || "bluechar", frame ?? "down1.png");

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setOffset(4, 6);
		this.body.setSize(17, 27, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "playerdown";

		/* START-USER-CTR-CODE */

		this.hurtFlag = false;

		this.scene.time.addEvent({
			loop: true,
			delay: 500,
			callback: () => {

				this.hurtFlag = false;
			}
		});

		this.scene.events.on("update", () => this.updatePlayer());

		/* END-USER-CTR-CODE */

		// custom definition props
		this.playerId = "sessionId";
	}

	/** @type {number} */
	health = 100;
	/** @type {number} */
	attack = 10;
	/** @type {number} */
	round = 0;
	/** @type {number} */
	maxHealth = 100;

	/* START-USER-CODE */

	/**
	 * @return {Phaser.Physics.Arcade.Body} 
	 */
	getBody() {
		return this.body;
	}

	updatePlayer() {

		if (this.hurtFlag) {

			this.play("player/hurt/player-hurt", true);
		}
	}

	hurtPlayer() {

		if (this.hurtFlag) {

			return;
		}

		this.hurtFlag = true;

		//this.hurtTimer.start();

	}


  getPlayerFacing() {
    if (this.cursors.left.isDown) {
      if (this.cursors.up.isDown) {
        return "up-left";
      } else if (this.cursors.down.isDown) {
        return "down-left";
      } else {
        return "left";
      }
    } else if (this.cursors.right.isDown) {
      if (this.cursors.up.isDown) {
        return "up-right";
      } else if (this.cursors.down.isDown) {
        return "down-right";
      } else {
        return "right";
      }
    } else if (this.cursors.up.isDown) {
      return "up";
    } else if (this.cursors.down.isDown) {
      return "down";
    } else {
      return "idle";
    }
  }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
