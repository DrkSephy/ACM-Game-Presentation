ACM-Game-Presentation
=====================

This repository will contain a demonstration game as well as an accompanying tutorial on how to build a simple
platformer game using impact.js. 

NOTE: Impact.js game engine will not be distributed openly. Only members of the CCNY ACM Game Development club can 
access the software for free. You may purchase your own copy [here](http://impactjs.com/).

Presentation 
-----------------
* Introduction to ImpactJS
    * Features 
    * Strengths 

* Brief introduction to JavaScript
    * Types: `strings`, `number`, `boolean`, `array`, `object`, `undefined`, `null`
    * Objects
    * `this`pointer

* Understanding the Game Loop
    * `Init` function
    * `Update` function
    * `Draw` function
    
* Entities
    * `Init` function
    * `Update` function
    * ` handleMovementTrace` function
    * `check` function
 
* Starting out your first game
    * Project structure
    * `main.js`
        * Loading modules
        * `init` function: Key bindings
        * `update` function: Camera
        * `draw` function: Draw health display
    * `player.js`
        * Property setup
        * `init` function: Add animations
        * `update` function: Handle movement
    * `goomba.js`
        * Property setup
        * `init` function: Add animations
        * `update` function: Handle movement
        * `handleMovementTrace` function: Collision handling
        * `collideWith` function: More collision handling
        * `check` function: Apply damage based on collision
        * `kill` function: Remove an entity from the game world
        * `receiveDamage` function: Deal damage to entity
    * `mushroom.js`
        * Property setup
        * `init` function: Add animations
        * `update` function: Handle movement
        * `handleMovementTrace` function: Collision handling
        * `check` function: Apply damage based on collision

