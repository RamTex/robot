const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

class Rotation {
    constructor() {
        this.direction = undefined;

        this.isValidDirection = (directionName) => -1 != DIRECTIONS.findIndex(dn => dn === directionName);
        this.setDirectionByName = (directionName) => this.direction = DIRECTIONS.findIndex(dn => dn === directionName);
        this.toString = () => DIRECTIONS[this.direction];
    }

    turnLeft() {
        if (this.direction == undefined)
            return;
        this.direction--;
        if (this.direction == -1)
            this.direction = 3;
    };

    turnRight() {
        if (this.direction == undefined)
            return;
        this.direction++;
        if (this.direction == 4)
            this.direction = 0;
    };
}

module.exports.Rotation = Rotation;
module.exports.DIRECTIONS = DIRECTIONS;
