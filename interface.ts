const _l = console.log;
function printLabel(labelledObj: { label: string }) {
	_l(labelledObj.label);
}

let myObj = { size : 10, label: "Size 10 Object"};
printLabel(myObj);

interface LabelledValue {
	label: string;
}

(function(){
	function printLabel(labelledObj: LabelledValue) {
			console.log(labelledObj.label);   
	}

	let myObj = {size: 10, label: "Size 10 Object"};
	printLabel(myObj);
})();

interface SquareConfig {
	color?: string;
	width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
	let newSquare = {color: "white", area: 100};
	if (config.color) {
		newSquare.color = config.color;
	}

	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);

interface Point {
	readonly x: number;
	readonly y: number;
	str: string;
	[propName: string]: any;
}

let p1: Point = { x: 10, y: 20, kkdosk: "4", yy: 5, str: "" };
console.log('p1', p1);
// TS2540: Cannot assign to 'x' because it is a constant or a read-only property.
//p1.x = 5;
{
	let a: number[] = [1,2,3,4];
	let ro: ReadonlyArray<number> = a;
	// ro[0] = 12;
	// error TS2339: Property 'push' does not exist on type 'ReadonlyArray<number>'.
	// ro.push(5);
	a = ro as number[];
}

interface SearchFunc {
	(source: string, subString: string): boolean;
}

{
	let mySearch: SearchFunc;
	mySearch = function(source: string, subString: string) {
		let result = source.search(subString);
		return result > -1;
	}
}

{
	let mySearch: SearchFunc;
	mySearch = function(src: string, sub: string): boolean {
		let result = src.search(sub);
		return result > -1;
	}
}

{
	let mySearch: SearchFunc;
	mySearch = function(src, sub) {
		let result = src.search(sub);
		return result > -1;
	}
}

interface StringArray {
	[index: number]: string;
}

{
	let myArray: StringArray;
	myArray = ["Bob", "Fred"];

	let myStr: string = myArray[0];

	console.log(myStr);
}

class Animal {
	name:string
}

class Dog extends Animal {
	breed: string;
}

interface NotOkay {
	[x: string]: Animal;
//	[x: string]: Dog;
}

interface NumberDictionary {
	[index: string]: number;
	length: number;
//	name: string;
}