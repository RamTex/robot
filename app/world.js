
function World(width, height) {
    this.width = width;
    this.height = height;

    this.isValidLongitude = (x) => x >= 0 && x < this.width;
    this.isValidLatitude = (y) => y >= 0 && y < this.height;
    this.isValidCoordinate = (x, y) => this.isValidLongitude(x) && this.isValidLatitude(y);
    this.toString = () => `${this.width}, ${this.height}, WORLD`;
}

module.exports.World = World;
