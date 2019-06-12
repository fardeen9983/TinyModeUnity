using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.Physics2D;
using UTiny.Tilemap2D;
using UTiny.HitBox2D;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace EnemyGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace LevelGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace PlayerGroup
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Ai : IComponentData
    {
        public game.AiState State;
        public game.AiState Previous;
    }
    public struct Animations : IComponentData
    {
        public game.AnimationStates State;
        public Entity Idle;
        public Entity Run;
        public Entity Jump;
        public Entity Attack01;
        public Entity Attack02;
        public Entity Attack03;
        public Entity Hurt;
        public Entity Dying;
    }
    public struct Attack : IComponentData
    {
        public float Timer;
        public bool ComboStep;
        public bool Hit;
    }
    public struct Destructible : IComponentData
    {
    }
    public struct Dying : IComponentData
    {
        public float TimePlayed;
        public float Length;
    }
    public struct FlipScale : IComponentData
    {
    }
    public struct Health : IComponentData
    {
        public float CurrentHp;
        public float MaxHp;
    }
    public struct Input : IComponentData
    {
        public Vector2 Axis;
    }
    public struct Movement : IComponentData
    {
        public Vector2 Direction;
        public sbyte Speed;
        public sbyte JumpForce;
        public bool Jumping;
        public bool ShouldJump;
        public bool OnGround;
    }
    public struct Patrol : IComponentData
    {
        public sbyte Direction;
    }
    public struct Player : IComponentData
    {
    }
    public struct PlayOneShot : IComponentData
    {
        public float TimePlayed;
        public float Length;
    }
    public enum AiState
    {
        Idle = 0
        , Patrolling = 1
        , Attacking = 2
    }
    public enum AnimationStates
    {
        Idle = 0
        , Run = 1
        , Jump = 2
        , Attack01 = 3
        , Attack02 = 4
        , Attack03 = 5
        , Hurt = 5
        , Dying = 5
    }
    public enum GameState
    {
        Initialize = 0
        , Play = 1
        , GameOver = 2
    }
    [Configuration]
    public struct GameConfig : IComponentData
    {
        public game.GameState State;
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

namespace ut.Physics2D
{
}

namespace ut.Tilemap2D
{
}

namespace ut.HitBox2D
{
}
namespace game
{
    public class AiInputSystemJS : IComponentSystem
    {
    }
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
    public class AttackSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class DeathSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class GameManagerServiceJS : IComponentSystem
    {
    }
}
namespace game
{
    public class HealthSystemJS : IComponentSystem
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
    public class PatrolSystemJS : IComponentSystem
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
