var previewnb;
var previewnbdisp;
var preview;
var previewimg;
var bigPreview;
var deck1nb;
var deck1nbdiff;
var deck1nbdisp;
var deck1;
var deck1img;
var deck2;
var myCollectionRemain;

var motusState = {
	
	create: function () {
		
		//Disp Background
		game.add.image(0, 0, 'sky');
		
		//Button Fight
		game.add.button(game.world.width-193-8, 8, 'button', this.giveup, this, 2, 1, 0);
		
		//Button Fullscreen
		var button = game.add.button(game.world.width-32-8, game.world.height-32-8, 'buttonfull', gofull, this, 1, 0);
		button.scale.setTo(0.5,0.5);
	},
	
	update: function () {

	},
	
	giveup: function () {

	}


};