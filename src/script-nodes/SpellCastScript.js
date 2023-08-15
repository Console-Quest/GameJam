/* START OF COMPILED CODE */

class SpellCastScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Initializing spell-related properties or logic here.
		this.spells = {
			'fireball': {
				spriteKey: 'Fire_Ball1',
				travelAnimation: 'TravelingFire_Ball',
				hitAnimation: 'HittingFire_Ball',
				speed: 300,
				colliders: [{
					target: this.parent.scene.scene.wall_1,
					// callback: this.hit.bind(this)
				}, {
					target: this.parent.scene.scene.enemies,
					// callback: this.hit.bind(this)
				}]
			},
			'watershot': {
				// Define properties for watershot similarly...spriteKey: 'Fire_Ball1',
				travelAnimation: 'TravelingWater',
				hitAnimation: 'HittingWater',
				speed: 300,
				colliders: [{
					target: this.parent.scene.scene.wall_1,
					// callback: this.hit.bind(this)
				}, {
					target: this.parent.scene.scene.enemies,
					// callback: this.hit.bind(this)
				}]
			}}
		/* END-USER-CTR-CODE */
	}

	/** @type {any} */
	player = Player;
	/** @type {any} */
	fireball = Fireball;
	/** @type {any} */
	watershot = WaterShot;

	/* START-USER-CODE */
	adjustHitboxBasedOnDirection(projectile, direction) {
    switch (direction) {
        case 'left':
            projectile.body.setOffset(0, 20);
            break;
        case 'right':
            projectile.body.setOffset(38, 20);
            break;
        case 'up':
            projectile.body.setOffset(20, 0);
            break;
        case 'down':
            projectile.body.setOffset(20, 38);
            break;
        case 'up-left':
            projectile.body.setOffset(8, 8);
            break;
        case 'up-right':
            projectile.body.setOffset(35, 8);
            break;
        case 'down-left':
            projectile.body.setOffset(8, 35);
            break;
        case 'down-right':
            projectile.body.setOffset(35, 35);
            break;
    }
}

	cast(spellName, body) {
    const spell = this.spells[spellName];
    if (!spell) {
        console.error("Spell not recognized:", spellName);
        return;
    }
    const projectile = this.parent.scene.scene.physics.add.sprite(body.x, body.y, spell.spriteKey);
    projectile.play(spell.travelAnimation);
    projectile.body.setAllowGravity(false);
		// projectile.body.setOffset(0, -20)
		projectile.body.setCircle(12, 0, 20);

    let xVelocity = 0;
    let yVelocity = 0;

    const diagonalFactor = Math.SQRT1_2; 

    switch (this.parent.player.lastDirection) {
        case 'left':
            xVelocity = -spell.speed;
            projectile.angle = 180;
            break;
        case 'right':
            xVelocity = spell.speed;
            projectile.angle = 0;
            break;
        case 'up':
            yVelocity = -spell.speed;
            projectile.angle = -90;
            break;
        case 'down':
            yVelocity = spell.speed;
            projectile.angle = 90;
            break;
        case 'up-left':
            xVelocity = -spell.speed * diagonalFactor;
            yVelocity = -spell.speed * diagonalFactor;
            projectile.angle = -135;
            break;
        case 'up-right':
            xVelocity = spell.speed * diagonalFactor;
            yVelocity = -spell.speed * diagonalFactor;
            projectile.angle = -45;
            break;
        case 'down-left':
            xVelocity = -spell.speed * diagonalFactor;
            yVelocity = spell.speed * diagonalFactor;
            projectile.angle = 135;
            break;
        case 'down-right':
            xVelocity = spell.speed * diagonalFactor;
            yVelocity = spell.speed * diagonalFactor;
            projectile.angle = 45;
            break;
        default:
            console.warn("Unknown player direction:", this.parent.player.lastDirection);
            break;
    }

		projectile.setVelocity(xVelocity, yVelocity);

		// Adjust hitbox based on the direction
		this.adjustHitboxBasedOnDirection(projectile, this.parent.player.lastDirection);
		this.parent.scene.scene.spells.push(projectile);
    // Dynamically set up colliders based on spell properties
		spell.colliders.forEach(collider => {
			if(Array.isArray(collider.target)) {
					collider.target.forEach(singleTarget => {
							this.parent.scene.scene.physics.add.collider(projectile, singleTarget, collider.callback, null, this);
					});
			} else {
					this.parent.scene.scene.physics.add.collider(projectile, collider.target, collider.callback, null, this);
			}
	});
	
	
}

// hit(projectile, object) {
// 	console.log('hit', projectile, object);
// 	const spell = this.getSpellBySpriteKey(projectile.texture.key);
// 	if (!spell) return;

// 	// Always play the hit animation for the projectile.
// 	projectile.play(spell.hitAnimation);
// 	projectile.setVelocity(0);

// 	// Destroy the enemy immediately if the object is of type Enemy.
// 	if (object.isEnemy) {
// 		object.destroy();
// 	}

// 	// After the hit animation completes, destroy the projectile.
// 	projectile.once('animationcomplete', () => {
// 			projectile.destroy();
// 	});
// }

	getSpellBySpriteKey(spriteKey) {
		return Object.values(this.spells).find(spell => spell.spriteKey === spriteKey);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
