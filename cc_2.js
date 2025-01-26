//Task 1 - Store Inventory

//Declare an array called products with initial product names
let products = ["Desk", "Chair", "Lamp", "Bookshelf", "Couch"];

//Add a new product to the array
products.push("Table");

//Remove the last product from the array
products.pop();

//Logging the updated product list to the console
console.log("Updated product list:", products);

//Task 2 - Student Scores

//Declare an array called scores with initial numerical values
let scores = [83, 92, 80, 86, 95];

//Updating the second score in the array
scores[1] = 94;

//Calculating the average of all scores
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

//Logging the updated array and the average score to the console
console.log("Updated scores:", scores);
console.log("Average score:", average);
