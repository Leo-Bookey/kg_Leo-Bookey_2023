/**
* The following program take command line arguments for
* an array of integers, then printing the phonetic equivalent
* for each integer in the array
* @author Leo Bookey
*/

var myArgs = process.argv.slice(2);
const equivalents = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var finalWords = [];

/**
* Function that converts one integer
* @param  {integer} rawInt  integer to be converted
*/
function integerToWord(rawInt) {
  var completeWord = '';
  while (rawInt != 0) {
    completeWord = equivalents[rawInt % 10] + completeWord;
    rawInt = Math.floor(rawInt/10);
  }
  finalWords.push(completeWord);
}


myArgs.forEach(integerToWord);
process.stdout.write(finalWords.join(', '));
console.log('');
