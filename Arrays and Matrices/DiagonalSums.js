/**
 * Created by Hris on 4.10.2016 г..
 */
function diagonalSums(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + ' ' + secondarySum);
}
diagonalSums(['20 40', '10 60']);