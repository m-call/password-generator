// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function that generates the random password. This function is called when the "Generate Password" button is pressed.
function generatePassword() {

  // Local variables that store the length of the password that is entered by the user, as well as 4 separate arrays for lowercase, uppercase, numbers, and special characters.
  var passwordLength = prompt("How many characters would you like your password to be?");
  var lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", "'", ":", ",", ".", "/", "<", ">", "?"];

  // If else statement to check if the user submitted a password length between 8 and 128.
  // If they didn't they are prompted that the length must be between 8 and 128.
  // If they did enter a length between 8 and 128, they are then given 4 confirm pop-ups to check whether or not they want lowercase, uppercase, numbers, and special characters.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
  } else {
    var hasLowercase = confirm("Do you want lowercase characters?");
    var hasUppercase = confirm("Do you want Uppercase characters?");
    var hasNumbers = confirm("Do you want numbers?");
    var hasSpecials = confirm("Do you want special characters?");
  }

  // If else if else statement that checks which of the 4 character confirms the user chose. (Lower, Upper, Numbers, Specials)
  // If none of the confirms were chosen, then the else statement alerts the user that they must choose atleast one character type.
  if (hasLowercase && hasUppercase && hasNumbers && hasSpecials) {
    // Creates an empty array to store and eventually return the generated password. Used in each of the else if statements.
    var pass = [];

    // This loop runs as many times as the password length, the value of which was inputted by the user. Used in each of the else if statements.
    for (var i = 0; i < passwordLength; i++) {
      // On each iteration, an array is created to hold one random value from each of the 4 character arrays. 
      var allChars = [lowercases[Math.floor(Math.random()*lowercases.length)], uppercases[Math.floor(Math.random()*uppercases.length)], numbers[Math.floor(Math.random()*numbers.length)], specials[Math.floor(Math.random()*specials.length)]];
      
      // On each iteration, the empty password array adds one character from the created array above at random using the Math.floor and Math.random methods.
      // Once the loop has completed, we have our generated password.
      pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    // Finally, we return the generated password so that it can be displayed on the webpage.
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