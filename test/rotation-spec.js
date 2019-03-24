var Rotation = require('../app/rotation').Rotation;//TODO use {} 
var DIRECTIONS = require('../app/rotation').DIRECTIONS;
var assert = require('assert');

describe('Rotation', function () {
    it('has no initial direction', function () {
        var sut = new Rotation();
        assert.equal(sut.direction, undefined);
    });

    DIRECTIONS.forEach(function (testDirection, index) {
        it(`understands direction ${testDirection}`, function () {
            var sut = new Rotation();
            sut.setDirectionByName(testDirection);

            assert.equal(sut.direction, index);
        });
    });

    it(`complains when illegal direction names passed`, function () {
        var sut = new Rotation();
        sut.setDirectionByName("SOUTHWEST");

        assert.throws(() => sut.setDirectionByName(testDirection), Error);
    });

    it('changes direction after rotation', function () {
        var sut = new Rotation();
        sut.setDirectionByName("NORTH");

        let directionBefore = sut.direction;
        sut.turnLeft();
        let directionAfter = sut.direction;

        assert.notEqual(directionBefore, directionAfter);
    });
    it('looks same direction after a multiple of 4 turns,', function () {
        const initialDirectionName = "EAST";
        let initialDirection = {
            name: initialDirectionName,
            direction: DIRECTIONS.findIndex(dn => dn === initialDirectionName)
        };
        var sut = new Rotation();
        sut.setDirectionByName(initialDirection.name);

        for (let turns = 0; turns < 2 * DIRECTIONS.length; turns++) {
            sut.turnRight();
        }

        assert.equal(initialDirection.direction, sut.direction);
    });
});
