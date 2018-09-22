var game = new Phaser.Game(1024, 640, Phaser.AUTO, 'gameDiv');

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('motus',motusState);

game.state.start('boot');