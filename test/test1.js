/**
 * Created by magrant on 12/9/15.
 */

//test framework http://unitjs.com/
//run in terminal with mocha test

var test = require('unit.js');
var session1 = require('../js/session1.js');

describe('Initial game state tests', function() {
    it("gets a 1 or a 0", function() {

        var oneOrZero = session1.oneOrZero();
        test.assert(oneOrZero === 1 || oneOrZero === 0);
    });

    it("generates a 10 by 10 grid", function() {

        var newGrid = session1.newGrid();
        test.assert(newGrid.length === 10);
        test.assert(newGrid[0].length === 10);
    });

    it("contains a 1 or a zero in each cell", function() {
        //iterate through grid arrays
        //assert one or zero in each index

        var newGrid = session1.newGrid();
        newGrid.forEach(function(row) {
            row.forEach(function(cell) {
                test.assert(cell === 0 || cell === 1);
            });
        });
    });
});

describe('Game logic', function() {

    /*
    it("calculate sum of neighbors", function() {

        var grid = [];
        for(var i = 0; i < 10; i++){
            var row = [];
            for(var j = 0; j < 10; j++){
                row.push(1);
            }
            grid.push(row);
        }

        var sum = session1.sumNeighbors(5, 5);
        test.assert(sum === 8);
    })
    */
});