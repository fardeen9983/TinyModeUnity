/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var game = game || {};
game.AiState = {
  Idle: 0,
  Patrolling: 1,
  Attacking: 2
};
game.AiState._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.AiState', 4, [
    {name: 'Idle', offset: 0, type: enumType},
    {name: 'Patrolling', offset: 1, type: enumType},
    {name: 'Attacking', offset: 2, type: enumType}
  ]);
})();
game.AnimationStates = {
  Idle: 0,
  Run: 1,
  Jump: 2,
  Attack01: 3,
  Attack02: 4,
  Attack03: 5,
  Hurt: 5,
  Dying: 5
};
game.AnimationStates._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.AnimationStates', 4, [
    {name: 'Idle', offset: 0, type: enumType},
    {name: 'Run', offset: 1, type: enumType},
    {name: 'Jump', offset: 2, type: enumType},
    {name: 'Attack01', offset: 3, type: enumType},
    {name: 'Attack02', offset: 4, type: enumType},
    {name: 'Attack03', offset: 5, type: enumType},
    {name: 'Hurt', offset: 5, type: enumType},
    {name: 'Dying', offset: 5, type: enumType}
  ]);
})();
game.GameState = {
  Initialize: 0,
  Play: 1,
  GameOver: 2
};
game.GameState._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.GameState', 4, [
    {name: 'Initialize', offset: 0, type: enumType},
    {name: 'Play', offset: 1, type: enumType},
    {name: 'GameOver', offset: 2, type: enumType}
  ]);
})();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.Bootstrap = entities.game.Bootstrap || {};
entities.game.Bootstrap.Component = function() {
};
entities.game.Bootstrap.Component.prototype = Object.create(null);
entities.game.Bootstrap.Component.prototype.constructor = entities.game.Bootstrap.Component;
Object.defineProperties(entities.game.Bootstrap.Component.prototype, {
});
entities.game.Bootstrap.Component._size = 1;
entities.game.Bootstrap.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bootstrap.Component.prototype);
  return v;
};
entities.game.Bootstrap.Component._toPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bootstrap.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bootstrap.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bootstrap.Component.StorageView.prototype = Object.create(null);
entities.game.Bootstrap.Component.StorageView.prototype.constructor = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component._view = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component.StorageView._isSharedComp = entities.game.Bootstrap.Component._isSharedComp = false;
entities.game.Bootstrap.Component.StorageView._fromPtr = entities.game.Bootstrap.Component._fromPtr;
entities.game.Bootstrap.Component.StorageView._toPtr = entities.game.Bootstrap.Component._toPtr;
entities.game.Bootstrap.Component.StorageView._tempHeapPtr = entities.game.Bootstrap.Component._tempHeapPtr;
entities.game.Bootstrap.Component.StorageView._size = entities.game.Bootstrap.Component._size;
entities.game.Bootstrap.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bootstrap.Component.StorageView.prototype, {
});
entities.game.Bootstrap.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bootstrap.Component is a POD type, so a JavaScript side copy constructor entities.game.Bootstrap.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Bootstrap.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Bootstrap.Component', 1, []);
})();
Object.defineProperties(entities.game.Bootstrap.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstrap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstrap.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Bootstrap.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Bootstrap.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bootstrap.Component.cid; } } });
entities.game.EnemyGroup = entities.game.EnemyGroup || {};
entities.game.EnemyGroup.Component = function() {
};
entities.game.EnemyGroup.Component.prototype = Object.create(null);
entities.game.EnemyGroup.Component.prototype.constructor = entities.game.EnemyGroup.Component;
Object.defineProperties(entities.game.EnemyGroup.Component.prototype, {
});
entities.game.EnemyGroup.Component._size = 1;
entities.game.EnemyGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.EnemyGroup.Component.prototype);
  return v;
};
entities.game.EnemyGroup.Component._toPtr = function(ptr, v) {
};
entities.game.EnemyGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.EnemyGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.EnemyGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.EnemyGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.EnemyGroup.Component.StorageView.prototype = Object.create(null);
entities.game.EnemyGroup.Component.StorageView.prototype.constructor = entities.game.EnemyGroup.Component.StorageView;
entities.game.EnemyGroup.Component._view = entities.game.EnemyGroup.Component.StorageView;
entities.game.EnemyGroup.Component.StorageView._isSharedComp = entities.game.EnemyGroup.Component._isSharedComp = false;
entities.game.EnemyGroup.Component.StorageView._fromPtr = entities.game.EnemyGroup.Component._fromPtr;
entities.game.EnemyGroup.Component.StorageView._toPtr = entities.game.EnemyGroup.Component._toPtr;
entities.game.EnemyGroup.Component.StorageView._tempHeapPtr = entities.game.EnemyGroup.Component._tempHeapPtr;
entities.game.EnemyGroup.Component.StorageView._size = entities.game.EnemyGroup.Component._size;
entities.game.EnemyGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.EnemyGroup.Component.StorageView.prototype, {
});
entities.game.EnemyGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.EnemyGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.EnemyGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.EnemyGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.EnemyGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.EnemyGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.EnemyGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.EnemyGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.EnemyGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.EnemyGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.EnemyGroup.Component.cid; } } });
entities.game.LevelGroup = entities.game.LevelGroup || {};
entities.game.LevelGroup.Component = function() {
};
entities.game.LevelGroup.Component.prototype = Object.create(null);
entities.game.LevelGroup.Component.prototype.constructor = entities.game.LevelGroup.Component;
Object.defineProperties(entities.game.LevelGroup.Component.prototype, {
});
entities.game.LevelGroup.Component._size = 1;
entities.game.LevelGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.LevelGroup.Component.prototype);
  return v;
};
entities.game.LevelGroup.Component._toPtr = function(ptr, v) {
};
entities.game.LevelGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.LevelGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.LevelGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.LevelGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.LevelGroup.Component.StorageView.prototype = Object.create(null);
entities.game.LevelGroup.Component.StorageView.prototype.constructor = entities.game.LevelGroup.Component.StorageView;
entities.game.LevelGroup.Component._view = entities.game.LevelGroup.Component.StorageView;
entities.game.LevelGroup.Component.StorageView._isSharedComp = entities.game.LevelGroup.Component._isSharedComp = false;
entities.game.LevelGroup.Component.StorageView._fromPtr = entities.game.LevelGroup.Component._fromPtr;
entities.game.LevelGroup.Component.StorageView._toPtr = entities.game.LevelGroup.Component._toPtr;
entities.game.LevelGroup.Component.StorageView._tempHeapPtr = entities.game.LevelGroup.Component._tempHeapPtr;
entities.game.LevelGroup.Component.StorageView._size = entities.game.LevelGroup.Component._size;
entities.game.LevelGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.LevelGroup.Component.StorageView.prototype, {
});
entities.game.LevelGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.LevelGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.LevelGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.LevelGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.LevelGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.LevelGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.LevelGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.LevelGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.LevelGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.LevelGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.LevelGroup.Component.cid; } } });
entities.game.PlayerGroup = entities.game.PlayerGroup || {};
entities.game.PlayerGroup.Component = function() {
};
entities.game.PlayerGroup.Component.prototype = Object.create(null);
entities.game.PlayerGroup.Component.prototype.constructor = entities.game.PlayerGroup.Component;
Object.defineProperties(entities.game.PlayerGroup.Component.prototype, {
});
entities.game.PlayerGroup.Component._size = 1;
entities.game.PlayerGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.PlayerGroup.Component.prototype);
  return v;
};
entities.game.PlayerGroup.Component._toPtr = function(ptr, v) {
};
entities.game.PlayerGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.PlayerGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.PlayerGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.PlayerGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.PlayerGroup.Component.StorageView.prototype = Object.create(null);
entities.game.PlayerGroup.Component.StorageView.prototype.constructor = entities.game.PlayerGroup.Component.StorageView;
entities.game.PlayerGroup.Component._view = entities.game.PlayerGroup.Component.StorageView;
entities.game.PlayerGroup.Component.StorageView._isSharedComp = entities.game.PlayerGroup.Component._isSharedComp = false;
entities.game.PlayerGroup.Component.StorageView._fromPtr = entities.game.PlayerGroup.Component._fromPtr;
entities.game.PlayerGroup.Component.StorageView._toPtr = entities.game.PlayerGroup.Component._toPtr;
entities.game.PlayerGroup.Component.StorageView._tempHeapPtr = entities.game.PlayerGroup.Component._tempHeapPtr;
entities.game.PlayerGroup.Component.StorageView._size = entities.game.PlayerGroup.Component._size;
entities.game.PlayerGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.PlayerGroup.Component.StorageView.prototype, {
});
entities.game.PlayerGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.PlayerGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.PlayerGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.PlayerGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.PlayerGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.PlayerGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.PlayerGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.PlayerGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.PlayerGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.PlayerGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.PlayerGroup.Component.cid; } } });
game.Ai = function(arg0, arg1) {
  this._State = (arg0|0);
  this._Previous = (arg1|0);
};
game.Ai.prototype = Object.create(null);
game.Ai.prototype.constructor = game.Ai;
Object.defineProperties(game.Ai.prototype, {
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
  Previous: {
    get: function() { return this._Previous; },
    set: function(v) { this._Previous = (v|0); },
  },
});
game.Ai._size = 8;
game.Ai._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Ai.prototype);
  v._State = HEAP32[(ptr+0)>>2];
  v._Previous = HEAP32[(ptr+4)>>2];
  return v;
};
game.Ai._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
  HEAP32[(ptr+4)>>2] = v.Previous;
};
game.Ai._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
  HEAP32[(ptr+4)>>2] = v.Previous;
};
game.Ai._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Ai._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Ai.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Ai.StorageView.prototype = Object.create(null);
game.Ai.StorageView.prototype.constructor = game.Ai.StorageView;
game.Ai._view = game.Ai.StorageView;
game.Ai.StorageView._isSharedComp = game.Ai._isSharedComp = false;
game.Ai.StorageView._fromPtr = game.Ai._fromPtr;
game.Ai.StorageView._toPtr = game.Ai._toPtr;
game.Ai.StorageView._tempHeapPtr = game.Ai._tempHeapPtr;
game.Ai.StorageView._size = game.Ai._size;
game.Ai.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Ai.StorageView.prototype, {
  State: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  Previous: {
    get: function() { return HEAP32[(this._ptr+4)>>2]; },
    set: function(v) { HEAP32[(this._ptr+4)>>2] = v; },
  },
});
game.Ai._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Ai is a POD type, so a JavaScript side copy constructor game.Ai._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Ai._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Ai', 8, [
    {name: 'State', offset: 0, type: ut.meta.getType('game.AiState')},
    {name: 'Previous', offset: 4, type: ut.meta.getType('game.AiState')}
  ]);
})();
Object.defineProperties(game.Ai, { cid: { configurable: true, get: function() { delete game.Ai.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Ai.cid = Module._ut_component_register_cid_with_type(game.Ai._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Ai.StorageView, { cid: { configurable: true, get: function() { return game.Ai.cid; } } });
game.Ai.State = { $ofs:0, $t:"game.AiState", $c:game.Ai };
game.Ai.Previous = { $ofs:4, $t:"game.AiState", $c:game.Ai };
game.Animations = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this._State = (arg0|0);
  this._Idle = (arg1 === undefined ? new ut.Entity : arg1);
  this._Run = (arg2 === undefined ? new ut.Entity : arg2);
  this._Jump = (arg3 === undefined ? new ut.Entity : arg3);
  this._Attack01 = (arg4 === undefined ? new ut.Entity : arg4);
  this._Attack02 = (arg5 === undefined ? new ut.Entity : arg5);
  this._Attack03 = (arg6 === undefined ? new ut.Entity : arg6);
  this._Hurt = (arg7 === undefined ? new ut.Entity : arg7);
  this._Dying = (arg8 === undefined ? new ut.Entity : arg8);
};
game.Animations.prototype = Object.create(null);
game.Animations.prototype.constructor = game.Animations;
Object.defineProperties(game.Animations.prototype, {
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
  Idle: {
    get: function() { return this._Idle; },
    set: function(v) { this._Idle = (v === undefined ? new ut.Entity : v); },
  },
  Run: {
    get: function() { return this._Run; },
    set: function(v) { this._Run = (v === undefined ? new ut.Entity : v); },
  },
  Jump: {
    get: function() { return this._Jump; },
    set: function(v) { this._Jump = (v === undefined ? new ut.Entity : v); },
  },
  Attack01: {
    get: function() { return this._Attack01; },
    set: function(v) { this._Attack01 = (v === undefined ? new ut.Entity : v); },
  },
  Attack02: {
    get: function() { return this._Attack02; },
    set: function(v) { this._Attack02 = (v === undefined ? new ut.Entity : v); },
  },
  Attack03: {
    get: function() { return this._Attack03; },
    set: function(v) { this._Attack03 = (v === undefined ? new ut.Entity : v); },
  },
  Hurt: {
    get: function() { return this._Hurt; },
    set: function(v) { this._Hurt = (v === undefined ? new ut.Entity : v); },
  },
  Dying: {
    get: function() { return this._Dying; },
    set: function(v) { this._Dying = (v === undefined ? new ut.Entity : v); },
  },
});
game.Animations._size = 68;
game.Animations._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Animations.prototype);
  v._State = HEAP32[(ptr+0)>>2];
  v._Idle = ut.Entity._fromPtr(ptr+4);
  v._Run = ut.Entity._fromPtr(ptr+12);
  v._Jump = ut.Entity._fromPtr(ptr+20);
  v._Attack01 = ut.Entity._fromPtr(ptr+28);
  v._Attack02 = ut.Entity._fromPtr(ptr+36);
  v._Attack03 = ut.Entity._fromPtr(ptr+44);
  v._Hurt = ut.Entity._fromPtr(ptr+52);
  v._Dying = ut.Entity._fromPtr(ptr+60);
  return v;
};
game.Animations._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
  ut.Entity._toPtr(ptr+4, v.Idle);
  ut.Entity._toPtr(ptr+12, v.Run);
  ut.Entity._toPtr(ptr+20, v.Jump);
  ut.Entity._toPtr(ptr+28, v.Attack01);
  ut.Entity._toPtr(ptr+36, v.Attack02);
  ut.Entity._toPtr(ptr+44, v.Attack03);
  ut.Entity._toPtr(ptr+52, v.Hurt);
  ut.Entity._toPtr(ptr+60, v.Dying);
};
game.Animations._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
  ut.Entity._toPtr(ptr+4, v.Idle);
  ut.Entity._toPtr(ptr+12, v.Run);
  ut.Entity._toPtr(ptr+20, v.Jump);
  ut.Entity._toPtr(ptr+28, v.Attack01);
  ut.Entity._toPtr(ptr+36, v.Attack02);
  ut.Entity._toPtr(ptr+44, v.Attack03);
  ut.Entity._toPtr(ptr+52, v.Hurt);
  ut.Entity._toPtr(ptr+60, v.Dying);
};
game.Animations._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(68);
  if (v) game.Animations._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Animations.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Animations.StorageView.prototype = Object.create(null);
