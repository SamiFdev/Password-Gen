
// Creating sets for all desired character option sets using arrays //
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

var usersresponses = [];


// creating a function to ask qualifying questions for the users password //

  function generatePassword() {
    var length = prompt("How long of a password? can be between 8 and 128 characters");
    var askNumbers = confirm("Do you want to include numbers in your password?");
    var askLowerCase = confirm("Do you want any lowercase letters in your password?");
    var askUpperCase = confirm("Do you want any upper case letters in your password?");
    var askSpecial = confirm("Do you want to include special characters in your password?");
    var answers = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    }
      console.log(answers);
      if (askNumbers === true) {
        usersresponses = usersresponses.concat(numbers)
      }
      console.log(usersresponses);
  
      if (askUpperCase === true) {
        usersresponses = usersresponses.concat(upperCase)
      }
      console.log(usersresponses);
  
      if (askLowerCase === true) {
        usersresponses = usersresponses.concat(lowerCase)
      }
      console.log(usersresponses);
  
      if (askSpecial === true) {
        usersresponses = usersresponses.concat(special)
      }
      console.log(usersresponses); 
  
      if (askNumbers === false && askUpperCase === false && askLowerCase === false && askSpecial === false) {
        alert("Must pick atleast one!");
        
      }
      for (i=0; i<length; i++) {
        var rannum = Math.floor(Math.random()* usersresponses.length);
        console.log(usersresponses[rannum]);
      }
    var passwordStr;

    return passwordStr;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
