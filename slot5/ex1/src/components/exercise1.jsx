export function Exercise1() {
    const hamDouble = x => x * 2;
    const isEven = x => x % 2 === 0;
    return (
        <div >
            <h2>Exercise</h2>
            <p>Double: {hamDouble(5)}</p> 
            <p>Check even number: {isEven(5)?'Chẵn':'Lẻ'}</p>
        </div >
    );
}