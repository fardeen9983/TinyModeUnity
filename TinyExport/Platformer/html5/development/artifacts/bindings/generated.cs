using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.Tilemap2D;
using UTiny.Physics2D;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Level
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct FlipScale : IComponentData
    {
    }
    public struct Movement : IComponentData
    {
        public Vector2 Direction;
        public sbyte Speed;
        public sbyte JumpForce;
        public bool Jump;
    }
    public struct PlayerInput : IComponentData
    {
        public Vector2 axis;
    }
    public struct Animations : IComponentData
    {
        public Entity Idle;
        public Entity Run;
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.Tilemap2D
{
}

namespace ut.Physics2D
{
}
namespace game
{
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class AnimationSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.InputFence))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class MovementSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class PlayerInputSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateAfter(typeof(UTiny.Shared.UserCodeEnd))]
    public class ScaleSystemJS : IComponentSystem
    {
    }
}
