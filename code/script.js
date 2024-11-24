// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const customerName = prompt(`Pleace enter your name`);

if (customerName != null) {
  alert(`Welcome ${customerName} ! Please continue to make your order.`)
} else {
  alert(`An error has occured. Refresh the page.`)
};


// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Pizza\n2. Salads\n3. Kebab\n4. Nuggets`);

let choiceMade = parseInt(foodChoice);
let finalOrder = "";

let food = "";

if (choiceMade === 1) {
  alert(`You have chosen pizza. Click ok to choose what pizza.`);
  food = "pizza";
} else if (choiceMade === 2) {
  alert(`You have chosen salad. click ok to choose what salad.`);
  food = "salad";
} else if (choiceMade === 3) {
  alert(`You have chosen kebab. click ok to choose what kebab.`);
  food = "kebab";
} else if (choiceMade === 4) {
  alert(`You have chosen Nuggets. click ok to continue.`);
  food = "nuggets";
} else {
  alert(`An error has occured. Refresh the page and try again.`);
};

console.log(food);

// Step 3 - Subtype choice
// Your code goes here

// pizza sub menu
let pizzaMenu = "";
let orderName = "";

if (food === "pizza") {
  pizzaMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Vesuvio\n2. Hawaii\n3. Pepperoni\n4. Vegetarian`);
  let chosenPizza = parseInt(pizzaMenu);

  if (chosenPizza === 1) {
    alert(`You have chosen Vesuvio. Click to continue.`);
    orderName = "Vesuvio";
  } else if (chosenPizza === 2) {
    alert(`You have chosen Hawaii. Click to continue.`);
    orderName = "Hawaii";
  } else if (chosenPizza === 3) {
    alert(`You have chosen Pepperoni. Click to continue.`);
    orderName = "Pepperoni";
  } else if (chosenPizza === 4) {
    alert(`You have chosen Vegetarian. Click to continue.`);
    orderName = "Vegetarian";
  } else {
    alert(`An error has occured. Refresh the page and try again.`);
  };

};



//Salad sub menu
let saladMenu = "";

if (food === "salad") {
  saladMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Ceasar salad\n2. Waldorfsalad\n3. Chicken Curry`);
  let chosenSalad = parseInt(saladMenu);
  if (chosenSalad === 1) {
    alert(`You have chosen Ceasar salad. Click to continue.`);
    orderName = "Ceasar salad";
  } else if (chosenSalad === 2) {
    alert(`You have chosen Waldorfsalad. Click to continue.`);
    orderName = "Waldorfsalad";
  } else if (chosenSalad === 3) {
    alert(`You have chosen Chicken Curry. Click to continue.`);
    orderName = "Chicken Curry";
  } else {
    alert(`Invalid input. Refresh the page to start over.`);
  };
};


// kebab sub menu

let kebabMenu = "";

if (food === "kebab") {
  kebabMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Kebab in pita\n2. Kebab salad\n3. Kebab roll`);
  let chosenKebab = parseInt(kebabMenu);
  if (chosenKebab === 1) {
    alert(`You have chosen kebab in pita. Click to continue.`);
    orderName = "Kebab in pita";
  } else if (chosenKebab === 2) {
    alert(`You have chosen kebab salad. Click to continue.`);
    orderName = "Kebab salad";
  } else if (chosenKebab === 3) {
    alert(`You have chosen kebab roll. Click to continue.`);
    orderName = "Kebab roll";
  } else {
    alert(`Invalid input. Refresh the page to start over.`);
  };
};


// Nuggets sub menu
let nuggetsMenu = "";

if (food === "nuggets") {
  nuggetsMenu = prompt(`Please chose if you want nuggets wit or without fries, by typing in the corresponding number:\n1. Without fries\n2. With frieds`);
  let chosennuggets = parseInt(nuggetsMenu);
  if (chosennuggets === 1) {
    alert(`You have chosen nuggets without fries. Click to continue.`);
    orderName = "Nuggets";
  } else if (chosennuggets === 2) {
    alert(`You have chosen nuggets with fries. Click to continue.`);
    orderName = "Nuggets with fries";
  } else {
    alert(`Invalid input. Refresh the page to start over.`);
  };
};


finalOrder = orderName;
console.log(finalOrder);


// Step 4 - Age
// Your code goes here
let portionSize = "";
let getAge = prompt(`Pleace enter your age and we will adjust the portions size`);

const age = parseInt(getAge);
if (age <= 12) {
  portionSize = "small";
} else {
  portionSize = "large";
};



// Step 5 - Order confirmation
// Your code goes here
let price = 0;
let smallPrice = 10;

//Price list for every item and it's size (small/large)
if (finalOrder === "Vesuvio" && portionSize === "large") {
  price = 100;
} else if (finalOrder === "Vesuvio" && portionSize === "small") {
  price = 100 - smallPrice;
} else if (finalOrder === "Hawaii" && portionSize === "large") {
  price = 105;
} else if (finalOrder === "Hawaii" && portionSize === "small") {
  price = 105 - smallPrice;
} else if (finalOrder === "Pepperoni" && portionSize === "large") {
  price = 110;
} else if (finalOrder === "Pepperoni" && portionSize === "small") {
  price = 110 - smallPrice;
} else if (finalOrder === "Vegetarian" && portionSize === "large") {
  price = 115;
} else if (finalOrder === "Vegetarian" && portionSize === "small") {
  price = 115 - smallPrice;
} else if (food === "salad" && portionSize === "large") {
  price = 125;
} else if (food === "salad" && portionSize === "small") {
  price = 125 - smallPrice;
} else if (finalOrder === "Kebab in pita" && portionSize === "large") {
  price = 110;
} else if (finalOrder === "Kebab in pita" && portionSize === "small") {
  price = 110 - smallPrice;
} else if (finalOrder === "Kebab salad" && portionSize === "large") {
  price = 125;
} else if (finalOrder === "Kebab salad" && portionSize === "small") {
  price = 125 - smallPrice;
} else if (finalOrder === "Kebab roll" && portionSize === "large") {
  price = 125;
} else if (finalOrder === "Kebab roll" && portionSize === "small") {
  price = 125 - smallPrice;
} else if (finalOrder === "Nuggets" && portionSize === "large") {
  price = 100;
} else if (finalOrder === "Nuggets" && portionSize === "small") {
  price = 80;
} else if (finalOrder === "Nuggets with fries" && portionSize === "large") {
  price = 120;
} else if (finalOrder === "Nuggets with fries" && portionSize === "small") {
  price = 100;
} else {
  alert(`There has been an error. Refresh and try again.`)
}

const checkOut = prompt(`Your final order is a ${portionSize} ${finalOrder}. That will be ${price} sek. Make your choice to continue.\n1. Yes\n2. No`);

let finishOrder = parseInt(checkOut);
if (finishOrder === 1) {
  alert(`Thank you for your order! Your delicious meal will be prepared. See you soon!`);
} else {
  alert(`You chose to cancel your order. Refresh the page to start over.`);
}
