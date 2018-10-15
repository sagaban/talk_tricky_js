var funcs = [];

function createFunc(i) {
  return function() {
     console.log("My value: " + i);
  };
}

for (var i = 0; i < 3; i++) {
  funcs[i] = createFunc(i);
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}