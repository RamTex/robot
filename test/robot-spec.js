var Robot = require('../app/robot').Robot;
var World = require('../app/world').World;
var assert = require('assert');
var sinon = require('sinon');

describe('Robot', function () {
    it('creates a robot with initially no location and no direction', function () {
        var sut = new Robot();

        assert.equal(sut.x, undefined);
        assert.equal(sut.y, undefined);
        assert.equal(sut.rotation.direction, undefined);
    });

    ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"].forEach(function (testCommand) {
        it(`does support command ${testCommand}`, function () {
            // ~ var mockWorld = sinon.stub(World.prototype, 'isValidCoordinate').yields(true);
            //TODO mock the workd with its dependencies using sinon
            var mockWorld = new World();

            var sut = new Robot(mockWorld);

            sut.execute({ cmd: testCommand, args: [1, 1] });
        });
    });
});