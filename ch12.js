let character = prompt("Enter Value");
if (!isNaN(character)) {
  document.write(`${character} is Number  <br>`);
} else if (character >= "A" && character <= "Z") {
  document.write(`${character} is Upper Case  <br>`);
} else if (character >= "a" && character <= "z") {
  document.write(`${character} is lower Case <br> `);
} else {
  document.write(`${character} its not a number or later  <br>`);
}
//  Q-02

let int1 = 23456789;
document.write(`Integer One : <b>${int1}</b></br>`)
let int2 = 23456789900;
document.write(`Integer two : <b>${int2}</b></br>`)
if (int1 > int2) {
  document.write("The LArger Integer is  </br>", int1, "<br>");
} else if (int2 > int1) {
  document.write("The LArger Integer is  ", int2, "<br>");
} else if (int1 === int2) {
  document.write("Both  Integer are same  </br> ");
}
// Q-03
let takeNum = +prompt("Enter Number");
if (takeNum > 0) {
  document.write(`${takeNum} is Positive <br>`);
} else if (takeNum < 0) {
  document.write(`${takeNum} is Negative <br>`);
} else {
  document.write(`${takeNum} is zero <br>`);
}
// Q-04
let takeStr = prompt("Enter Single Character");
if (takeStr.length === 1) {
  takeStr = takeStr.toLowerCase();
  if (
    takeStr === "a" ||
    takeStr === "e" ||
    takeStr === "i" ||
    takeStr === "o" ||
    takeStr === "u"
  ) {
    document.write(`True its a Vowel <br>`);
  } else {
    document.write(`${takeStr} is'nt a Vowel <br>`);
  }
} else {
  document.write("Please enter a single character");
}
