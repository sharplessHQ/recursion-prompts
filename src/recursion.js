/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var n = array.length;
  var result = array[0];
  if (n === 0) {
    return n;
  } else {
    return result += sum(array.slice(1, n));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var n = array.length;
  var result = 0;
  if (!Array.isArray(array)) {
    return array;
  }
  array.forEach(function(item) {
    result += arraySum(item);
  });
  return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (Math.abs(n) === 1) {
    return false;
  } else if (Math.abs(n) === 0) {
    return true;
  } else {
    return isEven(Math.abs(n) - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  var sum = n - 1;
  if (n < 0) {
    return -sumBelow(-n);
  } else if (n === 0) {
    return 0;
  } else {
    return sum += sumBelow(n-1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (Math.abs(x - y) <= 1) {
    return [];
  }
  if (y > x) {
    var result = [x + 1];;
    return result.concat(range(x + 1, y));
  } else {
    var result = [x - 1];;
    return result.concat(range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  var result = 1;
  if (exp === 0) {
    return 1;
  }
  if (exp > 0 && exp % 2 === 0) {
    result = exponent(base, exp / 2);
    return result * result;
  } else if (exp > 0 && exp % 2 === 1) {
    return base * exponent(base, exp - 1);
  } else {
    return 1 / exponent(base, -exp);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var n = string.length;
  var reversedStr = string[n-1];
  if (n === 1) {
    return reversedStr;
  }
  return reversedStr += reverse(string.substr(0, n - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  const newStr = string.replace(/[\W_]/g, '').toLowerCase();
  var n = newStr.length;
  if (n === 0 || n === 1) {
    return true;
  }
  if (newStr[0] === newStr[n-1]) {
    return palindrome(newStr.substring(1, n-1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (y < 0) {
    return modulo(x, -y)
  }
  if (x < 0) {
    return -modulo(-x, y);
  }
  if (x < y) {
    return x;
  }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  }
  if (y < 0 && x < 0) {
    return multiply(-x, -y);
  } else if (y < 0) {
    return -multiply(x, -y);
  }
  return x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } else if (y < 0 && x < 0) {
    return divide(-x, -y);
  } else if (y < 0) {
    return -divide(x, -y);
  } else if (x < 0) {
    return -divide(-x, y);
  } else if (x < y) {
    return 0;
  }
  return divide(x-y, y) + 1;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x <= 0) {
    return null;
  }
  if (y <= 0) {
    return null;
  }
  if (x < y) {
    return gcd(y, x);
  }
  var next = x % y;
  if (next === 0) {
    return y;
  }
  return gcd(y, next);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  var n = Math.max(str1.length, str2.length);
  if (n === 0) {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.substr(1), str2.substr(1));
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str];
  }
  var array = [str[0]];
  return array.concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return array;
  }
  var reversedArray = array.slice(array.length - 1);
  return reversedArray.concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  }
  var result = [value];
  return result.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return ['1'];
  }
  var result = fizzBuzz(n-1);
  if (n % 3 === 0 && n % 5 === 0) {
    result.push('FizzBuzz');
  } else if (n % 3 === 0) {
    result.push('Fizz');
  } else if (n % 5 === 0) {
    result.push('Buzz');
  } else {
    result.push(n.toString());
  }
  return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    return countOccurrence(array.slice(1), value) + 1;
  }
  return countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1) {
    return [callback(array[0])];
  }
  var result = [callback(array[0])];
  return result.concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (itemKey in obj) {
    if (itemKey === key) {
      count++;
    }
    if (typeof(obj[itemKey]) === 'object') {
      count += countKeysInObj(obj[itemKey], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (key in obj) {
    if (obj[key] === value) {
      count++;
    }
    if (typeof(obj[key]) === 'object') {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if (typeof(obj[key]) === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  var result = fibonacci(n - 1);
  result[n] = result[n - 1] + result[n - 2];
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  }
  var capitalizedArray = [array[0].toUpperCase()];
  return capitalizedArray.concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  }
  var capitalizedArray = [array[0][0].toUpperCase() + array[0].substr(1)];
  return capitalizedArray.concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (key in obj) {
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
    if (typeof(obj[key]) === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  if (!Array.isArray(array)) {
    return array;
  }
  array.forEach(function(item) {
    result = result.concat(flatten(item));
  });
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj;
  }
  if (obj[str[0]] !== undefined) {
    obj[str[0]] ++;
  } else {
    obj[str[0]] = 1;
  }
  return letterTally(str.substring(1), obj);;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  }
  var result = compress(list.slice(1));
  if (result[0] !== list[0]) {
    result.unshift(list[0]);
  }
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }
  var result = augmentElements(array.slice(1), aug);
  result.unshift(array[0].concat([aug]));
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) {
    return [];
  }
  var result = minimizeZeroes(array.slice(1));
  if (array[0] !== 0 || result[0] !== 0) {
    result.unshift(array[0]);
  }
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }
  var result = alternateSign(array.slice(0, array.length - 1));
  if (array.length % 2 === 0) {
    if (array[array.length - 1] > 0) {
      array[array.length - 1] = - array[array.length - 1];
    }
  } else {
    if (array[array.length - 1] < 0) {
      array[array.length - 1] = - array[array.length - 1];
    }
  }
  result.push(array[array.length - 1]);
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var string = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  if (str.length == 0) {
    return '';
  }
  var result = numToText(str.substr(0, str.length-1));
  if (str[str.length-1] === ' ' || !(Number(str[str.length-1]) >= 0)) {
    result += str[str.length-1];
  } else {
    result += (string[Number(str[str.length-1])]);
  }
  return result;
};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
// var node = document.body;
var tagCount = function(tag, node) {

  // if (node === undefined) {
  //   var node = document.body;
  //   // var result = [];

  // }
  // if (node.nodeName && (node.nodeName === tag.toUpperCase())) {
  //   result = result.concat([node.nodeName]);
  // }
  // if (node.hasChildNodes()) {
  //   var children = node.childNodes;
  //   children.forEach(function(item) {
  //     tagCount(tag, item);
  //   });
  // }
  // return result.length;
  // // return result;


  var node = document.body;
  var result = [];
  var filterNode = function(node) {
    if (node.nodeName && node.nodeName === tag.toUpperCase()) {
      result.push(node);
    }
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i ++) {
        filterNode(children[i]);
      }
    }
  };
  filterNode(node);
  return result.length;
  // return result;

};

// var getElementsByClassName = function(className) {
//   // your code here
//   // Use document.body, element.childNodes, and element.classList in your solution
//   var body = document.body;
//   var result = [];
//   var filterCalss = function(body) {
//     if (body.classList && body.classList.contains(className)) {
//       result.push(body);
//     }
//     if (body.hasChildNodes()) {
//       var children = body.childNodes;
//       for (var i = 0; i < children.length; i ++) {
//         filterCalss(children[i]);
//       }
//     }
//   };
//   filterCalss(body);
//   return result;
// };

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  if (array.length === 0) {
    return null;
  }
  if (array[max] === target) {
    return max;
  }
  return binarySearch(array.slice(0, max), target);
};

