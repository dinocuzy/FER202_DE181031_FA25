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

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
    }
}

const listPerson = [
    new Person(1, "Alice", 28),
    new Person(2, "Bob", 34),
    new Person(3, "Charlie", 22),
    new Person(4, "Diana", 19)
];

console.log("List Person:");
listPerson.forEach(person => person.showInfo());

console.log("Persons older than 20:");
listPerson.filter(person => person.age > 20).forEach(person => person.showInfo());

let totalAge = listPerson.reduce((acc, person) => acc + person.age, 0);
console.log(`Total Age: ${totalAge}`);

