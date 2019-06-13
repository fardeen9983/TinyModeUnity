
namespace game {
    @ut.executeBefore(ut.Shared.InputFence)
    /** New System */
    export class PlayerInputSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            //Find all entities with following components
            this.world.forEach([game.Movement, game.PlayerInput], (movement, input) => {
                //Move backwards when A pressed
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                    input.axis = new Vector2(-1, input.axis.y);
                }
                //Move forward
                else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                    input.axis = new Vector2(1, input.axis.y);
                }
                //No change
                else {
                    input.axis = new Vector2(0, input.axis.y);
                }
                //Change movement to direction to new input
                movement.Direction = input.axis;
                //Check if user tried to jump by using space
                movement.Jump = ut.Runtime.Input.getKey(ut.Core2D.KeyCode.Space);
            });
        }
    }
}
