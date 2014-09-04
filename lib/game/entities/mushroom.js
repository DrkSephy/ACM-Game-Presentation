ig.module(
    'game.entities.mushroom'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityMushroom = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/mushroom.png', 16, 16),
        size: {x: 16, y: 16},
        speed: 100, 

        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
        },

        update: function(){
            var xdir = this.flip ? -1 : 1;
            this.vel.x = this.speed * xdir;
            this.parent();
        },

        handleMovementTrace: function(res){
            this.parent(res);
            if(res.collision.x){
                this.flip = !this.flip;
                this.anims.idle.flip.x = this.flip;
            }
        },

    });
});