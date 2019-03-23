const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];

class rotation {
    constructor() {
        this.direction = undefined;
        this.isValidDirection = (directionName) => -1 != DIRECTIONS.findIndex(dn => dn === directionName);
        this.setDirectionByName = function (directionName) {
            this.direction = DIRECTIONS.findIndex(dn => dn === directionName);
        };
        this.turnLeft = function () {
            this.direction--;
            if (this.direction == -1)
                this.direction = 3;
        };
        this.turnRight = function () {
            this.direction++;
            if (this.direction == 4)
                this.direction = 0;
        };
        this.toString = () => DIRECTIONS[this.direction];
    }
}

module.exports.Rotation = rotation;
module.exports.DIRECTIONS = DIRECTIONS;
