var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let robot = new robot(new world(5, 5));

rl.on('line', function (line) {
    let command = parseCommand(line);
    robot.execute(command);
})

function parseCommand(line) {
    var commandAndParameters = line.split(' ');
    var command = {
        cmd: commandAndParameters[0],
        args: commandAndParameters.length > 1 ? commandAndParameters[1].split(',') : undefined
    };
    return command;
}