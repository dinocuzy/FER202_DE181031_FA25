const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const [first, , third = 0, ...restAges] = ages;
const isEven=num =>      num % 2 === 0;
console.log(first);
console.log(third);
console.log([...restAges].filter(isEven));
console.log(restAges);
