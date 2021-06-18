// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var passwordLength = prompt("How many characters would you like your password to be?");
  var lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", "'", ":", ",", ".", "/", "<", ">", "?"];

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
  } else {
    var hasLowercase = confirm("Do you want lowercase characters?");
    var hasUppercase = confirm("Do you want Uppercase characters?");
    var hasNumbers = confirm("Do you want numbers?");
    var hasSpecials = confirm("Do you want special characters?");
  }

  if (hasLowercase && hasUppercase && hasNumbers && hasSpecials) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], uppercases[Math.floor(Math.random()*uppercases.length)], numbers[Math.floor(Math.random()*numbers.length)], specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == true && hasUppercase == true && hasNumbers == true && hasSpecials == false) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], uppercases[Math.floor(Math.random()*uppercases.length)], numbers[Math.floor(Math.random()*numbers.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == true && hasUppercase == true && hasNumbers == false && hasSpecials == false) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], uppercases[Math.floor(Math.random()*uppercases.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == false && hasSpecials == false) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == false && hasSpecials == true) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == true && hasSpecials == true) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], numbers[Math.floor(Math.random()*numbers.length)], specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == true && hasUppercase == true && hasNumbers == false && hasSpecials == true) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], uppercases[Math.floor(Math.random()*uppercases.length)], specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == true && hasUppercase == false && hasNumbers == true && hasSpecials == false) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], numbers[Math.floor(Math.random()*numbers.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == false && hasSpecials == false) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [uppercases[Math.floor(Math.random()*uppercases.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == false && hasUppercase == false && hasNumbers == true && hasSpecials == false) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [numbers[Math.floor(Math.random()*numbers.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == false && hasUppercase == false && hasNumbers == false && hasSpecials == true) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == true && hasSpecials == false) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [uppercases[Math.floor(Math.random()*uppercases.length)], numbers[Math.floor(Math.random()*numbers.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == false && hasSpecials == true) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [uppercases[Math.floor(Math.random()*uppercases.length)], specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == false && hasUppercase == false && hasNumbers == true && hasSpecials == true) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [numbers[Math.floor(Math.random()*numbers.length)], specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;

  } else if (hasLowercase == false && hasUppercase == true && hasNumbers == true && hasSpecials == true) {
    var pass = [];

    for (var i = 0; i < passwordLength; i++) {
      var allChars = [uppercases[Math.floor(Math.random()*uppercases.length)], numbers[Math.floor(Math.random()*numbers.length)], specials[Math.floor(Math.random()*specials.length)]];
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    return pass;
    
  } else {
    alert("You must choose at least one character type!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);