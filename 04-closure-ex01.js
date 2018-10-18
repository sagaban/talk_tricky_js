function createCounter() {
  var counter = 0;
  var myFunction = function() {
    counter = counter + 1
    return counter;
  }
  return myFunction;
}

var increment = createCounter();
var c1 = increment();
var c2 = increment();
var c3 = increment();
console.log('example increment', c1, c2, c3);



// function createCounter() {
//   var counter = {click: 0};
//   var myFunction = function() {
//     counter.click = counter.click + 1
//     return counter;
//   }
//   return myFunction;
// }

// var increment = createCounter();
// var c1 = increment();
// var c2 = increment();
// var c3 = increment();
// console.log('example increment', c1.click, c2.click, c3.click);