game.Animations.StorageView.prototype.constructor = game.Animations.StorageView;
game.Animations._view = game.Animations.StorageView;
game.Animations.StorageView._isSharedComp = game.Animations._isSharedComp = false;
game.Animations.StorageView._fromPtr = game.Animations._fromPtr;
game.Animations.StorageView._toPtr = game.Animations._toPtr;
game.Animations.StorageView._tempHeapPtr = game.Animations._tempHeapPtr;
game.Animations.StorageView._size = game.Animations._size;
game.Animations.StorageView.prototype.$advance = function() {
  this._ptr += 68;
};
Object.defineProperties(game.Animations.StorageView.prototype, {
  State: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
  Idle: {
    get: function() { return ut.Entity._fromPtr(this._ptr+4); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+4, v); },
  },
  Run: {
    get: function() { return ut.Entity._fromPtr(this._ptr+12); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+12, v); },
  },
  Jump: {
    get: function() { return ut.Entity._fromPtr(this._ptr+20); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+20, v); },
  },
  Attack01: {
    get: function() { return ut.Entity._fromPtr(this._ptr+28); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+28, v); },
  },
  Attack02: {
    get: function() { return ut.Entity._fromPtr(this._ptr+36); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+36, v); },
  },
  Attack03: {
    get: function() { return ut.Entity._fromPtr(this._ptr+44); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+44, v); },
  },
  Hurt: {
    get: function() { return ut.Entity._fromPtr(this._ptr+52); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+52, v); },
  },
  Dying: {
    get: function() { return ut.Entity._fromPtr(this._ptr+60); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+60, v); },
  },
});
game.Animations._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Animations is a POD type, so a JavaScript side copy constructor game.Animations._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Animations._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Animations', 68, [
    {name: 'State', offset: 0, type: ut.meta.getType('game.AnimationStates')},
    {name: 'Idle', offset: 4, type: ut.meta.getType('ut.Entity')},
    {name: 'Run', offset: 12, type: ut.meta.getType('ut.Entity')},
    {name: 'Jump', offset: 20, type: ut.meta.getType('ut.Entity')},
    {name: 'Attack01', offset: 28, type: ut.meta.getType('ut.Entity')},
    {name: 'Attack02', offset: 36, type: ut.meta.getType('ut.Entity')},
    {name: 'Attack03', offset: 44, type: ut.meta.getType('ut.Entity')},
    {name: 'Hurt', offset: 52, type: ut.meta.getType('ut.Entity')},
    {name: 'Dying', offset: 60, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.Animations, { cid: { configurable: true, get: function() { delete game.Animations.cid; var offsetsPtr = ut.tempHeapPtrI32([4,12,20,28,36,44,52,60]); var offsetsCount = 8; return game.Animations.cid = Module._ut_component_register_cid_with_type(game.Animations._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Animations.StorageView, { cid: { configurable: true, get: function() { return game.Animations.cid; } } });
game.Animations.State = { $ofs:0, $t:"game.AnimationStates", $c:game.Animations };
game.Animations.Idle = { $ofs:4, $t:"ut.Entity", $c:game.Animations };
game.Animations.Idle.index = { $ofs:4, $t:"int32_t", $c:game.Animations };
game.Animations.Idle.version = { $ofs:8, $t:"int32_t", $c:game.Animations };
game.Animations.Run = { $ofs:12, $t:"ut.Entity", $c:game.Animations };
game.Animations.Run.index = { $ofs:12, $t:"int32_t", $c:game.Animations };
game.Animations.Run.version = { $ofs:16, $t:"int32_t", $c:game.Animations };
game.Animations.Jump = { $ofs:20, $t:"ut.Entity", $c:game.Animations };
game.Animations.Jump.index = { $ofs:20, $t:"int32_t", $c:game.Animations };
game.Animations.Jump.version = { $ofs:24, $t:"int32_t", $c:game.Animations };
game.Animations.Attack01 = { $ofs:28, $t:"ut.Entity", $c:game.Animations };
game.Animations.Attack01.index = { $ofs:28, $t:"int32_t", $c:game.Animations };
game.Animations.Attack01.version = { $ofs:32, $t:"int32_t", $c:game.Animations };
game.Animations.Attack02 = { $ofs:36, $t:"ut.Entity", $c:game.Animations };
game.Animations.Attack02.index = { $ofs:36, $t:"int32_t", $c:game.Animations };
game.Animations.Attack02.version = { $ofs:40, $t:"int32_t", $c:game.Animations };
game.Animations.Attack03 = { $ofs:44, $t:"ut.Entity", $c:game.Animations };
game.Animations.Attack03.index = { $ofs:44, $t:"int32_t", $c:game.Animations };
game.Animations.Attack03.version = { $ofs:48, $t:"int32_t", $c:game.Animations };
game.Animations.Hurt = { $ofs:52, $t:"ut.Entity", $c:game.Animations };
game.Animations.Hurt.index = { $ofs:52, $t:"int32_t", $c:game.Animations };
game.Animations.Hurt.version = { $ofs:56, $t:"int32_t", $c:game.Animations };
game.Animations.Dying = { $ofs:60, $t:"ut.Entity", $c:game.Animations };
game.Animations.Dying.index = { $ofs:60, $t:"int32_t", $c:game.Animations };
game.Animations.Dying.version = { $ofs:64, $t:"int32_t", $c:game.Animations };
game.Attack = function(arg0, arg1, arg2) {
  this._Timer = (+(arg0===undefined ? 0 : arg0));
  this._ComboStep = (arg1 ? true : false);
  this._Hit = (arg2 ? true : false);
};
game.Attack.prototype = Object.create(null);
game.Attack.prototype.constructor = game.Attack;
Object.defineProperties(game.Attack.prototype, {
  Timer: {
    get: function() { return this._Timer; },
    set: function(v) { this._Timer = (+(v===undefined ? 0 : v)); },
  },
  ComboStep: {
    get: function() { return this._ComboStep; },
    set: function(v) { this._ComboStep = (v ? true : false); },
  },
  Hit: {
    get: function() { return this._Hit; },
    set: function(v) { this._Hit = (v ? true : false); },
  },
});
game.Attack._size = 8;
game.Attack._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Attack.prototype);
  v._Timer = HEAPF32[(ptr+0)>>2];
  v._ComboStep = (HEAP8[ptr+4]?true:false);
  v._Hit = (HEAP8[ptr+5]?true:false);
  return v;
};
game.Attack._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAP8[ptr+4] = (v.ComboStep)?1:0;
  HEAP8[ptr+5] = (v.Hit)?1:0;
};
game.Attack._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.Timer;
  HEAP8[ptr+4] = (v.ComboStep)?1:0;
  HEAP8[ptr+5] = (v.Hit)?1:0;
};
game.Attack._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Attack._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Attack.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Attack.StorageView.prototype = Object.create(null);
game.Attack.StorageView.prototype.constructor = game.Attack.StorageView;
game.Attack._view = game.Attack.StorageView;
game.Attack.StorageView._isSharedComp = game.Attack._isSharedComp = false;
game.Attack.StorageView._fromPtr = game.Attack._fromPtr;
game.Attack.StorageView._toPtr = game.Attack._toPtr;
game.Attack.StorageView._tempHeapPtr = game.Attack._tempHeapPtr;
game.Attack.StorageView._size = game.Attack._size;
game.Attack.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Attack.StorageView.prototype, {
  Timer: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  ComboStep: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
  Hit: {
    get: function() { return (HEAP8[this._ptr+5]?true:false); },
    set: function(v) { HEAP8[this._ptr+5] = (v)?1:0; },
  },
});
game.Attack._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Attack is a POD type, so a JavaScript side copy constructor game.Attack._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Attack._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Attack', 8, [
    {name: 'Timer', offset: 0, type: ut.meta.getType('float')},
    {name: 'ComboStep', offset: 4, type: ut.meta.getType('bool')},
    {name: 'Hit', offset: 5, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.Attack, { cid: { configurable: true, get: function() { delete game.Attack.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Attack.cid = Module._ut_component_register_cid_with_type(game.Attack._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Attack.StorageView, { cid: { configurable: true, get: function() { return game.Attack.cid; } } });
game.Attack.Timer = { $ofs:0, $t:"float", $c:game.Attack };
game.Attack.ComboStep = { $ofs:4, $t:"bool", $c:game.Attack };
game.Attack.Hit = { $ofs:5, $t:"bool", $c:game.Attack };
game.Destructible = function() {
};
game.Destructible.prototype = Object.create(null);
game.Destructible.prototype.constructor = game.Destructible;
Object.defineProperties(game.Destructible.prototype, {
});
game.Destructible._size = 1;
game.Destructible._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Destructible.prototype);
  return v;
};
game.Destructible._toPtr = function(ptr, v) {
};
game.Destructible._toTempHeapPtr = function(ptr, v) {
};
game.Destructible._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Destructible._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Destructible.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Destructible.StorageView.prototype = Object.create(null);
game.Destructible.StorageView.prototype.constructor = game.Destructible.StorageView;
game.Destructible._view = game.Destructible.StorageView;
game.Destructible.StorageView._isSharedComp = game.Destructible._isSharedComp = false;
game.Destructible.StorageView._fromPtr = game.Destructible._fromPtr;
game.Destructible.StorageView._toPtr = game.Destructible._toPtr;
game.Destructible.StorageView._tempHeapPtr = game.Destructible._tempHeapPtr;
game.Destructible.StorageView._size = game.Destructible._size;
game.Destructible.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Destructible.StorageView.prototype, {
});
game.Destructible._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Destructible is a POD type, so a JavaScript side copy constructor game.Destructible._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Destructible._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Destructible', 1, []);
})();
Object.defineProperties(game.Destructible, { cid: { configurable: true, get: function() { delete game.Destructible.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Destructible.cid = Module._ut_component_register_cid_with_type(game.Destructible._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Destructible.StorageView, { cid: { configurable: true, get: function() { return game.Destructible.cid; } } });
game.Dying = function(arg0, arg1) {
  this._TimePlayed = (+(arg0===undefined ? 0 : arg0));
  this._Length = (+(arg1===undefined ? 0 : arg1));
};
game.Dying.prototype = Object.create(null);
game.Dying.prototype.constructor = game.Dying;
Object.defineProperties(game.Dying.prototype, {
  TimePlayed: {
    get: function() { return this._TimePlayed; },
    set: function(v) { this._TimePlayed = (+(v===undefined ? 0 : v)); },
  },
  Length: {
    get: function() { return this._Length; },
    set: function(v) { this._Length = (+(v===undefined ? 0 : v)); },
  },
});
game.Dying._size = 8;
game.Dying._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Dying.prototype);
  v._TimePlayed = HEAPF32[(ptr+0)>>2];
  v._Length = HEAPF32[(ptr+4)>>2];
  return v;
};
game.Dying._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.TimePlayed;
  HEAPF32[(ptr+4)>>2] = v.Length;
};
game.Dying._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.TimePlayed;
  HEAPF32[(ptr+4)>>2] = v.Length;
};
game.Dying._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Dying._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Dying.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Dying.StorageView.prototype = Object.create(null);
game.Dying.StorageView.prototype.constructor = game.Dying.StorageView;
game.Dying._view = game.Dying.StorageView;
game.Dying.StorageView._isSharedComp = game.Dying._isSharedComp = false;
game.Dying.StorageView._fromPtr = game.Dying._fromPtr;
game.Dying.StorageView._toPtr = game.Dying._toPtr;
game.Dying.StorageView._tempHeapPtr = game.Dying._tempHeapPtr;
game.Dying.StorageView._size = game.Dying._size;
game.Dying.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Dying.StorageView.prototype, {
  TimePlayed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Length: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.Dying._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Dying is a POD type, so a JavaScript side copy constructor game.Dying._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Dying._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Dying', 8, [
    {name: 'TimePlayed', offset: 0, type: ut.meta.getType('float')},
    {name: 'Length', offset: 4, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Dying, { cid: { configurable: true, get: function() { delete game.Dying.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Dying.cid = Module._ut_component_register_cid_with_type(game.Dying._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Dying.StorageView, { cid: { configurable: true, get: function() { return game.Dying.cid; } } });
game.Dying.TimePlayed = { $ofs:0, $t:"float", $c:game.Dying };
game.Dying.Length = { $ofs:4, $t:"float", $c:game.Dying };
game.FlipScale = function() {
};
game.FlipScale.prototype = Object.create(null);
game.FlipScale.prototype.constructor = game.FlipScale;
Object.defineProperties(game.FlipScale.prototype, {
});
game.FlipScale._size = 1;
game.FlipScale._fromPtr = function(ptr, v) {
  v = v || Object.create(game.FlipScale.prototype);
  return v;
};
game.FlipScale._toPtr = function(ptr, v) {
};
game.FlipScale._toTempHeapPtr = function(ptr, v) {
};
game.FlipScale._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.FlipScale._toTempHeapPtr(ptr, v);
  return ptr;
};
game.FlipScale.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.FlipScale.StorageView.prototype = Object.create(null);
game.FlipScale.StorageView.prototype.constructor = game.FlipScale.StorageView;
game.FlipScale._view = game.FlipScale.StorageView;
game.FlipScale.StorageView._isSharedComp = game.FlipScale._isSharedComp = false;
game.FlipScale.StorageView._fromPtr = game.FlipScale._fromPtr;
game.FlipScale.StorageView._toPtr = game.FlipScale._toPtr;
game.FlipScale.StorageView._tempHeapPtr = game.FlipScale._tempHeapPtr;
game.FlipScale.StorageView._size = game.FlipScale._size;
game.FlipScale.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.FlipScale.StorageView.prototype, {
});
game.FlipScale._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.FlipScale is a POD type, so a JavaScript side copy constructor game.FlipScale._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.FlipScale._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.FlipScale', 1, []);
})();
Object.defineProperties(game.FlipScale, { cid: { configurable: true, get: function() { delete game.FlipScale.cid; var offsetsPtr = 0, offsetsCount = 0; return game.FlipScale.cid = Module._ut_component_register_cid_with_type(game.FlipScale._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.FlipScale.StorageView, { cid: { configurable: true, get: function() { return game.FlipScale.cid; } } });
game.Health = function(arg0, arg1) {
  this._CurrentHp = (+(arg0===undefined ? 0 : arg0));
  this._MaxHp = (+(arg1===undefined ? 0 : arg1));
};
game.Health.prototype = Object.create(null);
game.Health.prototype.constructor = game.Health;
Object.defineProperties(game.Health.prototype, {
  CurrentHp: {
    get: function() { return this._CurrentHp; },
    set: function(v) { this._CurrentHp = (+(v===undefined ? 0 : v)); },
  },
  MaxHp: {
    get: function() { return this._MaxHp; },
    set: function(v) { this._MaxHp = (+(v===undefined ? 0 : v)); },
  },
});
game.Health._size = 8;
game.Health._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Health.prototype);
  v._CurrentHp = HEAPF32[(ptr+0)>>2];
  v._MaxHp = HEAPF32[(ptr+4)>>2];
  return v;
};
game.Health._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.CurrentHp;
  HEAPF32[(ptr+4)>>2] = v.MaxHp;
};
game.Health._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.CurrentHp;
  HEAPF32[(ptr+4)>>2] = v.MaxHp;
};
game.Health._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Health._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Health.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Health.StorageView.prototype = Object.create(null);
game.Health.StorageView.prototype.constructor = game.Health.StorageView;
game.Health._view = game.Health.StorageView;
game.Health.StorageView._isSharedComp = game.Health._isSharedComp = false;
game.Health.StorageView._fromPtr = game.Health._fromPtr;
game.Health.StorageView._toPtr = game.Health._toPtr;
game.Health.StorageView._tempHeapPtr = game.Health._tempHeapPtr;
game.Health.StorageView._size = game.Health._size;
game.Health.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Health.StorageView.prototype, {
  CurrentHp: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  MaxHp: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.Health._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Health is a POD type, so a JavaScript side copy constructor game.Health._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Health._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Health', 8, [
    {name: 'CurrentHp', offset: 0, type: ut.meta.getType('float')},
    {name: 'MaxHp', offset: 4, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Health, { cid: { configurable: true, get: function() { delete game.Health.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Health.cid = Module._ut_component_register_cid_with_type(game.Health._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Health.StorageView, { cid: { configurable: true, get: function() { return game.Health.cid; } } });
game.Health.CurrentHp = { $ofs:0, $t:"float", $c:game.Health };
game.Health.MaxHp = { $ofs:4, $t:"float", $c:game.Health };
game.Input = function(arg0) {
  this._Axis = new ut.Math.Vector2(); if ((arg0) !== undefined) { this._Axis.copy(arg0); };
};
game.Input.prototype = Object.create(null);
game.Input.prototype.constructor = game.Input;
Object.defineProperties(game.Input.prototype, {
  Axis: {
    get: function() { return this._Axis; },
    set: function(v) { this._Axis.copy(v); },
  },
});
game.Input._size = 8;
game.Input._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Input.prototype);
  v._Axis = ut._utils.vec2FromHeap(null, ptr+0);
  return v;
};
game.Input._toPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.Axis, ptr+0);
};
game.Input._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.Axis, ptr+0);
};
game.Input._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Input._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Input.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Input.StorageView.prototype = Object.create(null);
game.Input.StorageView.prototype.constructor = game.Input.StorageView;
game.Input._view = game.Input.StorageView;
game.Input.StorageView._isSharedComp = game.Input._isSharedComp = false;
game.Input.StorageView._fromPtr = game.Input._fromPtr;
game.Input.StorageView._toPtr = game.Input._toPtr;
game.Input.StorageView._tempHeapPtr = game.Input._tempHeapPtr;
game.Input.StorageView._size = game.Input._size;
game.Input.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Input.StorageView.prototype, {
  Axis: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+0); },
  },
});
game.Input._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Input is a POD type, so a JavaScript side copy constructor game.Input._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Input._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Input', 8, [
    {name: 'Axis', offset: 0, type: ut.meta.getType('ut.Math.Vector2')}
  ]);
})();
Object.defineProperties(game.Input, { cid: { configurable: true, get: function() { delete game.Input.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Input.cid = Module._ut_component_register_cid_with_type(game.Input._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Input.StorageView, { cid: { configurable: true, get: function() { return game.Input.cid; } } });
game.Input.Axis = { $ofs:0, $t:"ut.Math.Vector2", $c:game.Input };
game.Input.Axis.y = { $ofs:4, $t:"float", $c:game.Input };
game.Input.Axis.x = { $ofs:0, $t:"float", $c:game.Input };
game.Movement = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._Direction = new ut.Math.Vector2(); if ((arg0) !== undefined) { this._Direction.copy(arg0); };
  this._Speed = (arg1|0);
  this._JumpForce = (arg2|0);
  this._Jumping = (arg3 ? true : false);
  this._ShouldJump = (arg4 ? true : false);
  this._OnGround = (arg5 ? true : false);
};
game.Movement.prototype = Object.create(null);
game.Movement.prototype.constructor = game.Movement;
Object.defineProperties(game.Movement.prototype, {
  Direction: {
    get: function() { return this._Direction; },
    set: function(v) { this._Direction.copy(v); },
  },
  Speed: {
    get: function() { return this._Speed; },
    set: function(v) { this._Speed = (v|0); },
  },
  JumpForce: {
    get: function() { return this._JumpForce; },
    set: function(v) { this._JumpForce = (v|0); },
  },
  Jumping: {
    get: function() { return this._Jumping; },
    set: function(v) { this._Jumping = (v ? true : false); },
  },
  ShouldJump: {
    get: function() { return this._ShouldJump; },
    set: function(v) { this._ShouldJump = (v ? true : false); },
  },
  OnGround: {
    get: function() { return this._OnGround; },
    set: function(v) { this._OnGround = (v ? true : false); },
  },
});
game.Movement._size = 16;
game.Movement._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Movement.prototype);
  v._Direction = ut._utils.vec2FromHeap(null, ptr+0);
  v._Speed = HEAP8[ptr+8];
  v._JumpForce = HEAP8[ptr+9];
  v._Jumping = (HEAP8[ptr+10]?true:false);
  v._ShouldJump = (HEAP8[ptr+11]?true:false);
  v._OnGround = (HEAP8[ptr+12]?true:false);
  return v;
};
game.Movement._toPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.Direction, ptr+0);
  HEAP8[ptr+8] = v.Speed;
  HEAP8[ptr+9] = v.JumpForce;
  HEAP8[ptr+10] = (v.Jumping)?1:0;
  HEAP8[ptr+11] = (v.ShouldJump)?1:0;
  HEAP8[ptr+12] = (v.OnGround)?1:0;
};
game.Movement._toTempHeapPtr = function(ptr, v) {
  ut._utils.vec2ToHeap(v.Direction, ptr+0);
  HEAP8[ptr+8] = v.Speed;
  HEAP8[ptr+9] = v.JumpForce;
  HEAP8[ptr+10] = (v.Jumping)?1:0;
  HEAP8[ptr+11] = (v.ShouldJump)?1:0;
  HEAP8[ptr+12] = (v.OnGround)?1:0;
};
game.Movement._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(16);
  if (v) game.Movement._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Movement.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Movement.StorageView.prototype = Object.create(null);
