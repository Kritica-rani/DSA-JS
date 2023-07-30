// // native methods and js expressions

// const arr = [1, 2, 3, 4];
// arr.pop(); // this will O(1)/constant because it always removes the last element

// const obj = { a: 1 };
// obj.a; //O(1)-constant time

// //shift and unshift
// arr.shift(); //O(n)- linear beacause every index needs to move one place

// //let's talk about the time complexity of these function
// //Q.find the length of characters.

// const getLength = (chars) => {
//   //   const charaters = chars.split("");
//   //   return charaters.length;
//   let count = 0;
//   for (let i = 0; i < chars.length; i++) {
//     count++;
//   }
//   return count;
// };
// console.log(getLength("hello")); //0(n)

// //Find the time complexity(n2)

// const isUnique = (arr) => {
//   let unique = true;
//   for (i = 0; i < arr.length; i++) {
//     console.log("---outer loop---", i);
//     for (j = 0; j < arr.length; j++) {
//       console.log("---inner loop---", j);
//       if (i !== j && arr[i] == arr[j]) {
//         return (unique = false);
//       }
//     }
//   }
//   return unique;
// };

// console.log(isUnique([0, 1, 2]));

// // second method caching -> 0(n)

// const getUnique = (arr) => {
//   let caching = {};
//   let result = true;
//   for (i = 0; i < arr.length; i++) {
//     if (caching[arr[i]]) {
//       result = false;
//     } else {
//       caching[arr[i]] = true;
//     }
//   }
//   console.log("caching", caching);
//   return result;
// };
// console.log(getUnique([1, 2, 2, 3]));

// const uniqueSort = (arr) => {
//   return arr.sort((a, b) => a - b);
// };
// console.log(uniqueSort([1, 22, 2, 3, 2, 10]));

//unique sort i.e it shouldn't return any duplicate values in sorted array

// const uniqueSort = (arr) => {
//   let caching = {};
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (!caching[arr[i]]) {
//       caching[arr[i]] = true;
//       result.push(arr[i]);
//     }
//   }
//   result.sort((a, b) => a - b);
//   return result;
// };
// console.log(uniqueSort([1, 2, 3, 4, 2, 5, 1]));
