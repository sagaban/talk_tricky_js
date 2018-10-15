function interes(x) {
  return function(y) {
    return x/100 * y;
  }
}

var iva = interes(21)

console.log(iva(30));
console.log(iva(120));
console.log(iva(77));