game.Movement.StorageView.prototype.constructor = game.Movement.StorageView;
game.Movement._view = game.Movement.StorageView;
game.Movement.StorageView._isSharedComp = game.Movement._isSharedComp = false;
game.Movement.StorageView._fromPtr = game.Movement._fromPtr;
game.Movement.StorageView._toPtr = game.Movement._toPtr;
game.Movement.StorageView._tempHeapPtr = game.Movement._tempHeapPtr;
game.Movement.StorageView._size = game.Movement._size;
game.Movement.StorageView.prototype.$advance = function() {
  this._ptr += 16;
};
Object.defineProperties(game.Movement.StorageView.prototype, {
  Direction: {
    get: function() { return ut._utils.vec2FromHeap(null, this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut._utils.vec2ToHeap(v, this._ptr+0); },
  },
  Speed: {
    get: function() { return HEAP8[this._ptr+8]; },
    set: function(v) { HEAP8[this._ptr+8] = v; },
  },
  JumpForce: {
    get: function() { return HEAP8[this._ptr+9]; },
    set: function(v) { HEAP8[this._ptr+9] = v; },
  },
  Jumping: {
    get: function() { return (HEAP8[this._ptr+10]?true:false); },
    set: function(v) { HEAP8[this._ptr+10] = (v)?1:0; },
  },
  ShouldJump: {
    get: function() { return (HEAP8[this._ptr+11]?true:false); },
    set: function(v) { HEAP8[this._ptr+11] = (v)?1:0; },
  },
  OnGround: {
    get: function() { return (HEAP8[this._ptr+12]?true:false); },
    set: function(v) { HEAP8[this._ptr+12] = (v)?1:0; },
  },
});
game.Movement._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Movement is a POD type, so a JavaScript side copy constructor game.Movement._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Movement._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Movement', 16, [
    {name: 'Direction', offset: 0, type: ut.meta.getType('ut.Math.Vector2')},
    {name: 'Speed', offset: 8, type: ut.meta.getType('int8')},
    {name: 'JumpForce', offset: 9, type: ut.meta.getType('int8')},
    {name: 'Jumping', offset: 10, type: ut.meta.getType('bool')},
    {name: 'ShouldJump', offset: 11, type: ut.meta.getType('bool')},
    {name: 'OnGround', offset: 12, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.Movement, { cid: { configurable: true, get: function() { delete game.Movement.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Movement.cid = Module._ut_component_register_cid_with_type(game.Movement._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Movement.StorageView, { cid: { configurable: true, get: function() { return game.Movement.cid; } } });
game.Movement.Direction = { $ofs:0, $t:"ut.Math.Vector2", $c:game.Movement };
game.Movement.Direction.y = { $ofs:4, $t:"float", $c:game.Movement };
game.Movement.Direction.x = { $ofs:0, $t:"float", $c:game.Movement };
game.Movement.Speed = { $ofs:8, $t:"int8_t", $c:game.Movement };
game.Movement.JumpForce = { $ofs:9, $t:"int8_t", $c:game.Movement };
game.Movement.Jumping = { $ofs:10, $t:"bool", $c:game.Movement };
game.Movement.ShouldJump = { $ofs:11, $t:"bool", $c:game.Movement };
game.Movement.OnGround = { $ofs:12, $t:"bool", $c:game.Movement };
game.Patrol = function(arg0) {
  this._Direction = (arg0|0);
};
game.Patrol.prototype = Object.create(null);
game.Patrol.prototype.constructor = game.Patrol;
Object.defineProperties(game.Patrol.prototype, {
  Direction: {
    get: function() { return this._Direction; },
    set: function(v) { this._Direction = (v|0); },
  },
});
game.Patrol._size = 1;
game.Patrol._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Patrol.prototype);
  v._Direction = HEAP8[ptr+0];
  return v;
};
game.Patrol._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.Direction;
};
game.Patrol._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.Direction;
};
game.Patrol._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Patrol._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Patrol.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Patrol.StorageView.prototype = Object.create(null);
game.Patrol.StorageView.prototype.constructor = game.Patrol.StorageView;
game.Patrol._view = game.Patrol.StorageView;
game.Patrol.StorageView._isSharedComp = game.Patrol._isSharedComp = false;
game.Patrol.StorageView._fromPtr = game.Patrol._fromPtr;
game.Patrol.StorageView._toPtr = game.Patrol._toPtr;
game.Patrol.StorageView._tempHeapPtr = game.Patrol._tempHeapPtr;
game.Patrol.StorageView._size = game.Patrol._size;
game.Patrol.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Patrol.StorageView.prototype, {
  Direction: {
    get: function() { return HEAP8[this._ptr+0]; },
    set: function(v) { HEAP8[this._ptr+0] = v; },
  },
});
game.Patrol._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Patrol is a POD type, so a JavaScript side copy constructor game.Patrol._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Patrol._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Patrol', 1, [
    {name: 'Direction', offset: 0, type: ut.meta.getType('int8')}
  ]);
})();
Object.defineProperties(game.Patrol, { cid: { configurable: true, get: function() { delete game.Patrol.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Patrol.cid = Module._ut_component_register_cid_with_type(game.Patrol._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Patrol.StorageView, { cid: { configurable: true, get: function() { return game.Patrol.cid; } } });
game.Patrol.Direction = { $ofs:0, $t:"int8_t", $c:game.Patrol };
game.Player = function() {
};
game.Player.prototype = Object.create(null);
game.Player.prototype.constructor = game.Player;
Object.defineProperties(game.Player.prototype, {
});
game.Player._size = 1;
game.Player._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Player.prototype);
  return v;
};
game.Player._toPtr = function(ptr, v) {
};
game.Player._toTempHeapPtr = function(ptr, v) {
};
game.Player._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Player._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Player.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Player.StorageView.prototype = Object.create(null);
game.Player.StorageView.prototype.constructor = game.Player.StorageView;
game.Player._view = game.Player.StorageView;
game.Player.StorageView._isSharedComp = game.Player._isSharedComp = false;
game.Player.StorageView._fromPtr = game.Player._fromPtr;
game.Player.StorageView._toPtr = game.Player._toPtr;
game.Player.StorageView._tempHeapPtr = game.Player._tempHeapPtr;
game.Player.StorageView._size = game.Player._size;
game.Player.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Player.StorageView.prototype, {
});
game.Player._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Player is a POD type, so a JavaScript side copy constructor game.Player._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Player._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Player', 1, []);
})();
Object.defineProperties(game.Player, { cid: { configurable: true, get: function() { delete game.Player.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Player.cid = Module._ut_component_register_cid_with_type(game.Player._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Player.StorageView, { cid: { configurable: true, get: function() { return game.Player.cid; } } });
game.PlayOneShot = function(arg0, arg1) {
  this._TimePlayed = (+(arg0===undefined ? 0 : arg0));
  this._Length = (+(arg1===undefined ? 0 : arg1));
};
game.PlayOneShot.prototype = Object.create(null);
game.PlayOneShot.prototype.constructor = game.PlayOneShot;
Object.defineProperties(game.PlayOneShot.prototype, {
  TimePlayed: {
    get: function() { return this._TimePlayed; },
    set: function(v) { this._TimePlayed = (+(v===undefined ? 0 : v)); },
  },
  Length: {
    get: function() { return this._Length; },
    set: function(v) { this._Length = (+(v===undefined ? 0 : v)); },
  },
});
game.PlayOneShot._size = 8;
game.PlayOneShot._fromPtr = function(ptr, v) {
  v = v || Object.create(game.PlayOneShot.prototype);
  v._TimePlayed = HEAPF32[(ptr+0)>>2];
  v._Length = HEAPF32[(ptr+4)>>2];
  return v;
};
game.PlayOneShot._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.TimePlayed;
  HEAPF32[(ptr+4)>>2] = v.Length;
};
game.PlayOneShot._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.TimePlayed;
  HEAPF32[(ptr+4)>>2] = v.Length;
};
game.PlayOneShot._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.PlayOneShot._toTempHeapPtr(ptr, v);
  return ptr;
};
game.PlayOneShot.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.PlayOneShot.StorageView.prototype = Object.create(null);
game.PlayOneShot.StorageView.prototype.constructor = game.PlayOneShot.StorageView;
game.PlayOneShot._view = game.PlayOneShot.StorageView;
game.PlayOneShot.StorageView._isSharedComp = game.PlayOneShot._isSharedComp = false;
game.PlayOneShot.StorageView._fromPtr = game.PlayOneShot._fromPtr;
game.PlayOneShot.StorageView._toPtr = game.PlayOneShot._toPtr;
game.PlayOneShot.StorageView._tempHeapPtr = game.PlayOneShot._tempHeapPtr;
game.PlayOneShot.StorageView._size = game.PlayOneShot._size;
game.PlayOneShot.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.PlayOneShot.StorageView.prototype, {
  TimePlayed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  Length: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.PlayOneShot._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.PlayOneShot is a POD type, so a JavaScript side copy constructor game.PlayOneShot._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.PlayOneShot._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.PlayOneShot', 8, [
    {name: 'TimePlayed', offset: 0, type: ut.meta.getType('float')},
    {name: 'Length', offset: 4, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.PlayOneShot, { cid: { configurable: true, get: function() { delete game.PlayOneShot.cid; var offsetsPtr = 0, offsetsCount = 0; return game.PlayOneShot.cid = Module._ut_component_register_cid_with_type(game.PlayOneShot._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.PlayOneShot.StorageView, { cid: { configurable: true, get: function() { return game.PlayOneShot.cid; } } });
game.PlayOneShot.TimePlayed = { $ofs:0, $t:"float", $c:game.PlayOneShot };
game.PlayOneShot.Length = { $ofs:4, $t:"float", $c:game.PlayOneShot };
game.GameConfig = function(arg0) {
  this._State = (arg0|0);
};
game.GameConfig.prototype = Object.create(null);
game.GameConfig.prototype.constructor = game.GameConfig;
Object.defineProperties(game.GameConfig.prototype, {
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
});
game.GameConfig._size = 4;
game.GameConfig._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameConfig.prototype);
  v._State = HEAP32[(ptr+0)>>2];
  return v;
};
game.GameConfig._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
};
game.GameConfig._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.State;
};
game.GameConfig._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.GameConfig._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameConfig.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameConfig.StorageView.prototype = Object.create(null);
game.GameConfig.StorageView.prototype.constructor = game.GameConfig.StorageView;
game.GameConfig._view = game.GameConfig.StorageView;
game.GameConfig.StorageView._isSharedComp = game.GameConfig._isSharedComp = false;
game.GameConfig.StorageView._fromPtr = game.GameConfig._fromPtr;
game.GameConfig.StorageView._toPtr = game.GameConfig._toPtr;
game.GameConfig.StorageView._tempHeapPtr = game.GameConfig._tempHeapPtr;
game.GameConfig.StorageView._size = game.GameConfig._size;
game.GameConfig.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.GameConfig.StorageView.prototype, {
  State: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.GameConfig._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.GameConfig is a POD type, so a JavaScript side copy constructor game.GameConfig._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.GameConfig._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameConfig', 4, [
    {name: 'State', offset: 0, type: ut.meta.getType('game.GameState')}
  ]);
})();
Object.defineProperties(game.GameConfig, { cid: { configurable: true, get: function() { delete game.GameConfig.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameConfig.cid = Module._ut_component_register_cid_with_type(game.GameConfig._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.GameConfig.StorageView, { cid: { configurable: true, get: function() { return game.GameConfig.cid; } } });
game.GameConfig.State = { $ofs:0, $t:"game.GameState", $c:game.GameConfig };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTileBase._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTileBase', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTileBase._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.AiInputSystemJS = ut.System.define({
  name: "game.AiInputSystemJS"
});
game.AnimationSystemJS = ut.System.define({
  name: "game.AnimationSystemJS"
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});
game.AttackSystemJS = ut.System.define({
  name: "game.AttackSystemJS"
});
game.CollisionSystemJS = ut.System.define({
  name: "game.CollisionSystemJS"
});
game.DeathSystemJS = ut.System.define({
  name: "game.DeathSystemJS"
});
game.GameManagerServiceJS = ut.System.define({
  name: "game.GameManagerServiceJS"
});
game.HealthSystemJS = ut.System.define({
  name: "game.HealthSystemJS"
});
game.MovementSystemJS = ut.System.define({
  name: "game.MovementSystemJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.InputFence","UTiny.Shared.UserCodeStart"]
});
game.PatrolSystemJS = ut.System.define({
  name: "game.PatrolSystemJS"
});
game.PlayerInputSystemJS = ut.System.define({
  name: "game.PlayerInputSystemJS"
 ,updatesBefore: ["UTiny.Shared.InputFence"]
});
game.ScaleSystemJS = ut.System.define({
  name: "game.ScaleSystemJS"
 ,updatesAfter: ["UTiny.Shared.UserCodeEnd"]
});



