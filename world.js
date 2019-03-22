var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const directionsEnum = Object.freeze({ "NORTH": 1, "EAST": 2, "SOUTH": 3, "WEST": 4 });

const commands = {
    "PLACE": (args) => { },
    "MOVE": (_) => { },
    "LEFT": (_) => { },
    "RIGHT": (_) => { },
    "REPORT": (_) => { },
};

function robotClass() {
    constructor(world)
    {
        this.world = world;
    }

    this.position = function () {
        this.x = undefined;
        this.z = undefined;
    }


    this.execute = function (direction) {

        commands[direction.cmd](direction.args);
    }

    this.report = () => console.log("Robot position: (x=" + this.position.x + ", y=" + this.position.y + ", Facing=" + "x");

    this.isValidPosition = (x, y) => x >= 0 && x <= 5 && y >= 0 && y <= 5;
}

function world() {
    this.world = [];
    constructor()
    {
        this.width = 5;
        this.height = 5;
        console.log("constructor");
    }


}

let robot = new robotClass(new world());

rl.on('line', function (line) {

    //robot.report();

    let command = parse(line);

    robot.execute(command);

    // if (robot.canMove(command)) {
    //     robot.move(command);
    // }



    //console.log(parse(line));
})

function parse(line) {
    var commandAndParameters = line.split(' ');
    var command = {
        cmd: commandAndParameters[0],
        args: commandAndParameters.length > 1 ? commandAndParameters[1].split(',') : undefined
    };
    return command;
}