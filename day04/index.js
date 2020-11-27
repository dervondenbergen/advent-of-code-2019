var input = '357253-892942'.split('-').map(parseFloat);

function testPassword(pwd) {
  var correctLength = pwd.length === 6;
  var hasAdjacentDigit = false;
  var isIncreasing = true;

  for (var i = 0; i < 6; i++) {
    if (i > 0 && !hasAdjacentDigit) {
      hasAdjacentDigit = pwd[i] === pwd[i - 1];
    }

    if (i > 0 && isIncreasing) {
      isIncreasing = pwd[i] >= pwd[i - 1];
    }
  }

  return correctLength && hasAdjacentDigit && isIncreasing;
}

var test1 = testPassword('111111')
var test2 = testPassword('223450')
var test3 = testPassword('123789')

function countPossibilities(range) {
  var count = 0;

  for (var i = range[0]; i < range[1]; i++) {
    if (testPassword(i.toString())) {
      count ++;
    }
  }

  return count;
}

var possibilities = countPossibilities(input)
console.log(possibilities);