
namespace game {
@ut.executeAfter(ut.Shared.UserCodeEnd)
    /** New System */
    export class ScaleSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.FlipScale, game.Movement, ut.Core2D.TransformLocalScale],
                (scaleTag, movement, scale) => {
                    scale.scale = new Vector3(movement.Direction.x == 0 ? scale.scale.x : movement.Direction.x, 1, 1);

                });
        }
    }
}
