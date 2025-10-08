const people = [
    { name: "Alice", age: 25 }, { name: "Bob", age: 17 },
    { name: "Charlie", age: 14 }, { name: "Diana", age: 19 },
    { name: "Eve", age: 30 }, { name: "Frank", age: 13 }
];
people.sort((a,b)=>a.age-b.age);
people.forEach(element => {
    console.log(`${element.name} (${element.age})`);
});
const isTeen = ({ age }) => age >= 13 && age <= 19;
const teen = people
.filter(({ age }) => isTeen({ age }))
.map(({ name, age },) => `${name} (${age})`);
const countTeen=people.reduce((acc, { age }) => {
    if (isTeen({ age })) acc++;
    return acc;
}, 0);
console.log(`Number of teenagers: ${countTeen}`);
teen.forEach(element => {
    console.log(element);
});
people.sort((a,b)=>a.name.localeCompare(b.name));
people.slice(0,2).forEach(element => {
    console.log(`${element.name} (${element.age})`);
});