// Start here

//to flag for errors
let errorOccurred = false;

function handlesError() {
  if (errorOccurred === true) {
    alert(`An error has occured. Please refresh and try again`);
    return;
  }
};



// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

const customerName = prompt(`Pleace enter your name`);

if (customerName != null) {
  alert(`Welcome ${customerName} ! Please continue to make your order.`);
} else {
  errorOccurred = true;
};

handlesError();

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
  errorOccurred = true;
};

handlesError();

// Step 3 - Subtype choice
// Your code goes here

// pizza sub menu
let pizzaMenu = "";
let orderName = "";

if (food === "pizza") {
  pizzaMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Vesuvio\n2. Hawaii\n3. Pepperoni\n4. Vegetarian`);
  let chosenPizza = parseInt(pizzaMenu);

  if (chosenPizza === 1) {
    orderName = "Vesuvio";
  } else if (chosenPizza === 2) {
    orderName = "Hawaii";
  } else if (chosenPizza === 3) {
    orderName = "Pepperoni";
  } else if (chosenPizza === 4) {
    orderName = "Vegetarian";
  }
};


//Salad sub menu
let saladMenu = "";

if (food === "salad") {
  saladMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Ceasar salad\n2. Waldorfsalad\n3. Chicken Curry`);
  let chosenSalad = parseInt(saladMenu);

  if (chosenSalad === 1) {
    orderName = "Ceasar salad";
  } else if (chosenSalad === 2) {
    orderName = "Waldorfsalad";
  } else if (chosenSalad === 3) {
    orderName = "Chicken Curry";
  }
};


// kebab sub menu

let kebabMenu = "";

if (food === "kebab") {
  kebabMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Kebab in pita\n2. Kebab salad\n3. Kebab roll`);
  let chosenKebab = parseInt(kebabMenu);

  if (chosenKebab === 1) {
    orderName = "Kebab in pita";
  } else if (chosenKebab === 2) {
    orderName = "Kebab salad";
  } else if (chosenKebab === 3) {
    orderName = "Kebab roll";
  }
};


// Nuggets sub menu
let nuggetsMenu = "";

if (food === "nuggets") {
  nuggetsMenu = prompt(`Please chose if you want nuggets wit or without fries, by typing in the corresponding number:\n1. Without fries\n2. With fries`);
  let chosennuggets = parseInt(nuggetsMenu);

  if (chosennuggets === 1) {
    orderName = "Nuggets without fries";
  } else if (chosennuggets === 2) {
    orderName = "Nuggets with fries";
  }
};

if (orderName === "") {
  errorOccurred = true;
  handlesError();
} else {
  alert(`You have chosen ${orderName}. Click to continue.`);
};


//the exact dish that was chosen is stored in this variable
finalOrder = orderName;


// Step 4 - Age
// Your code goes here
let portionSize = "";

if (errorOccurred === false) {
  const age = parseInt(prompt(`Please enter your age and we will adjust the portion size`));

  if (isNaN(age) || age === "" || age < 0) {
    errorOccurred = true;
    handlesError();
  } else if (age <= 12) {
    portionSize = "small";
  } else if (age > 12) {
    portionSize = "large";
  }
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
} else if (finalOrder === "Nuggets without fries" && portionSize === "large") {
  price = 100;
} else if (finalOrder === "Nuggets without fries" && portionSize === "small") {
  price = 80;
} else if (finalOrder === "Nuggets with fries" && portionSize === "large") {
  price = 120;
} else if (finalOrder === "Nuggets with fries" && portionSize === "small") {
  price = 100;
};


let checkOut = "";
if (errorOccurred === false) {
  checkOut = prompt(`Your final order is a ${portionSize} ${finalOrder}. That will be ${price} sek. Do you want to place your order? \n1. Yes\n2. No`);
};

let finishOrder = parseInt(checkOut);

if (errorOccurred === false) {
  if (finishOrder === 1) {
    alert(`Thank you for your order! Your delicious meal will be prepared. See you soon!`);
  } else if (finishOrder === 2) {
    alert(`You chose to cancel your order. To restart you can refresh the page.`);
  } else if (finishOrder !== 1 || finishOrder !== 2) {
    errorOccurred = true;
    handlesError();
  }
};


