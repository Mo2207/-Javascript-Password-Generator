// Assignment code here

function generatePassword() {

  let newPassword;

  // ALL PASSWORD PROMPTS:

  // password length prompt:
  let passwordLength = prompt("choose the length of your password:");
  if (parseInt(passwordLength) < 8) {
    alert("Password length must be at least 8 characters long.");
    generatePassword();
  }
  if (parseInt(passwordLength) > 128) {
    alert("Password length must be no more than 128 characters long.");
    generatePassword();
  }

  // lowercase characters prompt:
  let lowercaseCharacters = confirm("Do you wish to include any lower-case characters?");
  console.log(`lowercaseCharacters is ${lowercaseCharacters}`);

  // uppercase characters prompt:
  let uppercaseCharacters = confirm("Do you wish to include any upper-case characters?");
  console.log(`uppercaseCharacters is ${uppercaseCharacters}`);

  // numeric characters prompt:
  let numberCharacters = confirm("Do you wish to include any numbers?");
  console.log(`numberCharacters is ${numberCharacters}`);

  // special characters prompt:
  let includeSpecialCharacters = confirm("Do you wish to include any special characters?");
  console.log(`includeSpecialCharacters is ${includeSpecialCharacters}`);

  // checks to make sure at least one of the character types were chosen:
  if (!(lowercaseCharacters && uppercaseCharacters && numberCharacters && includeSpecialCharacters)) {
    alert("At least one character type needs to be selected (upper/lower case characters, numbers or special characters)");
    generatePassword();
  }

  // PASSWORD GENERATION:

  // all potential special characters:
  // ~`! @#$%^&*()_-+={[}]|\:;"'<,>.?/
  let specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",`/`,":",";",`"`,"'","<",",",">",".","?","/"];


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
