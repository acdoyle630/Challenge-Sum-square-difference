/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers){
  this.naturalNumbers = naturalNumbers;
}
SumOfASquare.prototype.sum = function( ) {
  var sumNum = this.naturalNumbers;
  this.sum =0;
  for( i=1; i<= sumNum; i++){
    this.sum += i*i;
  }
};
SumOfASquare.prototype.squreOfSum = function (  ){
  var newSquare = this.naturalNumbers;
  var sum = 0;
  for( i=1; i <= this.naturalNumbers; i++){
    sum += i;
  }
  return sum*sum;
};


