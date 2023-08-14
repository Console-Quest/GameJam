
// You can write more code here

/* START OF COMPILED CODE */

class Arena extends Phaser.Scene {

	constructor() {
		super("Arena");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// newmap
		const newmap = this.add.tilemap("newmap");
		newmap.addTilesetImage("Tileset - wall 2", "wall-2- 3 tiles tall");
		newmap.addTilesetImage("Tileset-Terrain-old prison", "Tileset-Terrain-old prison");

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// wall
		const wall = newmap.createLayer("wall-1", ["Tileset-Terrain-old prison"], 0, 0);

		// skeleton
		const skeleton = new Skeleton(this, 995, 419);
		this.add.existing(skeleton);

		// opossum
		const opossum = new Opossum(this, 479, 390);
		this.add.existing(opossum);

		// eagle
		const eagle = new Eagle(this, 235, 351);
		this.add.existing(eagle);

		// wall_1
		const wall_1 = newmap.createLayer("wall-2", ["Tileset - wall 2"], 0, 0);

		// arcadesprite_1
		const arcadesprite_1 = new Door(this, 426, 3070);
		this.add.existing(arcadesprite_1);
		arcadesprite_1.visible = true;

		// arcadesprite
		const arcadesprite = new Door(this, 891, 3070);
		this.add.existing(arcadesprite);
		arcadesprite.visible = true;

		// arcadesprite_2
		const arcadesprite_2 = new Door(this, 1376, 3070);
		this.add.existing(arcadesprite_2);
		arcadesprite_2.visible = true;

		// arcadesprite_3
		const arcadesprite_3 = new Door(this, 1819, 3070);
		this.add.existing(arcadesprite_3);
		arcadesprite_3.visible = true;

		// arcadesprite_4
		const arcadesprite_4 = new Door(this, 2250, 3069);
		this.add.existing(arcadesprite_4);
		arcadesprite_4.visible = true;

		// arcadesprite_5
		const arcadesprite_5 = new Door(this, 2776, 3070);
		this.add.existing(arcadesprite_5);
		arcadesprite_5.visible = true;

		// arcadesprite_6
		const arcadesprite_6 = new Door(this, 3299, 3070);
		this.add.existing(arcadesprite_6);
		arcadesprite_6.visible = true;

		// arcadesprite_7
		const arcadesprite_7 = new Door(this, 3753, 3070);
		this.add.existing(arcadesprite_7);
		arcadesprite_7.visible = true;

		// player
		const player = new Player(this, 907, 3266);
		this.add.existing(player);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(this);

		// lists
		const enemyTypes = [skeleton, opossum, eagle];
		const enemies = this.add.group(enemyTypes);
		const doorGroup1 = [arcadesprite_1, arcadesprite_7, arcadesprite_6, arcadesprite_5, arcadesprite_4, arcadesprite_3, arcadesprite_2, arcadesprite];

		// playerWall
		const playerWall = this.physics.add.collider(player, wall_1);

		// collider
		this.physics.add.collider(enemies, player, this.damage, undefined, this);

		// enemies
		this.physics.add.collider(enemies, enemies);

		// collider_1
		const collider_1 = this.physics.add.collider(player, arcadesprite_1);

		// collider_2
		const collider_2 = this.physics.add.collider(enemies, wall_1);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Planning";

		this.wall = wall;
		this.skeleton = skeleton;
		this.wall_1 = wall_1;
		this.arcadesprite_1 = arcadesprite_1;
		this.arcadesprite = arcadesprite;
		this.arcadesprite_2 = arcadesprite_2;
		this.arcadesprite_3 = arcadesprite_3;
		this.arcadesprite_4 = arcadesprite_4;
		this.arcadesprite_5 = arcadesprite_5;
		this.arcadesprite_6 = arcadesprite_6;
		this.arcadesprite_7 = arcadesprite_7;
		this.player = player;
		this.upKey = upKey;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.downKey = downKey;
		this.newmap = newmap;
		this.spaceKey = spaceKey;
		this.enemyTypes = enemyTypes;
		this.enemies = enemies;
		this.doorGroup1 = doorGroup1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	wall;
	/** @type {Skeleton} */
	skeleton;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	wall_1;
	/** @type {Door} */
	arcadesprite_1;
	/** @type {Door} */
	arcadesprite;
	/** @type {Door} */
	arcadesprite_2;
	/** @type {Door} */
	arcadesprite_3;
	/** @type {Door} */
	arcadesprite_4;
	/** @type {Door} */
	arcadesprite_5;
	/** @type {Door} */
	arcadesprite_6;
	/** @type {Door} */
	arcadesprite_7;
	/** @type {Player} */
	player;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Phaser.Tilemaps.Tilemap} */
	newmap;
	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;
	/** @type {Array<Skeleton|Opossum|Eagle>} */
	enemyTypes;
	/** @type {Array<any>} */
	enemies;
	/** @type {Door[]} */
	doorGroup1;

	/* START-USER-CODE */
	// Function to spawn enemies
	// Write your code here

