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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    var MovementSystem = /** @class */ (function (_super) {
        __extends(MovementSystem, _super);
        /** New System */
        function MovementSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovementSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Movement, ut.Physics2D.Velocity2D, ut.Core2D.TransformLocalScale], function (entity, movement, velocity, scale) {
                var setVelocity = new ut.Physics2D.SetVelocity2D;
                if (movement.Direction.x == -1) {
                    setVelocity.velocity = new Vector2(-movement.Speed, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                else if (movement.Direction.x == 1) {
                    setVelocity.velocity = new Vector2(movement.Speed, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                else {
                    setVelocity.velocity = new Vector2(0, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                if (movement.Jump) {
                    var impulse = new ut.Physics2D.AddImpulse2D;
                    impulse.impulse = new Vector2(movement.Direction.x, movement.JumpForce);
                    _this.world.addComponentData(entity, impulse);
                }
            });
        };
        MovementSystem = __decorate([
            ut.executeAfter(ut.Shared.InputFence),
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
            /** New System */
        ], MovementSystem);
        return MovementSystem;
    }(ut.ComponentSystem));
    game.MovementSystem = MovementSystem;
})(game || (game = {}));
var game;
(function (game) {
    var PlayerInputSystem = /** @class */ (function (_super) {
        __extends(PlayerInputSystem, _super);
        /** New System */
        function PlayerInputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerInputSystem.prototype.OnUpdate = function () {
            //Find all entities with following components
            this.world.forEach([game.Movement, game.PlayerInput], function (movement, input) {
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
        };
        PlayerInputSystem = __decorate([
            ut.executeBefore(ut.Shared.InputFence)
            /** New System */
        ], PlayerInputSystem);
        return PlayerInputSystem;
    }(ut.ComponentSystem));
    game.PlayerInputSystem = PlayerInputSystem;
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