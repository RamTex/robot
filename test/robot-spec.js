var Robot = require('../app/robot').Robot;
var World = require('../app/world').World;
var assert = require('assert');

describe('Robot', function () {
    it('creates a robot with initially no location and no direction', function () {
        var sut = new Robot();

        assert.equal(sut.x, undefined);
        assert.equal(sut.y, undefined);
        assert.equal(sut.rotation.direction, undefined);
    });

    ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"].forEach(function (testCommand) {
        it(`does support command ${testCommand}`, function () {
            var mockWorld = new World(); // I am not yet familiar with mocking frameworks like sinon

            var sut = new Robot(mockWorld);

            sut.execute({ cmd: testCommand, args: [1, 1] });
        });
    });

    it(`does not leave the world`, function () {
        // This has more integration character
        var mockWorld = new World(5, 5);

        var initialPlacement = [0, 0, "SOUTH"];
        var sut = new Robot(mockWorld);
        sut.execute({ cmd: "PLACE", args: initialPlacement });
        sut.execute({ cmd: "MOVE", args: [] });

        // Ideally parse report. Treat robot as blackbox.
        // sut.execute({cmd: "REPORT", args: []});
        // 
        // TODO How well known is https://github.com/jamesshore/test-console or is there sinon approach?

        // Simpler
        assert.equal(sut.x, initialPlacement[0]);
        assert.equal(sut.y, initialPlacement[1]);
    });

});