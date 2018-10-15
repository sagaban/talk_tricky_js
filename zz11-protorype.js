var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m());

// var p = Object.create(o);
// p.a = 12; 

var p = {
  a: 14
}
Object.setPrototypeOf(p, o);
// p es un objeto que hereda de o

console.log(p.m());