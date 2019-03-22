const commands = {
    "PLACE": (args, robot) => {
        if (robot.isValidPosition(args[0], args[1])) {
            robot.x = args[0];
            robot.y = args[1];
            robot.direction = args[2];
        }
    },
    "MOVE": (_, robot) => { console.log(" move"); },
    "LEFT": (_, robot) => { console.log(" left"); },
    "RIGHT": (_, robot) => { console.log(" right"); },
    "REPORT": (_, robot) => console.log(`Robot (${robot.x}, ${robot.y}, ${robot.direction}).`),
};

function robot(world) {
    this.world = world;

    this.direction = undefined;
    this.x = undefined;
    this.y = undefined;


    this.execute = (command) => commands[command.cmd](command.args, this);

    this.isValidPosition = (x, y) => x >= 0 && x <= 5 && y >= 0 && y <= 5;
}