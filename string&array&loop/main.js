// ARRAY QUESTIONS

//question 1
// function left_most_digit_num(num){
//     while(num >=10){
//         num = Math.floor(num /10);
//     }
//     console.log(num); 
// }
// let x = prompt();
// left_most_digit_num(x);


//question 2

// function countARR(arr){
//     let countpositive = 0 ;
//     let countnegative = 0 ;
//     let countEven = 0 ;
//     let countOdd = 0 ;
//     for(let i = 0 ; i<arr.length ; i++){
//         num = arr[i] ; 
//         if(num > 0){
//             countpositive ++ ;
//         }
//         else if(num <0){
//             countnegative ++ ;
//         }
//         if(num % 2==0){
//             countEven ++ ; 
//         }
//         else{
//             countOdd ++ ;
//         }
//     }
//     console.log(`positive = ${countpositive}`)
//     console.log(`negative= ${countnegative}`)
//     console.log(`Even= ${countEven}`)
//     console.log(`odd= ${countOdd}`)
// }
// countARR([5, 7, -2, 0, 4, -8, -3, 6]);


//question 3

// function intArray(arr){
//     let arr2 =[] ;
//  for(let i = 0 ;  i<arr.length ; i++){
//     let num = arr[i] ;
//     if(!isNaN(num)){
//         arr2.push(num) ;
//     }
//  }
//     console.log(arr2);
// }
// intArray([675,"nhjg",78,'badr','ahmed',NaN,undefined,7,8,9])


//question 4


// function slice(array, start = 0, end = array.length) {
//     if (start < 0) {
//         start = array.length + start;
//         if (start < 0) start = 0; 
//     }

//     if (end < 0) {
//         end = array.length + end;
//     }
//     let result = [];
//     for (let i = start; i < end && i < array.length; i++) {
//         result.push(array[i]);
//     }
    
//     return result;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(slice(arr, 1, 3));  
// console.log(slice(arr, -2));    
// console.log(slice(arr));        

//question 5

// function maxarray(arr) {
//     let maxarr = []; 
//     for (let i = 0; i < arr.length; i++) {
//         let num = Math.max(...arr[i]); 
//         maxarr.push(num);
//     }
//     console.log(maxarr);
// }
// maxarray([[24, 5, 2], [5, 3, 6], [4, 9, 10]]); 

//question 6

// function abbreviateString(S) {
//     if (S.length > 10) {
      
//         let abbreviation = S[0] + (S.length - 2) + S[S.length - 1];
//         return abbreviation;
//     } else {
//                return S;
//     }
// }
// console.log(abbreviateString("word"));                    
// console.log(abbreviateString("internationalization"));   
// console.log(abbreviateString("pneumonoultramicroscopicsilicovolcanoconiosis")); 

//question 7

// function hasTwoKindsOfCharacters(S) {
//     if (S.length !== 4) {
//         return false;
//     }
    
//     let charCount = {};


//     for (let char of S) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

  
//     let values = Object.values(charCount);

  
//     return values.length === 2 && values.every(count => count === 2);
// }


// console.log(hasTwoKindsOfCharacters("ASSA")); // Output: true
// console.log(hasTwoKindsOfCharacters("STTO")); // Output: false
// console.log(hasTwoKindsOfCharacters("FFEE")); // Output: true


//question 9

// function findFirstAndLastIndex(arr, char) {
//     let firstIndex = -1;
//     let lastIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === char) {
//             if (firstIndex === -1) {
//                 firstIndex = i;
//             }
//             lastIndex = i;
//         }
//     }

//     return firstIndex !== -1 ? [firstIndex, lastIndex] : [-1, -1];
// }

// // Example usage:
// console.log(findFirstAndLastIndex(['h', 'e', 'l', 'l', 'o'], 'l')); // Output: [2, 3]
// console.log(findFirstAndLastIndex(['c','i','r','c','u','m','l','o','c','u','t','i','o','n','n','n'], 'c')); // Output: [0, 8]


//question 10

// function canSumToTarget(arr, target) {
//     for (let start = 0; start < arr.length; start++) {
//         let sum = 0;
//         for (let end = start; end < arr.length; end++) {
//             sum += arr[end];
//             if (sum === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// // Example usage:
// console.log(canSumToTarget([1, 2, 3, 4, 5], 7));  
// console.log(canSumToTarget([1, 2, 3, 4, 5], 10));


// String QUESTIONS

//question 1

// function reverseString(str) {
//  let reverseString= str.split('').reverse().join('');
//  console.log(reverseString);
// }

// reverseString("ahmed");


//question 2

// function areStringsEqual(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(areStringsEqual("Eraa", "eraa")); 
// console.log(areStringsEqual("Mohamed", "Moamen")); 


//question 3

// function isAllUppercase(str) {
//     return str === str.toUpperCase();
// }


// console.log(isAllUppercase("HELLO")); 
// console.log(isAllUppercase("Hello"));  
// console.log(isAllUppercase("WORLD"));  



// For LOOP QUESTIONS

//question 1

// function checkFifteen(a, b) {
//     return a === 15 || b === 15 || (a + b) === 15;
// }

// console.log(checkFifteen(5, 15));
// console.log(checkFifteen(10, 5)); 
// console.log(checkFifteen(5, 5));  

//question 2

// function isPerfectSquare(num) {
//     if (num < 0) return false; 
//     let sqrt = Math.sqrt(num);
//     return sqrt === Math.floor(sqrt);
// }


// console.log(isPerfectSquare(16));  
// console.log(isPerfectSquare(25)); 
// console.log(isPerfectSquare(18));
