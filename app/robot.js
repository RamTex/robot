var Rotation = require('./rotation').Rotation;


class robot {
    constructor(world) {
        this.world = world;
        this.rotation = new Rotation();
        this.x = undefined;
        this.y = undefined;
        this.commands = {
            "PLACE": (args, robot) => {
                let arg0 = Number(args[0]);
                let arg1 = Number(args[1]);
                if (robot.world.isValidCoordinate(arg0, arg1) &&
                    robot.rotation.isValidDirection(args[2])) {
                    robot.x = arg0;
                    robot.y = arg1;
                    robot.rotation.setDirectionByName(args[2]);
                }
            },
            "MOVE": (_, robot) => {
                var dirPointer = {
                    "NORTH": () => robot.world.isValidLatitude(robot.y + 1) ? robot.y++ : this.beep(),
                    "EAST": () => robot.world.isValidLongitude(robot.x + 1) ? robot.x++ : this.beep(),
                    "SOUTH": () => robot.world.isValidLatitude(robot.y - 1) ? robot.y-- : this.beep(),
                    "WEST": () => robot.world.isValidLongitude(robot.x - 1) ? robot.x-- : this.beep()
                };
                if (robot.rotation.direction != undefined) {
                    dirPointer[robot.rotation]();
                }
                else {
                    console.error("Position of robot not set.");
                }
            },
            "LEFT": (_, robot) => robot.rotation.turnLeft(),
            "RIGHT": (_, robot) => robot.rotation.turnRight(),
            "REPORT": (_, robot) => console.log(robot.toString())
        };

    }
    toString() { return `${this.x}, ${this.y}, ${this.rotation}` };

    beep() { console.error("Autoprotected robot"); }

    execute(command) {
        this.commands[command.cmd](command.args, this);
    }
}

module.exports.Robot = robot;