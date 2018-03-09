function test() {
    var matrix = [
        [5, 3, 4, 6, 7, 8, 9, 0, 0],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    if(solveMatrix(matrix)){
        printSolvedMatrix(matrix);
        return true;
    }
    else{
        return false;
    }
}

function solveMatrix(matrix) {
    var row, col;
    var cell = findEmptyCell(matrix);
    row = cell[0];
    col = cell[1];
    if(row == -1){
        return true;
    }

    for(var i = 0; i <= 9; i++){
        if(isSafe(matrix, row, col, i)){
            matrix[row][col] = i;

            if(test()){
                return true;
            }

            matrix[row][col] = 0;
        }
    }
    return false;
}

function findEmptyCell(matrix) {
    var cell = new Array(2);
    for(var i = 0; i < 9; i++){
        for(var j = 0; j < 9; j++){
            if(matrix[i][j] == 0){
                cell[0] = i;
                cell[1] = j;
            }
            else{
                cell[0] = -1;
                cell[1] = -1;
            }
        }
    }
    return cell;
}

function isSafe(matrix, row, col, n) {
    if(!usedInRow(matrix, row, n) && !usedInCol(matrix, col, n) && !usedInBlock(matrix, row - row % 3, col - col % 3, n)){
        return true;
    }
    return false;
}

function usedInRow(matrix, row, n) {
    for(var i = 0; i < 9; i++){
        if(matrix[row][i] == n){
            return true;
        }
    }
    return false;
}

function usedInCol(matrix, col, n) {
    for(var i = 0; i < 9; i++){
        if(matrix[i][col] == n){
            return true;
        }
    }
    return false;
}

function usedInBlock(matrix, boxStartRow, boxStartCol, n) {
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(matrix[i + boxStartRow][j + boxStartCol] == n){
                    return true;
                }
            }
        }
        return false;
}

function printSolvedMatrix(matrix) {
    for(var i = 0; i < 9; i++){
        for(var j = 0; j < 9; j++){
            console.log(matrix[i][j]);
        }
    }
}

test();

