
// You should implement your task here.

module.exports = function towelSort (matrix) {
    // Check matrix for undefined. 
    // We can also change default params of function but don't touch them for interface consistens.
    matrix = matrix || [];
    return matrix.reduce((plane, row, index) => {
        return plane.concat(!(index % 2)? row : row.reverse());
    },[]);
}
