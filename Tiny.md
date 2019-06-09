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
