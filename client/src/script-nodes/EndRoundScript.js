
// You can write more code here

/* START OF COMPILED CODE */

class EndRoundScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	endRound() {
		this.destroyAllEnemies();
		this.destroyAllSpells();
	}

	destroyAllEnemies() {
		// Logic to destroy all enemies. This will depend on your game's structure.
		// For example:
		// this.game.enemies.forEach(enemy => enemy.destroy());
	}

	destroyAllSpells() {
		// Logic to destroy all active spells. Again, this depends on your game's structure.
		// For example:
		console.log(this.parent.scene.scene.spells);
		// this.game.spells.forEach(spell => spell.deactivate());
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
