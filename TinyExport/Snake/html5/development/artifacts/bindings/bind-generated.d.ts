declare namespace entities.game.FoodGroup {

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
declare namespace entities.game.MainGroup {

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
declare namespace entities.game.TailGroup {

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

class Boundary extends ut.Component {
  constructor(minX?: number, maxX?: number, minY?: number, maxY?: number);
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  static readonly minX: ComponentFieldDesc;
  static readonly maxX: ComponentFieldDesc;
  static readonly minY: ComponentFieldDesc;
  static readonly maxY: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Boundary): Boundary;
  static _toPtr(p: number, v: Boundary): void;
  static _tempHeapPtr(v: Boundary): number;
  static _dtorFn(v: Boundary): void;
}

}
declare namespace game {

class FoodTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: FoodTag): FoodTag;
  static _toPtr(p: number, v: FoodTag): void;
  static _tempHeapPtr(v: FoodTag): number;
  static _dtorFn(v: FoodTag): void;
}

}
declare namespace game {

class MoveSpeed extends ut.Component {
  constructor(speed?: number);
  speed: number;
  static readonly speed: ComponentFieldDesc;
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MoveSpeed): MoveSpeed;
  static _toPtr(p: number, v: MoveSpeed): void;
  static _tempHeapPtr(v: MoveSpeed): number;
  static _dtorFn(v: MoveSpeed): void;
}

}
declare namespace game {

class MoveWithInput extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: MoveWithInput): MoveWithInput;
  static _toPtr(p: number, v: MoveWithInput): void;
  static _tempHeapPtr(v: MoveWithInput): number;
  static _dtorFn(v: MoveWithInput): void;
}

}
declare namespace game {

class PlayerTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: PlayerTag): PlayerTag;
  static _toPtr(p: number, v: PlayerTag): void;
  static _tempHeapPtr(v: PlayerTag): number;
  static _dtorFn(v: PlayerTag): void;
}

}
declare namespace game {

class TailTag extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: TailTag): TailTag;
  static _toPtr(p: number, v: TailTag): void;
  static _tempHeapPtr(v: TailTag): number;
  static _dtorFn(v: TailTag): void;
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
declare namespace ut.Core2D.layers {

class Grid extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Grid): Grid;
  static _toPtr(p: number, v: Grid): void;
  static _tempHeapPtr(v: Grid): number;
  static _dtorFn(v: Grid): void;
}

}
declare namespace ut.Core2D.layers {

class Cutscene extends ut.Component {
  constructor();
  static readonly cid: number;
  static readonly _view: any;
  static readonly _isSharedComp: boolean;

  static _size: number;
  static _fromPtr(p: number, v?: Cutscene): Cutscene;
  static _toPtr(p: number, v: Cutscene): void;
  static _tempHeapPtr(v: Cutscene): number;
  static _dtorFn(v: Cutscene): void;
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
var EatingSystemJS: ut.SystemJS;
}
declare namespace game {
var FoodSpawnSystemJS: ut.SystemJS;
}
declare namespace game {
var InputMovementSystemJS: ut.SystemJS;
}
declare namespace game {
var TailSystemJS: ut.SystemJS;
}


declare namespace Module {

}

