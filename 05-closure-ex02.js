var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function() {
    console.log("My value: " + i);
  };
}
// console.log("Valor de i: ", i);

for (var j = 0; j < 3; j++) {
  funcs[j]();
}