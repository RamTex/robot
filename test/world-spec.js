var World = require('../app/world').World;
var assert = require('assert');

describe('world', function () {
    it('creates a world with valid dimensions', function () {
        var w = new World(15, 20);
        assert.equal(w.width, 15);
        assert.equal(w.height, 20);
    })
});