ACM-Game-Presentation
=====================

This repository will contain a demonstration game as well as an accompanying tutorial on how to build a simple
platformer game using impact.js. 

NOTE: Impact.js game engine is not included in this repository. Only members of the CCNY ACM Game Development club can 
access the software for free, as given permission by [creator of ImpactJS](http://phoboslab.org/). You may purchase your own copy [here](http://impactjs.com/).

Presentation 
------------
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

Disclaimer
----------
This project is **purely for educational purposes**. As such, this is a **non-profit** project. The following media files are copyright of Nintendo:

* Mario character graphics
* Mushroom powerup image 
* Goomba character graphics

Foregounds and backgrounds are custom made assets. Media presented here are used **solely for sake of presentation**. 

Useful Links
------------

* [generate code snippets with shortcuts using Sublime Text](http://www.granneman.com/webdev/editors/sublime-text/top-features-of-sublime-text/quickly-insert-text-and-code-with-sublime-text-snippets/)
* [generate gifs from mov](https://gist.github.com/dergachev/4627207)



