
namespace game {

    /** New System */
    export class EatingSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let didEat = false;
            //Search through the world for entites with collisons (specifically the Food entity)
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, ut.HitBox2D.HitBoxOverlapResults, game.FoodTag], 
                (entity, position, hitResult, tag) => {
                    //Inside this loop we will enter only we have had contacts with the player entity and others
                    didEat = true;
                    //In this case we need to destroy the entity we found
                    this.world.destroyEntity(entity);
            });

            //Set the food entity in the FoodSpawnSystem as null so to generate next Food Entity
            if(didEat){
                game.FoodSpawnSystem.food = null;
            }
        }
    }
}
