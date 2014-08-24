ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityPlayer = ig.Entity.extend({

        animSheet: new ig.AnimationSheet('media/player.png', 16, 28),
        size: {x: 16, y: 28},
        offset: {x: 1, y: 0},
        flip: true,
        maxVel: {x: 100, y: 160},
        friction: {x: 500, y: 0},
        accelGround: 200,
        accelAir: 310,
        jump: 360,
        gravity: 300, 
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [1]);
            this.addAnim('run', 0.10, [1, 0]);
            this.addAnim('jump', 1, [2]);
        },
    });
});