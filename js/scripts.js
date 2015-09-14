var getNumCols = function(amountCols) {
  var numCols = Math.sqrt(amountCols);
  if (numCols % 1 === 0) {
    return numCols;
  }
    else {
    numCols = Math.floor(Math.sqrt(amountCols));
    numCols = (numCols + 1);
    return numCols;
    }
  };
