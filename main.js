let total = prompt("What was the total bill amount?");
let tipPercentage = prompt("What percentage would you like to tip?");
total = parseInt(total);
tipPercentage = parseInt(tipPercentage);

const tipAmount = total * (tipPercentage * 0.01);

alert(total + tipAmount);
