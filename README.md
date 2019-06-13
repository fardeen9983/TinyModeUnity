# Tiny mode Unity
## Steps
1. Downgrade TextMeshPro to version 1.3.0
1. Insatll the package com.unity.properties version 0.4.0-preview
1. Install Tiny Mode package preview 0.14.1
1. Import Samples from Tiny menu options
1. To start a project in Unity Editor goto Tiny > Open Project and select a .utproject file form one of the samples directory

A Tiny project is different from  a Unity project as it is smaller 2D game that runs faster on Browsers and mobile platform and completely uses ECS over Monobehaviour scripting. Then also one Unity project can have multiple Tiny projects. On running a Tiny project WebGL build is processed and the game runs on a localhost. 

There are no scenes or gameobjects. Instead we have entites which are grouped together in Entity groups which can be multiple in the same group. These Entity groups can be loaded and unloaded at runtime. Each such group is placed as an asset in the Unity project.

One Entity Group must be specified as the Startup Group. This is the group which will be loaded automatically when your game or app starts. You must use code to load other groups as required at runtime. 

One Entity Group can be the "active" group at any given time. The purpose of specifying an active group is to determine where new Entities should be created. You can change which is the currently active group by right-clicking on an Entity Group in the Hierarchy window, and selecting Set active EntityGroup.


Tiny modules are very different form unity Modules. It is not maybe true that Tiny mode has all module equivalents of that in possession of Unity. This is because of the serious limitation on Tiny projects.

## Tiny Snake project
1. Create a new Tiny project for the Snake game
1. Place all assets in a Graphics folder and set their texture type to sprite and size to 64 and uncheck Generate Physics Shape
1. Create a new Entity Group by the name MainGroup
1. Add a Sprite to the MainGroup and name it as     **Player** and assign the Snake sprite to it.
1. Auto resize the canvas in the Player settings and change resolution to desired values
1. Create a boundary component for the Player sprite and add it to the Player Entity
1. Add 4 decimal values for the boundary values across the axis according to the width/height ratio and halfVerticalScale property of Camera
1. Add another Component for controlling movement with a float value representing Movement speed and set its value to 0.64 relative to the size of object.
1. Now we need to add tags to identify Player, it's Tail and the existing food. Create 3 separate components and add them to each of them
1. Add a script to note which object is to be moved on recieving Input. Anything having this component will be moved when input is recieved by the move script

___
## Create Systems (Scripts) 

1. Create a Typscript System script for moving entites when input is recieved

    TypeScript systems in Tiny mode give us a namespace and creates a new class extending ut.Components

    1.    Inside the script the OnUpdate method is called each time the frame is updated. 
    1. Create a static Vector3 field to specify the direction the player will move.
    1. Get the Delta time for smooth transition using 
        ```ts
        this.scheduler.deltaTime();
        ```
    4. Now find the Entity which will be moved with input, i.e, which has the component MoveWithinput
        ```ts
        this.world.forEach([ut.Entity, game.Boundary,
                game.MoveSpeed, game.MoveWithInput,
                ut.Core2D.TransformLocalPosition],
                    (entity, bounds, speed, tag, position) => { 
    
                    })
        ```
    5. Now we need to fetch the input in the runtime using 
        ```ts
        ut.Runtime.Input.getKey()
        ```
        The various keycodes are available through the Core2D class
        ```ts
        ut.Core2D.KeyCode.W
        ```
    6. On recieving input as one of the 4 keys we need to change the direction Vector3 field. Since it is static we can only access it through the game System
        ```ts
        game.SystemName.FIELD
        ```
    7. Then we can change the Position of the Entity by adding the changed direction
    1. But this poses a problem as we wont be able to move the Player smoothly by it's size. To do that we make some changes as :

        1. To continously keep the Player moving within the boundary we use Max and Min functions.
        1. To move the Player only by its size every frame.


1. Now lets create a sytem for spawing food for the snake

    1. Create a filed to keep in track of a single Food entity. So that only one remains on the screen at a time.
    1. Create a FoodGroup to hold the Food Entity with the Ball sprite
    1. Create a Spawn mehtod requiring a reference to the world and Entity group we want to spawn it in and will spawn the entity from one of the EntityGroups provided indexes onto the screen at a random postion.

1. The next script will manage the vanishing of the food as the snake collides with it and thus adding a unit to it's tail
    1. For this we need enable additional modules onto the Tiny Project, namely UTiny.HitBox2D
    1. From this module we will add a RectHitBox2D component which doesn't replace the Collider from Unity entirely but will add additional component like the HitBoxOverlapResults temporarily upon collision
1. Create a Tail system to add onto the Player a tail whenever it hits a body. Create a TailGroup for t as well

