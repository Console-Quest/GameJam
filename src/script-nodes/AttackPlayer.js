
// You can write more code here

/* START OF COMPILED CODE */

class AttackPlayer extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
    this.parent.on('destroy', this.deactivate.bind(this));
    this.parent.on('deactivate', this.deactivate.bind(this)); 

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	target;
	/** @type {boolean} */
	active = true;

	/* START-USER-CODE */

	// Write your code here.
  deactivate() {
    this.active = false;
    if (this.parent && this.parent.body) {
      this.parent.body.setVelocity(0, 0); // Reset velocity
    }
  }

  setTarget(target) {
    if (this.target) {
      // If there was a previous target, remove any existing listeners
      this.target.off('destroy', this.deactivate.bind(this));
      this.target.off('deactivate', this.deactivate.bind(this));
    }

    this.target = target;

    if (this.target) {
      // Attach listeners to the new target
      this.target.on('destroy', this.deactivate.bind(this));
      this.target.on('deactivate', this.deactivate.bind(this));
    }
  }

	update() {
    if (!this.active || !this.target || !this.parent || !this.parent.body) {
      return;
    }

    const direction = new Phaser.Math.Vector2(
      this.target.x - this.parent.x,
      this.target.y - this.parent.y
    );

    direction.normalize();
    this.parent.body.setVelocity(direction.x * 100, direction.y * 100);
  }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
