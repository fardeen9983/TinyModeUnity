
namespace game {

    /** New System */
    export class TailSystem extends ut.ComponentSystem {

        static tails: Array<ut.Entity> = new Array<ut.Entity>();
        OnUpdate(): void {

        }

        static OnMove(world: ut.World): void {
            //Check if there is a tail and move then only
            if (this.tails.length == 0)
                return;
            //Fetch the last tail that was created
            var lastTail = this.tails.pop();
            //Move the last tail to the last position of the player
            world.usingComponentData(lastTail,[ut.Core2D.TransformLocalPosition],(position)=>{
                position.position = game.InputMovementSystem.lastPosition;
            });
            //Now add again a tail to start of the array
            this.tails.unshift(lastTail);
        }

        //Spawn a tail entity to the end of player once he hits a food entity
        static SpawnTail(world: ut.World): void {
            var tail = game.FoodSpawnSystem.Spawn(world,"game.TailGroup",game.InputMovementSystem.lastPosition);
            this.tails.push(new ut.Entity(tail.index,tail.version));
        }
    }


}
