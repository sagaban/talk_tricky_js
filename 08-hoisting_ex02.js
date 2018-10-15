function foo() {
    console.log('global foo');
}
function bar() {
    console.log('global bar');
}
function hoistMe() {
    foo(); //¿?
    bar(); //¿?
    function foo() {
        console.log('local foo');
    }
    var bar = function () {
        console.log('local bar');
    };
}
hoistMe();
