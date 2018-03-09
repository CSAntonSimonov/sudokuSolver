//Soduku solved by Backtracing algorithm, where we like brute forcing field by first empty element with numbers more than 1 and less than 10;


module.exports = function solveSudoku(matrix) {
    var solvedMatrix = matrix;

  	if(solved(matrix)){
  		solvedMatrix = matrix;
      }
      
      return solvedMatrix;
}

function solved(matrix){
	var cell = [];
	if(!findEmptySpace(matrix, cell)){
		return true;
	}

	var row = cell[0];
	var col = cell[1];

	for(var number = 1; number < 10; number++){
		if(!checkRow(matrix, row, number) && !checkCol(matrix, col, number) && !checkBox(matrix, row - row % 3, col - col % 3, number)){
			matrix[row][col] = number;
			if(solved(matrix)){
				return true;
			}
			matrix[row][col] = 0;
		}
	}
	return false;
}


//Finding empty space 
function findEmptySpace(matrix, cell){
	for(var i = 0; i < 9; i++){
		for(var j = 0; j < 9; j++){
			if(matrix[i][j] == 0){
				cell[0] = i;
				cell[1] = j;
				return true;
			}
		}
	}
	return false;
}


//Checking brute forcing number in row;
function checkRow(matrix, row, number){
	for(var i = 0; i < 9; i++){
		if(matrix[row][i] == number){
			return true;
		}
	}
	return false;
}


//Checking brute forcing number in col;
function checkCol(matrix, col, number){
	for(var i = 0; i < 9; i++){
		if(matrix[i][col] == number){
			return true;
		}
	}
	return false;
}

//Cheking brute forcing number in box 3x3;
function checkBox(matrix, row, col, number){
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			if(matrix[i + row][j + col] == number){
				return true;
			}
		}
	}
	return false;
}