declare namespace game {
enum AiState {
  Idle = 0,
  Patrolling = 1,
  Attacking = 2,
}
}
declare namespace game {
enum AnimationStates {
  Idle = 0,
  Run = 1,
  Jump = 2,
  Attack01 = 3,
  Attack02 = 4,
  Attack03 = 5,
  Hurt = 5,
  Dying = 5,
}
}
declare namespace game {
enum GameState {
  Initialize = 0,
  Play = 1,
  GameOver = 2,
}
}
declare namespace entities.game.Bootstrap {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.EnemyGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.LevelGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace entities.game.PlayerGroup {

class Component extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Component): Component;
  static _toPtr(p: number, v: Component): void;
  static _tempHeapPtr(v: Component): number;
  static _dtorFn(v: Component): void;
}

}
declare namespace game {

class Ai extends ut.Component {
  constructor(State?: AiState, Previous?: AiState);
  State: AiState;
  Previous: AiState;
  
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Ai): Ai;
  static _toPtr(p: number, v: Ai): void;
  static _tempHeapPtr(v: Ai): number;
  static _dtorFn(v: Ai): void;
}

}
declare namespace game {

class Animations extends ut.Component {
  constructor(State?: AnimationStates, Idle?: Entity, Run?: Entity, Jump?: Entity, Attack01?: Entity, Attack02?: Entity, Attack03?: Entity, Hurt?: Entity, Dying?: Entity);
  State: AnimationStates;
  Idle: Entity;
  Run: Entity;
  Jump: Entity;
  Attack01: Entity;
  Attack02: Entity;
  Attack03: Entity;
  Hurt: Entity;
  Dying: Entity;
  
