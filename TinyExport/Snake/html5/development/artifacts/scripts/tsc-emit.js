var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    /** New System */
    var FoodSpawnSystem = /** @class */ (function (_super) {
        __extends(FoodSpawnSystem, _super);
        function FoodSpawnSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FoodSpawnSystem.prototype.OnUpdate = function () {
        };
        return FoodSpawnSystem;
    }(ut.ComponentSystem));
    game.FoodSpawnSystem = FoodSpawnSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var InputMovementSystem = /** @class */ (function (_super) {
        __extends(InputMovementSystem, _super);
        function InputMovementSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputMovementSystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            //Change direction on input 
            this.world.forEach([ut.Entity, game.Boundary, game.MoveSpeed, game.MoveWithInput, ut.Core2D.TransformLocalPosition], function (entity, bounds, speed, tag, position) {
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
                this.world.forEach([ut.Entity, game.Boundary, game.MoveSpeed, game.MoveWithInput, ut.Core2D.TransformLocalPosition], function (entity, bounds, speed, tag, position) {
                    //Make a reference to local position
                    var localPos = position.position;
                    //Store this as last position
                    var lastPos = new Vector3().copy(localPos);
                    //Add direction magnitude to the local position
                    localPos.add(game.InputMovementSystem.direction);
                    //Set bounds on X and Y axis
                    localPos.x = Math.max(bounds.minX, Math.min(bounds.maxX, localPos.x));
                    localPos.y = Math.max(bounds.minY, Math.min(bounds.maxY, localPos.y));
                    if (!localPos.equals(lastPos)) {
                        game.InputMovementSystem.lastPosition = lastPos;
                        position.position = localPos;
                    }
                });
            }
        };
        InputMovementSystem.counter = 0;
        InputMovementSystem.cooldown = 1;
        InputMovementSystem.direction = new Vector3(0, 0);
        return InputMovementSystem;
    }(ut.ComponentSystem));
    game.InputMovementSystem = InputMovementSystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map