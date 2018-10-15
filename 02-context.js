var fullname = 'Peter Parker';
var obj = {
    fullname: 'Vincent Vega',
    prop: {
      fullname: 'Brian Griffin',
      getFullname: function() {
          return this.fullname;
      }
    }
};

var test = obj.prop.getFullname;

// 01
console.log(obj.prop.getFullname());
console.log(test());


//02

// console.log(test.call(global));
// console.log(test.apply(global));

// console.log(test.call(obj));
// console.log(test.apply(obj.prop));


//03

// var boundFunction1 = test.bind(obj);
// var boundFunction2 = test.bind(obj.prop);

// console.log(boundFunction1());
// console.log(boundFunction2());
