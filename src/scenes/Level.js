
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// oldPrisonexamplemapV1
		const oldPrisonexamplemapV1 = this.add.tilemap("OldPrisonexamplemapV1");
		oldPrisonexamplemapV1.addTilesetImage("Tileset - wall 1", "wall-1- 3 tiles tall");
		oldPrisonexamplemapV1.addTilesetImage("Tileset - wall 2", "wall-2- 3 tiles tall");
		oldPrisonexamplemapV1.addTilesetImage("Tileset-Terrain-old prison", "Tileset-Terrain-old prison");
		oldPrisonexamplemapV1.addTilesetImage("AutoMap Rules", "tile guide-1 tile");
		oldPrisonexamplemapV1.addTilesetImage("blood pool - style2 - with spikes - transparency", "blood pool - guide");

		// mKey
		const mKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

		// layer
		const layer = oldPrisonexamplemapV1.createLayer("pit", ["Tileset-Terrain-old prison"], 0, 0);

		// wall
		oldPrisonexamplemapV1.createLayer("wall-1", ["Tileset - wall 1"], 0, 0);

		// cherry
		const cherry = new Cherry(this, 480, 80);
		this.add.existing(cherry);

		// cherry_1
		const cherry_1 = new Cherry(this, 496, 80);
		this.add.existing(cherry_1);

		// cherry_2
		const cherry_2 = new Cherry(this, 512, 80);
		this.add.existing(cherry_2);

		// cherry_3
		const cherry_3 = new Cherry(this, 368, 273);
		this.add.existing(cherry_3);

		// cherry_4
		const cherry_4 = new Cherry(this, 400, 272);
		this.add.existing(cherry_4);

		// cherry_5
		const cherry_5 = new Cherry(this, 384, 272);
		this.add.existing(cherry_5);

		// gem
		const gem = new Gem(this, 64, 96);
		this.add.existing(gem);

		// gem_1
		const gem_1 = new Gem(this, 48, 96);
		this.add.existing(gem_1);

		// gem_2
		const gem_2 = new Gem(this, 80, 96);
		this.add.existing(gem_2);

		// gem_3
		const gem_3 = new Gem(this, 672, 256);
		this.add.existing(gem_3);

		// gem_1_1
		const gem_1_1 = new Gem(this, 672, 208);
		this.add.existing(gem_1_1);

		// gem_2_1
		const gem_2_1 = new Gem(this, 704, 192);
		this.add.existing(gem_2_1);

		// frog
		const frog = new Frog(this, 240, 144);
		this.add.existing(frog);

		// frog_1
		const frog_1 = new Frog(this, 553, 324);
		this.add.existing(frog_1);

		// eagle
		const eagle = new Eagle(this, 528, 96);
		this.add.existing(eagle);

		// characterMoveScript_1
		const characterMoveScript_1 = new CharacterMoveScript(eagle);

		// eagle_2
		const eagle_2 = new Eagle(this, 96, 96);
		this.add.existing(eagle_2);

		// characterMoveScript
		const characterMoveScript = new CharacterMoveScript(eagle_2);

		// opossum
		const opossum = new Opossum(this, 678, 147);
		this.add.existing(opossum);

		// opossum_1
		const opossum_1 = new Opossum(this, 368, 320);
		this.add.existing(opossum_1);

		// player
		const player = new Player(this, 388, 160);
		this.add.existing(player);
		player.flipX = false;
		player.flipY = false;
		player.body.allowGravity = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(145, 181, 128, 128);
		rectangle_1.scaleX = 2.247054094517622;
		rectangle_1.scaleY = 0.1832132564628389;
		rectangle_1.isFilled = true;

		// fixedToCameraScript_3
		new FixedToCameraScript(rectangle_1);

		// left_button
		const left_button = this.add.image(26, 170, "left-button");
		left_button.scaleX = 0.39899614692006335;
		left_button.scaleY = 0.39899614692006335;
		left_button.tintTopLeft = 16627125;

		// controllerLeft
		const controllerLeft = new ControllerButtonScript(left_button);

		// fixedToCameraScript_2
		new FixedToCameraScript(left_button);

		// right_button
		const right_button = this.add.image(70, 170, "right-button");
		right_button.scaleX = 0.39899614692006335;
		right_button.scaleY = 0.39899614692006335;
		right_button.tintTopLeft = 16627125;

		// controllerRight
		const controllerRight = new ControllerButtonScript(right_button);

		// fixedToCameraScript_1
		new FixedToCameraScript(right_button);

		// jump_button
		const jump_button = this.add.image(262, 170, "jump-button");
		jump_button.scaleX = 0.39899614692006335;
		jump_button.scaleY = 0.39899614692006335;
		jump_button.tintTopLeft = 16627125;

		// controllerJump
		const controllerJump = new ControllerButtonScript(jump_button);

		// fixedToCameraScript
		new FixedToCameraScript(jump_button);

		// skeleton
		const skeleton = new Skeleton(this, 138, 153);
		this.add.existing(skeleton);

		// characterMoveScript_2
		new CharacterMoveScript(skeleton);

		// tile_Layer
		oldPrisonexamplemapV1.createLayer("Tile Layer 6", [], 0, 0);

		// spikes_1
		oldPrisonexamplemapV1.createLayer("spikes", ["Tileset-Terrain-old prison"], 0, 0);

		// wall
		const wall = oldPrisonexamplemapV1.createLayer("wall-2", ["Tileset - wall 2"], 0, 0);

		// prison_cells_1
		oldPrisonexamplemapV1.createLayer("prison cells", ["Tileset-Terrain-old prison"], 0, 0);

		// worldwalls_1
		oldPrisonexamplemapV1.createLayer("worldwalls", ["Tileset - wall 2"], 0, 0);

		// lists
		const items = [cherry, cherry_1, cherry_2, cherry_3, cherry_4, cherry_5, gem, gem_1, gem_2, gem_3, gem_1_1, gem_2_1];
		const enemies = [frog_1, frog, opossum_1, opossum, eagle, eagle_2, skeleton];

		// colliderPlayerVsLayer
		const colliderPlayerVsLayer = this.physics.add.collider(player, wall);

		// colliderEnemiesVsLayer
		const colliderEnemiesVsLayer = this.physics.add.collider(enemies, wall);

		// overlapPlayerVsItems
		const overlapPlayerVsItems = this.physics.add.overlap(player, items, this.pickItem, undefined, this);

		// overlapPlayerVsEnemies
		const overlapPlayerVsEnemies = this.physics.add.overlap(player, enemies, undefined, this.checkAgainstEnemies, this);

		// characterMoveScript_1 (prefab fields)
		characterMoveScript_1.deltaX = 0;
		characterMoveScript_1.deltaY = 50;
		characterMoveScript_1.duration = 1000;

		// characterMoveScript (prefab fields)
		characterMoveScript.deltaX = 0;
		characterMoveScript.deltaY = 50;
		characterMoveScript.duration = 1000;

		this.layer = layer;
		this.player = player;
		this.controllerLeft = controllerLeft;
		this.left_button = left_button;
		this.controllerRight = controllerRight;
		this.right_button = right_button;
		this.controllerJump = controllerJump;
		this.jump_button = jump_button;
		this.wall = wall;
		this.spaceKey = spaceKey;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.downKey = downKey;
		this.oldPrisonexamplemapV1 = oldPrisonexamplemapV1;
		this.mKey = mKey;
		this.items = items;
		this.enemies = enemies;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	layer;
	/** @type {Player} */
	player;
	/** @type {ControllerButtonScript} */
	controllerLeft;
	/** @type {Phaser.GameObjects.Image} */
	left_button;
	/** @type {ControllerButtonScript} */
	controllerRight;
	/** @type {Phaser.GameObjects.Image} */
	right_button;
	/** @type {ControllerButtonScript} */
	controllerJump;
	/** @type {Phaser.GameObjects.Image} */
	jump_button;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	wall;
	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Phaser.Tilemaps.Tilemap} */
	oldPrisonexamplemapV1;
	/** @type {Phaser.Input.Keyboard.Key} */
	mKey;
	/** @type {Array<Cherry|Gem>} */
	items;
	/** @type {Array<Frog|Opossum|Eagle|Skeleton>} */
	enemies;

	/* START-USER-CODE */

	create() {

		this.editorCreate();

		this.initColliders();

		this.initCamera();
	}

	initCamera() {

		const cam = this.cameras.main;
		cam.setBounds(0, 0, this.layer.width, this.layer.height);
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
		if (this.player.hurtFlag) {
			return;
		}

		const body = this.player.getBody();

		const leftDown = this.leftKey.isDown || this.controllerLeft.isDown;
		const rightDown = this.rightKey.isDown || this.controllerRight.isDown;
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


	initColliders() {

	}

	/**
	 * @param {Player} player
	 * @param {Phaser.GameObjects.Sprite} enemy
	 */
	checkAgainstEnemies(player, enemy) {

		if ((player.y + player.body.height * 0.5 < enemy.y) && player.body.velocity.y > 0) {

			this.add.existing(new EnemyDeath(this, enemy.x, enemy.y));

			enemy.destroy();

			player.body.velocity.y = -200;

		} else {

			this.player.hurtPlayer();
		}
	}	

	/**
	 * @param {Player} player
	 * @param {Phaser.GameObjects.Sprite} item
	 */
	pickItem(player, item) {

		this.add.existing(new FeedbackItem(this, item.x, item.y));

		item.destroy();
	}

	/**
	 * @param {number[]} tiles
	 */
	setTopCollisionTiles(tiles) {

		const tileSet = new Set(tiles);

		for (let x = 0; x < this.map.width; x++) {

			for (let y = 0; y < this.map.height; y++) {

				const tile = this.layer.getTileAt(x, y);

				if (tile && tileSet.has(tile.index)) {

					tile.setCollision(false, false, true, false);
				}
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
