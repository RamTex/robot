//'use strict';



const directionsEnum = Object.freeze({ "NORTH": 1, "EAST": 2, "SOUTH": 3, "WEST": 4 });


function world(width, height) {
    this.width = width;
    this.height = height;
    constructor()
    {
        console.log(`A world with ${this.width}x${this.height} fields has been created.`);
    }
}

module.exports.World = world;
