/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR CODE HERE */

let reverseArray = [1, 3, 5]

reverseArray = reverseArray.reverse()
console.log("Reversed array is : " + reverseArray)

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/* WRITE YOUR CODE HERE */

let findMax = [5, 500, 50]

console.log(Math.max(...findMax));

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

/* WRITE YOUR CODE HERE */

let findMin = [5, 500, 50]

console.log(Math.min(...findMin));

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

/* WRITE YOUR CODE HERE */

let findEvenNumbers = [4,5,7,8,14,45,76];

let evenNumbers = findEvenNumbers.filter(number => number % 2 === 0);
console.log('Even Numbers: ' + evenNumbers)

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/* WRITE YOUR CODE HERE */
let Numbers = [4,5,7,8,14,45,76];

let deleteEvenNumbers = Numbers.filter(n => n % 2 !== 0);

console.log(deleteEvenNumbers)

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

let strings = ["Strive School", "is fantastic",
  "I am enjoying it", "so much", "I can't stop", "exercising"
];

strings = strings.map(string => string.replace(/[aeiou]/g, ''));

console.log(strings);

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* WRITE YOUR CODE HERE */

let increaseByOne = [1, 2, 3, 4];

for (let i = 0; i < increaseByOne.length; i++){
    increaseByOne[i] += 1;
}

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/