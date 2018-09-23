var version;
var cptword;
var cptlett;
var words;
var wordsdisp;
var solution;

var motusState = {
	
	create: function () {
		
		version = game.add.text(1000, 620, '', {font: "10px Arial", fill: "#ffffff"});
		version.text = "v0.01";
		
		//Disp Background
		game.add.image(0, 0, 'sky');
		
		//Disp Grid
		game.add.image(239, 132, 'grid');
		
		//Button Give up
		game.add.button(game.world.width-193-8, 8, 'button', this.giveup, this, 2, 1, 0);
		
		//Button Fullscreen
		var button = game.add.button(game.world.width-32-8, game.world.height-32-8, 'buttonfull', gofull, this, 1, 0);
		button.scale.setTo(0.5,0.5);

		//Disp Words
		wordsdisp = new Array(6);
		for (var i=0;i<6;i++){
			wordsdisp[i] = new Array(8);
			for (var j=0;j<8;j++){
				(wordsdisp[i])[j] = game.add.text(239+14+68*j, 132+11+63*i, '', {font: "40px Arial", fill: "#ffffff"});
				(wordsdisp[i])[j].text = "/";
			}
		}

	},
	
	dispMots: function () {
		
	},
	
	dispSolution: function () {
		
	},
	
	update: function () {

	},
	
	giveup: function () {
		dispSolution();
		init();
	}


};