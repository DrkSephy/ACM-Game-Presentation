ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'game.levels.test'
)

.defines(function(){
    MyGame = ig.Game.extend({
        font: new ig.Font('media/04b03.font.png'),
        
        init: function(){
            ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
            ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
            ig.input.bind(ig.KEY.X, 'jump');

            this.loadLevel(LevelTest);
        },

        update: function(){
            var player = this.getEntitiesByType(EntityPlayer)[0];
            if(player){
                this.screen.x = player.pos.x - ig.system.width/2;
                this.screen.y = player.pos.y - ig.system.height/2;
            }
            this.parent();
        },

        draw: function(){
            this.parent();
        }
    });

    ig.main('#canvas', MyGame, 60, 320, 240, 2);    
});