ig.module( 
    'game.main' 
)
.requires(
    'impact.game',
    'impact.debug.debug',
    'game.levels.test',
    'game.entities.player',
    'game.entities.goomba'
)


.defines(function(){

MyGame = ig.Game.extend({
    
    // Load a font
    font: new ig.Font( 'media/04b03.font.png' ),
    
    gravity: 300,
    init: function() {
        // Initialize your game here; bind keys etc.

        //Create key bindings
        ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
        ig.input.bind( ig.KEY.X, 'jump');

        // Load our level. Syntax: Level(Level name)
        // Level name must be capitalized, otherwise it won't load!
        this.loadLevel( LevelTest );
    },
    
    update: function() {
        // Update all entities and backgroundMaps
        var player = this.getEntitiesByType( EntityPlayer )[0]; 
        if( player ) { 
            this.screen.x = player.pos.x - ig.system.width/2; 
            this.screen.y = player.pos.y - ig.system.height/2; 
        }
        this.parent();
        
        // Add your own, additional update code here
    },
    
    draw: function() {
        // Draw all entities and backgroundMaps
        this.parent();
        if(this.font){
            var player = ig.game.getEntitiesByType('EntityPlayer')[0];
            this.font.draw('Health: ' + player.health, 50, 10, ig.Font.ALIGN.CENTER);
        }
        
        
        
        
    }
});


/* The following code passes a reference to the Canvas, which is
a name for our game instance, and passes the frame rate and size
into the ig.main constructor. */

// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
