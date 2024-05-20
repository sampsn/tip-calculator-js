const total = Number(prompt("What was the total bill amount?"));
const tipPercentage = Number(prompt("What percentage would you like to tip?"));
// total = parseInt(total);
// tipPercentage = parseInt(tipPercentage);

const tipAmount = total * (tipPercentage * 0.01);

alert(Number(total + tipAmount).toFixed(2));
