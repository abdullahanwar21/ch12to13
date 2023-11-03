// Q - 05
let enterPassword = prompt("Enter Password (correct Pass = pakistan)");

let password = "pakistan";

if (enterPassword === password) {
  document.write(
    "“Correct! The password you entered matches the original password. </br>"
  );
} else if (enterPassword == null) {
  document.write("ENter Password </br>");
} else {
  document.write("Incorrect password. </br>");
}

// Q-06
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day <br>";
} else {
  greeting = "Good evening <br>";
}
document.write(greeting);
//  Q-07

// Taking input from the user
let time = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");

// Check if the input is a valid time (between 0 and 2359)
if (time >= 0 && time <= 2359) {
  // Extract the hour and minute parts
  let hour = Math.floor(time / 100);
  let minute = time % 100;

  // Determine whether it's AM or PM
  let period = "AM";
  if (hour >= 12) {
    period = "PM";
    // Convert to 12-hour format if it's PM
    if (hour > 12) {
      hour -= 12;
    }
  }

  // Display the converted time
  document.write(
    `The time in 12-hour clock format is: ${hour}:${minute} ${period}`
  );
} else {
  document.write("Invalid input. Please enter a time between 0 and 2359.");
}
