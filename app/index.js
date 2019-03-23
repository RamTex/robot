var readline = require('readline');

var Robot = require('./robot').Robot;
var World = require('./world').World;

readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
}).on('line', main);


function parseCommand(line) {
    var commandAndParameters = line.split(' ');
    var command = {
        cmd: commandAndParameters[0],
        args: commandAndParameters.length > 1 ? commandAndParameters[1].split(',') : undefined
    };
    return command;
}

// This flag allows to report the current status after each step.
const isAutoReport = process.argv[2] === "-a" || process.argv[2] === "--autoreport";

const world = new World(5, 5);
if (isAutoReport)
    console.log(world.toString());
const robot = new Robot(world);


/// TAG: Main loop, processing each command from stdin
function main(rawCommand) {
    const command = parseCommand(rawCommand);
    try {
        robot.execute(command);
        if (isAutoReport)
            console.log(robot.toString());
    }
    catch (err) {
        console.error("Error executing command.");
    }
}

