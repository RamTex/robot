var readline = require('readline');
var DIRECTIONS = require('./app/rotation').DIRECTIONS;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// Dimensions of the world as reported
let width = undefined;
let height = undefined;

const frame = [
    ['╔', '══', '╗'],
    ['║', '  ', '║'],
    ['╚', '══', '╝']
];


rl.on('line', function (line) {
    // Thanks for having a look at the character based command line output. 
    // If the --autoreport option in the main application is specified, 
    // each step will be reported to allow for a consistent output.
    // Also initially the size of the world will be reported to initialize renderer with.
    // Examples for received inputs:
    //  
    //     5,5,WORLD
    //     2,3,WEST
    //
    // The first command tells this gui the dimensions of the world.
    // The subsequenct commands specify the position and head direction of the robot.


    var data = line.split(',').map(i => i.trim());
    var x = Number(data[0]);
    var y = Number(data[1]);
    if (data[2] == 'WORLD') {
        width = x;
        height = y;
        return;
    }

    const directionIndex = DIRECTIONS.findIndex(dn => dn === data[2]);
    const facing = ['↑', '→', '↓', '←'][directionIndex];

    const frameGenerator = (border) => border[0] + border[1].repeat(width) + border[2];

    const topStr = frameGenerator(frame[0]);
    const bottomStr = frameGenerator(frame[2]);

    console.log(topStr, line);
    for (var h = height - 1; h >= 0; h--) {
        midStr = frameGenerator(frame[1]);
        if (h === y) {
            var robotLine = midStr.split('');
            robotLine[1 + x * 2] = '☻';
            robotLine[1 + x * 2 + 1] = facing;
            midStr = robotLine.join('');
        }
        console.log(midStr);
    }
    console.log(bottomStr);
})
