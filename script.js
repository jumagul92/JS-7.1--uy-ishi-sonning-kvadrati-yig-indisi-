function squareSum(numbers) {
   let square = numbers.map((item)=> item*item) 
//    console.log(square);
   let totalSum = square.reduce(((sum, current)=> sum + current),0)
return totalSum
}

console.log(squareSum([1, 5]));
console.log(squareSum([1, 6, 4, 8, 9]));
console.log(squareSum([3, 4, 2, 1]));