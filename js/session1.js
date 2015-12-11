/**
 * Created by magrant on 12/9/15.
 */
module.exports = {

    oneOrZero: function() {
        var random = Math.floor((Math.random() * 100) + 1) % 2;
        return random;
    },

    newGrid: function() {
        var grid = [];
        for(var i = 0; i < 10; i++){
            var row = [];
            for(var j = 0; j < 10; j++){
                row.push(this.oneOrZero());
            }
            grid.push(row);
        }
        return grid;
    },

    sumNeighbors: function(x, y) {
        var sum = 0;
        if()
    }
};