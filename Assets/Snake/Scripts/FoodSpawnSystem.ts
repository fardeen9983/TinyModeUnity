
namespace game {

    /** New System */
    export class FoodSpawnSystem extends ut.ComponentSystem {
        static food: ut.Entity;
        OnUpdate(): void {
            //If food doesnt exist in the world spawn it
            if (!this.world.exists(game.FoodSpawnSystem.food)) {
                game.FoodSpawnSystem.food = this.Spawn(this.world, "game.FoodGroup",
                    new Vector3(this.GetRandom(-8, 8), this.GetRandom(-4, 4)),0);
            }
        }

        Spawn(world: ut.World, entityGroup: string, position = null, entityIndex = 0): ut.Entity {
            //Instatntiate the Food Entity Group
            let Entity = ut.EntityGroup.instantiate(world, entityGroup)[entityIndex];
            //If the passed position is defined we will set the local transform component of the entity spawned to that position
            if (position != null) {
                world.usingComponentData(Entity, [ut.Core2D.TransformLocalPosition], (transform) => {
                    transform.position = position;
                });
            }
            return Entity;
        }

        GetRandom(min: number, max: number): number {
            return Math.random() * (max - min + 1) + min;
        }
    }
}
