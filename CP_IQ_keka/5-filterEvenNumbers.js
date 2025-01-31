// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// Solution 1

function filterEvenNumbers(arr) {
    let evenNumbers = [];

    for (let num of arr) {
        if (num % 2 == 0) {
            evenNumbers.push(num);
         }
    }

    return evenNumbers;

}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(filterEvenNumbers([10, 20, 30, 40, 50, 60]));
// console.log(filterEvenNumbers([11, 22, 33, 44, 55, 66]));


// Solution 2

//By using the filter method on the array, I can check if each element is even or not by using the modulus operator (%) with 2. 
// The element is even if the result is 0. This can be included in the new array.

function FEN(numbers) {
    return numbers.filter(num => num %2 === 0);
}