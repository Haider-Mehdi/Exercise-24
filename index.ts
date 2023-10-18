// Step 1
const str1: string  = "Whats Up?";
const str2: string  = "what up?"
console.log (str1 === str2);
console.log (str1 !== str2);

console.log("-".repeat(5))

// Step2
const text1: string = "Hello World"
const text2: string = "hello world"
console.log(text1.toLocaleLowerCase() === text2)
console.log(text1 === text2)

console.log("-".repeat(5))

// Step 3
const num1: number = 9;
const num2: number = 3;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

console.log("-".repeat(5))

// Step 4
const a: number = 3;
const b: number = 5;
const c: number = 7;

console.log (a < b && b < c)
console.log (a < b || a > c)
console.log (a < b && b > c)
console.log (a > b || b > c)

console.log("-".repeat(5))

// Step 5
const Cars = ["Honda", "Toyota", "Mercedes", "Changan", "BMW"]

console.log(Cars.includes('Mercedes'));
console.log(Cars.includes('Daihatsu'));

console.log("-".repeat(5))

const Laptops = ["HP", "Dell", "Apple", "Lenovo", "Toshiba"]
console.log(!Laptops.includes('Lenovo'));
console.log(!Laptops.includes('Fujitsu'));
