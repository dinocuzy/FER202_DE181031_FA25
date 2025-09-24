function Exercise3() {
    //1.Arrow function cơ bản – double & isEven
    const hamDouble = x => x * 2;
    const isEven = x => x % 2 === 0;
    //2.Rest parameter – tính tổng và trung bình
    const sum = (...args) => {
        return args.reduce((acc, curr) => {
            if (typeof curr === 'number' && !isNaN(curr)) {
                return acc + curr;
            }
            return acc;

        }, 0);
    }
    const avg = (...args) => {
        if (args.length === 0) return 0;
        return (sum(...args) / args.length).toFixed(2);
    }
    //3.Destructuring object lồng nhau – lấy địa chỉ
    const person = {
        name: 'Costas',
        address: {
            street: "Lalaland 12"
        }
    };
    const {
        address: {
            street = "",
            city = "Unknown"
        } = {}
    } = person;

    return (
        <div>
            <h2>Exercise 3</h2>
            <p>1.Arrow function cơ bản – double & isEven</p>
            <p>Double: {hamDouble(5)}</p>
            <p>Check even number: {isEven(5) ? 'Chẵn' : 'Lẻ'}</p>
            <p>2.Rest parameter – tính tổng và trung bình</p>
            <p>Tổng: {sum(1, 2, 3, 4, 5)}</p>
            <p>Trung bình: {avg(1, 2, 3, 4, 5)}</p>
            <p>3.Destructuring object lồng nhau – lấy địa chỉ</p>
            <p>Street: {street}</p>
            <p>City: {city}</p>

        </div>
    );
}
export default Exercise3;