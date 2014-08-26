ig.module(
    'game.entities.player'
    )
.requires(
    'impact.entity'
    )
.defines(function(){
    EntityPlayer = ig.Entity.extend({

        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.ACTIVE,

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
            this.addAnim('fall', 0.4, [2]);
        },

        update: function() {
            // Add left/right/jump movement logic
            var accel = this.standing ? this.accelGround : this.accelAir;
            if(ig.input.state('left')) {
                this.accel.x = -accel;
                this.flip = false;
            } else if(ig.input.state('right')) {
                this.accel.x = accel;
                this.flip = true;
            } else
            this.accel.x = 0;

            if(this.standing && ig.input.state('jump')) {
                if(this.vel.y == 0) {
                    this.vel.y = -this.jump;
                    this.falling = false;
                }
            }
            // CASE 2: Player not standing, jump has been released and we're not falling
            // we reduce the y velocity by 66% and mark us as falling
            else if(!this.standing && !ig.input.state('jump') && !this.falling) {
                this.vel.y = Math.floor(this.vel.y/3);
                this.falling = true;
            }

            // Add moving logic
            this.currentAnim.flip.x = this.flip;

            this.parent();


            if(this.vel.y < 0 && !this.standing)
                this.currentAnim = this.anims.jump;
            else if(this.vel.y > 0 && !this.standing)
                this.currentAnim = this.anims.fall;
            else if(this.vel.x != 0)
                this.currentAnim = this.anims.run;
            else
                this.currentAnim = this.anims.idle;
        }, 

    });
});