	EnemyTypes = this.enemyTypes;
	create() {
    this.editorCreate();
		this.spaceKey.on('down', this.Fireball, this);

    this.initColliders();

    // Make the camera follow the player
    this.cameras.main.startFollow(this.player);

    // Spawn 10 enemies
		this.spawnEnemy();
		this.time.addEvent({
			delay: 10000, // 10 seconds in milliseconds
			callback: this.spawnEnemy,
			callbackScope: this,
			loop: true
	});
	  // Switch to the Planning scene after 1 minute
    this.time.delayedCall(60000, () => {
			this.scene.start('Planning');
	});
  }
	spawnEnemy() {
    const cam = this.cameras.main;
    for (let i = 0; i < 6; i++) {
        // Determine the side of the camera to spawn the enemy (top, bottom, left, right)
        const side = Phaser.Math.RND.pick(['top', 'bottom', 'left', 'right']);
        let x, y;

        switch (side) {
            case 'top':
                x = Phaser.Math.Between(cam.scrollX, cam.scrollX + cam.width);
                y = cam.scrollY - 50; // 50 pixels above the camera view
                break;
            case 'bottom':
                x = Phaser.Math.Between(cam.scrollX, cam.scrollX + cam.width);
                y = cam.scrollY + cam.height + 50; // 50 pixels below the camera view
                break;
            case 'left':
                x = cam.scrollX - 50; // 50 pixels to the left of the camera view
                y = Phaser.Math.Between(cam.scrollY, cam.scrollY + cam.height);
                break;
            case 'right':
                x = cam.scrollX + cam.width + 50; // 50 pixels to the right of the camera view
                y = Phaser.Math.Between(cam.scrollY, cam.scrollY + cam.height);
                break;
        }

				const enemyType = Phaser.Math.RND.pick([Skeleton, Opossum, Eagle]); // Randomly pick an enemy class
				const enemy = new enemyType(this, x, y); // Instantiate the chosen enemy class
				this.add.existing(enemy);
				console.log(this.enemies);
				this.enemies.add(enemy); // Add enemy to the group
				this.physics.add.collider(enemy, this.wall_1);
				this.physics.add.collider(enemy, this.player, this.damage, undefined, this);

        // Add the AttackPlayer behavior to the new enemy
        const attackPlayer = new AttackPlayer(enemy);
        attackPlayer.target = this.player;
		}
	}

	initColliders() {
    // Collider for player and wall_1
    this.newmap.setCollisionByProperty({ collide: true });
    // ... add any other necessary colliders here ...
}





		update() {

		this.movePlayer();

		// fix player position

		this.player.x = Math.floor(this.player.x);

		// fix camera position

		const cam = this.cameras.main;

		// camera X follows the player
		cam.scrollX = Math.floor(this.player.x - cam.width / 2);

		// cameras Y moves to a sector of the world
		const row = Math.floor(this.player.y / cam.height);
		cam.scrollY = row * cam.height;
	}

	movePlayer() {
    const body = this.player.getBody();
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

damage() {
	console.log("damage");
}
Fireball() {
	let fireball = this.physics.add.sprite(this.player.x, this.player.y, 'Fire_Ball1');
	fireball.play('TravelingFire_Ball');
	fireball.body.setAllowGravity(false);

	let fireballSpeed = 300;

	switch (this.player.lastDirection) {
			case 'up':
					fireball.setVelocityY(-fireballSpeed);
					fireball.setAngle(-90);  // Point upward
					break;
			case 'down':
					fireball.setVelocityY(fireballSpeed);
					fireball.setAngle(90);  // Point downward
					break;
			case 'left':
					fireball.setVelocityX(-fireballSpeed);
					fireball.setFlipX(true);  // Flip horizontally
					break;
			case 'right':
					fireball.setVelocityX(fireballSpeed);
					break;
			case 'up-left':
					fireball.setVelocityY(-fireballSpeed/Math.sqrt(2));
					fireball.setVelocityX(-fireballSpeed/Math.sqrt(2));
					fireball.setAngle(-135);  // Point upward-left
					break;
			case 'up-right':
					fireball.setVelocityY(-fireballSpeed/Math.sqrt(2));
					fireball.setVelocityX(fireballSpeed/Math.sqrt(2));
					fireball.setAngle(-45);  // Point upward-right
					break;
			case 'down-left':
					fireball.setVelocityY(fireballSpeed/Math.sqrt(2));
					fireball.setVelocityX(-fireballSpeed/Math.sqrt(2));
					fireball.setAngle(135);  // Point downward-left
					break;
			case 'down-right':
					fireball.setVelocityY(fireballSpeed/Math.sqrt(2));
					fireball.setVelocityX(fireballSpeed/Math.sqrt(2));
					fireball.setAngle(45);  // Point downward-right
					break;
	}

	// Collision check for fireball with walls and enemies.
	this.physics.add.collider(fireball, this.wall_1, this.fireballHit, null, this);
	this.physics.add.collider(fireball, this.enemies, this.fireballHitEnemy, null, this);
}


fireballHit(fireball, object) {
	fireball.play('HittingFire_Ball');
	fireball.setVelocity(0); // Stops the fireball

	fireball.once('animationcomplete', () => {  // Listen for animation completion
			fireball.destroy();  // Destroy the fireball sprite
	});
}
fireballHitEnemy(fireball, enemy) {
	fireball.destroy();
	enemy.destroy();
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
