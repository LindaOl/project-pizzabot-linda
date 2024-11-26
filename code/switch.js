//to flag for errors
let errorOccurred = false;


const handleError = () => {
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

handleError();

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Pizza\n2. Salads\n3. Kebab\n4. Nuggets`);

const choiceMade = parseInt(foodChoice);
let finalOrder = "";
let orderName = "";
let food = "";
//menues
let pizzaMenu = "";
let chosenPizza = "";
let saladMenu = "";
let chosenSalad = "";
let kebabMenu = "";
let chosenKebab = "";
let nuggetsMenu = "";
let chosenNuggets = "";
//age and portionsize
let portionSize = "";
let age = "";

switch (choiceMade) {
    case 1:
        food = "pizza";
        alert(`You have chosen pizza. Click ok to choose what pizza.`);
        pizzaMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Vesuvio\n2. Hawaii\n3. Pepperoni\n4. Vegetarian`);
        chosenPizza = parseInt(pizzaMenu);
        break;
    case 2:
        food = "salad";
        alert(`You have chosen salad. Click ok to choose what salad.`);
        saladMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Ceasar salad\n2. Waldorfsalad\n3. Chicken Curry`);
        chosenSalad = parseInt(saladMenu);
        break;
    case 3:
        food = "kebab";
        alert(`You have chosen kebab. Click ok to choose what kebab.`);
        kebabMenu = prompt(`Please, choose one of the following choices by typing it's number in the field:\n1. Kebab in pita\n2. Kebab salad\n3. Kebab roll`);
        chosenKebab = parseInt(kebabMenu);
        break;
    case 4:
        food = "nuggets";
        alert(`You have chosen Nuggets. Click ok to continue.`);
        nuggetsMenu = prompt(`Please chose if you want nuggets wit or without fries, by typing in the corresponding number:\n1. Without fries\n2. With fries`);
        chosenNuggets = parseInt(nuggetsMenu);
        break;
    default:
        errorOccurred = true;
        handleError();
        break;
};

// Step 3 - Subtype choice



//Pizza menu
switch (chosenPizza) {
    case 1:
        orderName = "Vesuvio";
        break;
    case 2:
        orderName = "Hawaii";
        break;
    case 3:
        orderName = "Pepperoni";
        break;
    case 4:
        orderName = "Vegetarian";
        break;
    default:
        break;
};


//salad menu
switch (chosenSalad) {
    case 1:
        orderName = "Ceasar salad";
        break;
    case 2:
        orderName = "Waldorfsalad";
        break;
    case 3:
        orderName = "Chicken Curry";
        break;
    default:
        break;
};



// kebab sub menu
switch (chosenKebab) {
    case 1:
        orderName = "Kebab in pita";
        break;
    case 2:
        orderName = "Kebab salad";
        break;
    case 3:
        orderName = "Kebab roll";
        break;
    default:
        break;
};


// Nuggets sub menu
switch (chosenNuggets) {
    case 1:
        orderName = "Nuggets without fries";
        break;
    case 2:
        orderName = "Nuggets with fries";
        break;
    default:
        break;
};

finalOrder = orderName;

// Step 4 - Order message and Age prompt
if (errorOccurred === false) {
    if (orderName === "") {
        errorOccurred = true;
        handleError();
    } else {
        alert(`You have chosen ${orderName}. Click to continue.`);
        age = parseInt(prompt(`Please enter your age and we will adjust the portion size`));
    }
};

if (errorOccurred === false) {
    if (isNaN(age) || age === "" || age < 0) {
        errorOccurred = true;
        handleError();
    } else if (age <= 12) {
        portionSize = "small";
    } else if (age > 12) {
        portionSize = "large";
    }
};

let price = 0;
let smallPrice = 10;

// Price list and matching with ectual dish
let priceAndSize = finalOrder + "-" + portionSize;

switch (priceAndSize) {
    case "Vesuvio-large":
        price = 100;
        break;
    case "Vesuvio-small":
        price = 100 - smallPrice;
        break;
    case "Hawaii-large":
        price = 105;
        break;
    case "Hawaii-small":
        price = 105 - smallPrice;
        break;
    case "Pepperoni-large":
        price = 110;
        break;
    case "Pepperoni-small":
        price = 110 - smallPrice;
        break;
    case "Vegetarian-large":
        price = 115;
        break;
    case "Vegetarian-small":
        price = 115 - smallPrice;
        break;
    case "salad-large":
        price = 125;
        break;
    case "salad-small":
        price = 125 - smallPrice;
        break;
    case "Kebab in pita-large":
        price = 110;
        break;
    case "Kebab in pita-small":
        price = 110 - smallPrice;
        break;
    case "Kebab salad-large":
        price = 125;
        break;
    case "Kebab salad-small":
        price = 125 - smallPrice;
        break;
    case "Kebab roll-large":
        price = 125;
        break;
    case "Kebab roll-small":
        price = 125 - smallPrice;
        break;
    case "Nuggets without fries-large":
        price = 100;
        break;
    case "Nuggets without fries-small":
        price = 80;
        break;
    case "Nuggets with fries-large":
        price = 120;
        break;
    case "Nuggets with fries-small":
        price = 100;
        break;
    default:
        price = 0;  // or any default price or action
        break;
};

//confirmation message
let checkOut = "";
if (errorOccurred === false) {
    checkOut = prompt(`Your final order is a ${portionSize} ${finalOrder}. That will be ${price} sek. Do you want to place your order? \n1. Yes\n2. No`);
};

let finishOrder = parseInt(checkOut);

if (errorOccurred === false) {
    if (finishOrder === 1) {
        alert(`Thank you for your order! Your delicious meal will be prepared. See you soon!`);
    } else if (finishOrder === 2) {
        alert(`Your order has been cancelled. Please come again! If you wish to restart the process you can refresh the page.`);
    } else if (finishOrder !== 1 || finishOrder !== 2) {
        errorOccurred = true;
        handleError();
    }
};
