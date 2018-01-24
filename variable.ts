var a = 10

function f() {
    var message = "Hello, world!";
    return message; 
}

console.log(f());

function f2() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f2();
console.log(g());

function f3() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

console.log(f3());