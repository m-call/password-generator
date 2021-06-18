// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  // var test = "abcde".split("");

  var passwordLength = prompt("How many characters would you like your password to be?");
  var lowercases = "abcdefghijklmnopqrstuvwxyz";
  var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specials = "`~!@#$%^&*()-_=+[]{}|;':,./<>?";
  // var lowercaseChar = lowercases[Math.floor(Math.random()*lowercases.length)];
  // var uppercaseChar = uppercases[Math.floor(Math.random()*uppercases.length)];
  // var numberChar = numbers[Math.floor(Math.random()*numbers.length)];
  // var specialChar = specials[Math.floor(Math.random()*specials.length)];
  var allChars = [lowercaseChar = lowercases[Math.floor(Math.random()*lowercases.length)], uppercaseChar = uppercases[Math.floor(Math.random()*uppercases.length)], numberChar = numbers[Math.floor(Math.random()*numbers.length)], specialChar = specials[Math.floor(Math.random()*specials.length)]];

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
  } else {
    var hasLowercase = confirm("Do you want lowercase characters?");
    var hasUppercase = confirm("Do you want Uppercase characters?");
    var hasNumbers = confirm("Do you want numbers?");
    var hasSpecials = confirm("Do you want special characters?");
  }

  if (hasLowercase && hasUppercase && hasNumbers && hasSpecials) {
    var pass = "";

    for (var i = 0; i < passwordLength; i++) {
      var char = allChars[Math.floor(Math.random()*allChars.length)];
      console.log(char);
      pass += char
    }

    return pass
  } else if (hasLowercase == true && hasUppercase == true && hasNumbers == true && hasSpecials == false) {

  } else if (hasLowercase == true && hasUppercase == true && hasNumbers == false && hasSpecials == false) {

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == false && hasSpecials == false) {

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == false && hasSpecials == true) {

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == true && hasSpecials == true) {

  } else if (hasLowercase == true && hasUppercase == true && hasNumbers == false && hasSpecials == true) {

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == true && hasSpecials == false) {

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == false && hasSpecials == false) {

  } else if (hasLowercase == false && hasUppercase == false && hasNumbers == true && hasSpecials == false) {

  } else if (hasLowercase == false && hasUppercase == false && hasNumbers == false && hasSpecials == true) {

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == true && hasSpecials == false) {

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == false && hasSpecials == true) {

  } else if (hasLowercase == false && hasUppercase == false && hasNumbers == true && hasSpecials == true) {

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == true && hasSpecials == true) {
    
  } else {
    alert("You must choose at least one character type!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);