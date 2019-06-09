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
    var EatingSystem = /** @class */ (function (_super) {
        __extends(EatingSystem, _super);
        function EatingSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EatingSystem.prototype.OnUpdate = function () {
            var _this = this;
            var didEat = false;
            //Search through the world for entites with collisons (specifically the Food entity)
            this.world.forEach([ut.Entity, ut.Core2D.TransformLocalPosition, ut.HitBox2D.HitBoxOverlapResults, game.FoodTag], function (entity, position, hitResult, tag) {
                //Inside this loop we will enter only we have had contacts with the player entity and others
                didEat = true;
                //In this case we need to destroy the entity we found
                _this.world.destroyEntity(entity);
            });
            //Set the food entity in the FoodSpawnSystem as null so to generate next Food Entity
            if (didEat) {
                game.FoodSpawnSystem.food = null;
            }
        };
        return EatingSystem;
    }(ut.ComponentSystem));
    game.EatingSystem = EatingSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var FoodSpawnSystem = /** @class */ (function (_super) {
        __extends(FoodSpawnSystem, _super);
        function FoodSpawnSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FoodSpawnSystem.prototype.OnUpdate = function () {
            //If food doesnt exist in the world spawn it
            if (!this.world.exists(game.FoodSpawnSystem.food)) {
                game.FoodSpawnSystem.food = game.FoodSpawnSystem.Spawn(this.world, "game.FoodGroup", new Vector3(game.FoodSpawnSystem.GetRandom(-8, 8), game.FoodSpawnSystem.GetRandom(-4, 4)), 0);
            }
        };
        FoodSpawnSystem.Spawn = function (world, entityGroup, position, entityIndex) {
            if (position === void 0) { position = null; }
            if (entityIndex === void 0) { entityIndex = 0; }
            //Instatntiate the Food Entity Group
            var Entity = ut.EntityGroup.instantiate(world, entityGroup)[entityIndex];
            //If the passed position is defined we will set the local transform component of the entity spawned to that position
            if (position != null) {
                world.usingComponentData(Entity, [ut.Core2D.TransformLocalPosition], function (transform) {
                    transform.position = position;
                });
            }
            return Entity;
        };
        FoodSpawnSystem.GetRandom = function (min, max) {
            return Math.random() * (max - min + 1) + min;
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
            var moved = false;
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
                        moved = true;
                    }
                });
                //Make the tail move 
                if (moved)
                    game.TailSystem.OnMove(this.world);
            }
        };
        InputMovementSystem.counter = 0;
        InputMovementSystem.cooldown = 1;
        InputMovementSystem.direction = new Vector3(0, 0);
        return InputMovementSystem;
    }(ut.ComponentSystem));
    game.InputMovementSystem = InputMovementSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var TailSystem = /** @class */ (function (_super) {
        __extends(TailSystem, _super);
        function TailSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TailSystem.prototype.OnUpdate = function () {
        };
        TailSystem.OnMove = function (world) {
            //Check if there is a tail and move then only
            if (this.tails.length == 0)
                return;
            //Fetch the last tail that was created
            var lastTail = this.tails.pop();
            //Move the last tail to the last position of the player
            world.usingComponentData(lastTail, [ut.Core2D.TransformLocalPosition], function (position) {
                position.position = game.InputMovementSystem.lastPosition;
            });
            //Now add again a tail to start of the array
            this.tails.unshift(lastTail);
        };
        //Spawn a tail entity to the end of player once he hits a food entity
        TailSystem.SpawnTail = function (world) {
            var tail = game.FoodSpawnSystem.Spawn(world, "game.TailGroup", game.InputMovementSystem.lastPosition);
            this.tails.push(new ut.Entity(tail.index, tail.version));
        };
        TailSystem.tails = new Array();
        return TailSystem;
    }(ut.ComponentSystem));
    game.TailSystem = TailSystem;
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