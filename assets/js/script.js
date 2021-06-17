// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

function generatePassword() {

  // var test = "abcde".split("");

  var passwordLength = prompt("How many characters would you like your password to be?");
  var lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", "'", ":", ",", ".", "/", "<", ">", "?"];
  var lowercaseChar = lowercases[Math.floor(Math.random()*lowercases.length)];
  var uppercaseChar = uppercases[Math.floor(Math.random()*uppercases.length)];
  var numberChar = numbers[Math.floor(Math.random()*numbers.length)];
  var specialChar = specials[Math.floor(Math.random()*specials.length)];
  var allChars = [lowercaseChar, uppercaseChar, numberChar, specialChar];
  var char = allChars[Math.floor(Math.random()*allChars.length)];

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
  } else {
    var lowercase = confirm("Do you want lowercase characters?");
    var uppercase = confirm("Do you want uppercase characters?");
    var number = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");
  }

  if (lowercase && uppercase && number && special) {
    var pass = "";

    for (var i = 8; i <= passwordLength; i++) {
      pass += char.repeat(passwordLength)[Math.floor(Math.random()*char.length)];
    }

    return pass;
  } else if (lowercase == true && uppercase == true && number == true && special == false) {

  } else if (lowercase == true && uppercase == true && number == false && special == false) {

  } else if (lowercase == true && uppercase == false && number == false && special == false) {

  } else if (lowercase == true && uppercase == false && number == false && special == true) {

  } else if (lowercase == true && uppercase == false && number == true && special == true) {

  } else if (lowercase == true && uppercase == true && number == false && special == true) {

  } else if (lowercase == true && uppercase == false && number == true && special == false) {

  } else if (lowercase == false && uppercase == true && number == false && special == false) {

  } else if (lowercase == false && uppercase == false && number == true && special == false) {

  } else if (lowercase == false && uppercase == false && number == false && special == true) {

  } else if (lowercase == false && uppercase == true && number == true && special == false) {

  } else if (lowercase == false && uppercase == true && number == false && special == true) {

  } else if (lowercase == false && uppercase == false && number == true && special == true) {

  } else if (lowercase == false && uppercase == true && number == true && special == true) {
    
  } else {
    alert("You must choose at least one character type!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);