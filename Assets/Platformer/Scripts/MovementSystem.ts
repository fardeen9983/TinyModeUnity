
namespace game {
    @ut.executeAfter(ut.Shared.InputFence)
    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    export class MovementSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([ut.Entity, game.Movement, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalScale],
                (entity, movement, velocity, scale) => {
                    let setVelocity = new ut.Physics2D.SetVelocity2D;
                    if (movement.Direction.x == -1) {
                        setVelocity.velocity = new Vector2(-movement.Speed, velocity.velocity.y);
                        this.world.addComponentData(entity, setVelocity);
                    } else if (movement.Direction.x == 1) {
                        setVelocity.velocity = new Vector2(movement.Speed, velocity.velocity.y);
                        this.world.addComponentData(entity, setVelocity);
                    } else {
                        setVelocity.velocity = new Vector2(0, velocity.velocity.y);
                        this.world.addComponentData(entity, setVelocity);
                    }
                    if (movement.Jump) {
                        let impulse = new ut.Physics2D.AddImpulse2D;
                        impulse.impulse = new Vector2(movement.Direction.x, movement.JumpForce);
                        this.world.addComponentData(entity, impulse);
                    }
                });
        }
    }
}
