let isDone: boolean = false;
console.log(isDone);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName}
I'wll be ${ age + 1 } years old next month.`;
console.log(sentence);

// array type 1
let list_1: number[] = [1,2,3];
let list_2: Array<number> = [1,2,3];

let x: [string, number];
x = ["hello", 10];
x[5] = "world";
console.log(x);

enum Color {Red, Green, Blue}

let c: Color = Color.Green;
console.log(c);

let colorName: string = Color[2];
console.log(colorName);

function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;

function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed")
}

function infiniteLoop(): never {
    while(true) {

    }
}

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

let strLength_: number = (someValue as string).length;
console.log(strLength_);