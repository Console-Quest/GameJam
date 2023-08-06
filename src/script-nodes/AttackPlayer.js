
// You can write more code here

/* START OF COMPILED CODE */

class AttackPlayer extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	target;

	/* START-USER-CODE */

	// Write your code here.
	setTarget(target) {
    this.target = target;
  }
	update() {
    if (!this.target) {
      return;
    }

    // Calculate the direction vector from the object to the target
    const direction = new Phaser.Math.Vector2(
      this.target.x - this.parent.x,
      this.target.y - this.parent.y
    );

    // Normalize the direction vector (convert it to a vector of length 1)
    direction.normalize();

    // Set the object's velocity to move it towards the target
    this.parent.body.setVelocity(direction.x * 100, direction.y * 100);
  }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
