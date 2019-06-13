
module Utils {

    export function setEntityEnabled(world: ut.World, entity: ut.Entity, enabled: boolean) {
        let hasDisabledComponent = world.hasComponent(entity, ut.Disabled);
        if (enabled && hasDisabledComponent)
            world.removeComponent(entity, ut.Disabled);
        else if (!enabled && !hasDisabledComponent)
            world.addComponent(entity, ut.Disabled)

    }
}