## Platformer Tiny Project
### Steps
1. Create a new Tiny project 

2. Add an animated player and background tilled forest from itch.io. Add a graphics folder and place the animated spritesheet of the character and the foreground forest tile to it. 
1. For the Animated character spritesheet
    1. Set Texture type to **Sprite** 
    1. Set sprite mode to **mutliplte**
    1. Set Mesh type to **Full Rect**
    1. Uncheck **Generate Physics Shape**
    1. Set Filter Mode to **Point**
3. Open the sprite sheet in the sprite editor
    1. Go to slice and select Grid by cell size
    1. Set size to 50X37 pixels and pivot to bottom
    1. Then click slice
    1. Once done we need to override the max size for window to 1024 and then Pixels per unit to 18.5
1. For the tileset again set the texture type to sprite, sprite mode to multiple and the pixel per unit to 16, mesh type to full rect and uncheck generate physics shape and max size to 256. Then go to sprite editor set slice dimension to 16X16 and then pivot to center. Then slice
1. Rename the EntityGroup to Level and add an empty Entity
    1. Add these components 
        1. TransformNode 
        1. TileMap
        1. TileMapRenderer 
        1. TileMapRechunk
        1. LayerSorting 
1. Open Tile Pallete window  
    1. Create a new Tile Pallete with name ForegroundTilePallete and place it in a folder by the name of Pallete in the root Tiny project
    1. Drag the Foreground tileset onto the new pallete and tiles will be autogenerated inside your folder of choice
1. To make tining easier in Unity we will use some tools provided by Unity on the [Github Repo ](https://github.com/Unity-Technologies/2d-extras)
    1. Inside this toolkit we have some assets for Tiling and other stuff. Import these assets into your main unity project to get started.
    1. Now create a new FOlder in Tiny project by the name Rule Tiles and create a new Rule Tile named Platform. The rule tile will have
        1. A default sprite
        1. A default gameobject
        1. A default collider
        1. Tiling rules
    1. To the Platfrom rule tile add a generic Tile from the created tiles for foreground (mostly the tile at index 1) and pass this rule tile to the Tile pallete.
    1. Now keep on adding rules to the rule tile Platform to complete a complex tile of size 3 X 4
    1. Change and add tiles to the rule tile to amend it
1. Then add two platforms separated 
1. Import the Background images into the graphics folder and select all for them into Texture type od sprite and change pixel per unit to 16 and mesh type to Full rect and uncheck generate physics shape and filter mode to point (no filter) and dimension to 512
1. Now create an Entity to store these elements as sprite childs in it. Add different sprites for each background graphic with differnt sorting level
1. To improve the quality of sprite now we will use a sprite atlas. In it
    1. Diable rotation and tight packing
    1. Set filter mode to Point and padding to 8
    1. To the list of Objects for packing add teh tileset.    

    This will make the tileset more cleaner and compact. You can also improve the quality of other sprites by changing default texture format in Tiny project build setting to source from jpg
1. Now create two Tile map in the Level group for Foreground and background and add the proper sorting layers. 
    1. Place Bushes and a bridge and some fences in background tilemap
    1. Place grass on foreground tilemap
1. Now crearte a new entity for holding player. To it add 
    1. A transform Node with localposition and scale
    1. A sprite2D renderer and add one of the adventurer sprite
    1. A layersorting with layer of 6
    1. A boxcolider2D with adjusted size an pivot
    1. A Dynamic rigidbody with frozen rotation
    1. A velocity2D to move the character
1. To enable physics based collision create another entity with a box collider, transform node, local position, a static rigidbody . Do not change the pivot position. Make the width as long as the platform by changing it's dimension

16. Now its time to create a component that enables the player to move on keyboard input. Let these components be
    1. PlayerInput
        * Add a vector 2 for axis input
    1. FlipScale
    1. Movement

        * Add a direction vector2, int jump force and speed and a boolean for jump action
1. Now lets create scripts for movement
    1. PlayerInputSystem to accept keyboard input. Make it execute before the inpt fence
    1. Movement system to actually move the player. Make it execute after the input fence and user input starts and execute before user input ends.
1. For animation remove the Sprite renderer from the player and instead create a new component for animation 
    1. Have two entity references in it, for the idle and run state.
    1. Create an entity child in player with 
        1. Transform node
        1. A sprite renderer with first idle sprite
        1. A layersorting
        1. A Sprite2d sequence with the first 4 idle sprites and set a framerate of maybe 6 
        1. A sprite2D sequence player to play the above sequence. Drag the idle animation entity into the sequence field and set speed to 1. 
        1. Create a same entity child for run animation
1. Create another system called Scale system which will flip the direction the player faces
1. Now create an animation system.