  static readonly Idle: EntityComponentFieldDesc;
  static readonly Run: EntityComponentFieldDesc;
  static readonly Jump: EntityComponentFieldDesc;
  static readonly Attack01: EntityComponentFieldDesc;
  static readonly Attack02: EntityComponentFieldDesc;
  static readonly Attack03: EntityComponentFieldDesc;
  static readonly Hurt: EntityComponentFieldDesc;
  static readonly Dying: EntityComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Animations): Animations;
  static _toPtr(p: number, v: Animations): void;
  static _tempHeapPtr(v: Animations): number;
  static _dtorFn(v: Animations): void;
}

}
declare namespace game {

class Attack extends ut.Component {
  constructor(Timer?: number, ComboStep?: boolean, Hit?: boolean);
  Timer: number;
  ComboStep: boolean;
  Hit: boolean;
  static readonly Timer: ComponentFieldDesc;
  static readonly ComboStep: ComponentFieldDesc;
  static readonly Hit: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Attack): Attack;
  static _toPtr(p: number, v: Attack): void;
  static _tempHeapPtr(v: Attack): number;
  static _dtorFn(v: Attack): void;
}

}
declare namespace game {

class Destructible extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Destructible): Destructible;
  static _toPtr(p: number, v: Destructible): void;
  static _tempHeapPtr(v: Destructible): number;
  static _dtorFn(v: Destructible): void;
}

}
declare namespace game {

class Dying extends ut.Component {
  constructor(TimePlayed?: number, Length?: number);
  TimePlayed: number;
  Length: number;
  static readonly TimePlayed: ComponentFieldDesc;
  static readonly Length: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Dying): Dying;
  static _toPtr(p: number, v: Dying): void;
  static _tempHeapPtr(v: Dying): number;
  static _dtorFn(v: Dying): void;
}

}
declare namespace game {

class FlipScale extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: FlipScale): FlipScale;
  static _toPtr(p: number, v: FlipScale): void;
  static _tempHeapPtr(v: FlipScale): number;
  static _dtorFn(v: FlipScale): void;
}

}
declare namespace game {

class Health extends ut.Component {
  constructor(CurrentHp?: number, MaxHp?: number);
  CurrentHp: number;
  MaxHp: number;
  static readonly CurrentHp: ComponentFieldDesc;
  static readonly MaxHp: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Health): Health;
  static _toPtr(p: number, v: Health): void;
  static _tempHeapPtr(v: Health): number;
  static _dtorFn(v: Health): void;
}

}
declare namespace game {

class Input extends ut.Component {
  constructor(Axis?: Vector2);
  Axis: Vector2;
  static readonly Axis: Vector2ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Input): Input;
  static _toPtr(p: number, v: Input): void;
  static _tempHeapPtr(v: Input): number;
  static _dtorFn(v: Input): void;
}

}
declare namespace game {

class Movement extends ut.Component {
  constructor(Direction?: Vector2, Speed?: number, JumpForce?: number, Jumping?: boolean, ShouldJump?: boolean, OnGround?: boolean);
  Direction: Vector2;
  Speed: number;
  JumpForce: number;
  Jumping: boolean;
  ShouldJump: boolean;
  OnGround: boolean;
  static readonly Direction: Vector2ComponentFieldDesc;
  
  
  static readonly Jumping: ComponentFieldDesc;
  static readonly ShouldJump: ComponentFieldDesc;
  static readonly OnGround: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Movement): Movement;
  static _toPtr(p: number, v: Movement): void;
  static _tempHeapPtr(v: Movement): number;
  static _dtorFn(v: Movement): void;
}

}
declare namespace game {

class Patrol extends ut.Component {
  constructor(Direction?: number);
  Direction: number;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Patrol): Patrol;
  static _toPtr(p: number, v: Patrol): void;
  static _tempHeapPtr(v: Patrol): number;
  static _dtorFn(v: Patrol): void;
}

}
declare namespace game {

class Player extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Player): Player;
  static _toPtr(p: number, v: Player): void;
  static _tempHeapPtr(v: Player): number;
  static _dtorFn(v: Player): void;
}

}
declare namespace game {

class PlayOneShot extends ut.Component {
  constructor(TimePlayed?: number, Length?: number);
  TimePlayed: number;
  Length: number;
  static readonly TimePlayed: ComponentFieldDesc;
  static readonly Length: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayOneShot): PlayOneShot;
  static _toPtr(p: number, v: PlayOneShot): void;
  static _tempHeapPtr(v: PlayOneShot): number;
  static _dtorFn(v: PlayOneShot): void;
}

}
declare namespace game {

class GameConfig extends ut.Component {
  constructor(State?: GameState);
  State: GameState;
  
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: GameConfig): GameConfig;
  static _toPtr(p: number, v: GameConfig): void;
  static _tempHeapPtr(v: GameConfig): number;
  static _dtorFn(v: GameConfig): void;
}

}
declare namespace ut.Core2D.layers {

class Default extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Default): Default;
  static _toPtr(p: number, v: Default): void;
  static _tempHeapPtr(v: Default): number;
  static _dtorFn(v: Default): void;
}

}
declare namespace ut.Core2D.layers {

class TransparentFX extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TransparentFX): TransparentFX;
  static _toPtr(p: number, v: TransparentFX): void;
  static _tempHeapPtr(v: TransparentFX): number;
  static _dtorFn(v: TransparentFX): void;
}

}
declare namespace ut.Core2D.layers {

class IgnoreRaycast extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: IgnoreRaycast): IgnoreRaycast;
  static _toPtr(p: number, v: IgnoreRaycast): void;
  static _tempHeapPtr(v: IgnoreRaycast): number;
  static _dtorFn(v: IgnoreRaycast): void;
}

}
declare namespace ut.Core2D.layers {

class Water extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Water): Water;
  static _toPtr(p: number, v: Water): void;
  static _tempHeapPtr(v: Water): number;
  static _dtorFn(v: Water): void;
}

}
declare namespace ut.Core2D.layers {

class UI extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: UI): UI;
  static _toPtr(p: number, v: UI): void;
  static _tempHeapPtr(v: UI): number;
  static _dtorFn(v: UI): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAnimationClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
  static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
  static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
  static _dtorFn(v: AssetReferenceAnimationClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceAudioClip extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
  static _toPtr(p: number, v: AssetReferenceAudioClip): void;
  static _tempHeapPtr(v: AssetReferenceAudioClip): number;
  static _dtorFn(v: AssetReferenceAudioClip): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSprite extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
  static _toPtr(p: number, v: AssetReferenceSprite): void;
  static _tempHeapPtr(v: AssetReferenceSprite): number;
  static _dtorFn(v: AssetReferenceSprite): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceSpriteAtlas extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
  static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
  static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
  static _dtorFn(v: AssetReferenceSpriteAtlas): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTexture2D extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
  static _toPtr(p: number, v: AssetReferenceTexture2D): void;
  static _tempHeapPtr(v: AssetReferenceTexture2D): number;
  static _dtorFn(v: AssetReferenceTexture2D): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTileBase extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTileBase): AssetReferenceTileBase;
  static _toPtr(p: number, v: AssetReferenceTileBase): void;
  static _tempHeapPtr(v: AssetReferenceTileBase): number;
  static _dtorFn(v: AssetReferenceTileBase): void;
}

}
declare namespace ut.EditorExtensions {

class AssetReferenceTMP_FontAsset extends ut.Component {
  constructor(guid?: string, fileId?: number, type?: number);
  guid: string;
  fileId: number;
  type: number;
  
  
  static readonly type: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
  static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
  static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
  static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
}

}
declare namespace ut.EditorExtensions {

class CameraCullingMask extends ut.Component {
  constructor(mask?: number);
  mask: number;
  static readonly mask: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
  static _toPtr(p: number, v: CameraCullingMask): void;
  static _tempHeapPtr(v: CameraCullingMask): number;
  static _dtorFn(v: CameraCullingMask): void;
}

}
declare namespace ut.EditorExtensions {

class EntityLayer extends ut.Component {
  constructor(layer?: number);
  layer: number;
  static readonly layer: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
  static _toPtr(p: number, v: EntityLayer): void;
  static _tempHeapPtr(v: EntityLayer): number;
  static _dtorFn(v: EntityLayer): void;
}

}
declare namespace game {
var AiInputSystemJS: ut.SystemJS;
}
declare namespace game {
var AnimationSystemJS: ut.SystemJS;
}
declare namespace game {
var AttackSystemJS: ut.SystemJS;
}
declare namespace game {
var CollisionSystemJS: ut.SystemJS;
}
declare namespace game {
var DeathSystemJS: ut.SystemJS;
}
declare namespace game {
var GameManagerServiceJS: ut.SystemJS;
}
declare namespace game {
var HealthSystemJS: ut.SystemJS;
}
declare namespace game {
var MovementSystemJS: ut.SystemJS;
}
declare namespace game {
var PatrolSystemJS: ut.SystemJS;
}
declare namespace game {
var PlayerInputSystemJS: ut.SystemJS;
}
declare namespace game {
var ScaleSystemJS: ut.SystemJS;
}


declare namespace Module {

}

