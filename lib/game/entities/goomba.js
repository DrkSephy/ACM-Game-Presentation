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

        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('crawl', 0.20, [0, 1]);
            this.offset.x = 1;
        },

        update: function(){
            var xdir = this.flip ? -1: 1;
            this.vel.x = this.speed * xdir;
            this.parent();
        },

        handleMovementTrace: function(res){
            this.parent(res);
            if(res.collision.x){
                console.log(this.flip);
                this.flip = !this.flip;
                this.anims.crawl.flip.x = !this.flip;
            }
        },

        collideWith: function(other){
            if(other instanceof EntityPlayer){
                other.receiveDamage(1, this);
            }
        },

        check: function(other){
            other.receiveDamage(1, this);
        },

        kill: function(){
            this.parent();
        }
    });
});