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

        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
        },
    });
});