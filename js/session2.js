/**
 * Created by magrant on 12/10/15.
 */
module.exports = {

    //cell is alive or dead!
    newCell : function(cellState){
        return cellState;
    },

    newGrid : function(xLength, yLength){
        var newGrid = [],
            rowArray = [];

        for(var i=0; i<yLength; i++){
            for(var j=0; j<xLength; j++) {
                rowArray.push(0);
            }
            newGrid.push(rowArray);
            rowArray = [];
        }

        return newGrid;
    },

    sumNeighbors : function(grid, x, y){

        var n, ne, e, se, s, sw, w, nw, sum;

        

    }



};