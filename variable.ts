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

function f4(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f4(true);  // returns '10'
f4(false); // returns 'undefined'

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }

    return sum;
}

for (var i = 0; i < 10; i++) {
    // setTimeout(() => console.log(i), 100 * i);
}

for (var i = 0; i < 10; i++) {
    (function(i) {
        // setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}

let hello = "Hello!";

function f5(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }

    return a;
}

try {
    throw "oh no!";
} catch(e) {
    console.log("Oh whell.");
}
// error TS2304: Cannot find name 'e'. 
//console.log(e)
_a++;
var _a: number;
console.log(_a);
let a2;
function foo() {
    return a2;
}

foo();


console.log(foo());

function f6() {
    var x;
    var x;

    if (true) {
        var x;
    }
}

// error TS2451: Cannot redeclare block-scoped variable '_x'.
// let _x = 10;
// let _x = 20;

// TS2300: Duplicate identifier 'x'.
// function f7(x) {
//     let x = 100;
// }

function f7(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}

console.log(f7(false, 0));
console.log(f7(true, 0))

function sumMatrix_(matrix: number[][]) {
	let sum = 0;
	for (let i = 0; i < matrix.length; i++) {
			var currentRow = matrix[i];
			for (let i = 0; i < currentRow.length; i++) {
					sum += currentRow[i];
			}
	}
	return sum;
}

console.log(sumMatrix_([[1,2],[3,4]]));

function theCityThatAlwaysSleeps() {
	let getCity;

	if (true) {
		let city = "Seattle";
		getCity = function() {
			return city;
		}

		return getCity();
	}
}

console.log(theCityThatAlwaysSleeps());

for (let i = 0; i < 10; i++) {
	// setTimeout(function() { console.log(i); }, 100 * i);
}

const numLivesForCat = 9;
const kitty = {
	name: "Aurora",
	numLives: numLivesForCat,
}

// TS2540: Cannot assign to 'kitty' because it is a constant or a read-only property.
// kitty = {
// 	name: "Danielle",
// 	numLives: numLivesForCat,
// }

kitty.name = "Rory";
kitty.name = "Kitty";
kitty.numLives--;

console.log(kitty);

let input = [1, 2];
let [first, second] = input;

[first, second] = [second, first];

console.log(first, second);

function _f1([first, second]: [number, number]) {
	console.log(first);
	console.log(second);
}

_f1([1,2]);

let [_first, ..._rest] = [1,2,3,4];
console.log(_first);
console.log(_rest);

[first] = [1,2,3,4];
console.log(first);

let o = {
	a: "foo",
	b: 12,
	c: "bar",
};

{
	let {a, b} = o;
	console.log(a, b);

	({a, b} = {a: "baz", b: 101});
	{
		let {a: newName1, b: newName2} = o;

		console.log(a, b);
	}
}

{
	let { a, ...passthrough} = o;
	let total = passthrough.b + passthrough.c.length;
	console.log(total);
}

{
	let {a, b}: {a: string, b: number} = o;
}

// var kkd = Symbol("kkdosk");
// console.log(kkd);

type C = { a: string, b? :number }
function _f11({a, b} : C): void {

}

function f10({ a, b } = { a: "", b: 0}): void {
	console.log(a, b);
}

f10();

class C1 {
	p = 12;
	public m(): void {

	}
}

let c1 = new C1();
let clone = { ...c1 };

console.log(clone.p);
// console.log(clone.m())