
namespace game {
    @ut.executeAfter(ut.Shared.UserCodeEnd)
    /** New System */
    export class AnimationSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Animations, game.Movement], (animations, movement) => {
                if(movement.Direction.x == 0){
                    Utils.setEntityEnabled(this.world,animations.Run,false);
                    Utils.setEntityEnabled(this.world,animations.Idle,true);
                } else {
                    Utils.setEntityEnabled(this.world,animations.Run,true);
                    Utils.setEntityEnabled(this.world,animations.Idle,false);
                }
             });
        }
    }
}
