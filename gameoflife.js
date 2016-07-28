/*Rules
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by over-population.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
function GameOfLife() {
    // private fields
    var that = this;
    var rows = 60;
    var columns = 80;
    var length = 10;
    var cells0 = new Array(rows);
    var cells1 = new Array(rows);
    var turn = 0;

    // public fields
    this.generation = 0;
    this.population = 0;

    // public methods
    this.init = function() {
        for (var i = 0; i < rows; ++i) {
            cells0[i] = new Array(columns);
            cells1[i] = new Array(columns);
            for (var j = 0; j < columns; ++j) {
                cells0[i][j] = 0;
                cells1[i][j] = 0;
            }
        }
    }

    this.clear = function() {
        for (var i = 0; i < rows; ++i) {
            for (var j = 0; j < columns; ++j) {
                cells0[i][j] = 0;
                cells1[i][j] = 0;
            }
        }
        this.generation = 0;
        this.population = 0;
        turn = 0;
    }

    var centerRow = Math.floor(rows/2);
    var centerCol = Math.floor(columns/2);

    this.loadGlider = function() {
        this.clear();
        cells0[centerRow+0][centerCol+1] = 1;
        cells0[centerRow+1][centerCol+2] = 1;
        cells0[centerRow+2][centerCol+0] = 1;
        cells0[centerRow+2][centerCol+1] = 1;
        cells0[centerRow+2][centerCol+2] = 1;
        this.population = 5;
    }

    this.loadSmallExploder = function() {
        this.clear();
        cells0[centerRow+0][centerCol+1] = 1;
        cells0[centerRow+1][centerCol+0] = 1;
        cells0[centerRow+1][centerCol+1] = 1;
        cells0[centerRow+1][centerCol+2] = 1;
        cells0[centerRow+2][centerCol+0] = 1;
        cells0[centerRow+2][centerCol+2] = 1;
        cells0[centerRow+3][centerCol+1] = 1;
        this.population = 7;
    }

    this.loadExploder = function() {
        this.clear();
        cells0[centerRow+0][centerCol+0] = 1;
        cells0[centerRow+0][centerCol+2] = 1;
        cells0[centerRow+0][centerCol+4] = 1;
	    cells0[centerRow+1][centerCol+0] = 1;
        cells0[centerRow+1][centerCol+4] = 1;
        cells0[centerRow+2][centerCol+0] = 1;
        cells0[centerRow+2][centerCol+4] = 1;
        cells0[centerRow+3][centerCol+0] = 1;
        cells0[centerRow+3][centerCol+4] = 1;
        cells0[centerRow+4][centerCol+0] = 1;
        cells0[centerRow+4][centerCol+2] = 1;
        cells0[centerRow+4][centerCol+4] = 1;
        this.population = 12;
    }

    this.loadTenCellRow = function() {
        this.clear();
        cells0[centerRow+0][centerCol+0] = 1;
        cells0[centerRow+0][centerCol+1] = 1;
        cells0[centerRow+0][centerCol+2] = 1;
        cells0[centerRow+0][centerCol+3] = 1;
        cells0[centerRow+0][centerCol+4] = 1;
        cells0[centerRow+0][centerCol+5] = 1;
        cells0[centerRow+0][centerCol+6] = 1;
        cells0[centerRow+0][centerCol+7] = 1;
        cells0[centerRow+0][centerCol+8] = 1;
        cells0[centerRow+0][centerCol+9] = 1;
        this.population = 10;
    }

    this.loadLightweightSpaceship = function() {
        this.clear();
        cells0[centerRow+0][centerCol+1] = 1;
        cells0[centerRow+0][centerCol+2] = 1;
        cells0[centerRow+0][centerCol+3] = 1;
        cells0[centerRow+0][centerCol+4] = 1;
        cells0[centerRow+1][centerCol+0] = 1;
        cells0[centerRow+1][centerCol+4] = 1;
        cells0[centerRow+2][centerCol+4] = 1;
        cells0[centerRow+3][centerCol+0] = 1;
        cells0[centerRow+3][centerCol+3] = 1;
        this.population = 9;
    }

    this.loadTumbler = function() {
        this.clear();
        cells0[centerRow+0][centerCol+1] = 1;
        cells0[centerRow+0][centerCol+2] = 1;
        cells0[centerRow+0][centerCol+4] = 1;
        cells0[centerRow+0][centerCol+5] = 1;
        cells0[centerRow+1][centerCol+1] = 1;
        cells0[centerRow+1][centerCol+2] = 1;
        cells0[centerRow+1][centerCol+4] = 1;
        cells0[centerRow+1][centerCol+5] = 1;
        cells0[centerRow+2][centerCol+2] = 1;
        cells0[centerRow+2][centerCol+4] = 1;
        cells0[centerRow+3][centerCol+0] = 1;
        cells0[centerRow+3][centerCol+2] = 1;
        cells0[centerRow+3][centerCol+4] = 1;
        cells0[centerRow+3][centerCol+6] = 1;
        cells0[centerRow+4][centerCol+0] = 1;
        cells0[centerRow+4][centerCol+2] = 1;
        cells0[centerRow+4][centerCol+4] = 1;
        cells0[centerRow+4][centerCol+6] = 1;
        cells0[centerRow+5][centerCol+0] = 1;
        cells0[centerRow+5][centerCol+1] = 1;
        cells0[centerRow+5][centerCol+5] = 1;
        cells0[centerRow+5][centerCol+6] = 1;
        this.population = 22;      
    }

    this.loadGosperGliderGun = function() {
        this.clear();
        cells0[centerRow+0][centerCol+0] = 1;
        cells0[centerRow+0][centerCol+1] = 1;
        cells0[centerRow+1][centerCol+0] = 1;
        cells0[centerRow+1][centerCol+2] = 1;
        cells0[centerRow+2][centerCol+0] = 1;
        var startRow = centerRow - 2;
        var startCol = centerCol - 16;
        cells0[startRow+0][startCol+0] = 1;
        cells0[startRow+0][startCol+1] = 1;
        cells0[startRow+1][startCol+0] = 1;
        cells0[startRow+1][startCol+1] = 1;
        startCol = centerCol - 8;
        cells0[startRow+0][startCol+1] = 1;
        cells0[startRow+0][startCol+2] = 1;
        cells0[startRow+1][startCol+0] = 1;
        cells0[startRow+1][startCol+2] = 1;
        cells0[startRow+2][startCol+0] = 1;
        cells0[startRow+2][startCol+1] = 1;
        startRow = centerRow - 4;
        startCol = centerCol + 6;
        cells0[startRow+0][startCol+1] = 1;
        cells0[startRow+0][startCol+2] = 1;
        cells0[startRow+1][startCol+0] = 1;
        cells0[startRow+1][startCol+2] = 1;
        cells0[startRow+2][startCol+0] = 1;
        cells0[startRow+2][startCol+1] = 1;
        startRow = centerRow - 4;
        startCol = centerCol + 18;
        cells0[startRow+0][startCol+0] = 1;
        cells0[startRow+0][startCol+1] = 1;
        cells0[startRow+1][startCol+0] = 1;
        cells0[startRow+1][startCol+1] = 1;
        startRow = centerRow + 8;
        startCol = centerCol + 8;
        cells0[startRow+0][startCol+0] = 1;
        cells0[startRow+0][startCol+1] = 1;
        cells0[startRow+0][startCol+2] = 1;
        cells0[startRow+1][startCol+0] = 1;
        cells0[startRow+2][startCol+1] = 1;
        startRow = centerRow + 3;
        startCol = centerCol + 19;
        cells0[startRow+0][startCol+0] = 1;
        cells0[startRow+0][startCol+1] = 1;
        cells0[startRow+1][startCol+0] = 1;
        cells0[startRow+1][startCol+2] = 1;
        cells0[startRow+2][startCol+0] = 1;
        this.population = 35;      
    }

    this.simulate = function() {
	    this.population = 0;
        if (turn == 0) {
            for (var i = 0; i < rows; ++i) {
                for (var j = 0; j < columns; ++j) {
                    var neighborCount = countNeighbors(cells0, i, j)
                    if (cells0[i][j] > 0) {
                        if (neighborCount <= 1 || neighborCount >= 4) {
                            cells1[i][j] = 0;
                        } else {
                            cells1[i][j] = 1;
                            this.population++;
                        }
                    } else {
                        if (neighborCount == 3) {
                            cells1[i][j] = 1;
                            this.population++;
                        } else {
                            cells1[i][j] = 0;
                        }
                    }
                }
            }
        } else {
            for (var i = 0; i < rows; ++i) {
                for (var j = 0; j < columns; ++j) {
                    var neighborCount = countNeighbors(cells1, i, j)
                    if (cells1[i][j] > 0) {
                        if (neighborCount <= 1 || neighborCount >= 4) {
                            cells0[i][j] = 0;
                        } else {
                            cells0[i][j] = 1;
                            this.population++;
                        }
                    } else {
                        if (neighborCount == 3) {
                            cells0[i][j] = 1;
                            this.population++;
                        } else {
                            cells0[i][j] = 0;
                        }
                    }
                }
            }
        }
        
        // take turns
        turn = 1 - turn;
        this.generation++;
    }

    this.render = function(ctx) {
        for (var i = 0; i < rows; ++i) {
            for (var j = 0; j < columns; ++j) {
                if (turn == 0)
                    drawCell(ctx, j*length, i*length, length-1, cells0[i][j]);
                else
                    drawCell(ctx, j*length, i*length, length-1, cells1[i][j]);
            }
        }
    }

    // private methods
    function drawCell(ctx, x, y, l, live) {
        if (live > 0) {
            ctx.fillStyle = "yellow";
        } else {
            ctx.fillStyle = "lightgrey";
        }
        ctx.fillRect(x, y, l, l);
    }

    function isValidRow(index) {
        return index > 0 && index < rows;
    }

    function isValidCol(index) {
        return index > 0 && index < columns;
    }

    function countNeighbors(cells, i, j) {
        var count = 0;
        if (isValidRow(i-1) && isValidCol(j-1) && cells[i-1][j-1]>0) ++count;
        if (isValidRow(i-1) && isValidCol(j)   && cells[i-1][j]>0)   ++count;
        if (isValidRow(i-1) && isValidCol(j+1) && cells[i-1][j+1]>0) ++count;
        if (isValidRow(i)   && isValidCol(j-1) && cells[i][j-1]>0)   ++count;
        if (isValidRow(i)   && isValidCol(j+1) && cells[i][j+1]>0)   ++count;
        if (isValidRow(i+1) && isValidCol(j-1) && cells[i+1][j-1]>0) ++count;
        if (isValidRow(i+1) && isValidCol(j)   && cells[i+1][j]>0)   ++count;
        if (isValidRow(i+1) && isValidCol(j+1) && cells[i+1][j+1]>0) ++count;
        return count;
    }
}
