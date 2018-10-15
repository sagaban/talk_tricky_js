fullname = 'Peter Parker';
var obj = {
    fullname: 'Vincent Vega',
    prop: {
      fullname: 'Brian Griffin',
      getFullname: function() {
          return this.fullname;
      }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

console.log("-----");

console.log(test.call(global));
console.log(test.apply(global));

console.log(test.call(obj));
console.log(test.call(obj.prop));

console.log("-----");

var boundFunction1 = test.bind(obj);
var boundFunction2 = test.bind(obj.prop);

console.log(boundFunction1());
console.log(boundFunction2());
/*
Brian Griffin
Peter Parker
-----
Peter Parker
Vincent Vega
Brian Griffin
-----
Vincent Vega
Brian Griffin
*/