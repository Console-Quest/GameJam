
// You can write more code here

/* START OF COMPILED CODE */

class TitleScreen extends Phaser.Scene {

	constructor() {
		super("TitleScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// image_1
		const image_1 = this.add.image(142.64988550778247, 73, "goodpudding_A_cover_art_for_an_online_video_game_that_is_a_co-o_b676c53a-dd52-43b7-964a-81cb7077177f");
		image_1.scaleX = 0.30640166559099435;
		image_1.scaleY = 0.30640166559099435;

		// text_1
		const text_1 = this.add.text(10.149885507782471, 2, "", {});
		text_1.text = "Boundless Breakout: \nPhaser's Portal";
		text_1.setStyle({ "align": "center", "fontSize": "24px", "fontStyle": "bold" });

		// rectangle_2
		const rectangle_2 = new LoginButton(this, 115.46115152137911, 108);
		this.add.existing(rectangle_2);
		rectangle_2.visible = true;

		// startLevelAction
		const startLevelAction = new StartSceneActionScript(this);

		// lists
		const login = [rectangle_2];

		// startLevelAction (prefab fields)
		startLevelAction.sceneKey = "Arena";

		this.startLevelAction = startLevelAction;
		this.login = login;

		this.events.emit("scene-awake");
	}

	/** @type {StartSceneActionScript} */
	startLevelAction;
	/** @type {LoginButton[]} */
	login;

	/* START-USER-CODE */

	create() {

		this.editorCreate();
		this.input.keyboard.on("keydown-ENTER", this.enterPressed, this);
		this.input.on("pointerdown", this.enterPressed, this);

	}

	enterPressed() {

		this.startLevelAction.execute();

	}



	update() {


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
