const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const stats = ages.reduce((acc, age) => {
    acc.sum += age;
    if (age < acc.min) acc.min = age;
    if (age > acc.max) acc.max = age;
    if(age>=13 && age<=19) acc.buckets.teen++;
    if(age>=20) acc.buckets.adult++;
    return acc;
},
{
    sum: 0,
    min: Infinity,
    max: -Infinity,
    buckets: {
        teen: 0,
        adult: 0
}
}
);
console.log(`Total: ${stats.sum}, Min: ${stats.min}, Max: ${stats.max}`);
console.log(`Teens: ${stats.buckets.teen}, Adults: ${stats.buckets.adult}`);