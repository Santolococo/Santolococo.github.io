
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(base) {
  // base {number} @param: base = n
  var tri = '';
  // The empty string var will store string data that is added with each iteration of the while loop
  while (tri.length < base) {
  // The while loop will continue its process of adding '#' with each iteration,until it completes an iteration that results in: (n * #)
  console.log(tri += '#'); 
  // The console.log statement tells the code to print +1 '#' to the terminal with each iteration.
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        }
        else if (i % 5 === 0) {
            console.log('buzz')
        }
        else if (i % 3 === 0) {
            console.log('fizz')
        }
        else console.log(i)
    }

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
// The fxn's one @param {Number} (size) can accept any number value.
  var board = '';
  for (var y = 0; y < size; y++) { // 1st For Loop
  for (var x = 0; x < size; x++) { // 2nd For Loop
  if ((x + y) % 2 == 0) 
    board += " ";
    else
      board += "#";
    }
      board += "\n";
  }
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
