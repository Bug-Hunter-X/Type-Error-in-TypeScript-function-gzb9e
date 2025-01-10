function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("Inputs must be numbers");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(1, 2); // Works correctly
let result2 = addSafe("hello", "world"); // Handles the error gracefully