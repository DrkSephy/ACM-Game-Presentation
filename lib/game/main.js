ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.debug.debug',
    'game.levels.basic'
)

.defines(function(){
    MyGame = ig.Game.extend({
        gravity: 300,
        init: function(){
            ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
            ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
            ig.input.bind(ig.KEY.X, 'jump');
            this.loadLevel(LevelBasic);
        }
        
    });

    ig.main('#canvas', MyGame, 60, 320, 240, 2);
});