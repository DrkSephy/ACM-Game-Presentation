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
        init: function(){
            this.loadLevel(LevelBasic);
        }
        
    });

    ig.main('#canvas', MyGame, 60, 320, 240, 2);
});