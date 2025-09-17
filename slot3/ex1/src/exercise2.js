const sum=(...nums)=>{
   return nums.reduce((total, element)=> {
        if(typeof element==='number' && !isNaN(element)){
            return total+element;
        }
            return total;
    }, 0);
}
console.log(sum(1,2,3));
console.log(sum(1,'x',4));

const avg = (...nums) => {
    if(nums.length===0) return 0;
    return sum(...nums)/nums.length;
}
console.log(avg(1,2,3,4));
console.log(avg());
