const people = [
    { name: "Alice", age: 25 }, { name: "Bob", age: 17 },
    { name: "Charlie", age: 14 }, { name: "Diana", age: 19 },
    { name: "Eve", age: 30 }, { name: "Frank", age: 13 }
];
const teen = people
.filter(({ age }) => age >= 13 && age <= 19)
.map(({ name, age },) => `${name} (${age})`);

teen.forEach(element => {
    console.log(element);
});