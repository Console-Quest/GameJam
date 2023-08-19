
// You can write more code here
// import * as Colyseus from './../../node_modules/colyseus.js/dist/colyseus.js';
// import { HathoraClient } from './../../node_modules/@hathora/client-sdk/dist/hathora-client-sdk.js';
/* START OF COMPILED CODE */

class Preloader extends Phaser.Scene {
	
	constructor() {
		super("Preloader");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.Colyseus = window.Colyseus;
	 	// this.HathoraClient = window.HathoraClient;
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// loading
		const loading = this.add.image(144, 96, "loading");

		// startTitleAction
		const startTitleAction = new StartSceneActionScript(this);

		// startTitleAction (prefab fields)
		startTitleAction.sceneKey = "TitleScreen";

		this.loading = loading;
		this.startTitleAction = startTitleAction;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	loading;
	/** @type {StartSceneActionScript} */
	startTitleAction;

	/* START-USER-CODE */

	preload() {		

		this.editorCreate();

		this.loading.scaleX = 0;

		this.load.on(Phaser.Loader.Events.PROGRESS, p => {

			this.loading.scaleX = p;
		});		

		this.editorPreload();
	}

	create() {
		// const connectToColyseusSocket = (serverUrl = 'http://localhost:2567') => {
		// 	const colyseusClient = new Colyseus.Client(serverUrl);
		// 	let connectedRoom = undefined;
			
		// 	colyseusClient
		// 		.joinOrCreate('my_room', {playername: 'thedude'})
		// 		.then(room => {
		// 			console.log(room.sessionId, 'joined', room.name)
		// 			connectedRoom = room;
		// 			connectedRoom.send('type', {
		// 				name: 'thedude',
		// 				position: {
		// 					x: 0.5,
		// 					y: 2.5,
		// 				},
		// 				health: 50,
		// 				gold: 100
		// 			})
		// 		})
		// 		.then(() => {
		// 			connectedRoom.onMessage('response', (message) => {
		// 				console.log('CLIENT RECEIVED RESPONSE FROM SERVER: ');
		// 				console.log(message)
		// 			})
		// 		})
		// 		.catch(err => {
		// 			console.log('Error joining or creating room', err);
		// 		})
		// }
		
		// const connectToHathora = async() => {
		
		// 	const hClient = new HathoraClient('app-79608ab3-d8df-4210-bf26-817a750aa728');
		
		// 	const token = await hClient.loginAnonymous();
		// 	const newPublicRoomId = await hClient.createPublicLobby(token, {region: 'Seattle'});
			
		// 	// const newPrivateRoomId = await hClient.createPrivateLobby(token, {region: 'Seattle'});
		// 	// const existingPublicRoomIds = await hClient.getPublicLobbies(token, 'Seattle');
		
		// 	// console.log('PUBLIC ROOM ID: ', newPublicRoomId)
		
		// 	const connection = await hClient.newConnection(newPublicRoomId);
		
		// 	// connection.onClose(() => {
		// 	//   console.log('Connection closed to hathora server')
		// 	// })
		
		// 	connection.connect(token);
		
		// 	return connection
		
		// }
		
		// const useHathoraServerConnection = async () => {
		// 	try{
		// 		const connection = await connectToHathora();
		
		// 		console.log('CONNECTION INFO: ', connection.socket._url)
		
		// 		connectToColyseusSocket(connection.socket._url)
		
		// 	}
		// 	catch(e){
		// 		console.log('HATHORA CONNECT ERROR: \n', e)
		// 	}
		
		// 	// connection.writeJson({
		// 	//   type: 'test message',
		// 	//   value: 'Hello Hathora Server!'
		// 	// })
		
		
		// 	// connection.onMessageJson(() => {
		
		// 	// });
		
		// }
		
		// useHathoraServerConnection();
			
		this.startTitleAction.execute();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
