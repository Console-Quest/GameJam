
// You can write more code here

/* START OF COMPILED CODE */

class LobbyRoom extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -1.4210854715202004e-14, y ?? 51);

		// rectangle
		const rectangle = scene.add.rectangle(39, -5.213664497703329, 128, 128);
		rectangle.scaleX = 1.2723676012847889;
		rectangle.scaleY = 0.09;
		rectangle.isFilled = true;
		rectangle.fillAlpha = 0.3;
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 2;
		this.add(rectangle);

		// displayedRoomName
		const displayedRoomName = scene.add.text(-38, -10.94658387557417, "", {});
		displayedRoomName.scaleX = 0.4985147285105078;
		displayedRoomName.scaleY = 0.4985147285105078;
		displayedRoomName.text = "New text";
		displayedRoomName.setStyle({ "fontSize": "24px" });
		this.add(displayedRoomName);

		// displayedCurrentPlayer
		const displayedCurrentPlayer = scene.add.text(96, -11, "", {});
		displayedCurrentPlayer.scaleX = 0.4985147285105078;
		displayedCurrentPlayer.scaleY = 0.4985147285105078;
		displayedCurrentPlayer.text = "0";
		displayedCurrentPlayer.setStyle({ "fontSize": "24px" });
		this.add(displayedCurrentPlayer);

		// displayedMaxPlayer
		const displayedMaxPlayer = scene.add.text(109, -11, "", {});
		displayedMaxPlayer.scaleX = 0.4985147285105078;
		displayedMaxPlayer.scaleY = 0.4985147285105078;
		displayedMaxPlayer.text = "0";
		displayedMaxPlayer.setStyle({ "fontSize": "24px" });
		this.add(displayedMaxPlayer);

		// slash
		const slash = scene.add.text(103, -11, "", {});
		slash.scaleX = 0.4985147285105078;
		slash.scaleY = 0.4985147285105078;
		slash.text = "/";
		slash.setStyle({ "fontSize": "24px" });
		this.add(slash);

		this.displayedRoomName = displayedRoomName;
		this.displayedCurrentPlayer = displayedCurrentPlayer;
		this.displayedMaxPlayer = displayedMaxPlayer;
		this.slash = slash;

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	displayedRoomName;
	/** @type {Phaser.GameObjects.Text} */
	displayedCurrentPlayer;
	/** @type {Phaser.GameObjects.Text} */
	displayedMaxPlayer;
	/** @type {Phaser.GameObjects.Text} */
	slash;
	/** @type {string} */
	roomName = "";
	/** @type {number} */
	maxPlayers = 4;
	/** @type {number} */
	currentPlayers = 0;

	/* START-USER-CODE */

	// Write your code here.
	setRoomName(name) {
		this.roomName = name;
		this.displayedRoomName.text = name;
}
setRoomPlayers(current, max) {
	this.currentPlayers = current;
	this.maxPlayers = max;
	this.displayedRoomName.text = this.roomName + " (" + this.currentPlayers + "/" + this.maxPlayers + ")";
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
