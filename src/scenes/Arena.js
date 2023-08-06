
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

		// Arena
		const arena = this.add.tilemap("arena");
		arena.addTilesetImage("Tileset-Terrain-old prison", "Tileset-Terrain-old prison");
		arena.addTilesetImage("Tileset - wall 2", "wall-2- 3 tiles tall");
		arena.addTilesetImage("Tileset - wall 1", "wall-1- 3 tiles tall");
		arena.addTilesetImage("AutoMap Rules", "tile guide-1 tile");
		arena.addTilesetImage("blood pool - style2 - with spikes - transparency", "blood pool - style2 - with spikes-transparency");

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// background_1
		arena.createLayer("background", ["Tileset-Terrain-old prison"], 0, 0);

		// floor_1
		arena.createLayer("floor", ["Tileset - wall 1"], 0, 0);

		// wall_1
		const wall_1 = arena.createLayer("wall", ["Tileset-Terrain-old prison","Tileset - wall 2"], 0, 0);

		// player
		const player = new Player(this, 156, 119);
		this.add.existing(player);

		// skeleton
		const skeleton = new Skeleton(this, 995, 419);
		this.add.existing(skeleton);

		// opossum
		const opossum = new Opossum(this, 479, 390);
		this.add.existing(opossum);

		// spawnZone
		const spawnZone = this.add.rectangle(407, 403, 128, 128);
		spawnZone.scaleX = 5.667930178250129;
		spawnZone.scaleY = 5.558860647392047;

		// eagle
		const eagle = new Eagle(this, 235, 351);
		this.add.existing(eagle);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(this);

		// lists
		const enemyTypes = [skeleton, opossum, eagle];
		const enemies = this.add.group([skeleton, opossum, eagle]);

		// playerWall
		this.physics.add.collider(player, wall_1);

		// collider
		this.physics.add.collider(skeleton, player, this.damage, undefined, this);

		// enemies
		this.physics.add.collider(enemies, enemies);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Planning";

		this.wall_1 = wall_1;
		this.player = player;
		this.skeleton = skeleton;
		this.spawnZone = spawnZone;
		this.arena = arena;
		this.upKey = upKey;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.downKey = downKey;
		this.enemyTypes = enemyTypes;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	wall_1;
	/** @type {Player} */
	player;
	/** @type {Skeleton} */
	skeleton;
	/** @type {Phaser.GameObjects.Rectangle} */
	spawnZone;
	/** @type {Phaser.Tilemaps.Tilemap} */
	arena;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Array<Skeleton|Opossum|Eagle>} */
	enemyTypes;
	/** @type {Array<any>} */
	enemies;

	/* START-USER-CODE */
	// Function to spawn enemies


	// Write your code here

	EnemyTypes = this.enemyTypes;
	create() {
    this.editorCreate();
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
    this.time.delayedCall(30000, () => {
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
		// if (this.player.hurtFlag) {
		// 	return;
		// }

		const body = this.player.getBody();

		const leftDown = this.leftKey.isDown;
		const rightDown = this.rightKey.isDown;
		const upDown = this.upKey.isDown;
		const downDown = this.downKey.isDown;

		var vel = 150;

		if (leftDown) {
			this.player.body.velocity.x = -vel;
			this.player.play("playerleft", true);
		} else if (rightDown) {
			this.player.body.velocity.x = vel;
			this.player.play("playerright", true);
			this.player.flipX = false;
		} else {
			this.player.body.velocity.x = 0;
		}

		if (upDown) {
			this.player.body.velocity.y = -vel;
			this.player.play("playerup", true);
		} else if (downDown) {
			this.player.body.velocity.y = vel;
			this.player.play("playerdown", true);
		} else {
			this.player.body.velocity.y = 0;
		}

		// Idle animation
		if (!leftDown && !rightDown && !upDown && !downDown) {
			this.player.play("playerdown", true);
		}
	}

damage() {
	console.log("damage");
}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
