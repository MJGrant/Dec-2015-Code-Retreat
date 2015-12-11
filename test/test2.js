/**
 * Created by magrant on 12/11/15.
 */
var test = require('unit.js');
var session2 = require('../js/session2.js');

describe('SESSION 2: Initial game state tests', function() {
    it("creates a live cell", function () {
        var cell = session2.newCell(1);
        test.assert(cell === 1);
    });

    it("creates a dead cell", function () {
        var cell = session2.newCell(0);
        test.assert(cell === 0);
    });

    it("creates the initial grid", function() {
        var x = 5; //width of grid
        var y = 10; //height of grid
        var grid = session2.newGrid(x,y); //pass in dimensions
        test.assert(grid.length === y); //how many rows (y)
        test.assert(grid[0].length === x); //how many in a row (x)
    });

    /*
    it("sums the neighbors of a cell", function() {
        //give it a cell to sum the neighbors of, for the sake of this test we'll give it a hard x and y
        //an empty (not found) cell counts as a dead cell

        //fake the grid so we aren't also testing grid-making logic
        var grid = [
            [1, 1, 0],
            [0, 1, 0],
            [1, 0, 1]
        ];

        //test the neighbors of the cell at (row: 1, cell index: 1)
        var sum = session2.sumNeighbors(1, 1);
        test.assert(sum === 4);
    });
    */

});