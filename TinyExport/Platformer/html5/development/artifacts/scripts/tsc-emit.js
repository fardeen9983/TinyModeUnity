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
    /** New System */
    var AiInputSystem = /** @class */ (function (_super) {
        __extends(AiInputSystem, _super);
        function AiInputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AiInputSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Input, game.Movement, game.Ai, ut.Core2D.TransformLocalPosition], function (entity, input, movement, aiTag, transform) {
                AiInputSystem.OnStateUpdate(_this.world, aiTag, entity, transform);
            });
        };
        AiInputSystem.ChangeState = function (world, entity, aiTag, state) {
            if (aiTag.State == state)
                return;
            this.OnStateLeave(world, entity, state);
            aiTag.Previous = aiTag.State;
            aiTag.State = state;
            this.OnStateEnter(world, entity, state);
        };
        AiInputSystem.OnStateLeave = function (world, entity, state) {
            switch (state) {
                case game.AiState.Patrolling:
                    if (world.hasComponent(entity, game.Patrol))
                        world.removeComponent(entity, game.Patrol);
                    break;
            }
        };
        AiInputSystem.OnStateEnter = function (world, entity, state) {
            switch (state) {
                case game.AiState.Patrolling:
                    var patrol = new game.Patrol;
                    world.addComponentData(entity, patrol);
                    break;
            }
        };
        AiInputSystem.OnStateUpdate = function (world, aiTag, entity, transform) {
            this.ShouldAttack(world, entity, transform, aiTag);
            this.ShouldPatrol(world, entity, transform, aiTag);
        };
        AiInputSystem.ShouldPatrol = function (world, entity, transform, aiTag) {
            if (aiTag.State == game.AiState.Attacking)
                return;
            if (game.GameService.CanWalkLeft(world, transform) || game.GameService.CanWalkRight(world, transform))
                this.ChangeState(world, entity, aiTag, game.AiState.Patrolling);
        };
        AiInputSystem.ShouldAttack = function (world, entity, transform, aiTag) {
            var _this = this;
            var stopAtk = true;
            world.forEach([game.Player, ut.Core2D.TransformLocalPosition], function (playerTag, playerTransform) {
                var transformScale = world.getComponentData(entity, ut.Core2D.TransformLocalScale);
                if (transform.position.distanceTo(playerTransform.position) < 2) {
                    if (game.GameService.IsFacingEntity(transform, playerTransform, transformScale)) {
                        game.InputService.Attack(world, entity);
                        _this.ChangeState(world, entity, aiTag, game.AiState.Attacking);
                        stopAtk = false;
                    }
                }
            });
            if (stopAtk && aiTag.State == game.AiState.Attacking) {
                this.ChangeState(world, entity, aiTag, game.AiState.Idle);
            }
        };
        return AiInputSystem;
    }(ut.ComponentSystem));
    game.AiInputSystem = AiInputSystem;
})(game || (game = {}));
var game;
(function (game) {
    var AnimationSystem = /** @class */ (function (_super) {
        __extends(AnimationSystem, _super);
        /** New System */
        function AnimationSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimationSystem_1 = AnimationSystem;
        AnimationSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Animations, game.Movement], function (entity, animations, movement) {
                if (_this.world.hasComponent(entity, game.Attack) || _this.world.hasComponent(entity, game.PlayOneShot) || _this.world.hasComponent(entity, game.Dying))
                    return;
                if (movement.OnGround) {
                    if (movement.Direction.x == 0) {
                        AnimationSystem_1.PlayAnimation(_this.world, animations, 1);
                    }
                    else {
                        AnimationSystem_1.PlayAnimation(_this.world, animations, 0);
                    }
                }
                else {
                    AnimationSystem_1.PlayAnimation(_this.world, animations, 2);
                    var sequencePlayer = _this.world.getComponentData(animations.Jump, ut.Core2D.Sprite2DSequencePlayer);
                    if (sequencePlayer.time >= 0.8) {
                        sequencePlayer.time = 0.6;
                        sequencePlayer.paused = false;
                        _this.world.setComponentData(animations.Jump, sequencePlayer);
                    }
                }
            });
            this.world.forEach([ut.Entity, game.PlayOneShot], function (entity, oneShot) {
                oneShot.TimePlayed += _this.scheduler.deltaTime();
                if (oneShot.TimePlayed >= oneShot.Length)
                    _this.world.removeComponent(entity, game.PlayOneShot);
            });
        };
        AnimationSystem.PlayOneShot = function (world, entity, length, state) {
            if (world.hasComponent(entity, game.PlayOneShot)) {
                var oneShot_1 = world.getComponentData(entity, game.PlayOneShot);
                oneShot_1.TimePlayed = 0;
                oneShot_1.Length = length;
                world.setComponentData(entity, oneShot_1);
                var anim_1 = world.getComponentData(entity, game.Animations);
                this.PlayAnimation(world, anim_1, state, true);
                world.setComponentData(entity, anim_1);
                return;
            }
            var oneShot = new game.PlayOneShot;
            oneShot.Length = length;
            world.addComponentData(entity, oneShot);
            var anim = world.getComponentData(entity, game.Animations);
            this.PlayAnimation(world, anim, state, true);
            world.setComponentData(entity, anim);
        };
        AnimationSystem.PlayAnimation = function (world, animations, state, override) {
            if (override === void 0) { override = false; }
            if ((override == false && animations.State == state) || animations.State == 7)
                return;
            animations.State = state;
            var animation = null;
            switch (state) {
                case 0:
                    animation = animations.Run;
                    break;
                case 1:
                    animation = animations.Idle;
                    break;
                case 2:
                    animation = animations.Jump;
                    break;
                case 3:
                    animation = animations.Attack01;
                    break;
                case 4:
                    animation = animations.Attack02;
                    break;
                case 5:
                    animation = animations.Attack03;
                    break;
                case 6:
                    animation = animations.Hurt;
                    break;
                case 7:
                    animation = animations.Dying;
                    break;
            }
            this.ResetAnimationTime(world, animation);
            game.GameService.setEntityEnabled(world, animations.Run, state == 0);
            game.GameService.setEntityEnabled(world, animations.Idle, state == 1);
            game.GameService.setEntityEnabled(world, animations.Jump, state == 2);
            game.GameService.setEntityEnabled(world, animations.Attack01, state == 3);
            game.GameService.setEntityEnabled(world, animations.Attack02, state == 4);
            game.GameService.setEntityEnabled(world, animations.Attack03, state == 5);
            game.GameService.setEntityEnabled(world, animations.Hurt, state == 6);
            game.GameService.setEntityEnabled(world, animations.Dying, state == 7);
        };
        AnimationSystem.ResetAnimationTime = function (world, animation) {
            var sequencePlayer = world.getComponentData(animation, ut.Core2D.Sprite2DSequencePlayer);
            sequencePlayer.time = 0;
            sequencePlayer.paused = false;
            world.setComponentData(animation, sequencePlayer);
        };
        AnimationSystem.DisableAnimations = function (world, animations) {
            game.GameService.setEntityEnabled(world, animations.Run, false);
            game.GameService.setEntityEnabled(world, animations.Idle, false);
            game.GameService.setEntityEnabled(world, animations.Jump, false);
            game.GameService.setEntityEnabled(world, animations.Attack01, false);
            game.GameService.setEntityEnabled(world, animations.Attack02, false);
            game.GameService.setEntityEnabled(world, animations.Attack03, false);
            game.GameService.setEntityEnabled(world, animations.Hurt, false);
            game.GameService.setEntityEnabled(world, animations.Dying, false);
        };
        var AnimationSystem_1;
        AnimationSystem = AnimationSystem_1 = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd)
            /** New System */
        ], AnimationSystem);
        return AnimationSystem;
    }(ut.ComponentSystem));
    game.AnimationSystem = AnimationSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var AttackSystem = /** @class */ (function (_super) {
        __extends(AttackSystem, _super);
        function AttackSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AttackSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Attack, game.Animations], function (entity, attack, animations) {
                if (attack.Timer == 0) {
                    attack.ComboStep = false;
                    game.AnimationSystem.PlayAnimation(_this.world, animations, 3);
                }
                else if (animations.State == 3 && attack.Timer >= 0.5) {
                    AttackSystem.IterateCombo(_this.world, entity, animations, attack, 4);
                }
                else if (animations.State == 4 && attack.Timer >= 1.2) {
                    AttackSystem.IterateCombo(_this.world, entity, animations, attack, 5);
                }
                else if (animations.State == 5 && attack.Timer >= 1.9) {
                    AttackSystem.IterateCombo(_this.world, entity, animations, attack, 3);
                }
                if (attack.Timer >= 0.2 && attack.Timer <= 0.5 && !attack.Hit) {
                    AttackSystem.ApplyHitImpulse(_this.world, entity, new Vector2(0, 5), 5);
                }
                else if (attack.Timer >= 0.8 && attack.Timer <= 1.0 && !attack.Hit) {
                    AttackSystem.ApplyHitImpulse(_this.world, entity, new Vector2(0, -7), 10);
                }
                else if (attack.Timer >= 1.3 && attack.Timer <= 1.8 && !attack.Hit) {
                    var scale = _this.world.getComponentData(entity, ut.Core2D.TransformLocalScale);
                    AttackSystem.ApplyHitImpulse(_this.world, entity, new Vector2((7 * scale.scale.x), 0), 15);
                }
                attack.Timer += _this.scheduler.deltaTime();
            });
        };
        AttackSystem.ApplyHitImpulse = function (world, entity, impulseForce, damage) {
            var atk = world.getComponentData(entity, game.Attack);
            world.forEach([ut.Entity, game.Destructible, ut.Core2D.TransformLocalPosition], [ut.Subtractive(game.Dying)], function (destructibleEnt, destTag, dtransform) {
                var transformScale = world.getComponentData(entity, ut.Core2D.TransformLocalScale);
                var transform = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
                if (transform.position.distanceTo(dtransform.position) < 2) {
                    if (game.GameService.IsFacingEntity(transform, dtransform, transformScale)) {
                        atk.Hit = true;
                        world.setComponentData(entity, atk);
                        if (!world.hasComponent(destructibleEnt, game.Attack))
                            game.AnimationSystem.PlayOneShot(world, destructibleEnt, 0.61, 6);
                        game.HealthSystem.AdjustHealth(world, destructibleEnt, damage);
                        var impulse = new ut.Physics2D.AddImpulse2D;
                        impulse.impulse = impulseForce;
                        if (!world.hasComponent(destructibleEnt, ut.Physics2D.AddImpulse2D))
                            world.addComponentData(destructibleEnt, impulse);
                        else
                            world.setComponentData(destructibleEnt, impulse);
                    }
                }
            });
        };
        AttackSystem.IterateCombo = function (world, entity, animations, attack, state) {
            if (attack.ComboStep) {
                if (animations.State == 5)
                    attack.Timer = 0;
                attack.Hit = false;
                attack.ComboStep = false;
                game.AnimationSystem.PlayAnimation(world, animations, state);
                console.log("iterating");
            }
            else {
                console.log("removing");
                world.removeComponent(entity, game.Attack);
            }
        };
        return AttackSystem;
    }(ut.ComponentSystem));
    game.AttackSystem = AttackSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var CollisionSystem = /** @class */ (function (_super) {
        __extends(CollisionSystem, _super);
        function CollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Movement, ut.Core2D.TransformLocalPosition], function (movement, position) {
                movement.OnGround = false;
                var _hitResult = ut.HitBox2D.HitBox2DService.hitTest(_this.world, position.position.sub(new Vector3(0, 0.05, 0)), game.GameService.GetCamera(_this.world));
                if (!_hitResult.entityHit.isNone()) {
                    movement.OnGround = true;
                    movement.Jumping = false;
                }
            });
        };
        return CollisionSystem;
    }(ut.ComponentSystem));
    game.CollisionSystem = CollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var DeathSystem = /** @class */ (function (_super) {
        __extends(DeathSystem, _super);
        function DeathSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DeathSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Dying], function (entity, dying) {
                if (dying.TimePlayed == 0) {
                    if (_this.world.hasComponent(entity, game.Animations)) {
                        game.AnimationSystem.PlayOneShot(_this.world, entity, 1, 7);
                    }
                }
                if (dying.TimePlayed >= dying.Length) {
                    ut.Core2D.TransformService.destroyTree(_this.world, entity, true);
                    //GameService.setEntityEnabled(this.world, entity, false);
                }
                dying.TimePlayed += _this.scheduler.deltaTime();
            });
        };
        return DeathSystem;
    }(ut.ComponentSystem));
    game.DeathSystem = DeathSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var GameManagerService = /** @class */ (function (_super) {
        __extends(GameManagerService, _super);
        function GameManagerService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameManagerService.prototype.OnUpdate = function () {
            var config = this.world.getConfigData(game.GameConfig);
            switch (config.State) {
                case game.GameState.Initialize:
                    console.log("Starting Init");
                    game.GameService.Initialize(this.world);
                    break;
                case game.GameState.Play:
                    if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.U)) {
                        var ent = ut.EntityGroup.instantiate(this.world, game.GameService.name_enemy)[0];
                        var trans = this.world.getComponentData(ent, ut.Core2D.TransformLocalPosition);
                        trans.position = new Vector3(game.GameService.getRandom(-14, 14), game.GameService.getRandom(-2, 5));
                        this.world.setComponentData(ent, trans);
                    }
                    break;
                case game.GameState.GameOver:
                    break;
            }
        };
        return GameManagerService;
    }(ut.ComponentSystem));
    game.GameManagerService = GameManagerService;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        GameService.Initialize = function (world) {
            ut.EntityGroup.instantiate(world, this.name_level);
            ut.EntityGroup.instantiate(world, this.name_player);
            ut.EntityGroup.instantiate(world, this.name_enemy);
            var gameConfig = world.getConfigData(game.GameConfig);
            gameConfig.State = game.GameState.Play;
            world.setConfigData(gameConfig);
        };
        GameService.CanWalkLeft = function (world, transform) {
            var _hitResultGround = ut.HitBox2D.HitBox2DService.hitTest(world, transform.position.add(new Vector3(-1, -0.5, 0)), this.GetCamera(world));
            var _hitResultWall = ut.HitBox2D.HitBox2DService.hitTest(world, transform.position.add(new Vector3(-1, 1, 0)), this.GetCamera(world));
            if (!_hitResultGround.entityHit.isNone() && _hitResultWall.entityHit.isNone())
                return true;
            else
                return false;
        };
        GameService.CanWalkRight = function (world, transform) {
            var _hitResultGround = ut.HitBox2D.HitBox2DService.hitTest(world, transform.position.add(new Vector3(1, -0.5, 0)), this.GetCamera(world));
            var _hitResultWall = ut.HitBox2D.HitBox2DService.hitTest(world, transform.position.add(new Vector3(1, 1, 0)), this.GetCamera(world));
            if (!_hitResultGround.entityHit.isNone() && _hitResultWall.entityHit.isNone())
                return true;
            else
                return false;
        };
        GameService.setEntityEnabled = function (world, entity, enabled) {
            var hasDisabledComponet = world.hasComponent(entity, ut.Disabled);
            if (enabled && hasDisabledComponet) {
                world.removeComponent(entity, ut.Disabled);
            }
            else if (!enabled && !hasDisabledComponet) {
                if (world.hasComponent(entity, game.Animations)) {
                    var anim = world.getComponentData(entity, game.Animations);
                    game.AnimationSystem.DisableAnimations(world, anim);
                }
                world.addComponent(entity, ut.Disabled);
            }
        };
        GameService.GetCamera = function (world) {
            if (this.Camera == null) {
                var cameraEntity_1;
                world.forEach([ut.Core2D.Camera2D, ut.Entity], function (camera, camEntity) {
                    cameraEntity_1 = new ut.Entity(camEntity.index, camEntity.version);
                });
                this.Camera = cameraEntity_1;
                return cameraEntity_1;
            }
            else {
                return this.Camera;
            }
        };
        GameService.IsFacingEntity = function (transform1, transform2, transform1Scale) {
            return transform1.position.x > transform2.position.x && transform1Scale.scale.x == -1 || transform1.position.x < transform2.position.x && transform1Scale.scale.x == 1;
        };
        GameService.getRandom = function (min, max) {
            return Math.random() * (max - min + 1) + min;
        };
        GameService.name_level = 'game.LevelGroup';
        GameService.name_player = 'game.PlayerGroup';
        GameService.name_enemy = 'game.EnemyGroup';
        return GameService;
    }());
    game.GameService = GameService;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var HealthSystem = /** @class */ (function (_super) {
        __extends(HealthSystem, _super);
        function HealthSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HealthSystem.prototype.OnUpdate = function () {
        };
        HealthSystem.AdjustHealth = function (world, entity, value) {
            if (world.hasComponent(entity, game.Health)) {
                var health = world.getComponentData(entity, game.Health);
                health.CurrentHp -= value;
                world.setComponentData(entity, health);
                console.log(entity, health);
                if (health.CurrentHp <= 0) {
                    this.Die(world, entity);
                }
            }
            else {
                this.Die(world, entity);
            }
        };
        HealthSystem.Die = function (world, entity) {
            if (!world.hasComponent(entity, game.Dying)) {
                var dying = new game.Dying;
                dying.Length = 1;
                world.addComponentData(entity, dying);
            }
        };
        return HealthSystem;
    }(ut.ComponentSystem));
    game.HealthSystem = HealthSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var InputService = /** @class */ (function () {
        function InputService() {
        }
        InputService.Move = function (input, movement, direction) {
            input.Axis = direction;
            movement.Direction = input.Axis;
        };
        InputService.Jump = function (movement) {
            movement.ShouldJump = true;
        };
        InputService.Attack = function (world, entity) {
            if (world.hasComponent(entity, game.Attack)) {
                var atk = world.getComponentData(entity, game.Attack);
                atk.ComboStep = true;
                world.setComponentData(entity, atk);
                return;
            }
            var attack = new game.Attack;
            world.addComponentData(entity, attack);
        };
        return InputService;
    }());
    game.InputService = InputService;
})(game || (game = {}));
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
                if (_this.world.hasComponent(entity, game.Attack) || _this.world.hasComponent(entity, game.Dying)) {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(0, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                    return;
                }
                if (movement.Direction.x == -1) {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(-movement.Speed, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                else if (movement.Direction.x == 1) {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(movement.Speed, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                else {
                    var setVelocity = new ut.Physics2D.SetVelocity2D;
                    setVelocity.velocity = new Vector2(0, velocity.velocity.y);
                    _this.world.addComponentData(entity, setVelocity);
                }
                if (movement.ShouldJump) {
                    if (movement.OnGround) {
                        var impulse = new ut.Physics2D.AddImpulse2D;
                        impulse.impulse = new Vector2(movement.Direction.x, movement.JumpForce);
                        if (!_this.world.hasComponent(entity, ut.Physics2D.AddImpulse2D))
                            _this.world.addComponentData(entity, impulse);
                        else
                            _this.world.setComponentData(entity, impulse);
                        movement.Jumping = true;
                    }
                    movement.ShouldJump = false;
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
    /** New System */
    var PatrolSystem = /** @class */ (function (_super) {
        __extends(PatrolSystem, _super);
        function PatrolSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PatrolSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, game.Input, game.Movement, game.Patrol, ut.Core2D.TransformLocalPosition, game.Ai], function (entity, input, movement, patrol, transform, Ai) {
                switch (patrol.Direction) {
                    case 0:
                        var scale = _this.world.getComponentData(entity, ut.Core2D.TransformLocalScale);
                        if (scale.scale.x == -1 && game.GameService.CanWalkLeft(_this.world, transform)) {
                            game.InputService.Move(input, movement, new Vector2(1, input.Axis.y));
                            patrol.Direction = -1;
                        }
                        else if (scale.scale.x == 1 && game.GameService.CanWalkRight(_this.world, transform)) {
                            game.InputService.Move(input, movement, new Vector2(1, input.Axis.y));
                            patrol.Direction = 1;
                        }
                        else if (game.GameService.CanWalkRight(_this.world, transform)) {
                            game.InputService.Move(input, movement, new Vector2(1, input.Axis.y));
                            patrol.Direction = 1;
                        }
                        else if (game.GameService.CanWalkLeft(_this.world, transform)) {
                            game.InputService.Move(input, movement, new Vector2(-1, input.Axis.y));
                            patrol.Direction = -1;
                        }
                        else {
                            game.InputService.Move(input, movement, new Vector2(0, input.Axis.y));
                            if (_this.world.hasComponent(entity, game.Patrol))
                                _this.world.removeComponent(entity, game.Patrol);
                            game.AiInputSystem.ChangeState(_this.world, entity, Ai, game.AiState.Idle);
                        }
                        break;
                    case 1:
                        if (game.GameService.CanWalkRight(_this.world, transform)) {
                            game.InputService.Move(input, movement, new Vector2(1, input.Axis.y));
                            patrol.Direction = 1;
                        }
                        else {
                            game.InputService.Move(input, movement, new Vector2(0, input.Axis.y));
                            patrol.Direction = 0;
                        }
                        break;
                    case -1:
                        if (game.GameService.CanWalkLeft(_this.world, transform)) {
                            game.InputService.Move(input, movement, new Vector2(-1, input.Axis.y));
                            patrol.Direction = -1;
                        }
                        else {
                            game.InputService.Move(input, movement, new Vector2(0, input.Axis.y));
                            patrol.Direction = 0;
                        }
                        break;
                }
            });
        };
        return PatrolSystem;
    }(ut.ComponentSystem));
    game.PatrolSystem = PatrolSystem;
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
            var _this = this;
            this.world.forEach([ut.Entity, game.Input, game.Movement, game.Player], function (entity, input, movement, playerTag) {
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                    game.InputService.Move(input, movement, new Vector2(-1, input.Axis.y));
                }
                else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                    game.InputService.Move(input, movement, new Vector2(1, input.Axis.y));
                }
                else {
                    game.InputService.Move(input, movement, new Vector2(0, input.Axis.y));
                }
                if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)) {
                    game.InputService.Jump(movement);
                }
                if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.J)) {
                    game.InputService.Attack(_this.world, entity);
                }
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
var game;
(function (game) {
    var ScaleSystem = /** @class */ (function (_super) {
        __extends(ScaleSystem, _super);
        /** New System */
        function ScaleSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ScaleSystem.prototype.OnUpdate = function () {
            this.world.forEach([game.FlipScale, game.Movement, ut.Core2D.TransformLocalScale], function (scaleTag, movement, scale) {
                scale.scale = new Vector3(movement.Direction.x == 0 ? scale.scale.x : movement.Direction.x, 1, 1);
            });
        };
        ScaleSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd)
            /** New System */
        ], ScaleSystem);
        return ScaleSystem;
    }(ut.ComponentSystem));
    game.ScaleSystem = ScaleSystem;
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