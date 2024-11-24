// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const customerName = prompt("Pleace enter your name");
console.log(customerName);

if (customerName != null) {
  alert("Welcome " + customerName + "! Please continue to make your order.")
} else {
  alert("An error has occured. Refresh the page.")
};


// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt("Please, choose one of the following choices by typing it's number in the field:\n1. Pizza\n2. Salads\n3. Kebab\n4. Nuggets");

let choiceMade = parseInt(foodChoice);

let food = "";

if (choiceMade === 1) {
  alert("You have chosen pizza. Click ok to choose what pizza.");
  food = "pizza";
} else if (choiceMade === 2) {
  alert("You have chosen salad. click ok to choose what salad.");
  food = "salad";
} else if (choiceMade === 3) {
  alert("You have chosen kebab. click ok to choose what kebab.");
  food = "kebab";
} else if (choiceMade === 4) {
  alert("You have chosen Nuggets. click ok to continue.");
  food = "nuggets";
} else {
  alert("An error has occured. Refresh the page and try again.");
};

console.log(food);

// Step 3 - Subtype choice
// Your code goes here


//prompt fopr alternativ needs to be a variable


// pizza sub menu
let pizzaMenu = "";

if (food === "pizza") {
  pizzaMenu = prompt("Please, choose one of the following choices by typing it's number in the field:\n1. Vesuvio\n2. Hawaii\n3. Pepperoni\n4. Vegetarian");
  let chosenPizza = parseInt(pizzaMenu);
  if (chosenPizza === 1) {
    alert("You have chosen Vesuvio. Click to continue.");
  } else if (chosenPizza === 2) {
    alert("You have chosen Hawaii. Click to continue.");
  } else if (chosenPizza === 3) {
    alert("You have chosen Pepperoni. Click to continue.");
  } else if (chosenPizza === 4) {
    alert("You have chosen Vegetarian. Click to continue.");
  } else {
    alert("An error has occured. Refresh the page and try again.CHOSENPIZZA");
  };
};




//Salad submenu
let saladMenu = "";

if (food === "salad") {
  saladMenu = prompt("Please, choose one of the following choices by typing it's number in the field:\n1. Ceasar salad\n2. Waldorfsalad\n3. Chicken Curry");
  let chosenSalad = parseInt(saladMenu);
  if (chosenSalad === 1) {
    alert("You have chosen Ceasar salad. Click to continue.");
  } else if (chosenSalad === 2) {
    alert("You have chosen Waldorfsalad. Click to continue.");
  } else if (chosenSalad === 3) {
    alert("You have chosen Chicken Curry. Click to continue.");
  } else {
    alert("Invalid input. Refresh the page to start over.");
  };
};


// kebab sub menu

let kebabMenu = "";

if (food === "kebab") {
  kebabMenu = prompt("Please, choose one of the following choices by typing it's number in the field:\n1. Kebab in pita\n2. Kebab salad\n3. Kebab roll");
  let chosenKebab = parseInt(kebabMenu);
  if (chosenKebab === 1) {
    alert("You have chosen kebab in pita. Click to continue.");
  } else if (chosenKebab === 2) {
    alert("You have chosen kebab salad. Click to continue.");
  } else if (chosenKebab === 3) {
    alert("You have chosen kebab roll. Click to continue.");
  } else {
    alert("Invalid input. Refresh the page to start over.");
  };
};


// Nuggets sub menu
let nuggetsMenu = "";

if (food === "nuggets") {
  nuggetsMenu = prompt("Please chose if you want nuggets wit or without fries, by typing in the corresponding number:\n1. Without fries\n2. With frieds");
  let chosennuggets = parseInt(nuggetsMenu);
  if (chosennuggets === 1) {
    alert("You have chosen nuggets without fries. Click to continue.");
  } else if (chosennuggets === 2) {
    alert("You have chosen nuggets with fries. Click to continue.");
  } else {
    alert("Invalid input. Refresh the page to start over.");
  };
};


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
