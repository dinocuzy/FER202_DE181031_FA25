const arrInt = [1, 2, 3, 4, 5];
for (let i = 0; i < arrInt.length; i++) {
    console.log(arrInt[i]);
}

console.log("Array of integer: ", arrInt);
arrInt.filter(num => num % 2 === 0).forEach(num => console.log(num));
console.log("Array of integer after map to square:");
let squaredArr = arrInt.map(num => num * num);
console.log(squaredArr);
console.log("Sum of array elements:");
let sum = arrInt.reduce((acc, num) => acc + num, 0);
console.log(sum);


const listPerson = [{ id: 1, name: "Alice", age: 28 }, { id: 2, name: "Bob", age: 34 }, { id: 3, name: "Charlie", age: 22 }, { id: 4, name: "Diana", age: 19 }];
console.log("List Person:");
listPerson.forEach(person => {
    console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
});
console.log("Persons older than 20:");
listPerson.filter(person => person.age > 20).forEach(person => {
    console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
});
let totalAge = listPerson.reduce((acc, person) => acc + person.age, 0);
console.log(`Total Age: ${totalAge}`);