//should be invoked with two arguments -- Below used 4.....................................................................................................................................................................................................................................................
// var binarySearch = function(array, target, min = 0, max = array.length - 1) {
//   if (array.length === 0) {
//     return null;
//   }
//   if (min > max) {
//     return null;
//   }
//   var mid = Math.floor((max + min) / 2);
//   if (array[mid] === target) {
//     return mid;
//   } else if (array[mid] < target) {
//     return binarySearch(array, target, mid + 1, max);
//   } else {
//     return binarySearch(array, target, min, mid - 1);
//   }
// };
//should be invoked with two arguments -- Above used 4.....................................................................................................................................................................................................................................................


// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms

var mergeSort = function(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var subArray1 = array.slice(0, mid);
  var subArray2 = array.slice(mid, array.length);
  return mergeSub(mergeSort(subArray1), mergeSort(subArray2));
};

var mergeSub = function(subArray1, subArray2) {
  var result = [];
  var n1 = 0;
  var n2 = 0;
  while (n1 < subArray1.length && n2 < subArray2.length) {
    if (subArray1[n1] <= subArray2[n2]) {
      result.push(subArray1[n1]);
      n1++;
    } else {
      result.push(subArray2[n2]);
      n2++;
    }
  }
  return result.concat(subArray1.slice(n1)).concat(subArray2.slice(n2));
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var result =[];
    if (input.length === 0) {
      return [];
    }
    input.forEach(function(item) {
      if (typeof(item) === 'object') {
        result = result.concat([clone(item)]);
      } else {
        result = result.concat([item]);
      }
    });
  } else {
    var result = {};
    for (key in input) {
      if (typeof(input[key]) === 'object') {
        result[key] = clone(input[key]);
      } else {
        result[key] = input[key];
      }
    }
  }
  return result;
};
