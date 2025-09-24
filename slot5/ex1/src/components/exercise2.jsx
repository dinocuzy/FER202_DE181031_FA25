function Exercise2() {
    const numbers = [3, 5, 2, 8, 1, 12, 7, 9, 4, 6, 10, 11];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;
    const names = ['John', 'Charlie', 'Bob', 'David', 'Alice', 'Eve', 'Grace', 'Mallory', 'Trent', 'Peggy'];
    const students = [
        { id: 1, name: 'Hà', age: 20, grade: 8.5 },
        { id: 2, name: 'An', age: 22, grade: 7.0 },
        { id: 3, name: 'Linh', age: 21, grade: 9.0 },
        { id: 4, name: 'Minh', age: 23, grade: 6.5 },
        { id: 5, name: 'Trang', age: 20, grade: 8.0 },
        { id: 6, name: 'Huy', age: 22, grade: 7.5 },
        { id: 7, name: 'Vy', age: 21, grade: 9.5 },
        { id: 8, name: 'Quân', age: 23, grade: 6.0 },
        { id: 9, name: 'Hằng', age: 20, grade: 8.8 },
        { id: 10, name: 'Tuấn', age: 22, grade: 7.2 }
    ];
    return (
            <div>
                <h2>Exercise 2</h2>
                <p>In mảng số nguyên</p>
                <ul>
                    {numbers.map((num, index) => (
                        <li key={index}>Phần tử thứ {index} là {num}</li>
                    ))}
                </ul>
                <p>Tổng các phần tử trong mảng: {sum}</p>
                <p>Trung bình cộng các phần tử trong mảng: {avg}</p>
                <p>In mảng tên</p>
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>Tên thứ {index} là {name}</li>
                    ))}
                </ul>
                <p>Mảng tên sắp xếp theo Alphabet</p>
                <ul>
                    {names.sort().map((name, index) => (
                        <li key={index}>Tên thứ {index} là {name}</li>
                    ))}
                </ul>
                <p>In mảng học sinh(grade greater than 7.5)</p>
                <ul>
                    {students.filter(student => student.grade > 7.5)
                        .sort((a, b) => (b.grade - a.grade)).map(student => (
                            <li key={student.id}>Học sinh {student.name} có điểm {student.grade}</li>
                        ))}
                </ul>
                <p>In mảng học sinh dạng bảng</p>
                <table border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.grade}</td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan="3">Trung bình điểm</td>
                            <td>{(students.reduce((acc, curr) => acc + curr.grade, 0) / students.length).toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
    );
}
export default Exercise2;