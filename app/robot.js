var Rotation = require('./rotation').Rotation;

class Robot {
    constructor(world) {
        this.world = world;
        this.rotation = new Rotation();
        this.x = undefined;
        this.y = undefined;
        this.commands = {
            "PLACE": (args) => {
                let arg0 = Number(args[0]);
                let arg1 = Number(args[1]);
                if (this.world.isValidCoordinate(arg0, arg1) &&
                    this.rotation.isValidDirection(args[2])) {
                    this.x = arg0;
                    this.y = arg1;
                    this.rotation.setDirectionByName(args[2]);
                }
                else {
                    console.warn("Illegal location or direction");
                }
            },
            "MOVE": _ => {
                var dirPointer = {
                    "NORTH": () => this.world.isValidLatitude(this.y + 1) ? this.y++ : this.protect(),
                    "EAST": () => this.world.isValidLongitude(this.x + 1) ? this.x++ : this.protect(),
                    "SOUTH": () => this.world.isValidLatitude(this.y - 1) ? this.y-- : this.protect(),
                    "WEST": () => this.world.isValidLongitude(this.x - 1) ? this.x-- : this.protect()
                };
                if (this.rotation.direction != undefined) {
                    dirPointer[this.rotation]();
                }
                else {
                    // Discarding until valid PLACE command
                }
            },
            "LEFT": _ => this.rotation.turnLeft(),
            "RIGHT": _ => this.rotation.turnRight(),
            "REPORT": _ => {
                const report = this.toString()
                if (report === undefined)
                    console.warn("Robot not initalized");
                else
                    console.log(report);
            }
        };

    }

    toString() {
        const isInitalized = this.x != undefined && this.y != undefined && this.rotation != undefined;
        return isInitalized ? `${this.x}, ${this.y}, ${this.rotation}` : undefined;
    };

    protect() {
        console.warn("Autoprotected robot");
    }

    execute(command) {
        this.commands[command.cmd](command.args);
    }
}

module.exports.Robot = Robot;