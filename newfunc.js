let sum = new Function("a", "b", "console.log(a+b)");

console.log(sum(3, 4));
let name = "Kamana";
function greet(message) {
  let person = new Function('name',"console.log(name)");
  person(name);
}

greet("Hello, world!");
