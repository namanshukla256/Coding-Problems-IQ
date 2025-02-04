function findLargest(arr){
    // Math.max() is used to find largest
    return Math.max(...arr);
}

console.log(findLargest([2,6, 8, 10])); // 10


// function findLargest(arr) {
//     // Suppose the first element is largest
//     let largest = arr[0];
//     // loop through each element of array to compare
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] > largest) {
//             // Update the largest element if a bigger element is found
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// console.log(findLargest([1, 2, 100, -4, 6, 1000])); //1000