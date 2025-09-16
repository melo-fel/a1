//Page title for Calculator
document.write("<h2>Calculation Results</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let results = [];

while (true) {
  let x = prompt("Enter the first number (Cancel to stop):"); //Ask user for the 1st number they wish to enter for calculation
  if (x === null) break; // user cancelled
  let y = prompt("Enter the second number:"); //Ask user for the 2nd number they wish to enter for calculation
  if (y === null) break;
  let operator = prompt("Enter an operator (+, -, *, /, %):"); //Ask user what operation they wish to calculate with the previous numbers entered
  if (operator === null) break;

  let result; //Validating results from the operation
  if (isNaN(x) || isNaN(y)) {
    result = "Error: Invalid number";
  } else {
    x = Number(x);
    y = Number(y);
    switch (operator) {
      case "+": result = x + y; break;
      case "-": result = x - y; break;
      case "*": result = x * y; break;
      case "/": result = y !== 0 ? x / y : "Error: Divide by 0"; break;
      case "%": result = y !== 0 ? x % y : "Error: Mod by 0"; break;
      default: result = "Error: Invalid operator";
    }
  }

  // Print table row(s)
  document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

  // Save valid results only
  if (typeof result === "number") {
    results.push(result);
  }
}

document.write("</table>");

// Summary Table
if (results.length > 0) {
  let min = Math.min(...results);
  let max = Math.max(...results);
  let total = results.reduce((a, b) => a + b, 0);
  let avg = total / results.length;

  document.write("<h2>Summary</h2>");
  document.write("<table border='1'>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
}
