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
Create an array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */

let positiveNumbers = [1, 2, 3, 4, 5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

let myPortfolio = {
    name: "Emilian",
    surname: "Kasemi",
    emailadress: "emiliankasemi@gmail.com",
    age: 35
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */

myPortfolio.hasADrivingLicense = true
// or myportofolio['hasADrivingLicense'] = true

/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */

delete myPortfolio.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */

// new object only different email
let anotherPortfolio = {
    name: "Emilian",
    surname: "Kasemi",
    emailadress: "another.email@gmail.com",
    age: 35
}

// verify that this object has a different email address than the previous one
console.log(myPortfolio.emailadress === anotherPortfolio.emailadress) // returns FALSE

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR CODE HERE */

const totalCost = 40 // let's give it a value how much we'll spend
const shippingCost = 10
const freeShipping = 50

let totalShoppingCart 

if (totalCost > freeShipping){
    totalShoppingCart = totalCost
    console.log("The total cost is ", totalShoppingCart + ".",  "You are eligible for free shipping")
}else{
    totalShoppingCart = totalCost + shippingCost
    console.log("The total cost is ", totalShoppingCart + ".", "Sorry, you are not eligible for free shipping")
    
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */

const totalCost = 100 // let's give it a value how much we'll spend
const shippingCost = 10 
const freeShipping = 50

let totalShoppingCart // totalShoppingCart = totalCost - (20/100 * totalCost) if free shipping or totalShoppingCart = (20/100 * totalCost) + shippingCost without free shipping
let blackFridayDiscount // 20% discount --> 20/100 * totalCost

if (totalCost > freeShipping){
    totalShoppingCart = totalCost - (20/100 * totalCost)
    console.log("The total cost is ", totalShoppingCart + ".",  "You are eligible for free shipping and you have 20% discount for the Black Friday!")
}else{
    totalShoppingCart = (20/100 * totalCost) + shippingCost
    console.log("The total cost is ", totalShoppingCart + ".", "Sorry, you are not eligible for free shipping, but you have 20% discount for the Black Friday!")
    
}

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */

// the car object
let car = {
    brand: "Mercedes",
    model: "C-Class",
    licensePlate: "NY 000"
}

// clone it 5 times
let car1 = Object.assign({}, car)
let car2 = Object.assign({}, car)
let car3 = Object.assign({}, car)
let car4 = Object.assign({}, car)
let car5 = Object.assign({}, car)

// change the license plate without affecting the original car
car1.licensePlate = "NY 111"
car2.licensePlate = "NY 222"
car3.licensePlate = "NY 333"
car4.licensePlate = "NY 444"
car5.licensePlate = "NY 555"

console.log(car)
console.log(car1)
console.log(car2)
console.log(car3)
console.log(car4)
console.log(car5)


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */

let carsForRent = [car, car1, car2, car3, car4, car5]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

// a new slicedCars array with car & car5 removed from carsForRent array 
let slicedCars = carsForRent.slice(1,5)

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */

console.log(typeof car)
console.log(car.licensePlate)
console.log(car.brand)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */

// new array carsForSale
let carsForSale = [carA, carB, carC]

// total number of cars present in both carsForSales and carsForRent 
let totalCars = carsForRent.length + carsForSale.length

console.log(totalCars)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

for(let x=0; x<carsForSale.length; x++){
        console.log(carsForSale[x]) 
    }

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/