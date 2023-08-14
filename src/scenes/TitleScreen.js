
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
		rectangle_2.visible = false;

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

		element.addListener('click');

        element.on('click', function (event)
        {

            if (event.target.name === 'playButton')
            {
                const inputText = this.getChildByName('nameField');

                //  Have they entered anything?
                if (inputText.value !== '')
                {
                    //  Turn off the click events
                    this.removeListener('click');

                    //  Hide the login element
                    this.setVisible(false);

                    //  Populate the text with whatever they typed in
                    text.setText(`Welcome ${inputText.value}`);
                }
                else
                {
                    //  Flash the prompt
                    this.scene.tweens.add({
                        targets: text,
                        alpha: 0.2,
                        duration: 250,
                        ease: 'Power3',
                        yoyo: true
                    });
                }
            }

        });
     
        this.tweens.add({
            targets: element,
            y: 300,
            duration: 3000,
            ease: 'Power3'
        });

		this.input.keyboard.on("keydown-ENTER", this.enterPressed, this);
		this.input.on("pointerdown", this.enterPressed, this);

		this.blinkText();
	}

	enterPressed() {

		this.startLevelAction.execute();

	}

	blinkText() {

		this.time.addEvent({
			repeat: -1,
			delay: 1000,
			callback: () => {
				this.press_enter_text.visible = !this.press_enter_text.visible;
			}
		});
	}

	update() {


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
