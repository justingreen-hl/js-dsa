const hashmap = new Map();
hashmap.set(1, "Value 1");
hashmap.set(2, "Value 2");

console.log(hashmap);

let map = {};
// method 1 - assign property and value directly to object
map.name = "Bob";

// method 2 - more verbose and precise way to add an element
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperty(map, "food", {
  value: "Burger",
  writable: false,
  enumerable: true,
})

console.log(map)