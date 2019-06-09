
namespace game {

    /** New System */
    export class InputMovementSystem extends ut.ComponentSystem {
        static counter: number = 0;
        static cooldown: number = 1;
        static direction: Vector3 = new Vector3(0, 0);
        static lastPosition: Vector3;

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();
            let moved = false;
            //Change direction on input 
            this.world.forEach([ut.Entity, game.Boundary, game.MoveSpeed, game.MoveWithInput, ut.Core2D.TransformLocalPosition],
                (entity, bounds, speed, tag, position) => {
                    if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W)) {
                        game.InputMovementSystem.direction = new Vector3(0, speed.speed);
                    }
                    if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S)) {
                        game.InputMovementSystem.direction = new Vector3(0, -1 * speed.speed);
                    }
                    if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                        game.InputMovementSystem.direction = new Vector3(-1 * speed.speed, 0);
                    }
                    if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                        game.InputMovementSystem.direction = new Vector3(speed.speed, 0);
                    }
                });

            game.InputMovementSystem.counter += dt;


            //Keep smooth motion 
            if (game.InputMovementSystem.counter > game.InputMovementSystem.cooldown) {
                game.InputMovementSystem.counter = 0;
                this.world.forEach([ut.Entity, game.Boundary, game.MoveSpeed, game.MoveWithInput, ut.Core2D.TransformLocalPosition],
                    (entity, bounds, speed, tag, position) => {
                        //Make a reference to local position
                        var localPos: Vector3 = position.position;
                        //Store this as last position
                        var lastPos: Vector3 = new Vector3().copy(localPos);

                        //Add direction magnitude to the local position
                        localPos.add(game.InputMovementSystem.direction);

                        //Set bounds on X and Y axis
                        localPos.x = Math.max(bounds.minX, Math.min(bounds.maxX, localPos.x));
                        localPos.y = Math.max(bounds.minY, Math.min(bounds.maxY, localPos.y));

                        if (!localPos.equals(lastPos)) {
                            game.InputMovementSystem.lastPosition = lastPos;
                            position.position = localPos;
                            moved = true;

                        }
                    });
                    //Make the tail move 
                    if(moved)
                    game.TailSystem.OnMove(this.world);
            }
        }



    }
}
