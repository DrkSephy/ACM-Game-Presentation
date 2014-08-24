ig.module(
    'game.entities.goomba'
)
.requires(
    'impact.entity',
    'game.entities.player'
)

.defines(function(){
    EntityGoomba = ig.Entity.extend({
        ig.Entity.TYPE.B, 
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.PASSIVE, 

        animSheet: new ig.AnimationSheet('media/enemies/goomba.png', 25, 26),
        size: {x: 22, y: 19},
        maxVel: {x: 500, y: 100},
        flip: false,
        friction: {x: 1, y: 0},
        speed: 10,
        
    });
});