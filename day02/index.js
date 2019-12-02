// input
function cleanProgram() {
  return [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,10,23,1,23,6,27,1,6,27,31,1,13,31,35,1,13,35,39,1,39,13,43,2,43,9,47,2,6,47,51,1,51,9,55,1,55,9,59,1,59,6,63,1,9,63,67,2,67,10,71,2,71,13,75,1,10,75,79,2,10,79,83,1,83,6,87,2,87,10,91,1,91,6,95,1,95,13,99,1,99,13,103,2,103,9,107,2,107,10,111,1,5,111,115,2,115,9,119,1,5,119,123,1,123,9,127,1,127,2,131,1,5,131,0,99,2,0,14,0];
}


console.log('----------------------- PART 1 -----------------------');

// computer
  // 1 => add 
  // 2 => multiply
  // 99 => exit
function walkThrough(program) {
  var workingProgram = program.slice();
  
  for (var i = 0; i < workingProgram.length; ) {
    
    if (workingProgram[i] === 1) {
      var value1 = workingProgram[i + 1];
      var value2 = workingProgram[i + 2];
      var result = workingProgram[i + 3];
            
      workingProgram[result] = workingProgram[value1] + workingProgram[value2];
      i += 4;
    }
    
    if (workingProgram[i] === 2) {
      var value1 = workingProgram[i + 1];
      var value2 = workingProgram[i + 2];
      var result = workingProgram[i + 3];
                  
      workingProgram[result] = workingProgram[value1] * workingProgram[value2];
      i += 4;
    }
    
    if (workingProgram[i] === 99) {
      return workingProgram;
    }
  }
  
}

// test
console.log(walkThrough([1,0,0,0,99]), 'becomes', [2,0,0,0,99])
console.log(walkThrough([2,3,0,3,99]), 'becomes', [2,3,0,6,99])
console.log(walkThrough([2,4,4,5,99,0]), 'becomes', [2,4,4,5,99,9801])
console.log(walkThrough([1,1,1,4,99,5,6,0,99]), 'becomes', [30,1,1,4,2,5,6,0,99])

// run program
var newProgram = cleanProgram();
  // restore the gravity assist program 
newProgram[1] = 12;
newProgram[2] = 2;
var calculation = walkThrough(newProgram);
console.log('first part of new program is', calculation[0])

console.log('----------------------- PART 2 -----------------------');

function findNounAndVerb(solution) {
  for (var noun = 0; noun <= 99; noun++) {
    for (var verb = 0; verb <= 99; verb++) {
      var program = cleanProgram();
      program[1] = noun;
      program[2] = verb;
      var calculation = walkThrough(program);
      if (calculation[0] === solution) {
        return {noun, verb}
      }
    }
  }
}

var shouldBe = 19690720;
var matchingValues = findNounAndVerb(shouldBe);
console.log('result is', 100 * matchingValues.noun + matchingValues.verb)

