
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 78, y ?? 37, texture || "bluechar", frame ?? "down1.png");

		scene.physics.add.existing(this, false);
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

		const body = this.getBody();

		body.velocity.y = -100;

		body.velocity.x = (this.scale.x == 1) ? -100 : 100;
	}
	castSpell(spellType, spellDirection) {
    if (this.hurtFlag) {
      return;
    }
    if (!spellDirection) {
      return;
    }
    const getSpellAudio = (spellType) => {
      switch (spellType) {
        case "Fire_Ball":
          this.fire_cast.play();
          break;
        case "Molten_Spear":
          this.lightning_cast.play();
          break;
        case "Water_Geyser":
          this.water_cast.play();
          break;
        case "Tornado":
          this.magic_cast.play();
          break;
      }
      return;
    };

    const {
      x = 0,
      y = 0,
      angle = 0,
      flipX = false,
      flipY = false,
    } = spellDirection;

    getSpellAudio(spellType);

    const spell = this.scene.physics.add.sprite(this.x, this.y, spellType, 0);
    spell.anims.play(spellType, true);
    spell.damage = this.Damage;
    spell.setVelocity(x, y);
    spell.angle = angle;
    spell.flipX = flipX;
    spell.flipY = flipY;
  }

  autoCastSpell(spells) {
    const playerFacing = this.getPlayerFacing();
    const spellDirection = this.directions[playerFacing];

    let delay = 0;
    for (let i = 0; i < spells.length; i++) {
      const spellType = spells[i];
      this.scene.time.delayedCall(delay, () => {
        // Need to add projectiles to player (# of spells cast at once)
        // for (i in this.projectiles){
        //   this.castSpell(spellType, spellDirection);
        // }
        this.castSpell(spellType, spellDirection);
      });
      delay += 100; // Adjust the delay time between spells (in milliseconds) as needed
    }
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
