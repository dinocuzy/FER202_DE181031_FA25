function Exercise4() {
    //4.Destructuring array + skip + default
    const ages = [20, 19, 28, 21, 18, 25, 30, 22, 24, 26, 29, 23, 27, 31];
    const [first, , third = 0, ...restAges] = ages;
    //5.Map + filter – danh sách teen
    const people = [
        { name: 'David', age: 22 },
        { name: 'John', age: 17 },
        { name: 'Charlie', age: 19 },
        { name: 'Jane', age: 15 },
        { name: 'Richard', age: 20 },
        { name: 'Mike', age: 16 },
        { name: 'Alice', age: 18 },
        { name: 'Bob', age: 21 }
    ];
    const teens = people.filter(({ age }) => age >= 13 && age <= 19)
        .map(({ name, age }) => `Name: ${name} Age: ${age}`);
    const filterAges = people.filter(({ age }) => age > 15);
    const seccond=people[1];
    const isTeen=people=>age>=13 && age<=19;
    
    //6.Sort + slice – doanh nghiệp theo năm kết thúc
    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];
    const sortedCompanies = companies.sort((a, b) => (a.end - b.end)).slice(0, 3);
    //7.Spread vs. rest – bất biến & gộp mảng
    const company0New = { ...companies[0], start: companies[0].start + 1 };
    //gộp mảng
    const concatAll = (array) => [].concat(...array);
    //8.Reduce nâng cao – thống kê tuổi
    const ageStats = ages.reduce((stats, age) => {
        stats.sum += age;
        if (age < stats.min) stats.min = age;
        if (age > stats.max) stats.max = age;
        if (age >= 13 && age <= 19) stats.bucket.teen++;
        if (age >= 20) stats.bucket.adult++;
        return stats;
    }, {
        sum: 0,
        min: Infinity,
        max: -Infinity,
        bucket: {
            teen: 0,
            adult: 0
        }
    });

    return (
        <div>
            <h2>Exercise 4</h2>
            <p>4.Destructuring array + skip + default</p>
            <p>First: {first}</p>
            <p>Third: {third}</p>
            <p>Rest ages: {restAges.join(', ')}</p>
            <p>5.Map + filter – danh sách teen</p>
            <p>Teens List</p>
            <ul>
                {teens.map((teen, index) => (
                    <li key={index}>{teen}</li>
                ))}
            </ul>
            <p>6.Sort + slice – doanh nghiệp theo năm kết thúc</p>
            <p>Top 3 companies that ended earliest</p>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Start</th>
                        <th>End</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCompanies.map((company, index) => (
                        <tr key={index}>
                            <td>{company.name}</td>
                            <td>{company.category}</td>
                            <td>{company.start}</td>
                            <td>{company.end}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>7.Spread vs. rest – bất biến & gộp mảng</p>
            <p>Original Company One : {JSON.stringify(companies[0])}</p>
            <p>Updated Company One : {JSON.stringify(company0New)}</p>
            <p>Concatenated arrays: {concatAll([[1, 2], [3, 4], [5]]).join(', ')}</p>
            <p>8.Reduce nâng cao – thống kê tuổi</p>
            <p>Age: {ages.join(', ')}</p>
            <p>Tổng tuổi: {ageStats.sum}</p>
            <p>Tuổi nhỏ nhất: {ageStats.min}</p>
            <p>Tuổi lớn nhất: {ageStats.max}</p>
            <p>Số người tuổi teen: {ageStats.bucket.teen}</p>
            <p>Số người tuổi trưởng thành: {ageStats.bucket.adult}</p>
        </div>
    );
}
export default Exercise4;