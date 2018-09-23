var loadState = {
	
	preload: function () {
		game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		
		var loadingLabel = game.add.text(100,200,'Loading the Momo...',{font: '30px Courier', fill:'#ffffff'});
		
		game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71, 3);
		game.load.spritesheet('buttonfull', 'assets/buttons/fullscreen-button64.png', 64, 64, 2);
		game.load.spritesheet('buttonauto', 'assets/buttons/button_auto.png', 150, 50, 2);
		game.load.spritesheet('buttonup', 'assets/buttons/buttonUp.png', 32, 32, 2);
		game.load.spritesheet('buttondown', 'assets/buttons/buttonDown.png', 32, 32, 2);
			
		game.load.image('sky', 'assets/motus/sky.jpg');
		game.load.image('grid', 'assets/motus/grid_temp.png');
	},
	
	create: function () {
		game.state.start('motus');
	}

};